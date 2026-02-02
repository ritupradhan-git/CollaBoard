import React from 'react';
import { enablePointer } from '../canvas/tools/pointer.tool';
import { useCanvas } from '../hooks/useCanvas';
import { toolAction } from '../tools/toolAction';

/**
 * Pointer Tool Button
 * Activates selection / move / resize mode on Fabric canvas
 */
const PointerTool = () => {
  const canvas = useCanvas();


  return (
    <button onClick={()=> toolAction('pointer',canvas)
    }>
      Pointer
    </button>
  );
};

export default PointerTool;
