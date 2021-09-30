import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.26 9a5.52 5.52 0 001.95 1.5H3.5a.75.75 0 010-1.5h2.76zM5.02 5a5.57 5.57 0 00.07 1.5H1.5a.75.75 0 010-1.5h3.52zm.48 8a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3zm5-3a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.85-6.35c.2.2.2.5 0 .7L11.21 5.5l1.14 1.15a.5.5 0 01-.7.7L10.5 6.21 9.35 7.35a.5.5 0 11-.7-.7L9.79 5.5 8.65 4.35a.5.5 0 11.7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const FilterDismiss16Filled = wrapIcon(rawSvg({}), 'FilterDismiss16Filled');
export default FilterDismiss16Filled;
      