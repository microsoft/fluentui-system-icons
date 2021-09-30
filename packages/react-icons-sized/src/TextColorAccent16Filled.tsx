import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 11.17c0-.37.25-.67.55-.67h9.9c.3 0 .55.3.55.67v2.66c0 .37-.25.67-.55.67h-9.9c-.3 0-.55-.3-.55-.67v-2.66z" fill={primaryFill} /></svg>;
}

const TextColorAccent16Filled = wrapIcon(rawSvg({}), 'TextColorAccent16Filled');
export default TextColorAccent16Filled;
      