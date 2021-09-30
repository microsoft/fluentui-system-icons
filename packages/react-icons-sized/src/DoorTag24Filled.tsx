import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6.5c-.49 0-.92.23-1.2.6a2.25 2.25 0 01-3.6-2.7A6 6 0 0118 8v12a2 2 0 01-2 2H8a2 2 0 01-2-2v-8.5c0-1.1.9-2 2-2h4a1.5 1.5 0 000-3zm-2.25 11a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" fill={primaryFill} /></svg>;
}

const DoorTag24Filled = wrapIcon(rawSvg({}), 'DoorTag24Filled');
export default DoorTag24Filled;
      