import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 5.75C6 4.78 6.78 4 7.75 4h4.75a4.76 4.76 0 013.95 7.38A4.84 4.84 0 0118 15c0 3.13-2.68 5-5 5H7.75C6.78 20 6 19.22 6 18.25V5.75zm3.5 7.75v3H13c.31 0 .71-.14 1.02-.42.3-.26.48-.62.48-1.08 0-.89-.75-1.5-1.5-1.5H9.5zm0-3.5h3c.71 0 1.25-.6 1.25-1.25 0-.66-.54-1.25-1.25-1.25h-3V10z" fill={primaryFill} /></svg>;
}

const TextBold24Filled = wrapIcon(rawSvg({}), 'TextBold24Filled');
export default TextBold24Filled;
      