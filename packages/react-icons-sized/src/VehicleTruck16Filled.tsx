import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 2.7C1 1.76 1.76 1 2.7 1h10.6c.94 0 1.7.76 1.7 1.7V12a1 1 0 01-1 1V7.8c0-.25-.04-.5-.11-.74l-.72-2.3A2.5 2.5 0 0010.78 3H5.22a2.5 2.5 0 00-2.39 1.75l-.72 2.31c-.07.24-.11.5-.11.75V13a1 1 0 01-1-1V2.7z" fill={primaryFill} /><path d="M13 13.7c0 .72-.58 1.3-1.3 1.3h-1.4A1.3 1.3 0 019 13.7V13H7v.7c0 .72-.58 1.3-1.3 1.3H4.3A1.3 1.3 0 013 13.7V7.8c0-.15.02-.3.07-.44l.72-2.3.02-.07C4.02 4.4 4.58 4 5.22 4h5.56c.64 0 1.2.4 1.41 1l.02.06.72 2.3c.05.14.07.3.07.45v5.89zM6 13H4v.7c0 .17.13.3.3.3h1.4a.3.3 0 00.3-.3V13zm6 0h-2v.7c0 .17.13.3.3.3h1.4a.3.3 0 00.3-.3V13zM4.8 5.2L4.2 7h7.6l-.6-1.8a.3.3 0 00-.28-.2H5.08a.3.3 0 00-.29.2zm.95 4.8a.75.75 0 100-1.5.75.75 0 000 1.5zM11 9.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM7.5 10a.5.5 0 000 1h1a.5.5 0 000-1h-1z" fill={primaryFill} /></svg>;
}

const VehicleTruck16Filled = wrapIcon(rawSvg({}), 'VehicleTruck16Filled');
export default VehicleTruck16Filled;
      