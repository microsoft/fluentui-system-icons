import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2.6a.5.5 0 10-1-.19L5.55 5H3.5a.5.5 0 000 1h1.86l-.73 4H2.5a.5.5 0 000 1h1.95L4 13.41a.5.5 0 00.98.18L5.46 11h3.98l-.43 2.4a.5.5 0 00.98.19l.47-2.59h2.04a.5.5 0 000-1h-1.86l.73-4h2.13a.5.5 0 100-1h-1.95L12 2.6a.5.5 0 10-.98-.19l-.47 2.6H6.55L7 2.58zM6.36 6h3.99l-.73 4H5.64l.73-4z" fill={primaryFill} /></svg>;
}

const NumberSymbol16Regular = wrapIcon(rawSvg({}), 'NumberSymbol16Regular');
export default NumberSymbol16Regular;
      