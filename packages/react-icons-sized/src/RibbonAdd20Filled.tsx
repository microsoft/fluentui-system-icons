import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H15V3.5zm-6 2c0-1.28.44-2.45 1.17-3.39A6 6 0 1014.2 11 5.5 5.5 0 019 5.5zM9 15c1.49 0 2.87-.46 4-1.25v3.75a.5.5 0 01-.8.4L9 16l-3.2 1.9a.5.5 0 01-.8-.4v-3.75A6.97 6.97 0 009 15z" fill={primaryFill} /></svg>;
}

const RibbonAdd20Filled = wrapIcon(rawSvg({}), 'RibbonAdd20Filled');
export default RibbonAdd20Filled;
      