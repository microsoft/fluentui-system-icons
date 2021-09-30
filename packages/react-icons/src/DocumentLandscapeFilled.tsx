import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 10h-4.5A1.5 1.5 0 0112 8.5V4H3.5C2.67 4 2 4.67 2 5.5v9c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5V10z" fill={primaryFill} /><path d="M17.75 9H13.5a.5.5 0 01-.5-.5V4.25L17.75 9z" fill={primaryFill} /></svg>;
}

const DocumentLandscapeFilled = wrapIcon(rawSvg({}), 'DocumentLandscapeFilled');
export default DocumentLandscapeFilled;
      