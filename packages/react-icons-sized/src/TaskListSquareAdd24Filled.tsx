import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.25C3 4.01 4 3 5.25 3h13.5C19.99 3 21 4 21 5.25v6.77A6.5 6.5 0 0012.02 21H5.25C4.01 21 3 20 3 18.75V5.25zm7.28 3.53a.75.75 0 10-1.06-1.06L7.75 9.19l-.47-.47a.75.75 0 00-1.06 1.06l1 1c.3.3.77.3 1.06 0l2-2zm0 5.5a.75.75 0 10-1.06-1.06l-1.47 1.47-.47-.47a.75.75 0 00-1.06 1.06l1 1c.3.3.77.3 1.06 0l2-2zm2.97-5.78a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zm9.75 9a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 110-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 110 1H18z" fill={primaryFill} /></svg>;
}

const TaskListSquareAdd24Filled = wrapIcon(rawSvg({}), 'TaskListSquareAdd24Filled');
export default TaskListSquareAdd24Filled;
      