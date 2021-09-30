import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm2.5 4.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM6.75 11a.75.75 0 110-1.5.75.75 0 010 1.5zm.75 2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.5 7h4a.5.5 0 010 1h-4a.5.5 0 010-1zM9 10.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm.5 2.5h4a.5.5 0 010 1h-4a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const TextBulletListSquare20Filled = wrapIcon(rawSvg({}), 'TextBulletListSquare20Filled');
export default TextBulletListSquare20Filled;
      