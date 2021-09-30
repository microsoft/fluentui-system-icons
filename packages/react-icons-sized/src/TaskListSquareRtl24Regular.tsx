import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 14.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zm.75-6.25a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zm10.53-.78c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 011.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0zm0 6.56a.75.75 0 10-1.06-1.06l-1.47 1.47-.47-.47a.75.75 0 10-1.06 1.06l1 1c.3.3.77.3 1.06 0l2-2zM5.25 3C4.01 3 3 4 3 5.25v13.5C3 19.99 4 21 5.25 21h13.5c1.24 0 2.25-1 2.25-2.25V5.25C21 4.01 20 3 18.75 3H5.25zM4.5 5.25c0-.41.34-.75.75-.75h13.5c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75H5.25a.75.75 0 01-.75-.75V5.25z" fill={primaryFill} /></svg>;
}

const TaskListSquareRtl24Regular = wrapIcon(rawSvg({}), 'TaskListSquareRtl24Regular');
export default TaskListSquareRtl24Regular;
      