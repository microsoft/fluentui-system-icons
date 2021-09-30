import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.12 20.37l9.19-9.2a1.25 1.25 0 011.86 1.67l-.1.1L18.03 20H25c3.25 0 6.28.72 8.9 2.1l.41.22a16.51 16.51 0 016.37 6.36A18.92 18.92 0 0143 38a1.25 1.25 0 01-2.5 0c0-3-.7-5.76-2-8.1a14.01 14.01 0 00-5.4-5.4 16.28 16.28 0 00-7.6-2h-7.48l7.06 7.06c.45.46.48 1.18.09 1.67l-.1.1c-.45.45-1.17.48-1.66.09l-.1-.1-9.2-9.18a1.25 1.25 0 01-.08-1.67l.09-.1 9.19-9.2-9.2 9.2zm-8 0l9.19-9.2a1.25 1.25 0 011.86 1.67l-.1.1-8.3 8.31 8.3 8.31a1.25 1.25 0 01-1.66 1.86l-.1-.1-9.2-9.18a1.25 1.25 0 01-.09-1.67l.1-.1 9.19-9.2-9.2 9.2z" fill={primaryFill} /></svg>;
}

const ArrowReplyAll48Regular = wrapIcon(rawSvg({}), 'ArrowReplyAll48Regular');
export default ArrowReplyAll48Regular;
      