import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.63 14.09a1.25 1.25 0 11-1.76-1.77 1.25 1.25 0 011.76 1.77zm6.52-11.37c.68-.69 1.79-.69 2.47 0l.7.7c.7.69.7 1.8 0 2.48l-5.1 5.1c.92 1.34.47 3.24-1.04 4l-.84.41a.6.6 0 00-.32.67l.01.07a4.7 4.7 0 01-1.79 4.69 6.03 6.03 0 01-7.88-.56l-.6-.6a6.03 6.03 0 01-.55-7.88 4.7 4.7 0 014.69-1.79l.07.02a.6.6 0 00.66-.33l.42-.83a2.75 2.75 0 014-1.05l5.1-5.1zm1.41 1.06a.25.25 0 00-.35 0l-1.19 1.18 1.06 1.06 1.19-1.18c.1-.1.1-.26 0-.36l-.71-.7zm-1.54 3.3l-1.06-1.06-3.35 3.35c-.3.3-.77.3-1.06 0l-.16-.16c-.6-.6-1.62-.43-2 .33l-.42.83a2.1 2.1 0 01-2.3 1.13l-.07-.02a3.2 3.2 0 00-3.2 1.22 4.53 4.53 0 00.43 5.92l.6.6a4.53 4.53 0 005.91.42 3.2 3.2 0 001.22-3.2l-.01-.07a2.1 2.1 0 011.12-2.3l.84-.41c.76-.39.92-1.4.32-2l-.16-.17a.75.75 0 010-1.06l3.35-3.35z" fill={primaryFill} /></svg>;
}

const Guitar24Regular = wrapIcon(rawSvg({}), 'Guitar24Regular');
export default Guitar24Regular;
      