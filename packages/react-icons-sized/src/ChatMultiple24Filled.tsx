import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 3a7.5 7.5 0 00-6.8 10.67 68.1 68.1 0 00-.68 3.15 1 1 0 001.15 1.17c.63-.11 1.98-.36 3.24-.65A7.5 7.5 0 109.5 3zm-.04 16a7.47 7.47 0 008.19 1.34c1.04.24 2.19.48 2.91.64.9.18 1.67-.62 1.47-1.5-.16-.7-.42-1.8-.67-2.8a7.5 7.5 0 00-4.34-10.26c.35.63.62 1.31.8 2.04a6 6 0 012.08 7.79l-.13.25.07.28c.23.9.46 1.9.64 2.65l-2.74-.61-.26-.07-.25.13a5.97 5.97 0 01-5.59-.14 8.52 8.52 0 01-2.18.26z" fill={primaryFill} /></svg>;
}

const ChatMultiple24Filled = wrapIcon(rawSvg({}), 'ChatMultiple24Filled');
export default ChatMultiple24Filled;
      