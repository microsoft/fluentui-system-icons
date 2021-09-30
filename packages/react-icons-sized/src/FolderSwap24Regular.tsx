import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.2 4c.47 0 .92.14 1.3.4l.15.12 2.37 1.98h7.73c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v8.28l-1.5-1.5V8.75c0-.38-.28-.7-.65-.74l-.1-.01h-7.73L9.65 9.98c-.36.3-.8.47-1.25.51l-.2.01H3.5v7.25c0 .38.28.7.65.74l.1.01h4.77a1.75 1.75 0 00.5 1.5H4.25c-1.2 0-2.17-.93-2.24-2.1L2 17.75V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h3.96zm0 1.5H4.26c-.38 0-.7.28-.74.65l-.01.1V9h4.7c.15 0 .28-.04.4-.11l.09-.06 1.89-1.58-1.9-1.58a.75.75 0 00-.37-.16l-.1-.01z" fill={primaryFill} /><path d="M13.78 16.79a.75.75 0 00-1.06-1.06l-2.5 2.5a.75.75 0 000 1.06l2.5 2.5a.75.75 0 101.06-1.07l-1.22-1.22h6.88l-1.22 1.22a.75.75 0 101.06 1.06l2.5-2.5a.75.75 0 000-1.06l-2.5-2.5a.75.75 0 00-1.06 1.06L19.44 18h-6.87l1.21-1.21z" fill={primaryFill} /></svg>;
}

const FolderSwap24Regular = wrapIcon(rawSvg({}), 'FolderSwap24Regular');
export default FolderSwap24Regular;
      