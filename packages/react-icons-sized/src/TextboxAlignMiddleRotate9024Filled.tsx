import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 18.25A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5zM14 7v-.14c-.06-.48-.37-.86-.75-.86-.41 0-.75.45-.75 1v10.14c.06.48.37.86.75.86.41 0 .75-.45.75-1V7zm-3 10V6.86c-.06-.48-.37-.86-.75-.86-.41 0-.75.45-.75 1v10.14c.06.48.37.86.75.86.41 0 .75-.45.75-1z" fill={primaryFill} /></svg>;
}

const TextboxAlignMiddleRotate9024Filled = wrapIcon(rawSvg({}), 'TextboxAlignMiddleRotate9024Filled');
export default TextboxAlignMiddleRotate9024Filled;
      