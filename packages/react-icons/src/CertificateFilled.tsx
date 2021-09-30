import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a2 2 0 00-2 2v8c0 1.1.9 2 2 2h7.5v-.67c-.09-.1-.17-.22-.24-.33H4a1 1 0 01-1-1V5a1 1 0 011-1h12a1 1 0 011 1v2.47c.36.18.7.4 1 .68V5a2 2 0 00-2-2H4z" fill={primaryFill} /><path d="M18.5 11.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" fill={primaryFill} /><path d="M15 16c.93 0 1.79-.28 2.5-.76V18a.5.5 0 01-.8.4l-1.4-1.05a.5.5 0 00-.6 0l-1.4 1.05a.5.5 0 01-.8-.4v-2.76c.71.48 1.57.76 2.5.76z" fill={primaryFill} /><path d="M5 6.5c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M5.5 11a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /></svg>;
}

const CertificateFilled = wrapIcon(rawSvg({}), 'CertificateFilled');
export default CertificateFilled;
      