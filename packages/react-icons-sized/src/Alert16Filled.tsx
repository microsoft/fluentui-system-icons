import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 6.5a4.5 4.5 0 019 0v1.9l.96 2.41a.5.5 0 01-.46.69H3a.5.5 0 01-.46-.69l.96-2.4V6.5z" fill={primaryFill} /><path d="M6.06 12.5a2 2 0 003.88 0H6.06z" fill={primaryFill} /></svg>;
}

const Alert16Filled = wrapIcon(rawSvg({}), 'Alert16Filled');
export default Alert16Filled;
      