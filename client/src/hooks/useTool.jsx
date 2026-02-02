import { enablePointer } from '../canvas/tools/pointer.tool.js';

export const useTool = (canvas) => {
  return (tool) => {
    if (!canvas) return;

    if (tool === 'pointer') {
      enablePointer(canvas);
    }
  };
};
