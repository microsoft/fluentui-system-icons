import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.4 2A2.4 2.4 0 004 4.4v9.2c.47-.24.97-.41 1.5-.51V4.4c0-.5.4-.9.9-.9H14V10c0 1.1.9 2 2 2h6.5v11.6c0 .5-.4.9-.9.9H11V26h10.6a2.4 2.4 0 002.4-2.4V11.58c0-.73-.29-1.43-.8-1.95L16.25 2.7a2.4 2.4 0 00-1.7-.7H6.4zm15.54 8.5H16a.5.5 0 01-.5-.5V4.06l6.44 6.44zM5.5 14.1A4.48 4.48 0 002 18.5a4.5 4.5 0 103.5-4.39zm-.04 11.7L6.5 25l2.37 1.85A.7.7 0 0010 26.3v-3.56a5.48 5.48 0 01-7 0v3.56a.7.7 0 001.13.55l1.33-1.04z" fill={primaryFill} /></svg>;
}

const DocumentRibbon28Regular = wrapIcon(rawSvg({}), 'DocumentRibbon28Regular');
export default DocumentRibbon28Regular;
      