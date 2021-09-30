import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2c.71 0 1.42.07 2.1.22.59.13.8.84.38 1.27a2.5 2.5 0 001.2 4.2c.38.08.62.43.58.8l-.01.26a2.5 2.5 0 004.37 1.66.75.75 0 011.31.4A10 10 0 1112 2zm0 1.5a8.5 8.5 0 108.47 9.26l.02-.25v-.16l-.2.09c-.32.14-.67.23-1.04.28l-.27.02-.23.01a4 4 0 01-3.96-3.4l-.02-.2-.01-.19-.15-.06a4 4 0 01-2.34-3.23l-.02-.22v-.2a4 4 0 01.21-1.3l.1-.23.08-.2-.28-.01L12 3.5zM15 16a1 1 0 110 2 1 1 0 010-2zm-7-1a1 1 0 110 2 1 1 0 010-2zm4-4a1 1 0 110 2 1 1 0 010-2zM7 8a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
}

const Cookies24Regular = wrapIcon(rawSvg({}), 'Cookies24Regular');
export default Cookies24Regular;
      