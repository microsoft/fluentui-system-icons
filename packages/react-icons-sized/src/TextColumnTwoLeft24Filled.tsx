import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 6a1 1 0 00-1-1h-9a1 1 0 100 2h9a1 1 0 001-1z" fill={primaryFill} /><path d="M8 6a1 1 0 00-1-1H4a1 1 0 000 2h3a1 1 0 001-1z" fill={primaryFill} /><path d="M21 10a1 1 0 00-1-1h-9a1 1 0 100 2h9a1 1 0 001-1z" fill={primaryFill} /><path d="M8 10a1 1 0 00-1-1H4a1 1 0 000 2h3a1 1 0 001-1z" fill={primaryFill} /><path d="M21 14a1 1 0 00-1-1h-9a1 1 0 100 2h9a1 1 0 001-1z" fill={primaryFill} /><path d="M8 14a1 1 0 00-1-1H4a1 1 0 100 2h3a1 1 0 001-1z" fill={primaryFill} /><path d="M21 18a1 1 0 00-1-1h-9a1 1 0 100 2h9a1 1 0 001-1z" fill={primaryFill} /><path d="M8 18a1 1 0 00-1-1H4a1 1 0 100 2h3a1 1 0 001-1z" fill={primaryFill} /></svg>;
}

const TextColumnTwoLeft24Filled = wrapIcon(rawSvg({}), 'TextColumnTwoLeft24Filled');
export default TextColumnTwoLeft24Filled;
      