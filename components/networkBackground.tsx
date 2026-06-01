"use client";
import { useEffect, useRef } from "react";

interface Cell {
  row: number;
  col: number;
  visited: boolean;
  isPath: boolean;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const cellSize = 25; 
    let cols = 0;
    let rows = 0;
    let grid: Cell[][] = [];
    let stack: Cell[] = [];

    const accentPurple = "rgba(130, 79, 130, 0.4)";
    const linePurple = "rgba(130, 79, 130, 0.15)";
    const activeHeadColor = "#824F82";

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      cols = Math.ceil(canvas.width / cellSize);
      rows = Math.ceil(canvas.height / cellSize);

      initDFS();
    };

    const initDFS = () => {
      grid = [];
      stack = [];

      for (let r = 0; r < rows; r++) {
        const rowCells: Cell[] = [];
        for (let c = 0; c < cols; c++) {
          rowCells.push({
            row: r,
            col: c,
            visited: false,
            isPath: false,
          });
        }
        grid.push(rowCells);
      }

      if (grid.length > 0 && grid[0].length > 0) {
        const startCell = grid[0][0];
        startCell.visited = true;
        stack.push(startCell);
      }
    };

    const getUnvisitedNeighbors = (cell: Cell): Cell[] => {
      const neighbors: Cell[] = [];
      const { row, col } = cell;

      if (row > 0 && !grid[row - 1][col].visited) neighbors.push(grid[row - 1][col]); 
      if (row < rows - 1 && !grid[row + 1][col].visited) neighbors.push(grid[row + 1][col]); 
      if (col > 0 && !grid[row][col - 1].visited) neighbors.push(grid[row][col - 1]); 
      if (col < cols - 1 && !grid[row][col + 1].visited) neighbors.push(grid[row][col + 1]); 

      return neighbors;
    };

    let frameCounter = 0;
    const speedDivider = 3; 

    const runDFSLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 0.5;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = grid[r][c];
          const x = c * cellSize;
          const y = r * cellSize;

          ctx.strokeStyle = "rgba(130, 79, 130, 0.05)"; 
          ctx.strokeRect(x, y, cellSize, cellSize);

          if (cell.visited) {
            ctx.fillStyle = cell.isPath
              ? "rgba(130, 79, 130, 0.04)"
              : "rgba(255, 255, 255, 0.002)";
            ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
          }
        }
      }

      if (stack.length > 1) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(193, 154, 193, 0.15)"; 
        ctx.lineWidth = 1.2;
        ctx.moveTo(
          stack[0].col * cellSize + cellSize / 2,
          stack[0].row * cellSize + cellSize / 2,
        );

        for (let i = 1; i < stack.length; i++) {
          ctx.lineTo(
            stack[i].col * cellSize + cellSize / 2,
            stack[i].row * cellSize + cellSize / 2,
          );
        }
        ctx.stroke();
      }

      if (stack.length > 0) {
        const current = stack[stack.length - 1];
        ctx.beginPath();
        ctx.arc(
          current.col * cellSize + cellSize / 2,
          current.row * cellSize + cellSize / 2,
          2,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = activeHeadColor; 
        ctx.fill();
      }

      frameCounter++;
      if (frameCounter % speedDivider === 0) {
        if (stack.length > 0) {
          const current = stack[stack.length - 1];
          const neighbors = getUnvisitedNeighbors(current);

          if (neighbors.length > 0) {
            const next = neighbors[Math.floor(Math.random() * neighbors.length)];
            next.visited = true;
            next.isPath = true;
            stack.push(next);
          } else {
            const popped = stack.pop();
            if (popped) popped.isPath = false;
          }
        } else {
          initDFS();
        }
      }

      animationFrameId = requestAnimationFrame(runDFSLoop);
    };

    const resizeObserver = new ResizeObserver(() => resizeCanvas());
    resizeObserver.observe(container);

    resizeCanvas();
    runDFSLoop();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}