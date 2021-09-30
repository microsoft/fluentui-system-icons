import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 4.5V1H5.5C4.67 1 4 1.67 4 2.5v2.7A5.5 5.5 0 018.66 15h3.84c.83 0 1.5-.67 1.5-1.5V6h-3.5A1.5 1.5 0 019 4.5zm1 0V1.25L13.75 5H10.5a.5.5 0 01-.5-.5zM2.32 7.32a4.5 4.5 0 106.36 6.36 4.5 4.5 0 00-6.36-6.36zm4.95 4.95a.5.5 0 01-.7 0L5.5 11.2l-1.06 1.06a.5.5 0 01-.7-.7l1.05-1.07-1.06-1.06a.5.5 0 01.71-.7L5.5 9.78l1.06-1.06a.5.5 0 01.7.7L6.22 10.5l1.06 1.06c.2.2.2.51 0 .7z" fill={primaryFill} /></svg>;
}

const DocumentDismiss16Filled = wrapIcon(rawSvg({}), 'DocumentDismiss16Filled');
export default DocumentDismiss16Filled;
      