import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 20.25V13.5H6.93A6.14 6.14 0 012.87 16a.75.75 0 11-.24-1.5c.91-.13 1.66-.5 2.26-1H1.75a.75.75 0 010-1.5h20.5a.75.75 0 010 1.5h-.75v6.75a.75.75 0 01-1.5 0V13.5h-5.3l-.1.9 3.57-.4a.75.75 0 11.16 1.5l-4.5.5a.75.75 0 01-.83-.83l.19-1.67H11v6.75a.75.75 0 01-1.5 0zm12-9.25V4.75a.75.75 0 00-1.5 0V11h1.5zm-6.52 0l.52-4.67a.75.75 0 10-1.5-.16L13.47 11h1.5zM11 11V4.75a.75.75 0 00-1.5 0V11H11zm-2.84 0c.23-.8.34-1.57.34-2.25A.75.75 0 007.75 8h-5a.75.75 0 100 1.5h4.2a7.1 7.1 0 01-.37 1.5h1.58z" fill={primaryFill} /></svg>;
}

const StrikethroughGaNa24Regular = wrapIcon(rawSvg({}), 'StrikethroughGaNa24Regular');
export default StrikethroughGaNa24Regular;
      