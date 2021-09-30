import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.76 5.65a1 1 0 00-1.52-1.3L10 10.46 4.76 4.35a1 1 0 10-1.52 1.3L8.68 12l-5.44 6.35a1 1 0 001.52 1.3L10 13.54l5.07 5.91c.15-.83.52-1.47.94-1.97L11.31 12l5.45-6.35z" fill={primaryFill} /><path d="M18.74 14.75c-.4 0-.74.36-.74.77a1 1 0 11-2 0 2.78 2.78 0 015.1-1.54c.54.84.54 1.92-.06 2.94-.3.52-.72.9-1.1 1.2-.2.16-.39.3-.57.42l-.08.06a16.88 16.88 0 00-.83.65h2a1 1 0 010 2H17a1 1 0 01-1-1c0-1.52.9-2.37 1.66-2.94l.48-.35.08-.05.48-.35c.3-.24.5-.44.62-.66.27-.46.18-.71.1-.83a.81.81 0 00-.68-.32z" fill={primaryFill} /></svg>;
}

const TextSubscript24Filled = wrapIcon(rawSvg({}), 'TextSubscript24Filled');
export default TextSubscript24Filled;
      