import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.98 6H15a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-1.2c-.35-.1-.68-.24-1-.4V12c0 1.1.9 2 2 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-4.02a5.59 5.59 0 010 1zM2.5 15a.5.5 0 000 1h15a.5.5 0 000-1h-15zm3-5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.85-6.35c.2.2.2.5 0 .7L6.21 5.5l1.14 1.15a.5.5 0 11-.7.7L5.5 6.21 4.35 7.35a.5.5 0 11-.7-.7L4.79 5.5 3.65 4.35a.5.5 0 11.7-.7L5.5 4.79l1.15-1.14c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const LaptopDismiss20Regular = wrapIcon(rawSvg({}), 'LaptopDismiss20Regular');
export default LaptopDismiss20Regular;
      