import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.5a1 1 0 012 0v6c0 3.46 1.32 5 4.25 5 2.93 0 4.25-1.54 4.25-5v-6a1 1 0 112 0v6c0 4.54-2.18 7-6.25 7-4.08 0-6.25-2.46-6.25-7v-6zM7 21a1 1 0 110-2h10.5a1 1 0 110 2H7z" fill={primaryFill} /></svg>;
}

const TextUnderline24Filled = wrapIcon(rawSvg({}), 'TextUnderline24Filled');
export default TextUnderline24Filled;
      