import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.85 3.35a.5.5 0 10-.7-.7L3.5 4.29l-.65-.64a.5.5 0 10-.7.7l1 1c.2.2.5.2.7 0l2-2zM8.5 4a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 5a.5.5 0 000 1h9a.5.5 0 000-1h-9zm1.52 6c.03-.34.1-.68.19-1H8.5a.5.5 0 000 1h1.52zM5.85 8.85a.5.5 0 10-.7-.7L3.5 9.79l-.65-.64a.5.5 0 10-.7.7l1 1c.2.2.5.2.7 0l2-2zm0 4.3c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0zM20 15.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V15h-1.5a.5.5 0 000 1H15v1.5a.5.5 0 001 0V16h1.5a.5.5 0 000-1H16v-1.5z" fill={primaryFill} /></svg>;
}

const TaskListAdd20Regular = wrapIcon(rawSvg({}), 'TaskListAdd20Regular');
export default TaskListAdd20Regular;
      