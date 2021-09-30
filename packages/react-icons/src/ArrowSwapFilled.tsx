import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.78 3.22a.75.75 0 10-1.06 1.06L13.44 6H4.75a.75.75 0 000 1.5h8.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3z" fill={primaryFill} /><path d="M8.28 10.78a.75.75 0 10-1.06-1.06l-3 3a.75.75 0 000 1.06l3 3a.75.75 0 001.06-1.06L6.56 14h8.69a.75.75 0 000-1.5H6.56l1.72-1.72z" fill={primaryFill} /></svg>;
}

const ArrowSwapFilled = wrapIcon(rawSvg({}), 'ArrowSwapFilled');
export default ArrowSwapFilled;
      