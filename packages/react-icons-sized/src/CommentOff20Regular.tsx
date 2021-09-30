import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l.76.77C2.35 4.09 2 4.79 2 5.57v6.7a2.58 2.58 0 002.6 2.57h.6v2.17c0 .22.07.42.2.6a1 1 0 001.4.2l4.01-2.97h3.33l3 3.01a.5.5 0 00.71-.7l-2.3-2.31L3.82 3.12l-.97-.97zm10.29 11.7h-2.66L6.21 17H6.2v-3.16H4.6c-.9 0-1.6-.71-1.6-1.56V5.57c0-.5.24-.95.62-1.24l9.52 9.51z" fill={primaryFill} /><path d="M17 12.28c0 .69-.46 1.28-1.11 1.49l.76.76A2.56 2.56 0 0018 12.28V5.57A2.58 2.58 0 0015.4 3H5.12l1 1h9.28c.9 0 1.6.71 1.6 1.57v6.7z" fill={primaryFill} /></svg>;
}

const CommentOff20Regular = wrapIcon(rawSvg({}), 'CommentOff20Regular');
export default CommentOff20Regular;
      