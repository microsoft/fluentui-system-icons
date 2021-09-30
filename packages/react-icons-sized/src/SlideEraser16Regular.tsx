import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3.75C1 2.78 1.78 2 2.75 2h10.5c.97 0 1.75.78 1.75 1.75V8h-.07L14 7.07V3.75a.75.75 0 00-.75-.75H2.75a.75.75 0 00-.75.75v6.5c0 .41.34.75.75.75h3.48c-.15.31-.23.66-.23 1H2.75C1.78 12 1 11.22 1 10.25v-6.5zm10.12 3.62a1.25 1.25 0 011.76 0l1.75 1.75c.5.48.5 1.28 0 1.76l-2.57 2.58-3.52-3.52 2.58-2.57zm-3.18 3.17l-.57.58a1.25 1.25 0 000 1.76l1.75 1.75c.48.5 1.28.5 1.76 0l.58-.57-3.52-3.52z" fill={primaryFill} /></svg>;
}

const SlideEraser16Regular = wrapIcon(rawSvg({}), 'SlideEraser16Regular');
export default SlideEraser16Regular;
      