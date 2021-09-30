import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.33 2.62a2 2 0 00-3.2.52L8.38 6.6a1.5 1.5 0 01-.78.72L4 8.75a1 1 0 00-.33 1.64L6.3 13 3 16.3v.7h.7L7 13.7l2.61 2.62a1 1 0 001.64-.34l1.43-3.59c.14-.34.4-.62.72-.78l3.46-1.73a2 2 0 00.52-3.2l-4.05-4.06z" fill={primaryFill} /></svg>;
}

const Pin20Filled = wrapIcon(rawSvg({}), 'Pin20Filled');
export default Pin20Filled;
      