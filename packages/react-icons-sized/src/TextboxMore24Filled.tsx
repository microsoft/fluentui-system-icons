import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 3A2.75 2.75 0 0121 5.75v12.3a2.5 2.5 0 00-1.5.95 2.5 2.5 0 00-4 0 2.5 2.5 0 00-4.45 2h-5.3A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h12.5zM15 12.25a.75.75 0 00-.75-.75h-7.6a.75.75 0 00.1 1.5h7.6a.75.75 0 00.65-.75zm2.25 3.25H6.65a.75.75 0 00.1 1.5h10.6a.75.75 0 00-.1-1.5zM18 8.25a.75.75 0 00-.75-.75H6.65a.75.75 0 00.1 1.5h10.6a.75.75 0 00.65-.75zM13.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm4 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5.5-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /></svg>;
}

const TextboxMore24Filled = wrapIcon(rawSvg({}), 'TextboxMore24Filled');
export default TextboxMore24Filled;
      