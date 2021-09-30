import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.22 10.22c.3-.3.77-.3 1.06 0L12 12.94l2.72-2.72a.75.75 0 111.06 1.06L13.06 14l.47.47 2 2 .25.25a.75.75 0 11-1.06 1.06l-.25-.25-2-2-.47-.47-2.72 2.72a.75.75 0 01-1.06-1.06L10.94 14l-2.72-2.72a.75.75 0 010-1.06zM13.75 2a.75.75 0 00-.6.3L10.44 6H9v-.25C9 3.95 7.54 2.5 5.75 2.5h-1a.75.75 0 000 1.5h1c.97 0 1.75.78 1.75 1.75V6h-.75A2.75 2.75 0 004 8.75v10.5A2.75 2.75 0 006.75 22h10.5A2.75 2.75 0 0020 19.25V8.75c0-.86-.4-1.63-1.01-2.13L19 6.5V2.75a.75.75 0 00-.75-.75h-4.5zm3.75 4.01L17.25 6H12.3l1.83-2.5h3.37v2.51zM6.75 7.5h10.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25V8.75c0-.69.56-1.25 1.25-1.25z" fill={primaryFill} /></svg>;
}

const Gas24Regular = wrapIcon(rawSvg({}), 'Gas24Regular');
export default Gas24Regular;
      