import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.24 13c.71 0 1.03.89.47 1.33L16 18.11v1.64C16 21 14.99 22 13.75 22h-3.5C9.01 22 8 21 8 19.75v-1.64l-4.72-3.78A.75.75 0 013.75 13h16.5zm-2.13 1.5H5.89l3.33 2.66c.18.15.28.36.28.59v2c0 .42.34.75.75.75h3.5c.4 0 .75-.33.75-.75v-2c0-.23.1-.44.28-.59l3.33-2.66zM8.75 9h6.5c.91 0 1.67.7 1.74 1.6V12h-1.5v-1.25a.25.25 0 00-.19-.24l-.06-.01H8.75a.25.25 0 00-.24.2l-.01.05V12H7v-1.25c0-.92.7-1.67 1.6-1.74L8.76 9h6.5-6.5zM12 2a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
}

const Presenter24Regular = wrapIcon(rawSvg({}), 'Presenter24Regular');
export default Presenter24Regular;
      