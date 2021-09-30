import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 8.02c0 .4-.34.73-.75.73C9.5 8.75 9.5 8 9.5 8v-.01a1.4 1.4 0 010-.13l.06-.28c.05-.22.16-.5.37-.8.45-.6 1.27-1.05 2.58-1.03.95.02 1.8.41 2.32 1.07.54.67.72 1.57.37 2.46-.37.9-1.19 1.26-1.66 1.47l-.05.02c-.28.13-.4.19-.49.25v.73a.75.75 0 01-1.5 0V11c0-.52.25-.9.56-1.15.25-.2.57-.34.79-.43l.04-.02c.54-.24.8-.39.91-.68a.92.92 0 00-.13-.96c-.23-.27-.63-.5-1.18-.51-.94-.02-1.25.29-1.36.43a.72.72 0 00-.13.33z" fill={primaryFill} /><path d="M12.25 15.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15zm1.5 0V18H19V4.5a1 1 0 00-1-1H6.5a1 1 0 00-1 1z" fill={primaryFill} /></svg>;
}

const BookQuestionMark24Regular = wrapIcon(rawSvg({}), 'BookQuestionMark24Regular');
export default BookQuestionMark24Regular;
      