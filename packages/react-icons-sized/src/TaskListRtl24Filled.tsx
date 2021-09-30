import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.7 3.3a1 1 0 00-1.4 0L19 4.58l-.3-.3a1 1 0 10-1.4 1.42l1 1a1 1 0 001.4 0l2-2a1 1 0 000-1.42zM14 17H2.88A1 1 0 003 19h11.12a1 1 0 00-.12-2zm0-6H2.88A1 1 0 003 13h11.12a1 1 0 00-.12-2zm0-6H2.88A1 1 0 003 7h11.12A1 1 0 0014 5zm7.7 11.3a1 1 0 00-1.4 0L19 17.58l-.3-.3a1 1 0 00-1.4 1.42l1 1a1 1 0 001.4 0l2-2a1 1 0 000-1.42zm-1.4-6.5a1 1 0 111.4 1.4l-2 2a1 1 0 01-1.4 0l-1-1a1 1 0 011.4-1.4l.3.29 1.3-1.3z" fill={primaryFill} /></svg>;
}

const TaskListRtl24Filled = wrapIcon(rawSvg({}), 'TaskListRtl24Filled');
export default TaskListRtl24Filled;
      