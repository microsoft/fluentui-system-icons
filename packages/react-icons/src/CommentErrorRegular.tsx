import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 3a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm0 5.13a.62.62 0 100-1.25.62.62 0 000 1.25zM17 10.4v1.88c0 .85-.7 1.56-1.6 1.56h-4.92L6.21 17H6.2v-3.16H4.6c-.9 0-1.6-.71-1.6-1.56V5.57C3 4.7 3.7 4 4.6 4h4.6c.1-.35.24-.68.4-1h-5A2.58 2.58 0 002 5.57v6.7a2.58 2.58 0 002.6 2.57h.6v2.17c0 .22.07.42.2.6a1 1 0 001.4.2l4.01-2.97h4.59c1.44 0 2.6-1.15 2.6-2.56V9.74c-.3.26-.64.48-1 .66z" fill={primaryFill} /></svg>;
}

const CommentErrorRegular = wrapIcon(rawSvg({}), 'CommentErrorRegular');
export default CommentErrorRegular;
      