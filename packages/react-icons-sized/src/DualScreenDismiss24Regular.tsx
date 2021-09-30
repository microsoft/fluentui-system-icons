import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6.5c0 .34.03.68.08 1H3.75a.25.25 0 00-.25.25v12.5c0 .13.11.25.25.25h7.5V10.33c.41.57.92 1.07 1.5 1.48v8.69h7.5c.13 0 .25-.11.25-.25v-8.62A6.53 6.53 0 0022 9.97v10.28c0 .97-.79 1.75-1.75 1.75H3.75C2.78 22 2 21.2 2 20.25V7.75C2 6.78 2.78 6 3.75 6h6.27l-.02.5zm6.24 11a.75.75 0 01.1 1.5h-1.6a.75.75 0 01-.1-1.5h1.6zm-7 0a.75.75 0 01.1 1.5h-1.6a.75.75 0 01-.1-1.5h1.6zM16.5 1a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-1.84 2.97a.5.5 0 00-.57 0l-.07.05-.05.07a.5.5 0 000 .57l.05.07L15.8 6.5l-1.76 1.77-.06.07a.5.5 0 000 .57l.06.06.07.06c.17.12.4.12.56 0l.07-.06 1.77-1.76 1.77 1.77.07.05c.17.12.4.12.57 0l.07-.05.05-.07a.5.5 0 000-.57l-.05-.07L17.2 6.5l1.77-1.77.06-.07a.5.5 0 000-.57l-.06-.07-.07-.05a.5.5 0 00-.57 0l-.07.05L16.5 5.8l-1.77-1.77-.07-.05z" fill={primaryFill} /></svg>;
}

const DualScreenDismiss24Regular = wrapIcon(rawSvg({}), 'DualScreenDismiss24Regular');
export default DualScreenDismiss24Regular;
      