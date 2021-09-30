import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 14.75C2 16.55 3.46 18 5.25 18H6v3a1 1 0 001.58.82l2.59-1.84.35-1.4c.16-.65.5-1.24.97-1.72l5.9-5.9a3.29 3.29 0 014.61-.04V6.25C22 4.45 20.54 3 18.75 3H5.25A3.25 3.25 0 002 6.25v8.5z" fill={primaryFill} /><path d="M18.1 11.67l-5.9 5.9c-.35.35-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 10-3.23-3.24z" fill={primaryFill} /></svg>;
}

const CommentEdit24Filled = wrapIcon(rawSvg({}), 'CommentEdit24Filled');
export default CommentEdit24Filled;
      