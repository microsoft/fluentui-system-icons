import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.75A3.75 3.75 0 016.75 3h6.5v10.25H3v-6.5z" fill={primaryFill} /><path d="M3 14.75v6.5A3.75 3.75 0 006.75 25h6.5V14.75H3z" fill={primaryFill} /><path d="M14.75 25h6.5A3.75 3.75 0 0025 21.25v-6.5H14.75V25z" fill={primaryFill} /><path d="M25 13.25v-6.5A3.75 3.75 0 0021.25 3h-6.5v10.25H25z" fill={primaryFill} /></svg>;
}

const TableSimple28Filled = wrapIcon(rawSvg({}), 'TableSimple28Filled');
export default TableSimple28Filled;
      