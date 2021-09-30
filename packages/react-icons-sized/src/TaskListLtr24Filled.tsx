import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.7 3.3a1 1 0 00-1.4 0L4 4.58l-.3-.3a1 1 0 00-1.4 1.42l1 1a1 1 0 001.4 0l2-2a1 1 0 000-1.42zM21 17H9.88a1 1 0 00.12 2h11l.12-.01a1 1 0 00-.12-2zm0-6H9.88a1 1 0 00.12 2h11.12a1 1 0 00-.12-2zm0-6H9.88A1 1 0 0010 7h11.12A1 1 0 0021 5zM6.7 16.3a1 1 0 00-1.4 0L4 17.58l-.3-.3a1 1 0 00-1.4 1.42l1 1a1 1 0 001.4 0l2-2a1 1 0 000-1.42zM5.3 9.8a1 1 0 011.4 1.4l-2 2a1 1 0 01-1.4 0l-1-1a1 1 0 111.4-1.4l.3.29 1.3-1.3z" fill={primaryFill} /></svg>;
}

const TaskListLtr24Filled = wrapIcon(rawSvg({}), 'TaskListLtr24Filled');
export default TaskListLtr24Filled;
      