import type { ReactNode } from "react";
import {
  CodeBlock as AxieCodeBlock,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "axie-ui";
import { highlightCode } from "./code-highlight";
import { PreviewTabs } from "./preview-tabs";

export function CodeBlock({ children }: { children: string }) {
  return (
    <AxieCodeBlock copyText={children}>{highlightCode(children)}</AxieCodeBlock>
  );
}

export function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-[7px] border border-axie-line bg-axie-surface-soft px-1.5 py-0.5 font-mono text-[0.88em] font-black text-axie-ink">
      {children}
    </code>
  );
}

export function ComponentPreview({ code, preview }: { code: string; preview: ReactNode }) {
  return <PreviewTabs code={code} preview={preview} />;
}

export function DocsSection({
  children,
  description,
  id,
  title
}: {
  children: ReactNode;
  description?: ReactNode;
  id: string;
  title: string;
}) {
  return (
    <section className="min-w-0 max-w-full scroll-mt-24 border-t border-axie-line pt-9" id={id}>
      <div className="mb-5 grid gap-2">
        <h2 className="m-0 text-[25px] font-black leading-none text-axie-ink">{title}</h2>
        {description ? (
          <p className="m-0 max-w-[64ch] text-[15px] font-bold leading-7 text-axie-muted">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function PropsTable({
  rows
}: {
  rows: Array<{ defaultValue?: string; description: string; name: string; type: string }>;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Prop</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Default</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell className="font-mono text-[12px] font-semibold text-axie-ink">
              {row.name}
            </TableCell>
            <TableCell className="font-mono text-[12px] text-axie-muted">{row.type}</TableCell>
            <TableCell className="font-mono text-[12px] text-axie-muted">
                {row.defaultValue ?? "-"}
            </TableCell>
            <TableCell className="text-axie-muted">{row.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
