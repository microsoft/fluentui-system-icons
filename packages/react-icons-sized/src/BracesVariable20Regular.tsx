import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v2.88c0 .5-.28.95-.72 1.17a.5.5 0 000 .9c.44.22.72.68.72 1.17v2.88A2.5 2.5 0 005.5 17a.5.5 0 000-1A1.5 1.5 0 014 14.5v-2.88c0-.62-.24-1.2-.66-1.62.42-.42.66-1 .66-1.62V5.5C4 4.67 4.67 4 5.5 4a.5.5 0 000-1zm9 0A2.5 2.5 0 0117 5.5v2.88c0 .5.28.95.72 1.17a.5.5 0 010 .9 1.3 1.3 0 00-.72 1.17v2.88a2.5 2.5 0 01-2.5 2.5.5.5 0 010-1c.83 0 1.5-.67 1.5-1.5v-2.88c0-.62.24-1.2.66-1.62A2.3 2.3 0 0116 8.38V5.5c0-.83-.67-1.5-1.5-1.5a.5.5 0 010-1zM7.9 6.2a.5.5 0 00-.8.6L9.38 10l-2.3 3.2a.5.5 0 00.82.6L10 10.85l2.1 2.93a.5.5 0 00.8-.58L10.62 10l2.3-3.2a.5.5 0 10-.82-.6L10 9.15 7.9 6.21z" fill={primaryFill} /></svg>;
}

const BracesVariable20Regular = wrapIcon(rawSvg({}), 'BracesVariable20Regular');
export default BracesVariable20Regular;
      