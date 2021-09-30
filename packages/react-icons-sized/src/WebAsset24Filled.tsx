import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 3C20.55 3 22 4.46 22 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 17.75V6.25C2 4.45 3.46 3 5.25 3h13.5zm-1.5 3.5H6.75a.75.75 0 100 1.5h10.5a.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
}

const WebAsset24Filled = wrapIcon(rawSvg({}), 'WebAsset24Filled');
export default WebAsset24Filled;
      