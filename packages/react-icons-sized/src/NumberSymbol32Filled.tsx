import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.97 3.5a1.25 1.25 0 00-2.44-.5L11.2 9.5H5.25a1.25 1.25 0 100 2.5h5.44l-1.43 7H4.25a1.25 1.25 0 100 2.5h4.5l-1.22 6a1.25 1.25 0 002.44.5l1.33-6.5h6.95l-1.22 6a1.25 1.25 0 102.45.5l1.32-6.5h5.95a1.25 1.25 0 100-2.5h-5.44l1.43-7h5.01a1.25 1.25 0 100-2.5h-4.5l1.23-6a1.25 1.25 0 00-2.45-.5L20.7 9.5h-6.95l1.22-6zM18.77 19h-6.95l1.43-7h6.95l-1.43 7z" fill={primaryFill} /></svg>;
}

const NumberSymbol32Filled = wrapIcon(rawSvg({}), 'NumberSymbol32Filled');
export default NumberSymbol32Filled;
      