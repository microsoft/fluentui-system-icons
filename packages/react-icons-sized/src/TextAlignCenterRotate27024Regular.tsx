import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 4a.75.75 0 00-.75.75v14.5a.75.75 0 001.5 0V4.75A.75.75 0 005.75 4zm13 2a.75.75 0 00-.75.75v10.5a.75.75 0 001.5 0V6.75a.75.75 0 00-.75-.75zM11.5 2.75a.75.75 0 011.5 0v18.5a.75.75 0 01-1.5 0V2.75z" fill={primaryFill} /></svg>;
}

const TextAlignCenterRotate27024Regular = wrapIcon(rawSvg({}), 'TextAlignCenterRotate27024Regular');
export default TextAlignCenterRotate27024Regular;
      