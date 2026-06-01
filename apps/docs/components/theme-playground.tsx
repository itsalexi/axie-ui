"use client";

import type { CSSProperties } from "react";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Badge, Button, Field, Input, Progress, Slider, Stat, Switch } from "@axie/ui";

type ThemePreset = {
  colors: {
    accent: string;
    accentSoft: string;
    danger: string;
    dangerSoft: string;
    info: string;
    infoSoft: string;
    ink: string;
    line: string;
    muted: string;
    paper: string;
    surface: string;
    surfaceSoft: string;
    warning: string;
    warningSoft: string;
  };
  description: string;
  label: string;
};

const themePresets = {
  cedar: {
    colors: {
      accent: "#3f665c",
      accentSoft: "#dde9e3",
      danger: "#a44f43",
      dangerSoft: "#f0d8d2",
      info: "#4f6a7f",
      infoSoft: "#dde7ed",
      ink: "#28231f",
      line: "#ddd0be",
      muted: "#766d62",
      paper: "#f7f2ea",
      surface: "#fffdf7",
      surfaceSoft: "#eee6d9",
      warning: "#967032",
      warningSoft: "#eedfc2"
    },
    description: "Warm paper. Cedar green.",
    label: "Cedar"
  },
  slate: {
    colors: {
      accent: "#4d6375",
      accentSoft: "#dfe7ee",
      danger: "#9b4c46",
      dangerSoft: "#eed8d4",
      info: "#51677b",
      infoSoft: "#dfe8ee",
      ink: "#252525",
      line: "#d6d1c8",
      muted: "#6c6963",
      paper: "#f6f4ef",
      surface: "#fffefa",
      surfaceSoft: "#e9e5dc",
      warning: "#8d7138",
      warningSoft: "#eadfca"
    },
    description: "Neutral base. Blue gray.",
    label: "Slate"
  },
  clay: {
    colors: {
      accent: "#9d5f47",
      accentSoft: "#f1dfd5",
      danger: "#93483f",
      dangerSoft: "#ecd6d1",
      info: "#596d78",
      infoSoft: "#dfe8eb",
      ink: "#2b211e",
      line: "#decabd",
      muted: "#7b685e",
      paper: "#f8f0e8",
      surface: "#fffaf4",
      surfaceSoft: "#f0e2d6",
      warning: "#94723c",
      warningSoft: "#ecdfc8"
    },
    description: "Soft clay. Warm states.",
    label: "Clay"
  },
  grove: {
    colors: {
      accent: "#69783f",
      accentSoft: "#e2ead1",
      danger: "#9d5045",
      dangerSoft: "#efd9d3",
      info: "#4f6970",
      infoSoft: "#dce8e9",
      ink: "#24251d",
      line: "#d6d4bf",
      muted: "#6f705f",
      paper: "#f5f3e8",
      surface: "#fffef5",
      surfaceSoft: "#e9e7d3",
      warning: "#8b7432",
      warningSoft: "#e8dfbd"
    },
    description: "Olive accent. Quiet dashboard.",
    label: "Grove"
  },
  berry: {
    colors: {
      accent: "#8d5269",
      accentSoft: "#efdce4",
      danger: "#9c4c45",
      dangerSoft: "#efd8d3",
      info: "#536979",
      infoSoft: "#e0e8ed",
      ink: "#2a2024",
      line: "#ddcbd2",
      muted: "#74656b",
      paper: "#f8f1f3",
      surface: "#fffafc",
      surfaceSoft: "#efe2e7",
      warning: "#8f713c",
      warningSoft: "#ebdfc9"
    },
    description: "Muted berry. Personal tools.",
    label: "Berry"
  }
} satisfies Record<string, ThemePreset>;

type ThemeName = keyof typeof themePresets;

