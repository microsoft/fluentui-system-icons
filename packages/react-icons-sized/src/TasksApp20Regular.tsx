import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v9.88l-1 1.01V4a1 1 0 00-1-1H6a1 1 0 00-1 1v12a1 1 0 001 1h4.09c.07.2.18.39.34.55l.44.45H6a2 2 0 01-2-2V4z" fill={primaryFill} /><path d="M8 5.5a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M9.5 5a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /><path d="M9.5 9a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /><path d="M9 13.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M7 10.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M7 14.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M17.86 14.85a.5.5 0 00-.72-.7l-3.64 3.68-1.64-1.68a.5.5 0 10-.72.7l1.93 1.97a.6.6 0 00.86 0l3.93-3.97z" fill={primaryFill} /></svg>;
}

const TasksApp20Regular = wrapIcon(rawSvg({}), 'TasksApp20Regular');
export default TasksApp20Regular;
      