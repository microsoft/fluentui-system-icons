import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 4.36v12.46l-4.32 3.04a.75.75 0 01-1.17-.5L3 19.24V8.62c0-.21.09-.41.24-.55L3.32 8 8.5 4.36zm12.5.29v10.73c0 .21-.09.41-.24.55l-.08.07-5.18 3.64V7.17l4.32-3.03a.75.75 0 011.17.5zm-11-.3l4 2.82v12.47l-4-2.82V4.36z" fill={primaryFill} /></svg>;
}

const Map24Filled = wrapIcon(rawSvg({}), 'Map24Filled');
export default Map24Filled;
      