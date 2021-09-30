import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 3A2.75 2.75 0 0121 5.75v12.3a2.5 2.5 0 00-1.5.95 2.5 2.5 0 00-.14-.17c.09-.17.14-.37.14-.58V5.75c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h5.46a2.5 2.5 0 00-.16 1.5h-5.3A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h12.5zm-4 8.5h-7.6a.75.75 0 00.1 1.5h7.6a.75.75 0 00-.1-1.5zm-7.5 4h10.5a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h.1zm10.5-8H6.65a.75.75 0 00.1 1.5h10.6a.75.75 0 00-.1-1.5zM13.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm4 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5.5-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /></svg>;
}

const TextboxMore24Regular = wrapIcon(rawSvg({}), 'TextboxMore24Regular');
export default TextboxMore24Regular;
      