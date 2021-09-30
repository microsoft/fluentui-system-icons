import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 6C4.67 6 4 6.67 4 7.5v1a.5.5 0 001 0v-1c0-.28.22-.5.5-.5h1a.5.5 0 000-1h-1z" fill={primaryFill} /><path d="M13.5 6a.5.5 0 000 1h1c.28 0 .5.22.5.5v1a.5.5 0 001 0v-1c0-.83-.67-1.5-1.5-1.5h-1z" fill={primaryFill} /><path d="M5 11.5a.5.5 0 00-1 0v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 000-1h-1a.5.5 0 01-.5-.5v-1z" fill={primaryFill} /><path d="M16 11.5a.5.5 0 00-1 0v1a.5.5 0 01-.5.5h-1a.5.5 0 000 1h1c.83 0 1.5-.67 1.5-1.5v-1z" fill={primaryFill} /><path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm1 0v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1z" fill={primaryFill} /><path d="M5.5 6C4.67 6 4 6.67 4 7.5v1a.5.5 0 001 0v-1c0-.28.22-.5.5-.5h1a.5.5 0 000-1h-1z" fill={primaryFill} /><path d="M5 11.5a.5.5 0 00-1 0v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 000-1h-1a.5.5 0 01-.5-.5v-1z" fill={primaryFill} /></svg>;
}

const PageFit20Regular = wrapIcon(rawSvg({}), 'PageFit20Regular');
export default PageFit20Regular;
      