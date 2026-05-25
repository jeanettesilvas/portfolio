"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  value: string;
  label: string;
  content: React.ReactNode;
}

export function CaseStudyTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.value);

  return (
    <div>
      <div className="flex gap-6 border-b border-border">
        {tabs.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={cn(
              "pb-2 text-sm -mb-px border-b-2 transition-colors",
              active === value
                ? "border-foreground font-semibold text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-0">
        {tabs.find((t) => t.value === active)?.content}
      </div>
    </div>
  );
}
