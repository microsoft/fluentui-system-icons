import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.75 1a.75.75 0 00-.75.75V3h-.86a2.5 2.5 0 00-2.45 2.01l-.2.99h-.74a.75.75 0 000 1.5h.44l-.11.56A1.5 1.5 0 002 9.5v4c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-4a1.5 1.5 0 00-1.08-1.44l-.11-.56h.54a.75.75 0 00.65-.75v-.1a.75.75 0 00-.75-.65h-.74l-.2-.99A2.5 2.5 0 0013.86 3H13V1.75a.75.75 0 00-.75-.75h-4.5zM6.14 4h7.72c.72 0 1.33.5 1.47 1.2L15.9 8H4.11l.56-2.8C4.8 4.5 5.42 4 6.14 4zM5 11.5a1 1 0 112 0 1 1 0 01-2 0zm8 0a1 1 0 112 0 1 1 0 01-2 0zM6 17v-1H4v1a1 1 0 102 0zm10-1v1a1 1 0 11-2 0v-1h2z" fill={primaryFill} /></svg>;
}

const VehicleCabFilled = wrapIcon(rawSvg({}), 'VehicleCabFilled');
export default VehicleCabFilled;
      