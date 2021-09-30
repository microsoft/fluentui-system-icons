import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.97 4.02A1.7 1.7 0 002 5.7v8.6a1.7 1.7 0 001.97 1.68 37.94 37.94 0 0112.25.02A1.7 1.7 0 0018 14.3V5.7a1.7 1.7 0 00-1.97-1.68c-4 .65-8.07.65-12.06 0zM16 14.96c-1-.15-2-.27-3-.35V12h2a1 1 0 011 1v1.96zm-4-.41a38.84 38.84 0 00-4 0V12a1 1 0 011-1h2a1 1 0 011 1v2.55zm-5 .06c-1 .08-2 .2-3 .35V13a1 1 0 011-1h2v2.61zM10 10a1 1 0 110-2 1 1 0 010 2zm-3.5 0a1 1 0 11-2 0 1 1 0 012 0zm9 0a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const Video360Filled = wrapIcon(rawSvg({}), 'Video360Filled');
export default Video360Filled;
      