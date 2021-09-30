import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 6v13.75c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V6h12zm-2.25-4C16.99 2 18 3 18 4.25V5H6v-.75C6 3.01 7 2 8.25 2h7.5z" fill={primaryFill} /></svg>;
}

const PhonePageHeader24Filled = wrapIcon(rawSvg({}), 'PhonePageHeader24Filled');
export default PhonePageHeader24Filled;
      