import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.31 10.5l2.96-2.96A.75.75 0 006.3 6.4l-.09.07-4.24 4.25a.75.75 0 00-.07.97l.07.09 4.24 4.24a.75.75 0 001.14-.98l-.08-.08L4.31 12H10c4.2 0 7.62-3.34 7.75-7.5v-.25a.75.75 0 00-1.5 0 6.25 6.25 0 01-6.02 6.24H4.3l2.96-2.95-2.96 2.96z" fill={primaryFill} /></svg>;
}

const ArrowReplyDownFilled = wrapIcon(rawSvg({}), 'ArrowReplyDownFilled');
export default ArrowReplyDownFilled;
      