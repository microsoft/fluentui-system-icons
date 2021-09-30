import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 8c.17 0 .34.03.5.09a1.5 1.5 0 00-.91.91H3.5a.5.5 0 00-.5.5v.77C3 11.42 3.93 12 6.06 12c.83 0 1.47-.09 1.94-.26v1.04c-.54.15-1.2.22-1.94.22C3.45 13 2 12.1 2 10.27V9.5C2 8.67 2.67 8 3.5 8h5zM6 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a2 2 0 110 4 2 2 0 010-4zm0 1a1 1 0 100 2 1 1 0 000-2zM9.5 9a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h5a.5.5 0 000-1h-5z" fill={primaryFill} /></svg>;
}

const PeopleList16Regular = wrapIcon(rawSvg({}), 'PeopleList16Regular');
export default PeopleList16Regular;
      