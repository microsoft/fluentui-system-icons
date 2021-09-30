import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.32 5.54A2 2 0 0118.68 5h6.82c.83 0 1.5.67 1.5 1.5v6.76a2 2 0 01-.59 1.41l-.36.37c.53.4.98.92 1.31 1.51l.47-.46A4 4 0 0029 13.26V6.5A3.5 3.5 0 0025.5 3h-6.82a4 4 0 00-2.73 1.08L3.77 15.48a4.25 4.25 0 00-.1 6.1l6.32 6.33a4.25 4.25 0 005.06.72c-.03-.2-.05-.42-.05-.63v-1.91l-.4.4c-.89.88-2.31.88-3.2 0l-6.32-6.32c-.9-.9-.87-2.37.06-3.24l12.18-11.4zM22.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-3 7.5H19a2.5 2.5 0 00-2.5 2.5v6a2.5 2.5 0 002.5 2.5h8a2.5 2.5 0 002.5-2.5v-6a2.5 2.5 0 00-2.5-2.5h-.5V19a3.5 3.5 0 10-7 0v.5zm2-.5a1.5 1.5 0 113 0v.5h-3V19zm3.5 6a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /></svg>;
}

const TagLock32Regular = wrapIcon(rawSvg({}), 'TagLock32Regular');
export default TagLock32Regular;
      