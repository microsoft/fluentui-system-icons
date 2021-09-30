import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 2c1.2 0 2.17.93 2.24 2.1l.01.15v10.13c-.12.08-.23.17-.34.28l-3.41 3.4-.9-.9a2.24 2.24 0 00-1.5-.66h2.4a.75.75 0 100-1.5h-5a.75.75 0 000 1.5h2.4a2.25 2.25 0 00-1.5 3.84L13.83 22H6.25c-1.2 0-2.17-.93-2.24-2.1L4 19.75V4.25c0-1.19.93-2.16 2.1-2.24h11.65zM9 7.75a1 1 0 10-2 0 1 1 0 002 0zM11.25 7a.75.75 0 000 1.5h5a.75.75 0 100-1.5h-5zm-.75 4.75c0 .41.33.75.75.75h5a.75.75 0 100-1.5h-5a.75.75 0 00-.75.75zm-1.5 0a1 1 0 10-2 0 1 1 0 002 0zm0 4a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M16.25 20.19l4.47-4.47a.75.75 0 111.06 1.06l-5 5a.73.73 0 01-.5.22.7.7 0 01-.07 0 .75.75 0 01-.5-.22l-2.49-2.5a.75.75 0 011.06-1.06l1.97 1.97z" fill={primaryFill} /></svg>;
}

const TasksApp24Filled = wrapIcon(rawSvg({}), 'TasksApp24Filled');
export default TasksApp24Filled;
      