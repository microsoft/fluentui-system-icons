import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.5v15A2.5 2.5 0 006.5 22h13.25a.75.75 0 000-1.5H6.5a1 1 0 01-1-1h14.25c.41 0 .75-.34.75-.75V4.5A2.5 2.5 0 0018 2H6.5A2.5 2.5 0 004 4.5zm7 3.52c0 .4-.34.73-.75.73C9.5 8.75 9.5 8 9.5 8v-.01a1.4 1.4 0 010-.13l.06-.28c.05-.22.16-.5.37-.8.45-.6 1.27-1.05 2.58-1.03.95.02 1.8.41 2.32 1.07.54.67.72 1.57.37 2.46-.37.9-1.19 1.26-1.66 1.47l-.05.02c-.28.13-.4.19-.49.25v.73a.75.75 0 01-1.5 0V11c0-.52.25-.9.56-1.15.25-.2.57-.34.79-.43l.04-.02c.54-.24.8-.39.91-.68a.92.92 0 00-.13-.96c-.23-.27-.63-.5-1.18-.51-.94-.02-1.25.29-1.36.43a.72.72 0 00-.13.33zm2.25 6.48a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const BookQuestionMark24Filled = wrapIcon(rawSvg({}), 'BookQuestionMark24Filled');
export default BookQuestionMark24Filled;
      