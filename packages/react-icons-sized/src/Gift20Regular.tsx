import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a2.5 2.5 0 012 4h2a1 1 0 011 1v3a1 1 0 01-1 1v4.5a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 014 15.5V11a1 1 0 01-1-1V7a1 1 0 011-1h2a2.5 2.5 0 114-3c.46-.6 1.18-1 2-1zm-2.5 9H5v4.5c0 .83.67 1.5 1.5 1.5h3v-6zm5.5 0h-4.5v6h3c.83 0 1.5-.67 1.5-1.5V11zM9.5 7H4v3h5.5V7zM16 7h-5.5v3H16V7zm-4-4c-.83 0-1.5.67-1.5 1.5V6H12a1.5 1.5 0 000-3zM8 3a1.5 1.5 0 00-.14 3H9.5V4.36A1.5 1.5 0 008 3z" fill={primaryFill} /></svg>;
}

const Gift20Regular = wrapIcon(rawSvg({}), 'Gift20Regular');
export default Gift20Regular;
      