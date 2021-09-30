import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 16v1a1 1 0 11-2 0v-1h2zm10 0v1a1 1 0 11-2 0v-1h2zM13.86 3c1.2 0 2.22.84 2.45 2.01l.2.99h.74c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01h-.44l.11.56A1.5 1.5 0 0118 9.5v4c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 012 13.5v-4c0-.68.46-1.26 1.08-1.44l.11-.56h-.44a.75.75 0 010-1.5h.74l.2-.99A2.5 2.5 0 016.14 3h7.72zM6 10.5a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2zM13.86 4H6.14c-.72 0-1.33.5-1.47 1.2L4.1 8h11.78l-.56-2.8A1.5 1.5 0 0013.86 4z" fill={primaryFill} /></svg>;
}

const VehicleCar20Filled = wrapIcon(rawSvg({}), 'VehicleCar20Filled');
export default VehicleCar20Filled;
      