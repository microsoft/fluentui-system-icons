import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 5.21v5.06A2 2 0 1013 12V1.93a.8.8 0 00-1.07-.76l-6.4 2.29A.8.8 0 005 4.2v7.06A2 2 0 106 13V7.35l6-2.14z" fill={primaryFill} /></svg>;
}

const MusicNote216Filled = wrapIcon(rawSvg({}), 'MusicNote216Filled');
export default MusicNote216Filled;
      