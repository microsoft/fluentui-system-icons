import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.02 13.84A1.75 1.75 0 012 12.25v-1.21a2.5 2.5 0 011.86-2.42l2.09-.56L7.49 5.3A2.5 2.5 0 019.68 4h3.38a2.5 2.5 0 012.37 1.7l.82 2.48A2.5 2.5 0 0118 10.56v1.69c0 .7-.42 1.32-1.02 1.6a2.5 2.5 0 01-4.93.15h-4.1a2.5 2.5 0 01-4.93-.16zM13.06 5H12v3h3.14l-.66-1.97A1.5 1.5 0 0013.06 5zm-4.7.77L7.14 8H11V5H9.68c-.55 0-1.05.3-1.31.77zM16 13.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-9 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" fill={primaryFill} /></svg>;
}

const VehicleCarProfileRtl20Filled = wrapIcon(rawSvg({}), 'VehicleCarProfileRtl20Filled');
export default VehicleCarProfileRtl20Filled;
      