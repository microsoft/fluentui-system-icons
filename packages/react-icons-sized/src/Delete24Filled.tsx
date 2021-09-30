import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.5 6a1 1 0 01-.88 1h-.96l-1.24 12.52A2.75 2.75 0 0115.7 22H8.3a2.75 2.75 0 01-2.73-2.48L4.34 7H3.5a1 1 0 010-2h5a3.5 3.5 0 117 0h5a1 1 0 011 1zm-7.25 3.25c-.38 0-.7.28-.74.65l-.01.1v7.1a.75.75 0 001.5 0V9.9a.75.75 0 00-.75-.65zm-4.5 0c-.38 0-.7.28-.74.65L9 10v7.1a.75.75 0 001.5 0V9.9a.75.75 0 00-.75-.65zM12 3.5c-.83 0-1.5.67-1.5 1.5h3c0-.83-.67-1.5-1.5-1.5z" fill={primaryFill} /></svg>;
}

const Delete24Filled = wrapIcon(rawSvg({}), 'Delete24Filled');
export default Delete24Filled;
      