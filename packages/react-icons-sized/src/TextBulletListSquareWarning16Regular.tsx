import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4c0-1.1.9-2 2-2h8a2 2 0 012 2v6.13l-1-1.7V4a1 1 0 00-1-1H4a1 1 0 00-1 1v8a1 1 0 001 1h2.3l-.03.07c-.17.28-.26.6-.27.93H4a2 2 0 01-2-2V4z" fill={primaryFill} /><path d="M7.2 11.5l.58-1H7a.5.5 0 000 1h.2z" fill={primaryFill} /><path d="M8.96 8.5l.31-.52c.1-.19.24-.35.4-.48H7a.5.5 0 000 1h1.96z" fill={primaryFill} /><path d="M5.5 5A.75.75 0 114 5a.75.75 0 011.5 0z" fill={primaryFill} /><path d="M4.75 8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M5.5 11A.75.75 0 114 11a.75.75 0 011.5 0z" fill={primaryFill} /><path d="M7 4.5a.5.5 0 000 1h4.48a.5.5 0 100-1H7z" fill={primaryFill} /><path d="M10.73 8.03c.26-.06.53-.03.77.1.16.09.28.2.37.36l3 5.09c.14.22.16.48.1.71a.96.96 0 01-.47.58c-.15.09-.32.13-.5.13H8c-.28 0-.53-.11-.71-.28a.93.93 0 01-.16-1.14l3-5.1a.99.99 0 01.6-.45zm.77 1.47a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zm-.5 5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const TextBulletListSquareWarning16Regular = wrapIcon(rawSvg({}), 'TextBulletListSquareWarning16Regular');
export default TextBulletListSquareWarning16Regular;
      