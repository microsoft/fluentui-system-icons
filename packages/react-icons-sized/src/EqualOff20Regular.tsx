import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7L6.29 7H3.5a.5.5 0 000 1h3.8l4 4H3.5a.5.5 0 000 1h8.8l4.85 4.85a.5.5 0 00.7-.7l-15-15zM14.12 12l1 1h1.38a.5.5 0 000-1h-2.38zm-5-5l1 1h6.38a.5.5 0 000-1H9.12z" fill={primaryFill} /></svg>;
}

const EqualOff20Regular = wrapIcon(rawSvg({}), 'EqualOff20Regular');
export default EqualOff20Regular;
      