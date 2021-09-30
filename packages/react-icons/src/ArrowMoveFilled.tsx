import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.97 4.78c.3.3.77.3 1.06 0l1.22-1.22v3.19a.75.75 0 001.5 0V3.56l1.22 1.22a.75.75 0 101.06-1.06l-2.5-2.5a.75.75 0 00-1.06 0l-2.5 2.5c-.3.3-.3.77 0 1.06z" fill={primaryFill} /><path d="M4.78 8.03a.75.75 0 00-1.06-1.06l-2.5 2.5c-.3.3-.3.77 0 1.06l2.5 2.5a.75.75 0 001.06-1.06l-1.22-1.22h3.19a.75.75 0 000-1.5H3.56l1.22-1.22z" fill={primaryFill} /><path d="M15.22 6.97c.3-.3.77-.3 1.06 0l2.5 2.5c.3.3.3.77 0 1.06l-2.5 2.5a.75.75 0 11-1.06-1.06l1.22-1.22h-3.19a.75.75 0 010-1.5h3.19l-1.22-1.22a.75.75 0 010-1.06z" fill={primaryFill} /><path d="M9.25 16.44l-1.22-1.22a.75.75 0 00-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l2.5-2.5a.75.75 0 10-1.06-1.06l-1.22 1.22v-3.19a.75.75 0 00-1.5 0v3.19z" fill={primaryFill} /></svg>;
}

const ArrowMoveFilled = wrapIcon(rawSvg({}), 'ArrowMoveFilled');
export default ArrowMoveFilled;
      