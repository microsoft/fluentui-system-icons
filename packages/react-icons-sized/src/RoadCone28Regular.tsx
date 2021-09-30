import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.98 2c-.56 0-1.06.38-1.2.92L5.86 24.5H3.08a.75.75 0 000 1.5h21.84a.75.75 0 100-1.5h-2.78L16.22 2.92a1.25 1.25 0 00-1.2-.92h-2.04zm-5.5 22.25l1.24-4.5h7.53a.75.75 0 000-1.5H9.13l.68-2.5h5.44a.75.75 0 000-1.5h-5.03L13.17 3.5h1.66l5.69 20.75H7.48z" fill={primaryFill} /></svg>;
}

const RoadCone28Regular = wrapIcon(rawSvg({}), 'RoadCone28Regular');
export default RoadCone28Regular;
      