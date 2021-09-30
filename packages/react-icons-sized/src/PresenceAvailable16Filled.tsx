import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.7-9.3l-4 4a1 1 0 01-1.41 0l-2-2a1 1 0 111.42-1.4L7 8.58l3.3-3.3a1 1 0 011.4 1.42z" fill={primaryFill} /></svg>;
}

const PresenceAvailable16Filled = wrapIcon(rawSvg({}), 'PresenceAvailable16Filled');
export default PresenceAvailable16Filled;
      