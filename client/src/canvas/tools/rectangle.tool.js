import { Rect } from 'fabric';
import { addObject } from '../actions/addObject';
export const drawRectangle = (canvas) => {
  const rect = new Rect({
    left: 100,
    top: 100,
    width: 200,
    height: 120,
    fill: '#2a7fff',
  });

  addObject(canvas,rect);
};
