import { useCanvasContext } from "../canvas/CanvasProvider";

export const useCanvas = () => {
  return useCanvasContext().canvas;
};
