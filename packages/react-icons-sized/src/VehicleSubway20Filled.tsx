import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 5a.5.5 0 000 1h3a.5.5 0 100-1h-3z" fill={primaryFill} /><path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-2.68 2.98l2.38 1.06a.5.5 0 11-.4.92L11.9 17H8.1l-4.4 1.96a.5.5 0 11-.4-.92l2.38-1.06A3 3 0 013 14V6zm1 0v5h12V6a2 2 0 00-2-2H6a2 2 0 00-2 2zm4 8a1 1 0 10-2 0 1 1 0 002 0zm5 1a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const VehicleSubway20Filled = wrapIcon(rawSvg({}), 'VehicleSubway20Filled');
export default VehicleSubway20Filled;
      