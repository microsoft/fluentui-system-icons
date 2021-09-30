import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.72 11c.42 0 .85.08 1.25.25A10 10 0 1011 21.95c0-.18.02-.36.06-.54l.46-1.83c.16-.65.5-1.24.97-1.72l5.9-5.9a3.28 3.28 0 012.32-.96zm0 1c-.6 0-1.18.22-1.62.67l-5.9 5.9c-.35.35-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9A2.29 2.29 0 0020.72 12z" fill={primaryFill} /></svg>;
}

const CircleEdit24Filled = wrapIcon(rawSvg({}), 'CircleEdit24Filled');
export default CircleEdit24Filled;
      