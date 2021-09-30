import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.25 3A3.75 3.75 0 0120 6.75v9a3.75 3.75 0 01-2.89 3.65l2.46 1.17a.75.75 0 01-.55 1.4l-.1-.04-5.09-2.43h-3.66l-5.1 2.43a.75.75 0 11-.64-1.36l2.46-1.17A3.75 3.75 0 014 15.75v-9A3.75 3.75 0 017.75 3h8.5zm2.25 11h-13v1.75c0 1.24 1 2.25 2.25 2.25h8.5c1.24 0 2.25-1 2.25-2.25V14zM8 15a1 1 0 110 2 1 1 0 010-2zm8 0a1 1 0 110 2 1 1 0 010-2zm.25-10.5h-8.5c-1.24 0-2.25 1-2.25 2.25v5.75h13V6.75c0-1.24-1-2.25-2.25-2.25zm-3 1.5a.75.75 0 010 1.5h-2.5a.75.75 0 010-1.5h2.5z" fill={primaryFill} /></svg>;
}

const VehicleSubway24Regular = wrapIcon(rawSvg({}), 'VehicleSubway24Regular');
export default VehicleSubway24Regular;
      