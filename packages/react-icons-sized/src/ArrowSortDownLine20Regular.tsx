import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.2 15.29l2.65-2.64a.5.5 0 01.71.7L7.1 16.82a.5.5 0 01-.74.03l-3.5-3.5a.5.5 0 11.71-.7l2.65 2.64V3.5a.5.5 0 011 0v11.79zM9.5 4a.5.5 0 000 1h7a.5.5 0 100-1h-7zm0 3a.5.5 0 000 1h5a.5.5 0 100-1h-5zm0 3a.5.5 0 000 1h2a.5.5 0 100-1h-2z" fill={primaryFill} /></svg>;
}

const ArrowSortDownLine20Regular = wrapIcon(rawSvg({}), 'ArrowSortDownLine20Regular');
export default ArrowSortDownLine20Regular;
      