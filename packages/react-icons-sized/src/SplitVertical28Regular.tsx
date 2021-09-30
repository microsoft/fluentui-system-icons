import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 25.25a.75.75 0 001.5 0V2.75a.75.75 0 00-1.5 0v22.5zM4.75 4A2.75 2.75 0 002 6.75v14.5A2.75 2.75 0 004.75 24H12v-1.5H4.75c-.69 0-1.25-.56-1.25-1.25V6.75c0-.69.56-1.25 1.25-1.25H12V4H4.75zm18 18.5H15.5V24h7.25a2.75 2.75 0 002.75-2.75V6.75A2.75 2.75 0 0022.75 4H15.5v1.5h7.25c.69 0 1.25.56 1.25 1.25v14.5c0 .69-.56 1.25-1.25 1.25z" fill={primaryFill} /></svg>;
}

const SplitVertical28Regular = wrapIcon(rawSvg({}), 'SplitVertical28Regular');
export default SplitVertical28Regular;
      