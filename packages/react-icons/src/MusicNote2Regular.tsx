import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.7 2.23a1 1 0 011.3.95V13.5a2.5 2.5 0 11-1-2V6.18L8 8.37v7.13a2.5 2.5 0 11-1-2V5.37a1 1 0 01.7-.96l7-2.18zM8 7.32l7-2.19V3.18L8 5.37v1.95zM5.5 14a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.5-.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" fill={primaryFill} /></svg>;
}

const MusicNote2Regular = wrapIcon(rawSvg({}), 'MusicNote2Regular');
export default MusicNote2Regular;
      