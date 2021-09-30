import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-4v-1h4A.5.5 0 0013 9V4a.5.5 0 00-.5-.5h-8A.5.5 0 004 4h-.5a2 2 0 00-.5.06V4zm11.5 8.5h-6v-1h6a.5.5 0 010 1zm-10 0a.5.5 0 100-1 .5.5 0 000 1zm-3-6C1.5 5.67 2.17 5 3 5h3c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5v-6zM3 6a.5.5 0 00-.5.5v6c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-6A.5.5 0 006 6H3z" fill={primaryFill} /></svg>;
}

const PhoneLaptop16Regular = wrapIcon(rawSvg({}), 'PhoneLaptop16Regular');
export default PhoneLaptop16Regular;
      