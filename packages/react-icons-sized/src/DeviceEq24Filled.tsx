import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3a1 1 0 011 .88V20a1 1 0 01-2 .12V4a1 1 0 011-1zM8 6a1 1 0 011 .88V17a1 1 0 01-2 .12V7a1 1 0 011-1zm8 0a1 1 0 011 .88V17a1 1 0 01-2 .12V7a1 1 0 011-1zM4 9a1 1 0 011 .88V14a1 1 0 01-2 .12V10a1 1 0 011-1zm16 0a1 1 0 011 .88V14a1 1 0 01-2 .12V10a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const DeviceEq24Filled = wrapIcon(rawSvg({}), 'DeviceEq24Filled');
export default DeviceEq24Filled;
      