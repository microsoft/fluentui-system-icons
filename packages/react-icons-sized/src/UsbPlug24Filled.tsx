import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 21.25a.75.75 0 01-1.5.1V17h-.75c-1.19 0-2.16-.93-2.24-2.1V9.25c0-.98.63-1.82 1.5-2.13V2.75c0-.38.29-.7.65-.75h6.6c.39 0 .7.28.75.65V7.13c.82.3 1.42 1.05 1.49 1.95v5.67c0 1.2-.92 2.17-2.1 2.24l-.15.01h-.75v4.25a.75.75 0 01-1.5.1V17h-2v4.25zM14.52 3.5h-5V7h5V3.5z" fill={primaryFill} /></svg>;
}

const UsbPlug24Filled = wrapIcon(rawSvg({}), 'UsbPlug24Filled');
export default UsbPlug24Filled;
      