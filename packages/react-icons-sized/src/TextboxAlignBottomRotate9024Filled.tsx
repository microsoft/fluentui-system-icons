import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 18.25A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5zM10.5 6.75v-.1a.75.75 0 00-1.5.1v10.6a.75.75 0 001.5-.1V6.75zm-3 10.5V6.65a.75.75 0 00-1.5.1v10.6a.75.75 0 001.5-.1z" fill={primaryFill} /></svg>;
}

const TextboxAlignBottomRotate9024Filled = wrapIcon(rawSvg({}), 'TextboxAlignBottomRotate9024Filled');
export default TextboxAlignBottomRotate9024Filled;
      