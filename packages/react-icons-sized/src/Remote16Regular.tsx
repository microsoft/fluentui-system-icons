import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.85 2.85a.5.5 0 00-.7-.7l-4.5 4.5a.5.5 0 000 .7l4.5 4.5a.5.5 0 00.7-.7L9.71 7l4.14-4.15zm-11 1.3a.5.5 0 10-.7.7L6.29 9l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5z" fill={primaryFill} /></svg>;
}

const Remote16Regular = wrapIcon(rawSvg({}), 'Remote16Regular');
export default Remote16Regular;
      