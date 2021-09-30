import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 3a.75.75 0 000 1.5h1.43l.95 3.5H8.5V5.75A.75.75 0 007.75 5h-3a.75.75 0 000 1.5H7v2.19l-.3 1.81a4.25 4.25 0 104.3 4.06l4.65-4.65.28 1a4.25 4.25 0 101.44-.4l-1.9-6.96a.75.75 0 00-.72-.55h-2zm3.58 9.4l.7 2.55a.75.75 0 101.44-.4l-.7-2.55a2.75 2.75 0 11-1.44.4zm-5.77.47a4.26 4.26 0 00-2.38-2.12l.2-1.25h5.56l-3.38 3.37zm-2.64-.6c.72.33 1.26.96 1.48 1.73H7.64l.28-1.74zm-1.47-.25L6 14.62a.75.75 0 00.74.88H9.4a2.75 2.75 0 11-2.95-3.48z" fill={primaryFill} /></svg>;
}

const VehicleBicycle24Regular = wrapIcon(rawSvg({}), 'VehicleBicycle24Regular');
export default VehicleBicycle24Regular;
      