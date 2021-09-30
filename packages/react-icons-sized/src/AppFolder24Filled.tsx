import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 3A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h12.5zm0 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25zm-8.5 8c.97 0 1.75.78 1.75 1.75v2c0 .97-.78 1.75-1.75 1.75h-2C6.8 18 6 17.22 6 16.25v-2c0-.97.79-1.75 1.75-1.75h2zm6.5 0c.97 0 1.75.78 1.75 1.75v2c0 .97-.78 1.75-1.75 1.75h-2c-.97 0-1.75-.78-1.75-1.75v-2c0-.97.78-1.75 1.75-1.75h2zM9.75 6c.97 0 1.75.78 1.75 1.75v2c0 .97-.78 1.75-1.75 1.75h-2C6.78 11.5 6 10.72 6 9.75v-2C6 6.78 6.78 6 7.75 6h2zm6.5 0C17.2 6 18 6.78 18 7.75v2c0 .97-.79 1.75-1.75 1.75h-2c-.97 0-1.75-.78-1.75-1.75v-2c0-.97.78-1.75 1.75-1.75h2z" fill={primaryFill} /></svg>;
}

const AppFolder24Filled = wrapIcon(rawSvg({}), 'AppFolder24Filled');
export default AppFolder24Filled;
      