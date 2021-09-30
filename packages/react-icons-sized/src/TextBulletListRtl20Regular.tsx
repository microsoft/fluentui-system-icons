import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 6.5a1 1 0 110-2 1 1 0 010 2zm-3-1a.5.5 0 00-.5-.5h-11a.5.5 0 000 1h11a.5.5 0 00.5-.5zm0 5a.5.5 0 00-.5-.5h-11a.5.5 0 000 1h11a.5.5 0 00.5-.5zm-.5 4.5a.5.5 0 010 1h-11a.5.5 0 010-1h11zm2.5.5a1 1 0 102 0 1 1 0 00-2 0zm1-4a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const TextBulletListRtl20Regular = wrapIcon(rawSvg({}), 'TextBulletListRtl20Regular');
export default TextBulletListRtl20Regular;
      