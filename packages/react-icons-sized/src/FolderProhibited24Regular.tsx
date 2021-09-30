import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 11a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm3.3 3.25l-5.55 5.56a4 4 0 005.56-5.56zM8.2 4c.47 0 .92.14 1.3.4l.15.12 2.37 1.98h7.73c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v3.06a6.52 6.52 0 00-1.5-1.08V8.75c0-.38-.28-.7-.65-.74l-.1-.01h-7.73L9.65 9.98c-.36.3-.8.47-1.25.51l-.2.01H3.5v7.25c0 .38.28.7.65.74l.1.01h7.06c.18.53.42 1.04.71 1.5H4.25c-1.2 0-2.17-.93-2.24-2.1L2 17.75V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h3.96zm9.3 8.5a4 4 0 00-3.3 6.25l5.55-5.56a3.98 3.98 0 00-2.25-.69zm-9.3-7H4.26c-.38 0-.7.28-.74.65l-.01.1V9h4.7c.15 0 .28-.04.4-.11l.09-.06 1.89-1.58-1.9-1.58a.75.75 0 00-.37-.16l-.1-.01z" fill={primaryFill} /></svg>;
}

const FolderProhibited24Regular = wrapIcon(rawSvg({}), 'FolderProhibited24Regular');
export default FolderProhibited24Regular;
      