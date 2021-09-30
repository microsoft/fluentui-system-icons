import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.85 6.15c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7 0l-1-1a.5.5 0 11.7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0zm0 5c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0zM10 7.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 014 14.5v-9C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5v3.7c.35.1.68.24 1 .4V5.5A2.5 2.5 0 0014.5 3h-9zm9 16a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 010 1H15v1.5a.5.5 0 01-1 0V15h-1.5a.5.5 0 010-1H14v-1.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const TaskListSquareAddRegular = wrapIcon(rawSvg({}), 'TaskListSquareAddRegular');
export default TaskListSquareAddRegular;
      