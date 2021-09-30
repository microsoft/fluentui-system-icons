import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 9.6V3.76c0-.64.76-.97 1.23-.58l.08.07 4.7 5.1c.27.3.27.74.01 1.02l-.07.07L12.87 12l3.08 2.56c.3.26.35.7.13 1l-.06.09-4.71 5.1a.75.75 0 01-1.3-.4v-5.97l-1.13.94a.75.75 0 01-1.04-1.08l.08-.07L10 12.43v-.87L7.92 9.83A.75.75 0 018.8 8.6l.1.06 1.11.94V3.75v5.86zm1.7 3.37l-.2.16v5.2l2.88-3.12-2.68-2.24zM17 11a1 1 0 110 2 1 1 0 010-2zM6 11a1 1 0 110 2 1 1 0 010-2zm5.5-5.33v5.19l.2.16 2.68-2.23-2.88-3.12z" fill={primaryFill} /></svg>;
}

const BluetoothConnected24Regular = wrapIcon(rawSvg({}), 'BluetoothConnected24Regular');
export default BluetoothConnected24Regular;
      