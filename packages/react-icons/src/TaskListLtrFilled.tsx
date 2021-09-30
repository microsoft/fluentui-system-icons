import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.85 4.35a.5.5 0 10-.7-.7L3.5 5.29l-.65-.64a.5.5 0 10-.7.7l1 1c.2.2.5.2.7 0l2-2zm2.9.15a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM8 15.25c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75zm-2.15-5.4a.5.5 0 10-.7-.7L3.5 10.79l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l2-2zm0 4.3c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const TaskListLtrFilled = wrapIcon(rawSvg({}), 'TaskListLtrFilled');
export default TaskListLtrFilled;
      