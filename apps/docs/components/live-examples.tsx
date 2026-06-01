"use client";

import { useState } from "react";
import {
  BottomSheet,
  Button,
  CommandMenu,
  Dialog,
  Field,
  Input,
  InputOtp,
  RadioGroup,
  SegmentedControl,
  Slider,
  Tabs,
  ToastProvider,
  Textarea,
  useToast
} from "axie-ui";

export function SegmentedPreview() {
  const [value, setValue] = useState("daily");

  return (
    <SegmentedControl
      ariaLabel="Budget rhythm"
      className="grid-cols-3"
      options={[
        { label: "Daily", value: "daily" },
        { label: "Weekly", value: "weekly" },
        { label: "Monthly", value: "monthly" }
      ]}
      value={value}
      onValueChange={setValue}
    />
  );
}

export function SheetPreview() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open sheet</Button>
      <BottomSheet
        description="A mobile-first surface for dense forms and focused decisions."
        footer={
          <div className="grid grid-cols-2 gap-axie-xs">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </div>
        }
        open={open}
        title="Edit plan"
        onOpenChange={setOpen}
      >
        <Field helper="Keep this short and readable." label="Name">
          <Input placeholder="Personal budget" />
        </Field>
        <Field label="Notes">
          <Textarea placeholder="What should this sheet collect?" />
        </Field>
      </BottomSheet>
    </>
  );
}

export function OtpPreview() {
  const [value, setValue] = useState("427");

  return (
    <div className="grid justify-items-center gap-3">
      <InputOtp length={6} value={value} onValueChange={setValue} />
      <p className="m-0 text-[13px] font-medium text-axie-muted">Enter the code sent to your inbox.</p>
    </div>
  );
}

export function TabsPreview() {
  return (
    <Tabs
      defaultValue="preview"
      items={[
        {
          content: (
            <div className="rounded-axie-card border border-axie-line bg-axie-surface-soft p-axie-md text-[14px] font-semibold text-axie-ink">
              Preview content stays quiet and direct.
            </div>
          ),
          label: "Preview",
          value: "preview"
        },
        {
          content: (
            <div className="rounded-axie-card border border-axie-line bg-axie-surface-soft p-axie-md font-mono text-[13px] text-axie-muted">
              pnpm add axie-ui
            </div>
          ),
          label: "Code",
          value: "code"
        }
      ]}
    />
  );
}

export function CommandMenuPreview() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="soft" onClick={() => setOpen(true)}>
        Open command menu
      </Button>
      <CommandMenu
        items={[
          {
            description: "Open the Button documentation.",
            group: "Components",
            id: "button",
            title: "Button"
          },
          {
            description: "Open token colors and radii.",
            group: "Docs",
            id: "tokens",
            title: "Tokens"
          },
          {
            description: "Review the one-time code input.",
            group: "Components",
            id: "input-otp",
            title: "Input OTP"
          }
        ]}
        open={open}
        onOpenChange={setOpen}
        onSelect={() => setOpen(false)}
      />
    </>
  );
}

export function DialogPreview() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        description="Use dialogs for focused confirmation, not for every small edit."
        footer={
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Continue</Button>
          </div>
        }
        open={open}
        title="Archive entry"
        onOpenChange={setOpen}
      >
        <p className="m-0 text-[14px] font-bold leading-6 text-axie-muted">
          This keeps the entry available in history and removes it from active views.
        </p>
      </Dialog>
    </>
  );
}

export function RadioGroupPreview() {
  const [value, setValue] = useState("daily");

  return (
    <RadioGroup
      name="cadence"
      options={[
        { description: "Best for fast-moving money logs.", label: "Daily", value: "daily" },
        { description: "Good for lightweight planning.", label: "Weekly", value: "weekly" },
        { description: "Use for slower reporting cycles.", label: "Monthly", value: "monthly" }
      ]}
      value={value}
      onValueChange={setValue}
    />
  );
}

export function SliderPreview() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <Slider defaultValue={68} label="Monthly pace" max={100} valueLabel={(value) => `${value}%`} />
      <Field helper="Controlled values can drive nearby copy." label="Buffer">
        <ControlledSlider />
      </Field>
    </div>
  );
}

function ControlledSlider() {
  const [value, setValue] = useState("24");

  return (
    <Slider
      max={80}
      value={value}
      valueLabel={`${value} days`}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}

export function ToastPreview() {
  return (
    <ToastProvider position="bottom-right">
      <ToastLauncher />
    </ToastProvider>
  );
}

function ToastLauncher() {
  const { toast } = useToast();

  return (
    <div className="grid justify-items-center gap-3 text-center">
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          onClick={() =>
            toast({
              action: <Button size="sm" variant="outline">View</Button>,
              description: "Three entries are ready to review.",
              title: "Sync finished",
              tone: "accent"
            })
          }
        >
          Show toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast({
              description: "We could not reach the server.",
              title: "Connection failed",
              tone: "danger"
            })
          }
        >
          Show error
        </Button>
      </div>
      <p className="m-0 max-w-[32ch] text-[13px] font-bold leading-5 text-axie-muted">
        Toasts render in the viewport and dismiss automatically.
      </p>
    </div>
  );
}
