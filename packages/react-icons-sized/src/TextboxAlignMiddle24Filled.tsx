import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 3A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h12.5zM7 10h-.14c-.48.06-.86.37-.86.75 0 .41.45.75 1 .75h10.14c.48-.06.86-.37.86-.75 0-.41-.45-.75-1-.75H7zm10 3H6.86c-.48.06-.86.37-.86.75 0 .41.45.75 1 .75h10.14c.48-.06.86-.37.86-.75 0-.41-.45-.75-1-.75z" fill={primaryFill} /></svg>;
}

const TextboxAlignMiddle24Filled = wrapIcon(rawSvg({}), 'TextboxAlignMiddle24Filled');
export default TextboxAlignMiddle24Filled;
      