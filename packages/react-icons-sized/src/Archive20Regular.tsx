import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 2c.83 0 1.5.67 1.5 1.5v2c0 .65-.42 1.2-1 1.41v7.59a3.5 3.5 0 01-3.5 3.5h-7A3.5 3.5 0 013 14.5V6.91c-.58-.2-1-.76-1-1.41v-2C2 2.67 2.67 2 3.5 2h13zM16 7H4v7.5A2.5 2.5 0 006.5 17h7a2.5 2.5 0 002.5-2.5V7zM8.5 9h3a.5.5 0 01.09 1H8.5a.5.5 0 01-.09-1h3.09-3zm8-6h-13a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h13a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const Archive20Regular = wrapIcon(rawSvg({}), 'Archive20Regular');
export default Archive20Regular;
      