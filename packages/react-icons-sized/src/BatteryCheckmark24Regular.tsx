import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 6a3 3 0 013 3v1h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v1a3 3 0 01-3 3h-4.17c.11-.48.17-.98.17-1.5h4c.78 0 1.42-.6 1.5-1.36V9c0-.78-.6-1.42-1.36-1.5H5c-.78 0-1.42.6-1.5 1.36v1.87c-.55.29-1.06.65-1.5 1.08V9a3 3 0 013-3h12zm-5 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-2.15-2.35a.5.5 0 00-.7 0L5.5 17.79l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const BatteryCheckmark24Regular = wrapIcon(rawSvg({}), 'BatteryCheckmark24Regular');
export default BatteryCheckmark24Regular;
      