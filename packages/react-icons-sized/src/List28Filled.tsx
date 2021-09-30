import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 20a1 1 0 110 2H4a1 1 0 110-2h16zm4-7a1 1 0 110 2H4a1 1 0 110-2h20zm-2-7a1 1 0 110 2H4a1 1 0 110-2h18z" fill={primaryFill} /></svg>;
}

const List28Filled = wrapIcon(rawSvg({}), 'List28Filled');
export default List28Filled;
      