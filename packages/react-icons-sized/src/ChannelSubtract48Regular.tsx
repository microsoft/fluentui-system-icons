import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.19 10.72A6.25 6.25 0 0112.25 6h23.5C39.2 6 42 8.8 42 12.25v11.8c-.78-.5-1.62-.92-2.5-1.25V12.25a3.75 3.75 0 00-3.75-3.75h-23.5c-1.53 0-2.84.91-3.43 2.22a4 4 0 00-2.63 0zM22.8 39.5c.33.88.74 1.72 1.24 2.5H12.25A6.25 6.25 0 016 35.75V18.21a3.99 3.99 0 002.5.16v17.38a3.75 3.75 0 003.75 3.75H22.8zm.94-11c.52-.9 1.16-1.75 1.88-2.5h-8.37a1.25 1.25 0 100 2.5h6.49zM6 12.5a2.5 2.5 0 103 4 2.5 2.5 0 00-3-4zM17.25 19a1.25 1.25 0 100 2.5h13.5a1.25 1.25 0 100-2.5h-13.5zM46 35a11 11 0 11-22 0 11 11 0 0122 0zm-3 0a1 1 0 00-1-1H28a1 1 0 100 2h14a1 1 0 001-1z" fill={primaryFill} /></svg>;
}

const ChannelSubtract48Regular = wrapIcon(rawSvg({}), 'ChannelSubtract48Regular');
export default ChannelSubtract48Regular;
      