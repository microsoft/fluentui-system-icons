import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.08 6.42A1.75 1.75 0 0128 7.72v32.56c0 1.51-1.8 2.31-2.92 1.3l-8.2-7.36c-.88-.79-2-1.22-3.18-1.22H9a5.25 5.25 0 01-5.25-5.25v-7.5C3.75 17.35 6.1 15 9 15h4.7c1.17 0 2.3-.43 3.18-1.22l8.2-7.36zm7.25 7.98c.47-.5 1.26-.54 1.77-.07l.06.07c-.1-.1-.06-.07-.06-.07v.01l.02.02a2.62 2.62 0 01.18.17c.12.12.27.3.45.51a13.98 13.98 0 01-.63 18.6l-.01.02s.39-.4 0 0a1.25 1.25 0 01-1.71-1.82l.01-.02a4.57 4.57 0 00.43-.47 11.48 11.48 0 00-.43-15.17l-.01-.02a1.25 1.25 0 01-.07-1.76z" fill={primaryFill} /></svg>;
}

const Speaker148Filled = wrapIcon(rawSvg({}), 'Speaker148Filled');
export default Speaker148Filled;
      