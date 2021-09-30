import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3.5C4 2.67 4.67 2 5.5 2h7c.83 0 1.5.67 1.5 1.5v5.52A5.5 5.5 0 009.02 14H7.5a.5.5 0 000 1h1.52c.1 1.13.55 2.17 1.24 3H5.5A1.5 1.5 0 014 16.5v-13zM14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2.35-5.65l-3 3a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 2.65-2.64a.5.5 0 01.7.7z" fill={primaryFill} /></svg>;
}

const PhoneCheckmark20Filled = wrapIcon(rawSvg({}), 'PhoneCheckmark20Filled');
export default PhoneCheckmark20Filled;
      