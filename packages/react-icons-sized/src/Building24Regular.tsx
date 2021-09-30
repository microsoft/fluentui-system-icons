import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 5.5a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M7.5 13.5a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /><path d="M8.5 9a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M11 6.5a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /><path d="M12 12.5a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M14.5 13.5a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /><path d="M12 9a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M6.25 2C5.01 2 4 3 4 4.25v16.5c0 .41.34.75.75.75h14.5c.42 0 .75-.34.75-.75v-9c0-1.24-1-2.25-2.25-2.25H16.5V4.25c0-1.24-1-2.25-2.25-2.25h-8zM5.5 4.25c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v6c0 .41.34.75.75.75h2c.42 0 .75.34.75.75V20h-2v-2.75a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75V20h-2V4.25zM15 18v2h-2.25v-2H15zm-3.75 0v2H9v-2h2.25z" fill={primaryFill} /></svg>;
}

const Building24Regular = wrapIcon(rawSvg({}), 'Building24Regular');
export default Building24Regular;
      