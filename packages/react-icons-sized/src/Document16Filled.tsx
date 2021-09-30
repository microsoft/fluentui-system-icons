import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1v3.5C8 5.33 8.67 6 9.5 6H13v7.5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 13.5v-11C3 1.67 3.67 1 4.5 1H8z" fill={primaryFill} /><path d="M9 1.25V4.5c0 .28.22.5.5.5h3.25L9 1.25z" fill={primaryFill} /></svg>;
}

const Document16Filled = wrapIcon(rawSvg({}), 'Document16Filled');
export default Document16Filled;
      