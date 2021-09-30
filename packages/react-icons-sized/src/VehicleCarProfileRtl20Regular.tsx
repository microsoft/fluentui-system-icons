import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.48 6.03L15.14 8H12V5h1.06c.64 0 1.22.41 1.42 1.03zm1 2.97l.26.08.12.03A1.5 1.5 0 0117 10.56v1.69c0 .16-.05.31-.14.43a2.5 2.5 0 00-4.81.32h-4.1a2.5 2.5 0 00-4.81-.32.75.75 0 01-.14-.43v-1.21c0-.68.46-1.28 1.11-1.45L6.31 9h9.16zM7.12 8l1.24-2.23A1.5 1.5 0 019.67 5H11v3H7.13zM2 12.25c0 .7.42 1.32 1.02 1.6a2.5 2.5 0 004.93.15h4.1a2.5 2.5 0 004.93-.16c.6-.27 1.02-.88 1.02-1.59v-1.69a2.5 2.5 0 00-1.75-2.38l-.82-2.47A2.5 2.5 0 0013.06 4H9.68c-.91 0-1.75.5-2.19 1.29L5.95 8.06l-2.1.56A2.5 2.5 0 002 11.04v1.21zM14.5 12a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /></svg>;
}

const VehicleCarProfileRtl20Regular = wrapIcon(rawSvg({}), 'VehicleCarProfileRtl20Regular');
export default VehicleCarProfileRtl20Regular;
      