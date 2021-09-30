import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.04 20a11 11 0 0121.92 0h.29a7.75 7.75 0 010 15.5h-22.5a7.75 7.75 0 010-15.5h.3zM24 12.5a8.5 8.5 0 00-8.5 8.5v.25c0 .69-.56 1.25-1.25 1.25h-1.5a5.25 5.25 0 100 10.5h22.5a5.25 5.25 0 100-10.5h-1.5c-.69 0-1.25-.56-1.25-1.25V21c0-4.7-3.8-8.5-8.5-8.5z" fill={primaryFill} /></svg>;
}

const Cloud48Regular = wrapIcon(rawSvg({}), 'Cloud48Regular');
export default Cloud48Regular;
      