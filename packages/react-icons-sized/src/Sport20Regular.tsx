import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.43 5.75l-.2.58c.32.1.64.2.96.32.18-.65.5-1.27.94-1.81L11.29 8l-.6.6a7.2 7.2 0 01.72.7l.59-.6 3.16 3.17c-.54.44-1.15.76-1.79.94.12.32.22.64.32.95a5.97 5.97 0 004.1-7.32 6.01 6.01 0 00-11.36-.69zm10.2.38a2 2 0 01-2.11.06l1.35-1.35c.33.4.58.83.77 1.3zm-2.83.78a3 3 0 003.12.21 5 5 0 01-1.05 4.04L12.71 8l1.09-1.09zm-.71-.7L12 7.28 8.84 4.13a5 5 0 014.03-1.05 3 3 0 00.22 3.12zm.72-.73a2 2 0 01.06-2.12c.46.19.9.44 1.3.77L13.8 5.48zm-7.66 5.67c.2-.2.5-.2.7 0l2 2a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7zm-4.1-2.27a1.7 1.7 0 012.03-2.07c.91.19 2.07.49 3.2.94a9.3 9.3 0 013.1 1.91 9.2 9.2 0 011.9 3.1c.45 1.14.75 2.29.93 3.2a1.7 1.7 0 01-2.07 2.02c-1.75-.4-4.53-1.23-6.19-2.89-1.65-1.65-2.5-4.44-2.9-6.2zm1.82-1.1a.7.7 0 00-.85.88c.4 1.76 1.2 4.29 2.64 5.72 1.44 1.44 3.96 2.23 5.7 2.63a.7.7 0 00.87-.85c-.18-.88-.46-1.97-.87-3.02a8.21 8.21 0 00-1.69-2.77c-.7-.7-1.7-1.26-2.77-1.69a18.53 18.53 0 00-3.03-.9z" fill={primaryFill} /></svg>;
}

const Sport20Regular = wrapIcon(rawSvg({}), 'Sport20Regular');
export default Sport20Regular;
      