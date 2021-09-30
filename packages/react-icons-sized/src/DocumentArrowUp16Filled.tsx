import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 4.5V1H5.5C4.67 1 4 1.67 4 2.5v2.7A5.5 5.5 0 018.66 15h3.84c.83 0 1.5-.67 1.5-1.5V6h-3.5A1.5 1.5 0 019 4.5zm1 0V1.25L13.75 5H10.5a.5.5 0 01-.5-.5zM5.5 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2.35-4.85a.5.5 0 01-.7.7L6 9.71v2.79a.5.5 0 01-1 0V9.7l-1.15 1.15a.5.5 0 01-.7-.7l2-2A.5.5 0 015.5 8a.5.5 0 01.35.14l2 2z" fill={primaryFill} /></svg>;
}

const DocumentArrowUp16Filled = wrapIcon(rawSvg({}), 'DocumentArrowUp16Filled');
export default DocumentArrowUp16Filled;
      