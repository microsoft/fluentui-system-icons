import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm3.15 2.65c.2-.2.5-.2.7 0l2.5 2.5a.5.5 0 01-.7.7L6 8.71v6.79a.5.5 0 01-1 0V8.7l-1.65 1.65a.5.5 0 01-.7-.7l2.5-2.5zM17.5 8h-7a.5.5 0 010-1h7a.5.5 0 010 1z" fill={primaryFill} /></svg>;
}

const ArrowCollapseAll20Regular = wrapIcon(rawSvg({}), 'ArrowCollapseAll20Regular');
export default ArrowCollapseAll20Regular;
      