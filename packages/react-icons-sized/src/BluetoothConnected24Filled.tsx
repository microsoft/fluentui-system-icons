import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 9.1V4a1 1 0 011.66-.76l.08.08 4.57 4.95a1 1 0 010 1.37l-.1.08L13.49 12l2.74 2.28a1 1 0 01.17 1.35l-.08.1-4.57 4.95a1 1 0 01-1.73-.57V14.9l-.64.53a1 1 0 01-1.38-1.45l.1-.09L10 12.3v-.59l-1.93-1.6a1 1 0 011.18-1.61l.1.07.65.54V4v5.1zm2 4.27v4.07l2.13-2.3L12 13.37zM17 11a1 1 0 110 2 1 1 0 010-2zM6 11a1 1 0 110 2 1 1 0 010-2zm6-4.44v4.07l2.13-1.77L12 6.56z" fill={primaryFill} /></svg>;
}

const BluetoothConnected24Filled = wrapIcon(rawSvg({}), 'BluetoothConnected24Filled');
export default BluetoothConnected24Filled;
      