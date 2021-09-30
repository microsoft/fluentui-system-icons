import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.85 6.86a.5.5 0 10-.7-.7L7 9.3 5.85 8.15a.5.5 0 00-.7.7l1.5 1.5c.2.2.5.2.7 0l3.5-3.49zM8.7 1.27a1 1 0 00-1.38 0L2.47 5.85c-.3.28-.47.68-.47 1.09v5.56c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V6.94c0-.41-.17-.8-.47-1.1L8.7 1.28zM8 2l4.84 4.57c.1.1.16.23.16.37v5.56a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V6.94a.5.5 0 01.16-.37L8 2z" fill={primaryFill} /></svg>;
}

const HomeCheckmark16Regular = wrapIcon(rawSvg({}), 'HomeCheckmark16Regular');
export default HomeCheckmark16Regular;
      