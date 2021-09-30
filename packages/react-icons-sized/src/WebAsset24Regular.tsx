import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 3C20.55 3 22 4.46 22 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 17.75V6.25C2 4.45 3.46 3 5.25 3h13.5zm0 1.5H5.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h13.5c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75zm-12 2h10.5a.75.75 0 01.1 1.5H6.76a.75.75 0 01-.1-1.5h10.6-10.5z" fill={primaryFill} /></svg>;
}

const WebAsset24Regular = wrapIcon(rawSvg({}), 'WebAsset24Regular');
export default WebAsset24Regular;
      