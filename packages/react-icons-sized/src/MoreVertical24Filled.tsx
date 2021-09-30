import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 8a2 2 0 110-4 2 2 0 010 4z" fill={primaryFill} /><path d="M12 14a2 2 0 110-4 2 2 0 010 4z" fill={primaryFill} /><path d="M10 18a2 2 0 104 0 2 2 0 00-4 0z" fill={primaryFill} /></svg>;
}

const MoreVertical24Filled = wrapIcon(rawSvg({}), 'MoreVertical24Filled');
export default MoreVertical24Filled;
      