import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.9 2.81c.38.17.55.62.39 1l-4 9a.75.75 0 01-1.38-.61l4-9a.75.75 0 011-.39zM4.5 5.2c.3.27.34.75.06 1.06L3 8l1.56 1.75a.75.75 0 01-1.12 1l-2-2.25a.75.75 0 010-1l2-2.25A.75.75 0 014.5 5.2zm7 0a.75.75 0 011.06.06l2 2.25c.25.29.25.71 0 1l-2 2.25a.75.75 0 01-1.12-1L13 8l-1.56-1.75a.75.75 0 01.06-1.06z" fill={primaryFill} /></svg>;
}

const Code16Filled = wrapIcon(rawSvg({}), 'Code16Filled');
export default Code16Filled;
      