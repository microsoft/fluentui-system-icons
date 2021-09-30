import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.15.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 11-.7-.7L7.79 3a5 5 0 00-2.94 8.88.5.5 0 11-.63.78A5.99 5.99 0 017.8 2l-.65-.65a.5.5 0 010-.7zm3.92 2.76a.5.5 0 01.7-.07A5.99 5.99 0 018.2 14l.65.65a.5.5 0 01-.7.7l-1.5-1.5a.5.5 0 010-.7l1.5-1.5a.5.5 0 01.7.7l-.64.65a5 5 0 002.94-8.88.5.5 0 01-.08-.7z" fill={primaryFill} /></svg>;
}

const ArrowSync16Regular = wrapIcon(rawSvg({}), 'ArrowSync16Regular');
export default ArrowSync16Regular;
      