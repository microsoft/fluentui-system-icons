import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 3.96a1 1 0 00-1.7-.7L3.25 7.3A1 1 0 003.96 9H7.5C8.33 9 9 8.33 9 7.5V3.96z" fill={primaryFill} /></svg>;
}

const Caret12Filled = wrapIcon(rawSvg({}), 'Caret12Filled');
export default Caret12Filled;
      