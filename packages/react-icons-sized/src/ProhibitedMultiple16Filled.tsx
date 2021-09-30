import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 12A5 5 0 107 2a5 5 0 000 10zm0-1.5c-.7 0-1.34-.2-1.89-.55L9.95 5.1A3.5 3.5 0 017 10.5zm1.89-6.45L4.05 8.9A3.5 3.5 0 018.9 4.05zM13 7a6 6 0 01-7.14 5.9 5 5 0 007.03-7.03c.07.36.11.74.11 1.13z" fill={primaryFill} /></svg>;
}

const ProhibitedMultiple16Filled = wrapIcon(rawSvg({}), 'ProhibitedMultiple16Filled');
export default ProhibitedMultiple16Filled;
      