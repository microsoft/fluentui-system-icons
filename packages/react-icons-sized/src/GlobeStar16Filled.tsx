import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.02 11c.1.98.44 1.9.98 2.66A6.02 6.02 0 012.8 11h2.22zm0-1H2.34a5.99 5.99 0 010-4h2.78a16.83 16.83 0 00-.05 3.6 5.5 5.5 0 00-.05.4zm2.32-4c-.52.36-.96.8-1.33 1.32.02-.46.06-.9.11-1.32h1.22zM9.7 5c-.11-.53-.25-1-.4-1.42a3.99 3.99 0 00-.7-1.23C8.35 2.08 8.15 2 8 2c-.16 0-.36.08-.6.35-.25.26-.49.68-.7 1.23-.16.42-.3.9-.4 1.42h3.4zm3.49 0h-2.47c-.13-.66-.3-1.25-.5-1.78a6.18 6.18 0 00-.45-.95A6.02 6.02 0 0113.2 5zM5.27 5H2.8a6.02 6.02 0 013.42-2.73c-.17.28-.32.6-.45.95-.2.53-.37 1.12-.5 1.78zm5.23 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm.95-5.6H13c.48 0 .69.64.3.94l-1.26.94.48 1.53c.15.49-.38.89-.77.59l-1.25-.95-1.25.95c-.4.3-.92-.1-.77-.59l.48-1.53-1.25-.94c-.4-.3-.2-.95.3-.95h1.54l.47-1.53a.5.5 0 01.96 0l.47 1.53z" fill={primaryFill} /></svg>;
}

const GlobeStar16Filled = wrapIcon(rawSvg({}), 'GlobeStar16Filled');
export default GlobeStar16Filled;
      