import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 104.47 10H8v1A5 5 0 018 3h3.32c-.95-.63-2.1-1-3.32-1z" fill={primaryFill} /><path d="M8 4h4.47c.28.3.52.64.73 1H8V4z" fill={primaryFill} /><path d="M13.66 6H8v1h5.92a5.95 5.95 0 00-.26-1z" fill={primaryFill} /><path d="M8 8h6c0 .34-.03.67-.08 1H8V8z" fill={primaryFill} /><path d="M13.66 10H8v1h5.2c.18-.32.34-.65.46-1z" fill={primaryFill} /></svg>;
}

const Blur16Regular = wrapIcon(rawSvg({}), 'Blur16Regular');
export default Blur16Regular;
      