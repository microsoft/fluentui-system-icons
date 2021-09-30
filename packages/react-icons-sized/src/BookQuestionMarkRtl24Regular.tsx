import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 8.75a.75.75 0 01-.75-.73l-.01-.08a.72.72 0 00-.12-.26c-.11-.15-.42-.45-1.36-.43-.55 0-.95.24-1.18.51a.92.92 0 00-.13.96c.11.3.37.44.91.68l.04.02c.22.1.54.23.79.43.3.25.56.63.56 1.15v.75a.75.75 0 11-1.5 0v-.73a2.49 2.49 0 00-.5-.25l-.04-.02c-.47-.2-1.3-.57-1.66-1.47-.35-.89-.17-1.8.37-2.46a3.02 3.02 0 012.32-1.07c1.31-.02 2.13.43 2.58 1.04a2.22 2.22 0 01.43 1.2s0 .76-.75.76zm-3 5.75a1 1 0 102 0 1 1 0 00-2 0zM6.5 2A2.5 2.5 0 004 4.5v15A2.5 2.5 0 006.5 22h13.25a.75.75 0 000-1.5H6.5a1 1 0 01-1-1h14.25c.41 0 .75-.34.75-.75V4.5A2.5 2.5 0 0018 2H6.5zm-1 16V4.5a1 1 0 011-1H18a1 1 0 011 1V18H5.5z" fill={primaryFill} /></svg>;
}

const BookQuestionMarkRtl24Regular = wrapIcon(rawSvg({}), 'BookQuestionMarkRtl24Regular');
export default BookQuestionMarkRtl24Regular;
      