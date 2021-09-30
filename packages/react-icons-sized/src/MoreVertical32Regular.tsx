import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0 9a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM13.5 25a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" fill={primaryFill} /></svg>;
}

const MoreVertical32Regular = wrapIcon(rawSvg({}), 'MoreVertical32Regular');
export default MoreVertical32Regular;
      