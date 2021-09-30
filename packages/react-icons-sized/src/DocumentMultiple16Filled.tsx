import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 6a1 1 0 00-1-1v6a3 3 0 01-3 3H5a1 1 0 001 1h4.21c2.1 0 3.79-1.7 3.79-3.79V6zM7 1v3.5C7 5.33 7.67 6 8.5 6H12v5.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 013 11.5v-9C3 1.67 3.67 1 4.5 1H7zm1 .25V4.5c0 .28.22.5.5.5h3.25L8 1.25z" fill={primaryFill} /></svg>;
}

const DocumentMultiple16Filled = wrapIcon(rawSvg({}), 'DocumentMultiple16Filled');
export default DocumentMultiple16Filled;
      