"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { skillicons } from "@/data";

export function AnimatedTooltipPreview() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-4 md:gap-6 items-center justify-center w-full">
        <AnimatedTooltip items={skillicons} />
      </div>
    </div>
  );
}