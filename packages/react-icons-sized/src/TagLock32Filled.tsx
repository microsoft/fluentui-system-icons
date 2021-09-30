import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.95 4.08A4 4 0 0118.68 3h6.82A3.5 3.5 0 0129 6.5v6.76a4 4 0 01-1.17 2.83l-.47.46a5 5 0 00-9.28 1.56A4 4 0 0015 22v6c0 .21.02.42.05.63a4.25 4.25 0 01-5.06-.72l-6.32-6.33a4.25 4.25 0 01.1-6.1l12.18-11.4zM22.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-3 7.5H19a2.5 2.5 0 00-2.5 2.5v6a2.5 2.5 0 002.5 2.5h8a2.5 2.5 0 002.5-2.5v-6a2.5 2.5 0 00-2.5-2.5h-.5V19a3.5 3.5 0 10-7 0v.5zm2-.5a1.5 1.5 0 013 0v.5h-3V19zm3.5 6a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /></svg>;
}

const TagLock32Filled = wrapIcon(rawSvg({}), 'TagLock32Filled');
export default TagLock32Filled;
      