import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 25a3 3 0 00.17 1H13c-5.79 0-10-2.57-10-6.29V19a3 3 0 013-3h7.76c-.37.41-.62.93-.72 1.5H6c-.78 0-1.42.6-1.5 1.36v.85c0 2.68 3.39 4.79 8.5 4.79v.5z" fill={primaryFill} /><path d="M13 2a6 6 0 110 12 6 6 0 010-12zm0 1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" fill={primaryFill} /><path d="M14 18.5a2.5 2.5 0 012.5-2.5h8a2.5 2.5 0 012.5 2.5v.2l-6.5 3.24L14 18.7v-.19z" fill={primaryFill} /><path d="M20.72 22.95L27 19.8v4.69a2.5 2.5 0 01-2.5 2.5h-8a2.5 2.5 0 01-2.5-2.5v-4.7l6.28 3.15c.14.07.3.07.44 0z" fill={primaryFill} /></svg>;
}

const PersonMail28Regular = wrapIcon(rawSvg({}), 'PersonMail28Regular');
export default PersonMail28Regular;
      