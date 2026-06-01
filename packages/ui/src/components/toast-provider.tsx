"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { Toast, ToastStack, type ToastProps, type ToastStackProps } from "./toast";

export type ToastOptions = Omit<ToastProps, "id" | "onDismiss"> & {
  duration?: number;
  id?: string;
};

type ActiveToast = ToastOptions & {
  duration: number;
  id: string;
};

type ToastContextValue = {
  dismiss: (id: string) => void;
  toast: (options: ToastOptions) => string;
  toasts: ActiveToast[];
};

const ToastContext = React.createContext<ToastContextValue | null>(null);
let toastId = 0;

export type ToastProviderProps = {
  children: React.ReactNode;
  limit?: number;
  position?: ToastStackProps["position"];
};

export function ToastProvider({
  children,
  limit = 4,
  position = "bottom-right"
}: ToastProviderProps) {
  const [mounted, setMounted] = React.useState(false);
  const [toasts, setToasts] = React.useState<ActiveToast[]>([]);
  const timeouts = React.useRef(new Map<string, number>());

  const dismiss = React.useCallback((id: string) => {
    const timeout = timeouts.current.get(id);
    if (timeout) window.clearTimeout(timeout);
    timeouts.current.delete(id);
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const toast = React.useCallback(
    (options: ToastOptions) => {
      const id = options.id ?? `toast-${++toastId}`;
      const duration = options.duration ?? 4200;
      const nextToast: ActiveToast = { ...options, duration, id };

      setToasts((current) => [...current.filter((item) => item.id !== id), nextToast].slice(-limit));

      const existingTimeout = timeouts.current.get(id);
      if (existingTimeout) window.clearTimeout(existingTimeout);

      if (duration > 0) {
        const timeout = window.setTimeout(() => dismiss(id), duration);
        timeouts.current.set(id, timeout);
      }

      return id;
    },
    [dismiss, limit]
  );

  React.useEffect(
    () => () => {
      for (const timeout of timeouts.current.values()) window.clearTimeout(timeout);
      timeouts.current.clear();
    },
    []
  );
  React.useEffect(() => setMounted(true), []);

  const value = React.useMemo(() => ({ dismiss, toast, toasts }), [dismiss, toast, toasts]);
  const stack = (
    <ToastStack position={position}>
      {toasts.map(({ duration: _duration, id, ...toastProps }) => (
        <Toast key={id} {...toastProps} onDismiss={() => dismiss(id)} />
      ))}
    </ToastStack>
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      {mounted ? createPortal(stack, document.body) : null}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used inside ToastProvider.");
  }
  return context;
}
