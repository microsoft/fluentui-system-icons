import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 2h5c.28 0 .5.22.5.5V6a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V8c0-1.1.9-2 2-2V2.5c0-.28.22-.5.5-.5zM12 6V3H8v3h4zM7 7a1 1 0 00-1 1v8a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 00-1-1H7z" fill={primaryFill} /></svg>;
}

const UsbStick20Regular = wrapIcon(rawSvg({}), 'UsbStick20Regular');
export default UsbStick20Regular;
      