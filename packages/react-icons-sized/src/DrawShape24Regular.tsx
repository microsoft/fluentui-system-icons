import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 3.93A2.75 2.75 0 004 6.68v9.57a.75.75 0 101.5 0V6.68c0-.69.56-1.25 1.25-1.25h9.5c.69 0 1.25.56 1.25 1.25v4.6c.47-.21.99-.3 1.5-.27V6.68a2.75 2.75 0 00-2.75-2.75h-9.5z" fill={primaryFill} /><path d="M20.3 12.56l-.12-.1v-.01a2.26 2.26 0 00-2.96.21l-3.8 3.87c-.24.24-.4.53-.5.85l-.59 1.95c-.57.08-1.07.08-1.6 0a.04.04 0 01-.03-.06l.03-.07c.07-.15.19-.4.22-.64a1.1 1.1 0 00-.05-.54 1 1 0 00-.42-.51c-.32-.2-.72-.22-1.07-.2a5.84 5.84 0 00-2.37.65c-.58.27-1.15.54-1.77.54a2 2 0 01-.64-.1c-.12-.04-.26.05-.23.18.06.23.16.54.4.78a1.08 1.08 0 001.1.28c1.45-.43 2.42-.66 3.05-.76.13-.03.23.1.19.23-.06.2-.15.58.03.97.2.41.6.58.95.65a6.86 6.86 0 003.49-.15l.12-.03a13.8 13.8 0 00.6-.2l1.4-.45c.33-.1.64-.3.88-.54l3.8-3.86a2 2 0 00.01-2.83l-.11-.11zm-5.87 5.23a.55.55 0 01.14-.23l3.8-3.87a.63.63 0 01.86-.03c.22.2.25.5.09.74l-.06.07-3.8 3.85a.6.6 0 01-.24.15l-1.1.36.31-1.04z" fill={primaryFill} /></svg>;
}

const DrawShape24Regular = wrapIcon(rawSvg({}), 'DrawShape24Regular');
export default DrawShape24Regular;
      