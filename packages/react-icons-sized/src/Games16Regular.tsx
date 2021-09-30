import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 7.5c0-.28.23-.5.5-.5h1V6a.5.5 0 011 0v1h1a.5.5 0 010 1H6v1a.5.5 0 01-1 0V8H4a.5.5 0 01-.5-.5zM11 9a1 1 0 11-2 0 1 1 0 012 0zm0-2a1 1 0 100-2 1 1 0 000 2zM1 7.5A4.5 4.5 0 015.5 3h5a4.5 4.5 0 110 9h-5A4.5 4.5 0 011 7.5zM5.5 4a3.5 3.5 0 100 7h5a3.5 3.5 0 100-7h-5z" fill={primaryFill} /></svg>;
}

const Games16Regular = wrapIcon(rawSvg({}), 'Games16Regular');
export default Games16Regular;
      