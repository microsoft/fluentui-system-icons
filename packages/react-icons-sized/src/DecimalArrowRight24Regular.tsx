import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4a3 3 0 00-3 3v4a3 3 0 106 0V7a3 3 0 00-3-3zm1.5 7a1.5 1.5 0 01-3 0V7a1.5 1.5 0 113 0v4z" fill={primaryFill} /><path d="M5 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M19.5 7v4l-.03.3c.49.16.95.37 1.38.63A3 3 0 0021 11V7a3 3 0 10-6 0v4c0 .16.01.33.04.48.46-.19.95-.33 1.46-.4V7a1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-8.5-.5a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L19.29 17H14.5z" fill={primaryFill} /></svg>;
}

const DecimalArrowRight24Regular = wrapIcon(rawSvg({}), 'DecimalArrowRight24Regular');
export default DecimalArrowRight24Regular;
      