import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06L10 11.06v1.37l-2.08 1.74a.75.75 0 00.96 1.15l1.12-.94v5.87a.75.75 0 001.3.5l4.03-4.36 5.39 5.39a.75.75 0 001.06-1.06L3.28 2.22zm8.22 10.34l2.77 2.77-2.77 3V12.56z" fill={primaryFill} /><path d="M15.95 9.43l-1.82 1.52-1.07-1.07 1.32-1.1-2.88-3.1v2.64L10 6.82V3.75a.75.75 0 011.3-.5l4.72 5.1c.29.31.26.8-.07 1.08z" fill={primaryFill} /></svg>;
}

const BluetoothDisabled24Regular = wrapIcon(rawSvg({}), 'BluetoothDisabled24Regular');
export default BluetoothDisabled24Regular;
      