import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.75A3.75 3.75 0 016.75 3H9.5v6.5H3V6.75z" fill={primaryFill} /><path d="M3 11v6h6.5v-6H3z" fill={primaryFill} /><path d="M3 18.5v2.75A3.75 3.75 0 006.75 25H9.5v-6.5H3z" fill={primaryFill} /><path d="M11 25h6v-6.5h-6V25z" fill={primaryFill} /><path d="M18.5 25h2.75A3.75 3.75 0 0025 21.25V18.5h-6.5V25z" fill={primaryFill} /><path d="M25 17v-6h-6.5v6H25z" fill={primaryFill} /><path d="M25 9.5V6.75A3.75 3.75 0 0021.25 3H18.5v6.5H25z" fill={primaryFill} /><path d="M17 3h-6v6.5h6V3z" fill={primaryFill} /><path d="M17 11v6h-6v-6h6z" fill={primaryFill} /></svg>;
}

const Table28Filled = wrapIcon(rawSvg({}), 'Table28Filled');
export default Table28Filled;
      