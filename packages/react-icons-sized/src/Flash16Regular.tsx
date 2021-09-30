import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.97 1.54c.09-.32.38-.54.72-.54h4.95c.52 0 .89.52.7 1.01L10.22 5h2.2c.66 0 1 .79.55 1.26l-8.1 8.58a.5.5 0 01-.85-.46L5.36 9H3.83a.75.75 0 01-.72-.96l1.86-6.5zm.9.46l-1.7 6H6a.5.5 0 01.49.62l-1.04 4.15L11.84 6H9.5a.5.5 0 01-.47-.68L10.28 2h-4.4z" fill={primaryFill} /></svg>;
}

const Flash16Regular = wrapIcon(rawSvg({}), 'Flash16Regular');
export default Flash16Regular;
      