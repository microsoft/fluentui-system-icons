import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.22 5.53a1.5 1.5 0 00-2.94-.56L17.4 15H7.25a1.5 1.5 0 000 3h9.6L14.6 30H5.25a1.5 1.5 0 000 3h8.8l-1.77 9.47a1.5 1.5 0 102.94.56L17.1 33h10.94l-1.76 9.47a1.5 1.5 0 102.94.56L31.1 33h9.65a1.5 1.5 0 000-3h-9.1l2.25-12h8.85a1.5 1.5 0 000-3h-8.3l1.77-9.47a1.5 1.5 0 00-2.94-.56L31.4 15H20.46l1.76-9.47zM28.6 30H17.66l2.24-12h10.94L28.6 30z" fill={primaryFill} /></svg>;
}

const NumberSymbol48Filled = wrapIcon(rawSvg({}), 'NumberSymbol48Filled');
export default NumberSymbol48Filled;
      