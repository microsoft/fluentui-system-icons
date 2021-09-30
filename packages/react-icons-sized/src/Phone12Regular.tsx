import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 8a.5.5 0 000 1h1a.5.5 0 000-1h-1zm-1-7C3.67 1 3 1.67 3 2.5v7c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-7C9 1.67 8.33 1 7.5 1h-3zM4 2.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v7a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-7z" fill={primaryFill} /></svg>;
}

const Phone12Regular = wrapIcon(rawSvg({}), 'Phone12Regular');
export default Phone12Regular;
      