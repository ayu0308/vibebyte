"use client";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { cn } from "../../lib/utils";

export const BackgroundRippleEffect = ({
  rows: initialRows = 8,
  cols: initialCols = 27,
  cellSize: initialCellSize = 56,
}: {
  rows?: number;
  cols?: number;
  cellSize?: number;
}) => {
  const [clickedCell, setClickedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [rippleKey, setRippleKey] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [gridDimensions, setGridDimensions] = useState({
    rows: initialRows,
    cols: initialCols,
    cellSize: initialCellSize
  });
  const ref = useRef<any>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        setDimensions({ width, height });
        
        // Calculate the number of rows and columns needed to fill the screen
        const cols = Math.ceil(width / initialCellSize) + 1;
        const rows = Math.ceil(height / initialCellSize) + 1;
        
        setGridDimensions({
          rows,
          cols,
          cellSize: initialCellSize
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('zoom', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('zoom', updateDimensions);
    };
  }, [initialCellSize]);

  return (
    <div
      ref={ref}
      className={cn(
        "fixed inset-0 bg-black overflow-hidden",
        ":[--cell-border-color:#2d2d2d] [--cell-fill-color:rgba(0,0,0,0.3)] [--cell-shadow-color:#1a1a1a]",
      )}
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <div 
        className="relative flex items-center justify-center"
        style={{
          width: '100%',
          height: '100%',
          transform: 'scale(1.1)',  // Slightly scale up to ensure coverage
          transformOrigin: 'center center',
        }}
      >
        <div className="pointer-events-none absolute inset-0 z-[2] h-full w-full" />
        <DivGrid
          key={`base-${rippleKey}`}
          className="mask-radial-from-20% mask-radial-at-top opacity-600"
          rows={gridDimensions.rows}
          cols={gridDimensions.cols}
          cellSize={gridDimensions.cellSize}
          borderColor="var(--cell-border-color)"
          fillColor="var(--cell-fill-color)"
          clickedCell={clickedCell}
          onCellClick={(row, col) => {
            setClickedCell({ row, col });
            setRippleKey((k) => k + 1);
          }}
          interactive
        />
      </div>
    </div>
  );
};

type DivGridProps = {
  className?: string;
  rows: number;
  cols: number;
  cellSize: number; // in pixels
  borderColor: string;
  fillColor: string;
  clickedCell: { row: number; col: number } | null;
  onCellClick?: (row: number, col: number) => void;
  interactive?: boolean;
};

type CellStyle = React.CSSProperties & {
  ["--delay"]?: string;
  ["--duration"]?: string;
};

const DivGrid = ({
  className,
  rows = 7,
  cols = 30,
  cellSize = 56,
  borderColor = "#3f3f46",
  fillColor = "rgba(14,165,233,0.3)",
  clickedCell = null,
  onCellClick = () => {},
  interactive = true,
}: DivGridProps) => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, idx) => idx),
    [rows, cols],
  );

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    marginInline: "auto",
  };

  return (
    <div className={cn("relative z-[3]", className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const delay = clickedCell ? Math.max(0, distance * 55) : 0; // ms
        const duration = 200 + distance * 80; // ms

        const style: CellStyle = clickedCell
          ? {
              "--delay": `${delay}ms`,
              "--duration": `${duration}ms`,
            }
          : {};

        return (
          <div
            key={idx}
            className={cn(
              "cell relative border-[0.5px] opacity-40 transition-opacity duration-150 will-change-transform hover:opacity-80 shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]",
              clickedCell && "animate-cell-ripple [animation-fill-mode:none]",
              !interactive && "pointer-events-none",
            )}
            style={{
              backgroundColor: fillColor,
              borderColor: borderColor,
              ...style,
            }}
            onClick={
              interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined
            }
          />
        );
      })}
    </div>
  );
};
