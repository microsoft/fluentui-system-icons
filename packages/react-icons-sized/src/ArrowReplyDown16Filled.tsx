import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.31 8l2.26-2.25a.75.75 0 00-.98-1.13l-.08.07-3.54 3.53-.07.08-.04.06-.05.1-.03.09-.02.07v.06l-.01.1v.05l.02.1.03.1.05.1.03.05.09.1-.07-.07.07.07 3.54 3.54a.75.75 0 001.13-.98l-.07-.08L4.3 9.51H8c3.65 0 6.13-2.08 6.25-5.04v-.22a.75.75 0 00-1.5 0c0 2.13-1.7 3.66-4.5 3.75H4.32l2.26-2.25L4.3 8z" fill={primaryFill} /></svg>;
}

const ArrowReplyDown16Filled = wrapIcon(rawSvg({}), 'ArrowReplyDown16Filled');
export default ArrowReplyDown16Filled;
      