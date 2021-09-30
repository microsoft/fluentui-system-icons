import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M41.45 6.34c.34.27.55.7.55 1.16v12a1.5 1.5 0 01-3 0v-8.38l-9.44 9.44a1.5 1.5 0 11-2.12-2.12L36.88 9H28.5a1.5 1.5 0 010-3h11.98a1.5 1.5 0 01.97.34zM12.5 9A3.5 3.5 0 009 12.5v23a3.5 3.5 0 003.5 3.5h23a3.5 3.5 0 003.5-3.5v-8a1.5 1.5 0 113 0v8a6.5 6.5 0 01-6.5 6.5h-23A6.5 6.5 0 016 35.5v-23A6.5 6.5 0 0112.5 6h8a1.5 1.5 0 010 3h-8z" fill={primaryFill} /></svg>;
}

const Open48Filled = wrapIcon(rawSvg({}), 'Open48Filled');
export default Open48Filled;
      