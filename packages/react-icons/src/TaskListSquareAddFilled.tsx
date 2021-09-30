import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v4.1A5.5 5.5 0 009.6 17H5.5A2.5 2.5 0 013 14.5v-9zm5.85 1.35a.5.5 0 10-.7-.7L6.5 7.79l-.65-.64a.5.5 0 10-.7.7l1 1c.2.2.5.2.7 0l2-2zm0 4.3a.5.5 0 00-.7 0L6.5 12.79l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l2-2a.5.5 0 000-.7zM10.5 7a.5.5 0 000 1h3a.5.5 0 000-1h-3zm4 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 010 1H15v1.5a.5.5 0 01-1 0V15h-1.5a.5.5 0 010-1H14v-1.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const TaskListSquareAddFilled = wrapIcon(rawSvg({}), 'TaskListSquareAddFilled');
export default TaskListSquareAddFilled;
      