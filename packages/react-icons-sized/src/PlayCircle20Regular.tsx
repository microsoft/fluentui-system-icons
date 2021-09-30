import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.13 7.18A.75.75 0 008 7.83v4.34c0 .57.63.94 1.13.65l4.12-2.39a.5.5 0 000-.86L9.13 7.18zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 100 14 7 7 0 000-14z" fill={primaryFill} /></svg>;
}

const PlayCircle20Regular = wrapIcon(rawSvg({}), 'PlayCircle20Regular');
export default PlayCircle20Regular;
      