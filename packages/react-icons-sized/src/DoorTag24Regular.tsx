import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 17.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" fill={primaryFill} /><path d="M10.8 7.1A1.5 1.5 0 1112 9.5H8a2 2 0 00-2 2V20c0 1.1.9 2 2 2h8a2 2 0 002-2V8A6 6 0 007.2 4.4a2.25 2.25 0 103.6 2.7zM12 5a3 3 0 00-2.4 1.2.75.75 0 01-1.2-.9A4.5 4.5 0 0116.5 8v12a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5v-8.5c0-.28.22-.5.5-.5h4a3 3 0 100-6z" fill={primaryFill} /></svg>;
}

const DoorTag24Regular = wrapIcon(rawSvg({}), 'DoorTag24Regular');
export default DoorTag24Regular;
      