import { drawRectangle } from './rectangle.tool';
import { enablePointer } from './pointer.tool';
import { enableTextTool } from './text.tool';

export const toolAction = (tool, canvas) => {
  if (!canvas) return;

  switch (tool) {
    case 'rectangle':
      drawRectangle(canvas);
      break;
    case 'pointer':
      enablePointer(canvas);
      break;
    case 'text':
      enableTextTool(canvas);
      break;
    default:
      break;
  }
};
