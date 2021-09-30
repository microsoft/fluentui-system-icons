import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 11a7.5 7.5 0 017.5-7.5h.1a.75.75 0 000-1.5h-.1a9 9 0 00-9 9v1.25c0 .69-.56 1.25-1.25 1.25h-3.5a.75.75 0 000 1.5h3.5A2.75 2.75 0 009 12.25V11zm7.75-4a4.25 4.25 0 00-4.25 4.25v1.5a5.75 5.75 0 01-5.75 5.75h-4a.75.75 0 010-1.5h4C9.1 17 11 15.1 11 12.75v-1.5a5.75 5.75 0 015.75-5.75h4.5a.75.75 0 010 1.5h-4.5zm.5 3.5c-.69 0-1.25.56-1.25 1.25V13a9 9 0 01-9 9h-.25a.75.75 0 010-1.5H7a7.5 7.5 0 007.5-7.5v-1.25A2.75 2.75 0 0117.25 9h4a.75.75 0 010 1.5h-4z" fill={primaryFill} /></svg>;
}

const Stream24Regular = wrapIcon(rawSvg({}), 'Stream24Regular');
export default Stream24Regular;
      