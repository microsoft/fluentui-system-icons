import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 8V2H6a2 2 0 00-2 2v7.5a6.48 6.48 0 015 0h6.75a.75.75 0 010 1.5h-4.56c.36.38.68.8.94 1.25h3.62a.75.75 0 010 1.5h-2.99c.11.4.19.82.22 1.25h2.77a.75.75 0 010 1.5h-2.83A6.48 6.48 0 0111.2 22H18a2 2 0 002-2V10h-6a2 2 0 01-2-2zm1.5 0V2.5l6 6H14a.5.5 0 01-.5-.5zM12 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5.5 0h2a.5.5 0 110 1H6a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v2.5z" fill={primaryFill} /></svg>;
}

const DocumentTextClock24Filled = wrapIcon(rawSvg({}), 'DocumentTextClock24Filled');
export default DocumentTextClock24Filled;
      