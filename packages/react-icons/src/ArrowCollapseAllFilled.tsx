import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.75c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm3.22 2.22c.3-.3.77-.3 1.06 0l2.75 2.75a.75.75 0 11-1.06 1.06L6.5 9.31v6.44a.75.75 0 01-1.5 0V9.31l-1.47 1.47a.75.75 0 11-1.06-1.06l2.75-2.75zm4.28.78c0-.41.34-.75.75-.75h7a.75.75 0 010 1.5h-7a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const ArrowCollapseAllFilled = wrapIcon(rawSvg({}), 'ArrowCollapseAllFilled');
export default ArrowCollapseAllFilled;
      