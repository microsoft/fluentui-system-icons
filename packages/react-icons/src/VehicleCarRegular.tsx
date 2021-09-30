import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.86 3c1.2 0 2.22.84 2.45 2.01l.2.99h.74c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01h-.44l.11.56A1.5 1.5 0 0118 9.5v5c0 .83-.67 1.5-1.5 1.5H16v1a1 1 0 11-2 0v-1H6v1a1 1 0 11-2 0v-1h-.5A1.5 1.5 0 012 14.5v-5c0-.68.46-1.26 1.08-1.44l.11-.56h-.44a.75.75 0 010-1.5h.74l.2-.99A2.5 2.5 0 016.14 3h7.72zm2.64 6h-13a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h13a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5zM6 11a1 1 0 110 2 1 1 0 010-2zm8 0a1 1 0 110 2 1 1 0 010-2zm-.14-7H6.14c-.72 0-1.33.5-1.47 1.2L4.1 8h11.78l-.56-2.8A1.5 1.5 0 0013.86 4z" fill={primaryFill} /></svg>;
}

const VehicleCarRegular = wrapIcon(rawSvg({}), 'VehicleCarRegular');
export default VehicleCarRegular;
      