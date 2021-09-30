import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2c1.16 0 2.11.88 2.24 2h1.76C18.99 4 20 5 20 6.25v8.27l-1.5-3.33V6.25a.75.75 0 00-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 00-.75.75v13.5c0 .41.34.75.75.75h5.05l-.17.38a1.5 1.5 0 00-.05 1.12H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5zm2.24 2.1l.01.15V4.1zm-2.24-.6h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5z" fill={primaryFill} /><path d="M17.45 11.3a.5.5 0 00-.91 0l-2.7 5.99v.02l-1.8 3.98a.5.5 0 10.91.42L14.62 18h4.75l1.67 3.7a.5.5 0 00.92-.4l-1.8-4-.01-.02-2.7-5.99zm1.47 5.7h-3.85l1.92-4.28L18.92 17z" fill={primaryFill} /></svg>;
}

const ClipboardLetter24Regular = wrapIcon(rawSvg({}), 'ClipboardLetter24Regular');
export default ClipboardLetter24Regular;
      