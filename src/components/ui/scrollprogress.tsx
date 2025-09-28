"use client"

import React from "react"
import { motion, useScroll } from "motion/react"
import type { MotionProps } from "motion/react"
import { cn } from "../../lib/utils"


interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {}

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#69efaa] via-[#34e767] to-[#07d81f]",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  )
})

ScrollProgress.displayName = "ScrollProgress"
