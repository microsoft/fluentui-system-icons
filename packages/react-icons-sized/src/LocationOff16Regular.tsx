import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.58 12.29l2.57 2.56a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L2.99 3.7A5.97 5.97 0 002 7c0 2.87 1.93 5.5 5.73 7.92.17.1.37.1.54 0a17.98 17.98 0 003.31-2.63zm-.7-.7c-.69.7-1.54 1.4-2.56 2.1L8 13.9l-.32-.2C4.54 11.55 3 9.32 3 7c0-.94.26-1.83.71-2.58l7.16 7.16z" fill={primaryFill} /><path d="M9.46 7.34l-1.8-1.8a1.5 1.5 0 011.8 1.8z" fill={primaryFill} /><path d="M12.11 10c.6-.99.89-1.98.89-3a5 5 0 00-7.93-4.05l-.71-.72A6 6 0 0114 7c0 1.29-.39 2.52-1.16 3.72l-.73-.73z" fill={primaryFill} /></svg>;
}

const LocationOff16Regular = wrapIcon(rawSvg({}), 'LocationOff16Regular');
export default LocationOff16Regular;
      