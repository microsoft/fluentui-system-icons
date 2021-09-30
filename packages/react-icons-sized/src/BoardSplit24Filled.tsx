import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25V11h11V3H6.25zM3 17.75V12.5h11V21H6.25A3.25 3.25 0 013 17.75zM15.5 16v5h2.25c1.8 0 3.25-1.46 3.25-3.25V16h-5.5zm5.5-1.5v-5h-5.5v5H21zM21 8h-5.5V3h2.25C19.55 3 21 4.46 21 6.25V8z" fill={primaryFill} /></svg>;
}

const BoardSplit24Filled = wrapIcon(rawSvg({}), 'BoardSplit24Filled');
export default BoardSplit24Filled;
      