export function ThemePlayground() {
  const [themeName, setThemeName] = useState<ThemeName>("cedar");
  const [radius, setRadius] = useState("12");
  const [density, setDensity] = useState("14");
  const [motion, setMotion] = useState("260");
  const presetGridRef = useRef<HTMLDivElement | null>(null);
  const presetRefs = useRef(new Map<ThemeName, HTMLButtonElement>());
  const [presetIndicator, setPresetIndicator] = useState<PresetIndicator | null>(null);
  const theme = themePresets[themeName];
  const colors = theme.colors;

  const previewStyle = useMemo(
    () =>
      ({
        "--axie-color-accent": colors.accent,
        "--axie-color-accent-soft": colors.accentSoft,
        "--axie-color-danger": colors.danger,
        "--axie-color-danger-soft": colors.dangerSoft,
        "--axie-color-info": colors.info,
        "--axie-color-info-soft": colors.infoSoft,
        "--axie-color-ink": colors.ink,
        "--axie-color-line": colors.line,
        "--axie-color-muted": colors.muted,
        "--axie-color-paper": colors.paper,
        "--axie-color-surface": colors.surface,
        "--axie-color-surface-soft": colors.surfaceSoft,
        "--axie-color-warning": colors.warning,
        "--axie-color-warning-soft": colors.warningSoft,
        "--axie-radius-card": `${Number(radius) + 2}px`,
        "--axie-radius-control": `${radius}px`,
        "--axie-space-sm": `${Math.max(Number(density) - 4, 6)}px`,
        "--axie-space-md": `${density}px`,
        "--axie-space-lg": `${Number(density) + 6}px`,
        "--axie-motion-base": `${motion}ms`,
        "--axie-motion-slow": `${Number(motion) + 110}ms`
      }) as CSSProperties,
    [colors, density, motion, radius]
  );

  useLayoutEffect(() => {
    function measure() {
      const grid = presetGridRef.current;
      const selectedPreset = presetRefs.current.get(themeName);
      if (!grid || !selectedPreset) {
        setPresetIndicator(null);
        return;
      }
      const gridBox = grid.getBoundingClientRect();
      const presetBox = selectedPreset.getBoundingClientRect();
      setPresetIndicator({
        height: presetBox.height,
        width: presetBox.width,
        x: presetBox.left - gridBox.left,
        y: presetBox.top - gridBox.top
      });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [themeName]);

  const presetIndicatorStyle = presetIndicator
    ? ({
        height: `${presetIndicator.height}px`,
        opacity: 1,
        transform: `translate3d(${presetIndicator.x}px, ${presetIndicator.y}px, 0)`,
        width: `${presetIndicator.width}px`
      } satisfies CSSProperties)
    : ({ opacity: 0 } satisfies CSSProperties);

  const code = `:root {
  --axie-color-ink: ${colors.ink};
  --axie-color-paper: ${colors.paper};
  --axie-color-surface: ${colors.surface};
  --axie-color-surface-soft: ${colors.surfaceSoft};
  --axie-color-muted: ${colors.muted};
  --axie-color-line: ${colors.line};
  --axie-color-accent: ${colors.accent};
  --axie-color-accent-soft: ${colors.accentSoft};
  --axie-radius-card: ${Number(radius) + 2}px;
  --axie-radius-control: ${radius}px;
  --axie-space-md: ${density}px;
  --axie-motion-base: ${motion}ms;
}`;

  return (
    <div className="grid min-w-0 gap-6">
      <section
        className="grid min-w-0 gap-6 rounded-[18px] border border-axie-line bg-axie-paper p-4 md:p-6"
        style={previewStyle}
      >
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-axie-line pb-5">
          <div className="grid gap-2">
            <Badge className="w-fit" tone="accent">{theme.label}</Badge>
            <h2 className="m-0 text-[34px] font-black leading-none text-axie-ink">{theme.label} theme</h2>
            <p className="m-0 text-[14px] font-bold leading-5 text-axie-muted">{theme.description}</p>
          </div>
          <Button>Save theme</Button>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_260px]">
          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <Stat label="Collected" value="$8,428" tone="accent" />
              <Stat label="Pending" value="$642" />
              <Stat label="Failed" value="2" tone="danger" />
            </div>

            <div className="grid gap-5 border-y border-axie-line py-5 lg:grid-cols-[minmax(0,1fr)_220px]">
              <div className="grid gap-4">
                <Field helper="Shown on receipts and exports." label="Workspace name">
                  <Input defaultValue="North Pier Ops" />
                </Field>
                <Switch defaultChecked description="Send a receipt after each renewal." label="Receipts" />
              </div>
              <div className="grid content-start gap-3">
                <span className="text-[12px] font-black leading-none text-axie-muted">Projected total</span>
                <span className="font-mono text-[34px] font-black leading-none text-axie-ink">$184.20</span>
                <Progress value={72} />
                <Button className="justify-self-start" variant="outline">View invoice</Button>
              </div>
            </div>
          </div>

          <aside className="grid content-start gap-3 xl:border-l xl:border-axie-line xl:pl-5">
            <p className="m-0 text-[12px] font-black uppercase leading-none text-axie-muted">Palette</p>
            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
              {[
                ["Ink", colors.ink],
                ["Paper", colors.paper],
                ["Surface", colors.surface],
                ["Soft", colors.surfaceSoft],
                ["Accent", colors.accent],
                ["Accent soft", colors.accentSoft]
              ].map(([label, color]) => (
                <div className="grid grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-3" key={label}>
                  <span
                    aria-hidden
                    className="h-7 w-7 rounded-[8px] border border-axie-line"
                    style={{ background: color }}
                  />
                  <span className="text-[12px] font-black text-axie-ink">{label}</span>
                  <span className="font-mono text-[11px] font-bold text-axie-muted">{color}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-3">
        <h3 className="m-0 text-[16px] font-black leading-none text-axie-ink">Presets</h3>
        <div className="relative grid gap-2 sm:grid-cols-2 lg:grid-cols-5" ref={presetGridRef}>
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 rounded-[12px] border-2 border-axie-ink bg-axie-surface/20 shadow-[inset_0_1px_0_color-mix(in_srgb,var(--axie-color-surface)_70%,transparent)] transition-[height,opacity,transform,width] duration-300 ease-[var(--axie-motion-spring)]"
            style={presetIndicatorStyle}
          />
          {Object.entries(themePresets).map(([name, preset]) => (
            <button
              aria-pressed={themeName === name}
              className={[
                "relative z-[1] grid gap-2 rounded-[12px] border bg-axie-surface p-3 text-left outline-none transition-[background-color,border-color,box-shadow,color,transform] duration-300 ease-[var(--axie-motion-spring)] focus-visible:ring-2 focus-visible:ring-axie-accent/20 active:scale-[0.985]",
                themeName === name
                  ? "border-transparent"
                  : "border-axie-line hover:-translate-y-px hover:bg-axie-surface-soft/42"
              ].join(" ")}
              key={name}
              ref={(node) => setPresetRef(presetRefs.current, name as ThemeName, node)}
              type="button"
              onClick={() => setThemeName(name as ThemeName)}
            >
              <span className="flex items-center justify-between gap-3">
                <span className="text-[14px] font-black leading-none text-axie-ink">{preset.label}</span>
                <span
                  className={[
                    "h-2 w-2 rounded-full bg-axie-accent transition-[opacity,transform] duration-300 ease-[var(--axie-motion-spring)]",
                    themeName === name ? "scale-100 opacity-100" : "scale-50 opacity-0"
                  ].join(" ")}
                />
              </span>
              <span className="grid grid-cols-5 gap-1" aria-hidden>
                {[preset.colors.ink, preset.colors.paper, preset.colors.surfaceSoft, preset.colors.accent, preset.colors.accentSoft].map((color) => (
                  <span
                    className="h-6 rounded-[7px] border border-axie-line"
                    key={color}
                    style={{ background: color }}
                  />
                ))}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-5 border-y border-axie-line py-5 md:grid-cols-3">
        <Slider
          label="Radius"
          max={22}
          min={6}
          value={radius}
          valueLabel={`${radius}px`}
          onChange={(event) => setRadius(event.currentTarget.value)}
        />
        <Slider
          label="Density"
          max={20}
          min={10}
          value={density}
          valueLabel={`${density}px`}
          onChange={(event) => setDensity(event.currentTarget.value)}
        />
        <Slider
          label="Motion"
          max={420}
          min={140}
          step={20}
          value={motion}
          valueLabel={`${motion}ms`}
          onChange={(event) => setMotion(event.currentTarget.value)}
        />
      </section>

      <details className="group rounded-[14px] border border-axie-line bg-axie-surface">
        <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-[13px] font-black text-axie-ink">
          CSS variables
          <span className="font-mono text-[11px] font-bold text-axie-muted group-open:hidden">show</span>
          <span className="hidden font-mono text-[11px] font-bold text-axie-muted group-open:inline">hide</span>
        </summary>
        <pre className="m-0 max-h-[360px] overflow-auto border-t border-axie-line bg-[#201c19] p-4 font-mono text-[12px] leading-6 text-[#f6efe4]">
          <code>{code}</code>
        </pre>
      </details>
    </div>
  );
}

type PresetIndicator = {
  height: number;
  width: number;
  x: number;
  y: number;
};

function setPresetRef(
  refs: Map<ThemeName, HTMLButtonElement>,
  value: ThemeName,
  node: HTMLButtonElement | null
) {
  if (node) {
    refs.set(value, node);
    return;
  }
  refs.delete(value);
}
