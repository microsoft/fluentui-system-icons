import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 3C4.01 3 3 4 3 5.25v13.5C3 19.99 4 21 5.25 21h5.91l.36-1.42.02-.08H5.25a.75.75 0 01-.75-.75V5.25c0-.41.34-.75.75-.75h13.5c.41 0 .75.34.75.75v5.98c.48-.19 1-.26 1.5-.22V5.25C21 4.01 20 3 18.75 3H5.25zm10.1 12h-4.1a.75.75 0 100 1.5h2.6l1.5-1.5zm-6.6-6.75a1 1 0 11-2 0 1 1 0 012 0zm2.5-.75a.75.75 0 100 1.5h5.5a.75.75 0 100-1.5h-5.5zm0 3.75a.75.75 0 100 1.5h5.5a.75.75 0 100-1.5h-5.5zM7.75 13a1 1 0 100-2 1 1 0 000 2zm1 2.75a1 1 0 11-2 0 1 1 0 012 0zm10.35-3.08l-5.9 5.9c-.35.34-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
}

const TextBulletListSquareEdit24Regular = wrapIcon(rawSvg({}), 'TextBulletListSquareEdit24Regular');
export default TextBulletListSquareEdit24Regular;
      