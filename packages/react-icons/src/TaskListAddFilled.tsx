import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.85 3.35a.5.5 0 10-.7-.7L3.5 4.29l-.65-.64a.5.5 0 10-.7.7l1 1c.2.2.5.2.7 0l2-2zm2.9.15a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm1.27 6.5c.05-.52.17-1.03.35-1.5H8.75a.75.75 0 000 1.5h1.27zM5.85 8.85a.5.5 0 10-.7-.7L3.5 9.79l-.65-.64a.5.5 0 10-.7.7l1 1c.2.2.5.2.7 0l2-2zm0 4.3c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0zM20 15.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V15h-1.5a.5.5 0 000 1H15v1.5a.5.5 0 001 0V16h1.5a.5.5 0 000-1H16v-1.5z" fill={primaryFill} /></svg>;
}

const TaskListAddFilled = wrapIcon(rawSvg({}), 'TaskListAddFilled');
export default TaskListAddFilled;
      