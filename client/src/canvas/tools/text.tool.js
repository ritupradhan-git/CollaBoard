import { IText } from 'fabric';
import { addObject } from '../actions/addObject';

export const enableTextTool=(canvas)=>{
    const text= new IText('Type here',{
        left:150,
        top:150,
        fontSize:24,
        fill:'#000',
    });
    addObject(canvas,text);
    text.enterEditing();
};