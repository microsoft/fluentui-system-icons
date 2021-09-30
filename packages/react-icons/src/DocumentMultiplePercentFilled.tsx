import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.67a3 3 0 012 2.71l1.44-1.44a1.5 1.5 0 012.12 2.12L8.12 14a3 3 0 012.7 2h2.68c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 019 6.5zM5 12a2 2 0 11-4 0 2 2 0 014 0zm-1 0a1 1 0 10-2 0 1 1 0 002 0zm-1.15 5.85a.5.5 0 01-.7-.7l6-6a.5.5 0 01.7.7l-6 6zm10.21.15h-2.23a3 3 0 00.17-1h2a3 3 0 003-3V8a1 1 0 011 1v5.06A3.94 3.94 0 0113.06 18zM8 15a2 2 0 110 4 2 2 0 010-4zm-1 2a1 1 0 102 0 1 1 0 00-2 0zm3-10.5V2.25L14.75 7H10.5a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentMultiplePercentFilled = wrapIcon(rawSvg({}), 'DocumentMultiplePercentFilled');
export default DocumentMultiplePercentFilled;
      