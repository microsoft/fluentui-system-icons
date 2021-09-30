import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2.75a.75.75 0 00-1.5 0V4H2.75a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0V5.5h7v.75a.75.75 0 001.5 0v-1.5a.75.75 0 00-.75-.75H8V2.75zm-4 5c0-.41.34-.75.75-.75h4.5a.75.75 0 01.59 1.22L8 10.5h3.24a.75.75 0 010 1.5H8v1.9a2.1 2.1 0 01-3.3 1.73l-.38-.27a.75.75 0 11.86-1.22l.38.26c.4.28.94 0 .94-.5V12H2.75a.75.75 0 010-1.5H6.5v-.25c0-.17.06-.34.16-.47L7.7 8.5H4.75A.75.75 0 014 7.75zm5.28 11.47l1.92 1.92 4.47-5.37a.75.75 0 011.16.96l-5 6a.75.75 0 01-1.11.05l-2.5-2.5a.75.75 0 111.06-1.06zm7.53-14.75l-3.76 9.5-.03.1c-.09.36.1.73.45.87l.1.03c.36.1.74-.1.88-.45l1-2.52h4.1l1 2.53.05.09a.75.75 0 001.35-.64l-3.75-9.5-.05-.11a.75.75 0 00-1.34.1zm-.77 6.03l1.46-3.7 1.46 3.7h-2.92z" fill={primaryFill} /></svg>;
}

const TextProofingToolsZi24Regular = wrapIcon(rawSvg({}), 'TextProofingToolsZi24Regular');
export default TextProofingToolsZi24Regular;
      