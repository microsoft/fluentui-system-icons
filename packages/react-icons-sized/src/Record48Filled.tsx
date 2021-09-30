import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4a20 20 0 100 40 20 20 0 000-40zm0 33a13 13 0 110-26 13 13 0 010 26z" fill={primaryFill} /></svg>;
}

const Record48Filled = wrapIcon(rawSvg({}), 'Record48Filled');
export default Record48Filled;
      