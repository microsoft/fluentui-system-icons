import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 13h11a.5.5 0 00.42-.78L13.1 8l2.82-4.22A.5.5 0 0015.5 3H4a.5.5 0 00-.5.5v14a.5.5 0 001 0V13z" fill={primaryFill} /></svg>;
}

const Flag20Filled = wrapIcon(rawSvg({}), 'Flag20Filled');
export default Flag20Filled;
      