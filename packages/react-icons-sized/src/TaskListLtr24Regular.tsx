import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.78 4.78a.75.75 0 00-1.06-1.06L3.75 5.69l-.47-.47a.75.75 0 00-1.06 1.06l1 1c.3.3.77.3 1.06 0l2.5-2.5zm14.47 13.23H9.65a.75.75 0 00.1 1.5h11.5l.1-.01a.75.75 0 00-.1-1.5zm0-6.51H9.65a.75.75 0 00.1 1.5h11.6a.75.75 0 00-.1-1.5zm0-6.5H9.65a.75.75 0 00.1 1.5h11.6a.75.75 0 00-.1-1.5zM6.78 17.78a.75.75 0 10-1.06-1.06l-1.97 1.97-.47-.47a.75.75 0 00-1.06 1.06l1 1c.3.3.77.3 1.06 0l2.5-2.5zm0-7.56c.3.3.3.77 0 1.06l-2.5 2.5c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 111.06-1.06l.47.47 1.97-1.97c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const TaskListLtr24Regular = wrapIcon(rawSvg({}), 'TaskListLtr24Regular');
export default TaskListLtr24Regular;
      