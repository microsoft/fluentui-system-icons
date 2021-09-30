import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 2a3.25 3.25 0 00-3.24 3h9.74C17.1 5 19 6.9 19 9.25v1.92c1.15.27 2.18.85 3 1.64V6.75A4.75 4.75 0 0017.25 2h-9zM18 9.25v1.77A6.5 6.5 0 0011.17 19h-.5L7 21.75c-.82.62-2 .03-2-1v-1.76a3.25 3.25 0 01-3-3.24v-6.5A3.25 3.25 0 015.25 6h9.5C16.55 6 18 7.46 18 9.25zm5 8.25a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-2.15-2.35c.2.2.2.5 0 .7l-4 4a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7l1.65 1.64 3.65-3.64c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const CommentMultipleCheckmark24Filled = wrapIcon(rawSvg({}), 'CommentMultipleCheckmark24Filled');
export default CommentMultipleCheckmark24Filled;
      