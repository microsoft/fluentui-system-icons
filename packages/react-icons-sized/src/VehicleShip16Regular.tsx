import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V4h2.5c.28 0 .5.22.5.5v3.52l1.2.52a.5.5 0 01.24.7l-1.15 2.06c-.15-.28-.35-.57-.74-.71l.74-1.35L8.6 7.2a1.5 1.5 0 00-1.19 0L2.7 9.24l.75 1.35c-.4.14-.59.43-.74.71L1.56 9.24a.5.5 0 01.24-.7L3 8.02V4.5c0-.28.22-.5.5-.5H6V2.5zM4 7.59l3-1.3a2.5 2.5 0 012 0l3 1.3V5H4v2.59zM9 3H7v1h2V3z" fill={primaryFill} /><path d="M3.6 11.7a1.1 1.1 0 00-.1.18 1.85 1.85 0 01-.36.52c-.28.28-.78.6-1.64.6a.5.5 0 000 1 3.2 3.2 0 002.48-1.03l.07.1c.38.45 1 .93 1.95.93a2.48 2.48 0 002-1l.05.07c.38.45 1 .93 1.95.93a2.48 2.48 0 002.02-1.03l.13.13c.46.47 1.2.9 2.35.9a.5.5 0 100-1c-.86 0-1.36-.32-1.65-.6a1.75 1.75 0 01-.38-.56.5.5 0 00-.95 0 2.2 2.2 0 01-.35.59c-.24.3-.61.57-1.17.57-.56 0-.93-.27-1.18-.57a2.2 2.2 0 01-.34-.59.5.5 0 00-.66-.31.5.5 0 00-.3.31l-.07.17a2.2 2.2 0 01-.27.42c-.25.3-.62.57-1.18.57-.56 0-.93-.27-1.18-.57a2.2 2.2 0 01-.32-.53l-.07-.15a.5.5 0 00-.27-.22.5.5 0 00-.56.17z" fill={primaryFill} /></svg>;
}

const VehicleShip16Regular = wrapIcon(rawSvg({}), 'VehicleShip16Regular');
export default VehicleShip16Regular;
      