import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 16.75c0-.41.34-.75.75-.75h12.5c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75H5.25a.75.75 0 01-.75-.75v-3z" fill={primaryFill} /></svg>;
}

const TextColorAccent24Regular = wrapIcon(rawSvg({}), 'TextColorAccent24Regular');
export default TextColorAccent24Regular;
      