import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 1a2 2 0 00-2 2v3c0 1.1.9 2 2 2h1v-.5c0-.17.01-.34.04-.5H3a1 1 0 01-1-1V3a1 1 0 011-1h3a1 1 0 011 1v1.04C7.16 4 7.33 4 7.5 4H8V3a2 2 0 00-2-2H3z" fill={primaryFill} /><path d="M12 17v-1h.5c.17 0 .34-.01.5-.04V17a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1h-1.04c.03-.16.04-.33.04-.5V12h1a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2z" fill={primaryFill} /><path d="M5 7.5A2.5 2.5 0 017.5 5h5A2.5 2.5 0 0115 7.5v5a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 015 12.5v-5zm2.28-1.48a1.5 1.5 0 00-1.26 1.26l1.26-1.26zM6 10.29L10.3 6H8.7L6 8.7v1.6zM11.7 6L6 11.7v.8c0 .23.05.45.15.65l7-7A1.5 1.5 0 0012.5 6h-.8zm-4.2 8h.8L14 8.3v-.8c0-.23-.05-.45-.15-.65l-7 7c.2.1.42.15.65.15zm2.2 0h1.6l2.7-2.7V9.7L9.7 14zm3.02-.02a1.5 1.5 0 001.26-1.26l-1.26 1.26z" fill={primaryFill} /></svg>;
}

const PositionToFront20Regular = wrapIcon(rawSvg({}), 'PositionToFront20Regular');
export default PositionToFront20Regular;
      