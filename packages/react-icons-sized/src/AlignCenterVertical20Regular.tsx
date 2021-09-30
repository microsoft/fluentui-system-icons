import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 18a.5.5 0 01-.5-.5V16H8a2 2 0 01-2-2v-1c0-1.1.9-2 2-2h2V9H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h4V2.5a.5.5 0 011 0V4h4a2 2 0 012 2v1a2 2 0 01-2 2h-4v2h2a2 2 0 012 2v1a2 2 0 01-2 2h-2v1.5a.5.5 0 01-.5.5zM6 5a1 1 0 00-1 1v1a1 1 0 001 1h9a1 1 0 001-1V6a1 1 0 00-1-1H6zm2 7a1 1 0 00-1 1v1a1 1 0 001 1h5a1 1 0 001-1v-1a1 1 0 00-1-1H8z" fill={primaryFill} /></svg>;
}

const AlignCenterVertical20Regular = wrapIcon(rawSvg({}), 'AlignCenterVertical20Regular');
export default AlignCenterVertical20Regular;
      