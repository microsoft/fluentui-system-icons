import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.7 2.3a1 1 0 00-1.4 0L4 3.58l-.3-.3a1 1 0 00-1.4 1.42l1 1a1 1 0 001.4 0l2-2a1 1 0 000-1.42zM11 17.5c0 .17 0 .33.02.5H10a1 1 0 01-.12-2H11.18c-.12.48-.18.98-.18 1.5zm6.5-6.5c1.27 0 2.46.37 3.47 1h.15a1 1 0 00-.12-2H9.88a1 1 0 00.12 2h4.03c1-.63 2.2-1 3.47-1zM21 4H9.88A1 1 0 0010 6h11.12A1 1 0 0021 4zM6.7 15.3a1 1 0 00-1.4 0L4 16.58l-.3-.3a1 1 0 00-1.4 1.42l1 1a1 1 0 001.4 0l2-2a1 1 0 000-1.42zM5.3 8.8a1 1 0 011.4 1.4l-2 2a1 1 0 01-1.4 0l-1-1a1 1 0 011.4-1.4l.3.29 1.3-1.3zM23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H18z" fill={primaryFill} /></svg>;
}

const TaskListAdd24Filled = wrapIcon(rawSvg({}), 'TaskListAdd24Filled');
export default TaskListAdd24Filled;
      