import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.08 4.1a1.25 1.25 0 011.76 0L16 14.24 26.16 4.1a1.25 1.25 0 011.76 1.77L17.77 16.02l10.12 10.12a1.25 1.25 0 11-1.77 1.77L16 17.79 5.88 27.9a1.25 1.25 0 01-1.77-1.77l10.12-10.12L4.08 5.86a1.25 1.25 0 010-1.77z" fill={primaryFill} /></svg>;
}

const Dismiss32Filled = wrapIcon(rawSvg({}), 'Dismiss32Filled');
export default Dismiss32Filled;
      