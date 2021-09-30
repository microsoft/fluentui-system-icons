import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 9.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M10.25 10a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M7 10.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M2.7 1C1.76 1 1 1.76 1 2.7v9c0 .72.58 1.3 1.3 1.3H3v.7c0 .72.58 1.3 1.3 1.3h1.4c.72 0 1.3-.58 1.3-1.3V13h2v.7c0 .72.58 1.3 1.3 1.3h1.4c.72 0 1.3-.58 1.3-1.3V13h.7c.72 0 1.3-.58 1.3-1.3v-9c0-.94-.76-1.7-1.7-1.7H2.7zM10 13.7V13h2v.7a.3.3 0 01-.3.3h-1.4a.3.3 0 01-.3-.3zM6 13v.7a.3.3 0 01-.3.3H4.3a.3.3 0 01-.3-.3V13h2zM2 2.7c0-.39.31-.7.7-.7h10.6c.39 0 .7.31.7.7v9a.3.3 0 01-.3.3H13V7.76c0-.23-.04-.45-.1-.66l-.74-2.21A1.3 1.3 0 0010.92 4H5.08a1.3 1.3 0 00-1.24.89l-.73 2.2c-.07.22-.11.44-.11.67V12h-.7a.3.3 0 01-.3-.3v-9zM4 12V8h8v4H4zm.2-5l.6-1.8a.3.3 0 01.28-.2h5.84a.3.3 0 01.29.2l.6 1.8H4.19z" fill={primaryFill} /></svg>;
}

const VehicleTruck16Regular = wrapIcon(rawSvg({}), 'VehicleTruck16Regular');
export default VehicleTruck16Regular;
      