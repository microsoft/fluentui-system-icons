import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.78 3.78a.75.75 0 00-1.06-1.06L3.75 4.69l-.47-.47a.75.75 0 00-1.06 1.06l1 1c.3.3.77.3 1.06 0l2.5-2.5zM11 17.5c0 .34.03.68.08 1H9.75a.75.75 0 01-.1-1.49h1.37a6.6 6.6 0 00-.02.49zm6.5-6.5c1.27 0 2.46.37 3.47 1h.38a.75.75 0 00-.1-1.5H9.65a.75.75 0 00.1 1.5h4.28c1-.63 2.2-1 3.47-1zm3.75-7H9.65a.75.75 0 00.1 1.5h11.6a.75.75 0 00-.1-1.5zM6.78 16.78a.75.75 0 10-1.06-1.06l-1.97 1.97-.47-.47a.75.75 0 00-1.06 1.06l1 1c.3.3.77.3 1.06 0l2.5-2.5zm0-7.56c.3.3.3.77 0 1.06l-2.5 2.5c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 111.06-1.06l.47.47 1.97-1.97c.3-.3.77-.3 1.06 0zM23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H18z" fill={primaryFill} /></svg>;
}

const TaskListAdd24Regular = wrapIcon(rawSvg({}), 'TaskListAdd24Regular');
export default TaskListAdd24Regular;
      