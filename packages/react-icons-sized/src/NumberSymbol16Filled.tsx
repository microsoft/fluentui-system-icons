import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2.85a.75.75 0 00-1.5-.2L10.18 5H6.7l.3-2.14a.75.75 0 10-1.48-.22L5.17 5H3.75a.75.75 0 000 1.5h1.2l-.42 3H2.75a.75.75 0 100 1.5h1.56l-.3 2.14a.75.75 0 101.48.22L5.83 11h3.49L9 13.14a.75.75 0 101.48.22l.34-2.36h1.42a.75.75 0 000-1.5h-1.2l.42-3h1.78a.75.75 0 000-1.5h-1.56l.3-2.15zM9.95 6.5l-.43 3H6.04l.43-3h3.49z" fill={primaryFill} /></svg>;
}

const NumberSymbol16Filled = wrapIcon(rawSvg({}), 'NumberSymbol16Filled');
export default NumberSymbol16Filled;
      