import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 6.5V2H5.5C4.67 2 4 2.67 4 3.5v11c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 019 6.5zm1 0V2.25L14.75 7H10.5a.5.5 0 01-.5-.5zM17 9a1 1 0 00-1-1v6a3 3 0 01-3 3H6a1 1 0 001 1h6.06A3.94 3.94 0 0017 14.06V9z" fill={primaryFill} /></svg>;
}

const DocumentMultiple20Filled = wrapIcon(rawSvg({}), 'DocumentMultiple20Filled');
export default DocumentMultiple20Filled;
      