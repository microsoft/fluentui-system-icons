import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.2 4c.47 0 .92.14 1.3.4l.15.12 2.37 1.98h9.73c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v6.65c-.44-.48-.95-.9-1.5-1.25v-5.4c0-.38-.28-.7-.65-.74l-.1-.01h-9.73l-2.37 1.98c-.36.3-.8.47-1.25.51l-.2.01H3.5v11.25c0 .38.28.7.65.74l.1.01h9.02c.14.53.35 1.03.6 1.5H4.25c-1.2 0-2.17-.93-2.24-2.1L2 21.75V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h5.96zm0 1.5H4.26c-.38 0-.7.28-.74.65l-.01.1V9h6.7c.15 0 .28-.04.4-.11l.09-.06 1.89-1.58-1.9-1.58a.75.75 0 00-.37-.16l-.1-.01zM20.5 27a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0-1.5a4.98 4.98 0 01-2.97-.97l7-7a5 5 0 01-4.03 7.97zm2.97-9.03l-7 7a5 5 0 017-7z" fill={primaryFill} /></svg>;
}

const FolderProhibited28Regular = wrapIcon(rawSvg({}), 'FolderProhibited28Regular');
export default FolderProhibited28Regular;
      