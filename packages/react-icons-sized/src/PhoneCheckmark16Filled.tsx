import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 11a5.5 5.5 0 001.5-.2v2.45c0 .97-.78 1.75-1.75 1.75h-4.5C4.78 15 4 14.22 4 13.25V2.75C4 1.78 4.78 1 5.75 1h1.59a5.5 5.5 0 003.16 10zM7 12a.5.5 0 000 1h2a.5.5 0 000-1H7zm8-6.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0L9.5 6.29l-.65-.64a.5.5 0 10-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const PhoneCheckmark16Filled = wrapIcon(rawSvg({}), 'PhoneCheckmark16Filled');
export default PhoneCheckmark16Filled;
      