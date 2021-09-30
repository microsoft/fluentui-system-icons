import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.28 5.22c.3.3.3.77 0 1.06L3.56 7h2.69a.75.75 0 010 1.5H3.56l.72.72a.75.75 0 11-1.06 1.06l-2-2a.75.75 0 010-1.06l2-2c.3-.3.77-.3 1.06 0zm7.44 0c.3-.3.77-.3 1.06 0l2 2c.3.3.3.77 0 1.06l-2 2a.75.75 0 11-1.06-1.06l.72-.72H9.75a.75.75 0 010-1.5h2.69l-.72-.72a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const ArrowFit16Filled = wrapIcon(rawSvg({}), 'ArrowFit16Filled');
export default ArrowFit16Filled;
      