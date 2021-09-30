import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 7a4 4 0 014-4h14a4 4 0 014 4v14a4 4 0 01-4 4H7a4 4 0 01-4-4V7zm4-2a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2V7a2 2 0 00-2-2H7z" fill={primaryFill} /></svg>;
}

const Maximize28Filled = wrapIcon(rawSvg({}), 'Maximize28Filled');
export default Maximize28Filled;
      