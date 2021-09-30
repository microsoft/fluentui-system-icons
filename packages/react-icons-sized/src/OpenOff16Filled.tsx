import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.8 13.52c-.43.3-.97.48-1.55.48h-6.5A2.75 2.75 0 012 11.25v-6.5c0-.58.18-1.12.48-1.56L1.15 1.85a.5.5 0 11.7-.7l13 13a.5.5 0 01-.7.7l-1.34-1.33zm-1.1-1.1L3.6 4.28c-.06.14-.09.3-.09.46v6.5c0 .69.56 1.25 1.25 1.25h6.5c.16 0 .32-.03.46-.09zM8.54 6.4l1.06 1.06 2.91-2.9v2.68a.75.75 0 101.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 100 1.5h2.69L8.53 6.4zm5.41 5.41l-1.44-1.44v-.63a.75.75 0 011.5 0v1.5c0 .2-.02.39-.06.57zM4.18 2.06L5.62 3.5h.63a.75.75 0 000-1.5h-1.5c-.2 0-.39.02-.57.06z" fill={primaryFill} /></svg>;
}

const OpenOff16Filled = wrapIcon(rawSvg({}), 'OpenOff16Filled');
export default OpenOff16Filled;
      