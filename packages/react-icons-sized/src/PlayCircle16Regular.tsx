import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 8a.5.5 0 01-.25.44L7.62 9.92a.75.75 0 01-1.12-.65V6.73c0-.58.62-.94 1.12-.65l2.63 1.48a.5.5 0 01.25.44zM8 2a6 6 0 100 12A6 6 0 008 2zM3 8a5 5 0 1110 0A5 5 0 013 8z" fill={primaryFill} /></svg>;
}

const PlayCircle16Regular = wrapIcon(rawSvg({}), 'PlayCircle16Regular');
export default PlayCircle16Regular;
      