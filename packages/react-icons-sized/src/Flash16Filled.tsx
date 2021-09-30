import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.97 1.54c.09-.32.38-.54.72-.54h4.95c.52 0 .89.52.7 1.01L10.22 5h2.2c.66 0 1 .79.55 1.26l-8.1 8.58a.5.5 0 01-.85-.46L5.36 9H3.83a.75.75 0 01-.72-.96l1.86-6.5z" fill={primaryFill} /></svg>;
}

const Flash16Filled = wrapIcon(rawSvg({}), 'Flash16Filled');
export default Flash16Filled;
      