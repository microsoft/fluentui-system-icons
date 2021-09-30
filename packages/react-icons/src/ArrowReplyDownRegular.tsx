import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.7 11l3.4-3.4a.5.5 0 00-.64-.76l-.07.06-4.24 4.24a.5.5 0 00-.06.64l.06.07 4.24 4.24a.5.5 0 00.76-.63l-.05-.07-3.4-3.4H10a7.5 7.5 0 007.5-7.25V4.5a.5.5 0 00-1 0 6.5 6.5 0 01-6.27 6.5H3.7l3.4-3.4L3.7 11z" fill={primaryFill} /></svg>;
}

const ArrowReplyDownRegular = wrapIcon(rawSvg({}), 'ArrowReplyDownRegular');
export default ArrowReplyDownRegular;
      