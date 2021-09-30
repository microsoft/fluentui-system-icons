import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.98 3.2a1 1 0 00-1.96-.4L11.58 10H5a1 1 0 100 2h6.18l-1.4 7H4a1 1 0 100 2h5.38l-1.36 6.8a1 1 0 101.96.4l1.44-7.2h6.96l-1.36 6.8a1 1 0 101.96.4l1.44-7.2H27a1 1 0 100-2h-6.18l1.4-7H28a1 1 0 100-2h-5.38l1.36-6.8a1 1 0 00-1.96-.4L20.58 10h-6.96l1.36-6.8zm3.8 15.8h-6.96l1.4-7h6.96l-1.4 7z" fill={primaryFill} /></svg>;
}

const NumberSymbol32Regular = wrapIcon(rawSvg({}), 'NumberSymbol32Regular');
export default NumberSymbol32Regular;
      