import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 8c.82 0 1.5.67 1.5 1.5v.75C10.1 12.08 8.67 13 6.05 13 3.45 13 2 12.1 2 10.27V9.5C2 8.67 2.67 8 3.5 8h5zm4 0c.82 0 1.5.67 1.5 1.5v.53c.09 1.64-1.16 2.47-3.45 2.47-.3 0-.6-.02-.87-.05.29-.26.5-.58.64-.95h.23c1.79 0 2.5-.47 2.45-1.45V9.5a.5.5 0 00-.5-.5h-2.07a2 2 0 00-.61-1h2.68zm-4 1h-5a.5.5 0 00-.5.5v.77C3 11.42 3.93 12 6.06 12c2.12 0 3-.57 2.94-1.72V9.5a.5.5 0 00-.5-.5zM6 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm5 1a2 2 0 110 4 2 2 0 010-4zM6 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 1a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
}

const People16Regular = wrapIcon(rawSvg({}), 'People16Regular');
export default People16Regular;
      