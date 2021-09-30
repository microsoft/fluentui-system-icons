import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v5.77c-.46-.3-.97-.53-1.5-.7V6.24c0-.97-.78-1.75-1.75-1.75H6.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h5.06c.18.53.42 1.04.71 1.5H6.25A3.25 3.25 0 013 17.75V6.25zm9 11.25a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zm6.65-2.15a.5.5 0 01.7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 01-.7-.7l.64-.65h-2.04C16.01 17 15 18 15 19.25v.25a.5.5 0 01-1 0v-.25c0-1.8 1.46-3.25 3.25-3.25h2.04l-.64-.65z" fill={primaryFill} /></svg>;
}

const SquareArrowForward24Regular = wrapIcon(rawSvg({}), 'SquareArrowForward24Regular');
export default SquareArrowForward24Regular;
      