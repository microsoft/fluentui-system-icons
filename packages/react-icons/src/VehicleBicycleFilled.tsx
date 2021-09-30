import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 2a.75.75 0 000 1.5h1.13l.36 2H7.25v-.75A.75.75 0 006.5 4h-2a.75.75 0 000 1.5h1.25v.7L5.4 9.02a3.75 3.75 0 104.06 3.2l3.23-4.3.24 1.32A3.75 3.75 0 1014.41 9l-1.17-6.39A.75.75 0 0012.5 2h-1.75zm-3.6 5.13A.75.75 0 007.2 7h4.29l-2.69 3.58a3.76 3.76 0 00-1.92-1.4l.26-2.05zM3.5 12.75c0-1.05.73-1.94 1.7-2.18L5 12.16a.75.75 0 00.75.84h2.24a2.25 2.25 0 01-4.49-.25zm3.1-1.25l.1-.8c.37.18.7.46.92.8H6.6zm6.61-.75l.3 1.64A.75.75 0 0015 12.1l-.3-1.57a2.25 2.25 0 11-1.48.21z" fill={primaryFill} /></svg>;
}

const VehicleBicycleFilled = wrapIcon(rawSvg({}), 'VehicleBicycleFilled');
export default VehicleBicycleFilled;
      