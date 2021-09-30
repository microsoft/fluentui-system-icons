import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 5.75c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zm-11 13c0-.41.34-.75.75-.75h18.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm11.75-7.25a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" fill={primaryFill} /></svg>;
}

const TextAlignJustifyLow24Regular = wrapIcon(rawSvg({}), 'TextAlignJustifyLow24Regular');
export default TextAlignJustifyLow24Regular;
      