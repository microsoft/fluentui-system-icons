import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.67a3 3 0 012 2.71l1.44-1.44a1.5 1.5 0 012.12 2.12L8.12 14a3 3 0 012.7 4h3.68c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0110 6.5zM5 12a2 2 0 11-4 0 2 2 0 014 0zm-1 0a1 1 0 10-2 0 1 1 0 002 0zm-1.15 5.85a.5.5 0 01-.7-.7l6-6a.5.5 0 01.7.7l-6 6zM6 17a2 2 0 002 2 2 2 0 10-2-2zm2 1a1 1 0 110-2 1 1 0 010 2zm3-11.5V2.25L15.75 7H11.5a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentPercentFilled = wrapIcon(rawSvg({}), 'DocumentPercentFilled');
export default DocumentPercentFilled;
      