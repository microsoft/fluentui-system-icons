import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v5.84l-.63-1.44a1.5 1.5 0 00-.37-.51V4.5a.5.5 0 00-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 01-1.41-1H5.5a.5.5 0 00-.5.5v12c0 .28.22.5.5.5h3.59a1.5 1.5 0 000 1H5.5A1.5 1.5 0 014 16.5v-12C4 3.67 4.67 3 5.5 3h1.59zM8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M14.45 9.3a.5.5 0 00-.91 0l-3.5 8a.5.5 0 00.92.4l1.18-2.7h3.72l1.18 2.7a.5.5 0 00.92-.4l-3.5-8zm.97 4.7h-2.85L14 10.75 15.42 14z" fill={primaryFill} /></svg>;
}

const ClipboardLetter20Regular = wrapIcon(rawSvg({}), 'ClipboardLetter20Regular');
export default ClipboardLetter20Regular;
      