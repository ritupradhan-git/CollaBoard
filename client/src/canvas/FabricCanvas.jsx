import { useEffect, useRef } from 'react';
import { initCanvas } from './core/initCanvas';
import React from 'react';
import { useCanvasContext } from './CanvasProvider';
import {enablePointer} from './tools/pointer.tool.js';
import { createGridPattern } from './core/gridPattern.js';
import { enablePanTool } from './tools/pan.tool.js';
import { enableZoom } from './tools/zoom.tool.js';
const FabricCanvas = () => {
  const canvasRef = useRef(null);
  const {setCanvas}=useCanvasContext();
  useEffect(() => {
    //Initialize the canvas
    const canvas = initCanvas(canvasRef.current);
    //Update shared content
    setCanvas(canvas);
    enablePointer(canvas);
    enablePanTool(canvas);
    enableZoom(canvas);

    //Grid

    createGridPattern(canvas,{
      dotSize:1,
      gap:24,
      backgroundcolor:'#cbcbcbff',
      color: '#d1d5db',
    })
    //Cleanup on unmount, for the data to not delete before disposing store the data, so that after cleeanup the data is gone and it will run faster, no lag
    return () => {
      canvas.dispose();
    };
  }, [setCanvas]); // 👈 runs ONCE

  return (
    <canvas
      ref={canvasRef}
      width={1440}
      height={800}
    />
  );
};

export default FabricCanvas;
