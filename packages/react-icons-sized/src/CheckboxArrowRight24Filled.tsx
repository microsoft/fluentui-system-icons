import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 2a3 3 0 013 3v6.5a6.5 6.5 0 00-8.5 8.5H5a3 3 0 01-3-3V5a3 3 0 013-3h12zm-1.53 4.97L9 13.44l-2.47-2.47a.75.75 0 00-1.06 1.06l3 3c.3.3.77.3 1.06 0l7-7a.75.75 0 00-1.06-1.06zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-8.5-.5a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L19.29 17H14.5z" fill={primaryFill} /></svg>;
}

const CheckboxArrowRight24Filled = wrapIcon(rawSvg({}), 'CheckboxArrowRight24Filled');
export default CheckboxArrowRight24Filled;
      