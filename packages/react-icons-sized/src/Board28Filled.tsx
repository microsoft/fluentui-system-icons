import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 3v6.5H3V6.75A3.75 3.75 0 016.75 3h6.75zM15 3v13.5h10V6.75A3.75 3.75 0 0021.25 3H15zm10 15H15v7h6.25A3.75 3.75 0 0025 21.25V18zm-11.5 7V11H3v10.25A3.75 3.75 0 006.75 25h6.75z" fill={primaryFill} /></svg>;
}

const Board28Filled = wrapIcon(rawSvg({}), 'Board28Filled');
export default Board28Filled;
      