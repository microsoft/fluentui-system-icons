import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.84 2.63a.5.5 0 00-.68.74L16.33 9H2.5a.5.5 0 000 1h13.83l-6.17 5.63a.5.5 0 00.68.74l6.91-6.32a.75.75 0 000-1.1l-6.91-6.32z" fill={primaryFill} /></svg>;
}

const ArrowRight20Regular = wrapIcon(rawSvg({}), 'ArrowRight20Regular');
export default ArrowRight20Regular;
      