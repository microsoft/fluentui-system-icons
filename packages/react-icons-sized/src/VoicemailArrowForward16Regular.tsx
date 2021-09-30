import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.33 5a1.75 1.75 0 11-1.58-1h4.5c.7 0 1.3.41 1.59 1.01a5.59 5.59 0 00-1.26.07.75.75 0 00-.95.25c-.4.14-.77.33-1.12.56A1.78 1.78 0 017.67 5H6.33zM4 5.75a.75.75 0 101.5 0 .75.75 0 00-1.5 0zm8-3.25v2.7c.35.1.68.24 1 .4V2.5c0-.83-.67-1.5-1.5-1.5h-9C1.67 1 1 1.67 1 2.5V9c0 .83.67 1.5 1.5 1.5H5c0-.34.03-.68.1-1H2.5A.5.5 0 012 9V2.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5zM10.5 15a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm.9-6.4l.9.9h-1.55A2.75 2.75 0 008 12.25v.25a.5.5 0 001 0v-.25c0-.97.78-1.75 1.75-1.75h1.54l-.9.9a.5.5 0 00.71.7l1.76-1.75a.5.5 0 000-.7L12.1 7.9a.5.5 0 00-.7.7z" fill={primaryFill} /></svg>;
}

const VoicemailArrowForward16Regular = wrapIcon(rawSvg({}), 'VoicemailArrowForward16Regular');
export default VoicemailArrowForward16Regular;
      