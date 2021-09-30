import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10.13l9.65 5.03c.22.12.48.12.7 0L22 10.13v7.62a3.25 3.25 0 01-3.07 3.24l-.18.01H5.25a3.25 3.25 0 01-3.24-3.07L2 17.75v-7.62zm1.1-1.96l8.52-5.06c.2-.13.44-.14.66-.06l.1.06 8.52 5.06c.24.14.44.32.6.52L12 13.65 2.5 8.7c.12-.15.27-.29.43-.4l.17-.12 8.52-5.06L3.1 8.17z" fill={primaryFill} /></svg>;
}

const MailRead24Filled = wrapIcon(rawSvg({}), 'MailRead24Filled');
export default MailRead24Filled;
      