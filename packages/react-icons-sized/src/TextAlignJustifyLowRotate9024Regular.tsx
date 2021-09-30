import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 13c.41 0 .75.34.75.75v7.5a.75.75 0 01-1.5 0v-7.5c0-.41.34-.75.75-.75zm-13-11c.41 0 .75.34.75.75v18.5a.75.75 0 01-1.5 0V2.75c0-.41.34-.75.75-.75zm7.25 11.75a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5z" fill={primaryFill} /></svg>;
}

const TextAlignJustifyLowRotate9024Regular = wrapIcon(rawSvg({}), 'TextAlignJustifyLowRotate9024Regular');
export default TextAlignJustifyLowRotate9024Regular;
      