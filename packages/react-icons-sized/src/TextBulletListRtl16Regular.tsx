import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4.5a1 1 0 110-2 1 1 0 010 2zM14 9a1 1 0 110-2 1 1 0 010 2zm-1 3.5a1 1 0 102 0 1 1 0 00-2 0zM10.5 3a.5.5 0 010 1h-9a.5.5 0 010-1h9zm.5 5a.5.5 0 00-.5-.5h-9a.5.5 0 000 1h9A.5.5 0 0011 8zm-.5 4a.5.5 0 010 1h-9a.5.5 0 010-1h9z" fill={primaryFill} /></svg>;
}

const TextBulletListRtl16Regular = wrapIcon(rawSvg({}), 'TextBulletListRtl16Regular');
export default TextBulletListRtl16Regular;
      