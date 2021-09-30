import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 6a1 1 0 011-1h7a1 1 0 110 2h-7a1 1 0 01-1-1zM2 18a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm12-7a1 1 0 100 2h7a1 1 0 100-2h-7z" fill={primaryFill} /></svg>;
}

const TextAlignJustifyLow24Filled = wrapIcon(rawSvg({}), 'TextAlignJustifyLow24Filled');
export default TextAlignJustifyLow24Filled;
      