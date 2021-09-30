import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.25C3 4.01 4 3 5.25 3h13.5C19.99 3 21 4 21 5.25v5.76c-.93-.08-1.9.24-2.6.95L15.35 15h-4.11a.75.75 0 100 1.5h2.6l-1.36 1.36c-.47.48-.8 1.07-.97 1.72L11.17 21H5.25C4.01 21 3 20 3 18.75V5.25zm4.75 4a1 1 0 100-2 1 1 0 000 2zm3.5-1.75a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm0 3.75a.75.75 0 100 1.5h5.5a.75.75 0 100-1.5h-5.5zm-4.5.75a1 1 0 102 0 1 1 0 00-2 0zm1 4.75a1 1 0 100-2 1 1 0 000 2zm11.35-4.08l-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
}

const TextBulletListSquareEdit24Filled = wrapIcon(rawSvg({}), 'TextBulletListSquareEdit24Filled');
export default TextBulletListSquareEdit24Filled;
      