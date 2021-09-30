import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.25 2c1.16 0 2.11.88 2.24 2h1.27c.91 0 1.67.7 1.74 1.6v3.15a3.25 3.25 0 01-3.06 3.24l-.2.01a5.76 5.76 0 01-4.74 3.95v1.55h1.75a3.25 3.25 0 013.25 3.07V21.25c0 .38-.28.7-.65.74l-.1.01h-10a.75.75 0 01-.74-.65l-.01-.1v-.5a3.25 3.25 0 013.07-3.24l.18-.01H11v-1.55A5.76 5.76 0 016.27 12h-.02A3.25 3.25 0 013 8.75v-3C3 4.78 3.78 4 4.75 4H6c.13-1.12 1.08-2 2.24-2h7zm-1 17h-5c-.83 0-1.53.58-1.7 1.35l-.03.15h8.46a1.75 1.75 0 00-1.57-1.5h-.16zm1-15.5h-7a.75.75 0 00-.75.75v6a4.25 4.25 0 008.5 0v-6a.75.75 0 00-.75-.75zm3.5 2H17.5v4.98c.8-.11 1.43-.76 1.5-1.58V5.75a.25.25 0 00-.19-.24l-.05-.01zM6 5.5H4.75a.25.25 0 00-.25.25v3c0 .88.65 1.61 1.5 1.73V5.5z" fill={primaryFill} /></svg>;
}

const Trophy24Regular = wrapIcon(rawSvg({}), 'Trophy24Regular');
export default Trophy24Regular;
      