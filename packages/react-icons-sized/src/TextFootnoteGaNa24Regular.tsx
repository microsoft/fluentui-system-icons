import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.5 7.26c-.2.18-.4.34-.6.48a.75.75 0 01-.84-1.25 3.55 3.55 0 001.46-1.9.75.75 0 011.48.16v6.5a.75.75 0 01-1.5 0V7.26zM2 9.25c0-.41.34-.75.75-.75h3.5c.41 0 .75.34.75.75a7.3 7.3 0 01-.76 3.36 4.45 4.45 0 01-3.37 2.38.75.75 0 11-.24-1.48 2.95 2.95 0 002.29-1.6A5.3 5.3 0 005.46 10H2.75A.75.75 0 012 9.25zm6-3v12a.75.75 0 001.5 0v-12a.75.75 0 00-1.5 0zm8 12v-12a.75.75 0 011.5 0v12a.75.75 0 01-1.5 0zM12.74 7.11a.75.75 0 00-1.48-.22l-1 7a.75.75 0 00.85.85l3.5-.5a.75.75 0 00-.22-1.48l-2.5.36.85-6.01z" fill={primaryFill} /></svg>;
}

const TextFootnoteGaNa24Regular = wrapIcon(rawSvg({}), 'TextFootnoteGaNa24Regular');
export default TextFootnoteGaNa24Regular;
      