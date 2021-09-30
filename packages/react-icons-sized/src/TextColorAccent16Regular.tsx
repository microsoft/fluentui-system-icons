import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 11.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-2z" fill={primaryFill} /></svg>;
}

const TextColorAccent16Regular = wrapIcon(rawSvg({}), 'TextColorAccent16Regular');
export default TextColorAccent16Regular;
      