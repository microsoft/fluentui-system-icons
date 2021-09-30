import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3c0-1.1.9-2 2-2h4a2 2 0 012 2v3a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm5.5 2h-3a.5.5 0 000 1h3a.5.5 0 000-1zm-3-2a.5.5 0 000 1h3a.5.5 0 000-1h-3zM3 12.5V9h1v3.5c0 .23.05.45.15.65L7.8 9.49a1.7 1.7 0 012.4 0l3.65 3.66c.1-.2.15-.42.15-.65v-7c0-.83-.67-1.5-1.5-1.5H10V3h2.5A2.5 2.5 0 0115 5.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 013 12.5zm10.15 1.35L9.5 10.2a.7.7 0 00-1 0l-3.65 3.65c.2.1.42.15.65.15h7c.23 0 .45-.05.65-.15zM12.5 6.5a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const ImageAltText16Regular = wrapIcon(rawSvg({}), 'ImageAltText16Regular');
export default ImageAltText16Regular;
      