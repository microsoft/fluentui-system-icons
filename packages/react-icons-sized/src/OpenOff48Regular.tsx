import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M39.2 40.96A6.22 6.22 0 0135.75 42h-23.5A6.25 6.25 0 016 35.75v-23.5c0-1.27.38-2.46 1.04-3.45L4.37 6.13a1.25 1.25 0 111.76-1.76l37.5 37.5a1.25 1.25 0 01-1.76 1.76l-2.67-2.67zm-1.83-1.83l-28.5-28.5a3.74 3.74 0 00-.37 1.62v23.5a3.75 3.75 0 003.75 3.75h23.5c.58 0 1.13-.13 1.62-.37zm4.57-2.5L39.5 34.2v-6.95a1.25 1.25 0 012.5 0v8.5c0 .3-.02.6-.06.88zM11.37 6.06L13.8 8.5h6.95a1.25 1.25 0 000-2.5h-8.5c-.3 0-.6.02-.88.06zM27 7.25c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v12.5a1.25 1.25 0 11-2.5 0v-9.48L29.13 20.63a1.25 1.25 0 01-1.76-1.76L37.73 8.5h-9.48c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
}

const OpenOff48Regular = wrapIcon(rawSvg({}), 'OpenOff48Regular');
export default OpenOff48Regular;
      