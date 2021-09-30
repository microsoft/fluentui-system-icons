import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.75c0-.42.34-.75.75-.75h16.5c.62 0 .98.7.6 1.2L16.7 9.75l4.16 5.55c.38.5.02 1.2-.6 1.2H4.5v4.75c0 .38-.28.7-.65.74h-.1a.75.75 0 01-.74-.64l-.01-.1V3.75zm15.75.75H4.5V15h14.25l-3.6-4.8a.75.75 0 010-.9l3.6-4.8z" fill={primaryFill} /></svg>;
}

const Flag24Regular = wrapIcon(rawSvg({}), 'Flag24Regular');
export default Flag24Regular;
      