import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06L10 11.06v1.24L8.1 13.9a1 1 0 101.28 1.53l.64-.54V20a1 1 0 001.73.68l3.78-4.1 5.2 5.2a.75.75 0 001.06-1.06L3.28 2.22zm8.73 10.85l2.1 2.1-2.1 2.27v-4.37z" fill={primaryFill} /><path d="M16.22 9.72l-1.81 1.5-1.42-1.41 1.14-.95L12 6.56v2.26l-2-2V4a1 1 0 011.73-.68l4.57 4.95a1 1 0 01-.1 1.45z" fill={primaryFill} /></svg>;
}

const BluetoothDisabled24Filled = wrapIcon(rawSvg({}), 'BluetoothDisabled24Filled');
export default BluetoothDisabled24Filled;
      