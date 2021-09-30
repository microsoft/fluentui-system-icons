import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 14a12 12 0 10-24 0 12 12 0 0024 0zm-7.72-4.28c.3.3.3.77 0 1.06L15.06 14l3.22 3.22a.75.75 0 11-1.06 1.06L14 15.06l-3.22 3.22a.75.75 0 11-1.06-1.06L12.94 14l-3.22-3.22a.75.75 0 111.06-1.06L14 12.94l3.22-3.22c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const DismissCircle28Filled = wrapIcon(rawSvg({}), 'DismissCircle28Filled');
export default DismissCircle28Filled;
      