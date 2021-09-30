import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 9a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill={primaryFill} /><path d="M10.7 17c-.86 0-1.8.6-1.82 1.67-.02.75.12 1.85.9 2.78.79.94 2.13 1.55 4.22 1.55s3.43-.6 4.23-1.55c.77-.93.9-2.03.9-2.78C19.1 17.6 18.15 17 17.3 17h-6.6z" fill={primaryFill} /><path d="M18.9 4h1.35A2.75 2.75 0 0123 6.75v16.5A2.75 2.75 0 0120.25 26H7.75A2.75 2.75 0 015 23.25V6.75A2.75 2.75 0 017.75 4H9.1c.33-1.15 1.4-2 2.65-2h4.5c1.26 0 2.32.85 2.65 2zM9.1 5.5H7.75c-.69 0-1.25.56-1.25 1.25v16.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H18.9a2.75 2.75 0 01-2.65 2h-4.5a2.75 2.75 0 01-2.65-2zm1.4-.75c0 .69.56 1.25 1.25 1.25h4.5a1.25 1.25 0 100-2.5h-4.5c-.69 0-1.25.56-1.25 1.25z" fill={primaryFill} /></svg>;
}

const Guest28Filled = wrapIcon(rawSvg({}), 'Guest28Filled');
export default Guest28Filled;
      