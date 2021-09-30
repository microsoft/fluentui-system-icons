import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 8c.82 0 1.5.67 1.5 1.5v.75C10.1 12.08 8.67 13 6.05 13 3.45 13 2 12.1 2 10.27V9.5C2 8.67 2.67 8 3.5 8h5z" fill={primaryFill} /><path d="M11.71 12.41l-.51-.17-.08-.02a.76.76 0 00-.8.33l-.47.69-.05.07a.88.88 0 00.15 1.03l.3.31.09.08c.3.25.7.34 1.07.22.96-.3 1.85-1.2 2.65-2.67.81-1.48 1.1-2.74.86-3.78-.1-.43-.41-.78-.81-.9l-.41-.14-.08-.02a.78.78 0 00-.88.49l-.32.76-.03.09c-.1.31-.01.66.22.89l.72.68-.02.17a3.28 3.28 0 01-1.25 2.01l-.35-.12z" fill={primaryFill} /><path d="M10.5 10.44c0 .3-.04.6-.11.86.3-.1.61-.13.94-.06h.02l.14.05.32.1a2.48 2.48 0 00.42-.71l-.3-.29c-.53-.5-.7-1.24-.5-1.9l.01-.03.05-.13.14-.33H9.82a2 2 0 01.68 1.5v.94z" fill={primaryFill} /><path d="M6 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /><path d="M11 3a2 2 0 110 4 2 2 0 010-4z" fill={primaryFill} /></svg>;
}

const PeopleCall16Filled = wrapIcon(rawSvg({}), 'PeopleCall16Filled');
export default PeopleCall16Filled;
      