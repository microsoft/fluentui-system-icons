import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 7v4a.5.5 0 001 0V7a.5.5 0 00-1 0z" fill={primaryFill} /><path d="M9 6.5c.28 0 .5.22.5.5v4a.5.5 0 01-1 0V7c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M10 4h3a.5.5 0 010 1h-.55l-.76 6.78A2.5 2.5 0 019.21 14H6.79a2.5 2.5 0 01-2.48-2.22L3.55 5H3a.5.5 0 010-1h3a2 2 0 114 0zM8 3a1 1 0 00-1 1h2a1 1 0 00-1-1zM4.56 5l.74 6.67A1.5 1.5 0 006.79 13h2.42c.76 0 1.4-.57 1.5-1.33L11.43 5H4.56z" fill={primaryFill} /></svg>;
}

const Delete16Regular = wrapIcon(rawSvg({}), 'Delete16Regular');
export default Delete16Regular;
      