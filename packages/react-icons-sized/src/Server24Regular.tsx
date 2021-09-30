import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.25 6a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zM8.5 17.75c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zM9.25 14a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zM6 5a3 3 0 013-3h6a3 3 0 013 3v14a3 3 0 01-3 3H9a3 3 0 01-3-3V5zm3-1.5c-.83 0-1.5.67-1.5 1.5v14c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5V5c0-.83-.67-1.5-1.5-1.5H9z" fill={primaryFill} /></svg>;
}

const Server24Regular = wrapIcon(rawSvg({}), 'Server24Regular');
export default Server24Regular;
      