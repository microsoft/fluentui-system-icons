import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1.5a.5.5 0 00-1 0v13a.5.5 0 001 0v-13zM1 5c0-1.1.9-2 2-2h3v10H3a2 2 0 01-2-2V5zm8 8h3a2 2 0 002-2V5a2 2 0 00-2-2H9v10z" fill={primaryFill} /></svg>;
}

const SplitVertical16Filled = wrapIcon(rawSvg({}), 'SplitVertical16Filled');
export default SplitVertical16Filled;
      