import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v4.67A3 3 0 017.24 13h.26a2.5 2.5 0 012.5 2.5c0 .95-.27 1.8-.75 2.5h5.25c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0110 6.5zm1 0V2.25L15.75 7H11.5a.5.5 0 01-.5-.5zM7 11a2 2 0 10-4 0 2 2 0 004 0zm-6 4.5a3.83 3.83 0 00.32 1.5c.21.44.52.81.9 1.11.73.6 1.73.89 2.78.89 1.05 0 2.05-.29 2.79-.89.75-.6 1.21-1.5 1.21-2.61 0-.83-.67-1.5-1.5-1.5h-5c-.83 0-1.5.67-1.5 1.5z" fill={primaryFill} /></svg>;
}

const DocumentPersonFilled = wrapIcon(rawSvg({}), 'DocumentPersonFilled');
export default DocumentPersonFilled;
      