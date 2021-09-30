import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.27 3.98c.27.26.3.68.08.97l-.08.09L8.31 8H10c4.2 0 7.62 3.34 7.75 7.5v.25a.75.75 0 01-1.5 0 6.25 6.25 0 00-6.02-6.25H8.3l2.96 2.96a.75.75 0 01-.97 1.14l-.09-.08-4.24-4.24a.75.75 0 01-.07-.98l.07-.08 4.24-4.24c.3-.3.77-.3 1.06 0zm-9.3 4.24l4.24-4.24a.75.75 0 011.14.98l-.08.08-3.7 3.71 3.7 3.72a.75.75 0 01-.97 1.13l-.09-.07-4.24-4.25a.75.75 0 01-.07-.97l.07-.09 4.24-4.24-4.24 4.24z" fill={primaryFill} /></svg>;
}

const ArrowReplyAll20Filled = wrapIcon(rawSvg({}), 'ArrowReplyAll20Filled');
export default ArrowReplyAll20Filled;
      