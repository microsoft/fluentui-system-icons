import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 22a.75.75 0 01-.75-.75V5.75a.75.75 0 011.5 0v15.5c0 .41-.34.75-.75.75zm13 0a.75.75 0 01-.75-.75v-10.5a.75.75 0 011.5 0v10.5c0 .41-.34.75-.75.75zm-7.25-.75a.75.75 0 001.5 0V2.75a.75.75 0 00-1.5 0v18.5z" fill={primaryFill} /></svg>;
}

const TextAlignLeftRotate27024Regular = wrapIcon(rawSvg({}), 'TextAlignLeftRotate27024Regular');
export default TextAlignLeftRotate27024Regular;
      