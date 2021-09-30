import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3.5a8.5 8.5 0 00-.7 16.97l-.24.94c-.04.18-.07.36-.06.54a10 10 0 1110.97-10.7 3.29 3.29 0 00-1.53-.24A8.5 8.5 0 0012 3.5zm8.72 8.5c-.6 0-1.18.22-1.62.67l-5.9 5.9c-.35.35-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9A2.29 2.29 0 0020.72 12z" fill={primaryFill} /></svg>;
}

const CircleEdit24Regular = wrapIcon(rawSvg({}), 'CircleEdit24Regular');
export default CircleEdit24Regular;
      