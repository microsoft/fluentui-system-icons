import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.25C3 4.01 4 3 5.25 3h13.5C19.99 3 21 4 21 5.25v6.77c-.46-.3-.97-.53-1.5-.7V5.24a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75v13.5c0 .41.34.75.75.75h6.06c.18.53.42 1.04.71 1.5H5.25C4.01 21 3 20 3 18.75V5.25zm7.78 2.47c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 011.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0zm0 5.5c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 111.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0zM17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.5 8.5V18h2.5a.5.5 0 100-1H18v-2.5a.5.5 0 10-1 0V17h-2.5a.5.5 0 000 1H17v2.5a.5.5 0 101 0zm-4.75-12a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" fill={primaryFill} /></svg>;
}

const TaskListSquareAdd24Regular = wrapIcon(rawSvg({}), 'TaskListSquareAdd24Regular');
export default TaskListSquareAdd24Regular;
      