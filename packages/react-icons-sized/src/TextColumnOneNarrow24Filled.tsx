import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 5a1 1 0 000 2h6a1 1 0 100-2H9z" fill={primaryFill} /><path d="M9 9a1 1 0 000 2h6a1 1 0 100-2H9z" fill={primaryFill} /><path d="M8 14a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z" fill={primaryFill} /><path d="M9 17a1 1 0 100 2h6a1 1 0 100-2H9z" fill={primaryFill} /></svg>;
}

const TextColumnOneNarrow24Filled = wrapIcon(rawSvg({}), 'TextColumnOneNarrow24Filled');
export default TextColumnOneNarrow24Filled;
      