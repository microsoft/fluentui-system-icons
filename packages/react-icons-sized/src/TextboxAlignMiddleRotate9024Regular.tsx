import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 7v10c0 .55-.34 1-.75 1-.38 0-.7-.38-.74-.86L12.5 17V7c0-.55.34-1 .75-1 .38 0 .7.38.74.86L14 7zm-3 10V6.86c-.06-.48-.37-.86-.75-.86-.41 0-.75.45-.75 1v10.14c.06.48.37.86.75.86.41 0 .75-.45.75-1zm7.25 4A2.75 2.75 0 0021 18.25V5.75A2.75 2.75 0 0018.25 3H5.75A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21h12.5zM19.5 5.75v12.5c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25z" fill={primaryFill} /></svg>;
}

const TextboxAlignMiddleRotate9024Regular = wrapIcon(rawSvg({}), 'TextboxAlignMiddleRotate9024Regular');
export default TextboxAlignMiddleRotate9024Regular;
      