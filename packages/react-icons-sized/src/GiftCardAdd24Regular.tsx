import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5a3 3 0 013-3h14a3 3 0 013 3v7.81a6.52 6.52 0 00-1.5-1.08V9.5h-9.94l1.72 1.72a.75.75 0 11-1.06 1.06L9.5 10.56v4.94h1.81c-.15.48-.25.98-.3 1.5H5a3 3 0 01-3-3V5zm3-1.5c-.83 0-1.5.67-1.5 1.5v3h1.2A2.5 2.5 0 017 4.5c.36 0 .7.07 1 .2V3.5H5zm4.5 0v1.2A2.5 2.5 0 0113 7c0 .36-.07.7-.2 1h7.7V5c0-.83-.67-1.5-1.5-1.5H9.5zM8 15.5v-4.94l-1.72 1.72a.75.75 0 01-1.06-1.06L6.94 9.5H3.5V14c0 .83.67 1.5 1.5 1.5h3zM10.5 8a1 1 0 10-1-1v1h1zM8 7a1 1 0 10-1 1h1V7zm15 10.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H18z" fill={primaryFill} /></svg>;
}

const GiftCardAdd24Regular = wrapIcon(rawSvg({}), 'GiftCardAdd24Regular');
export default GiftCardAdd24Regular;
      