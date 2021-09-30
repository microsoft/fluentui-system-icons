import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3c0-1.1.9-2 2-2h4a2 2 0 012 2v3a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm5.5 2h-3a.5.5 0 000 1h3a.5.5 0 000-1zm-3-2a.5.5 0 000 1h3a.5.5 0 000-1h-3zM3 12.5V9h4a3 3 0 003-3V3h2.5A2.5 2.5 0 0115 5.5v7c0 .5-.15.98-.41 1.38L10.2 9.49a1.7 1.7 0 00-2.4 0L3.4 13.88C3.15 13.48 3 13 3 12.5zm9.5-6a1 1 0 10-2 0 1 1 0 002 0zm1.38 8.09L9.5 10.2a.7.7 0 00-1 0L4.13 14.6c.4.26.87.41 1.38.41h7c.5 0 .98-.15 1.38-.41z" fill={primaryFill} /></svg>;
}

const ImageAltText16Filled = wrapIcon(rawSvg({}), 'ImageAltText16Filled');
export default ImageAltText16Filled;
      