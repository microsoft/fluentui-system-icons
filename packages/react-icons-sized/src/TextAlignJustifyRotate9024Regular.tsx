import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 2c.41 0 .75.34.75.75v18.5a.75.75 0 01-1.5 0V2.75c0-.41.34-.75.75-.75zm-13 0c.41 0 .75.34.75.75v18.5a.75.75 0 01-1.5 0V2.75c0-.41.34-.75.75-.75zm7.25.75a.75.75 0 00-1.5 0v18.5a.75.75 0 001.5 0V2.75z" fill={primaryFill} /></svg>;
}

const TextAlignJustifyRotate9024Regular = wrapIcon(rawSvg({}), 'TextAlignJustifyRotate9024Regular');
export default TextAlignJustifyRotate9024Regular;
      