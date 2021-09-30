import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm1.5 2h1a.5.5 0 010 1h-1a.5.5 0 00-.5.5v1a.5.5 0 01-1 0v-1C4 6.67 4.67 6 5.5 6zm8 0h1c.83 0 1.5.67 1.5 1.5v1a.5.5 0 01-1 0v-1a.5.5 0 00-.5-.5h-1a.5.5 0 010-1zM5 11.5v1c0 .28.22.5.5.5h1a.5.5 0 010 1h-1A1.5 1.5 0 014 12.5v-1a.5.5 0 011 0zm11 0v1c0 .83-.67 1.5-1.5 1.5h-1a.5.5 0 010-1h1a.5.5 0 00.5-.5v-1a.5.5 0 011 0z" fill={primaryFill} /></svg>;
}

const PageFitFilled = wrapIcon(rawSvg({}), 'PageFitFilled');
export default PageFitFilled;
      