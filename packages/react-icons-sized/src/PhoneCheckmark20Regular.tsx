import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h4.76a5.5 5.5 0 01-.66-1H5.5a.5.5 0 01-.5-.5v-13c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v5.7c.32-.08.66-.15 1-.18V3.5c0-.83-.67-1.5-1.5-1.5h-7zM9 14.5c0-.17 0-.34.02-.5H7.5a.5.5 0 000 1h1.52a5.57 5.57 0 01-.02-.5zm5.5 4.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2.35-5.65l-3 3a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 2.65-2.64a.5.5 0 01.7.7z" fill={primaryFill} /></svg>;
}

const PhoneCheckmark20Regular = wrapIcon(rawSvg({}), 'PhoneCheckmark20Regular');
export default PhoneCheckmark20Regular;
      