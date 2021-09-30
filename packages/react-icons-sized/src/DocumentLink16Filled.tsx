import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 4.5V1H5.5C4.67 1 4 1.67 4 2.5V9h3.5a3.5 3.5 0 012.45 6h2.55c.83 0 1.5-.67 1.5-1.5V6h-3.5A1.5 1.5 0 019 4.5zm1 0V1.25L13.75 5H10.5a.5.5 0 01-.5-.5zM3.5 10a2.5 2.5 0 000 5H4a.5.5 0 000-1h-.5a1.5 1.5 0 010-3H4a.5.5 0 000-1h-.5zM7 10a.5.5 0 000 1h.5a1.5 1.5 0 010 3H7a.5.5 0 000 1h.5a2.5 2.5 0 000-5H7zm-3.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /></svg>;
}

const DocumentLink16Filled = wrapIcon(rawSvg({}), 'DocumentLink16Filled');
export default DocumentLink16Filled;
      