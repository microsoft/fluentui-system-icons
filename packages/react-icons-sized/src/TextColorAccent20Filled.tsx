import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 13.13c0-.35.24-.63.54-.63h11.92c.3 0 .54.28.54.63v3.74c0 .35-.24.63-.54.63H4.04c-.3 0-.54-.28-.54-.63v-3.75z" fill={primaryFill} /></svg>;
}

const TextColorAccent20Filled = wrapIcon(rawSvg({}), 'TextColorAccent20Filled');
export default TextColorAccent20Filled;
      