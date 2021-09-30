import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-3.82-9a4 4 0 00-2.73 1.08L3.77 15.48a4.25 4.25 0 00-.1 6.1l6.32 6.33a4.25 4.25 0 006.01 0l11.83-11.82A4 4 0 0029 13.26V6.5A3.5 3.5 0 0025.5 3h-6.82zm-1.36 2.54A2 2 0 0118.68 5h6.82c.83 0 1.5.67 1.5 1.5v6.76a2 2 0 01-.59 1.41L14.6 26.5c-.88.88-2.3.88-3.18 0l-6.33-6.32c-.9-.9-.87-2.37.06-3.24l12.18-11.4z" fill={primaryFill} /></svg>;
}

const Tag32Regular = wrapIcon(rawSvg({}), 'Tag32Regular');
export default Tag32Regular;
      