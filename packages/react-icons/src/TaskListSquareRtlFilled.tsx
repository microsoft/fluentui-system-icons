import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3C3.67 3 3 3.67 3 4.5v11c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5h-11zm9.85 3.4c.2.2.2.5 0 .7L12.6 8.85a.5.5 0 01-.69.02l-.75-.69a.5.5 0 01.68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0zm0 5c.2.2.2.5 0 .7l-1.75 1.75a.5.5 0 01-.69.02l-.75-.69a.5.5 0 01.68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0zM6.5 12H9a.5.5 0 010 1H6.5a.5.5 0 010-1zM6 7.5c0-.28.22-.5.5-.5H9a.5.5 0 010 1H6.5a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const TaskListSquareRtlFilled = wrapIcon(rawSvg({}), 'TaskListSquareRtlFilled');
export default TaskListSquareRtlFilled;
      