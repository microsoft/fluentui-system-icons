import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 3C4.01 3 3 4 3 5.25v13.5C3 19.99 4 21 5.25 21h13.5c1.24 0 2.25-1 2.25-2.25V5.25C21 4.01 20 3 18.75 3H5.25zm3.5 5.25a1 1 0 11-2 0 1 1 0 012 0zm1.75 0c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zm0 3.75c0-.41.34-.75.75-.75h5.5a.75.75 0 110 1.5h-5.5a.75.75 0 01-.75-.75zm.75 3h5.5a.75.75 0 110 1.5h-5.5a.75.75 0 110-1.5zm-3.5-2a1 1 0 110-2 1 1 0 010 2zm1 2.75a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const TextBulletListSquare24Filled = wrapIcon(rawSvg({}), 'TextBulletListSquare24Filled');
export default TextBulletListSquare24Filled;
      