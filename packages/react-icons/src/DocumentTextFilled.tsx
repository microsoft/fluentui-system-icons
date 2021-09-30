import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0110 6.5zM6.5 10h7a.5.5 0 010 1h-7a.5.5 0 010-1zm0 2h7a.5.5 0 010 1h-7a.5.5 0 010-1zm0 2h7a.5.5 0 010 1h-7a.5.5 0 010-1zM11 6.5V2.25L15.75 7H11.5a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentTextFilled = wrapIcon(rawSvg({}), 'DocumentTextFilled');
export default DocumentTextFilled;
      