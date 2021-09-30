import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 16.5c2.2 0 4-2.46 4-5.5s-1.8-5.5-4-5.5-4 2.46-4 5.5 1.8 5.5 4 5.5zm1.62-2.5c-.52.72-1.11 1-1.62 1-.5 0-1.1-.28-1.62-1a4.79 4.79 0 01-.8-2h4.84c-.14.8-.43 1.5-.8 2zm0-6c.44.6.78 1.48.86 2.5h-4.96c.08-1.02.42-1.9.86-2.5.52-.72 1.11-1 1.62-1 .5 0 1.1.28 1.62 1z" fill={primaryFill} /><path d="M6.5 2A2.5 2.5 0 004 4.5v15A2.5 2.5 0 006.5 22h13.25a.75.75 0 000-1.5H6.5a1 1 0 01-1-1h14.25c.41 0 .75-.34.75-.75V4.5A2.5 2.5 0 0018 2H6.5zM19 18H5.5V4.5a1 1 0 011-1H18a1 1 0 011 1V18z" fill={primaryFill} /></svg>;
}

const BookTheta24Regular = wrapIcon(rawSvg({}), 'BookTheta24Regular');
export default BookTheta24Regular;
      