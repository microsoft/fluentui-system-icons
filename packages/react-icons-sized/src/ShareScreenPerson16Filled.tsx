import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3A2.5 2.5 0 001 5.5v5A2.5 2.5 0 003.5 13h3.56c-.04-.2-.06-.41-.06-.62a2.3 2.3 0 012.33-2.3h.02A2.99 2.99 0 0111.5 5a3 3 0 012.9 2.25h.6V5.5A2.5 2.5 0 0012.5 3h-9zm10 5a2 2 0 11-4 0 2 2 0 014 0zM8 12.38c0-.72.6-1.3 1.33-1.3h4.34c.74 0 1.33.58 1.33 1.3 0 1.14-.8 2.15-1.96 2.43l-.08.02a6.2 6.2 0 01-2.92 0l-.08-.02A2.52 2.52 0 018 12.38z" fill={primaryFill} /></svg>;
}

const ShareScreenPerson16Filled = wrapIcon(rawSvg({}), 'ShareScreenPerson16Filled');
export default ShareScreenPerson16Filled;
      