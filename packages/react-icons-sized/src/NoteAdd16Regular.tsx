import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H6V3.5z" fill={primaryFill} /><path d="M12.5 4h-1.7c-.1-.35-.24-.68-.4-1h2.1A2.5 2.5 0 0115 5.5v4.29c0 .4-.16.78-.44 1.06l-3.71 3.71a1.5 1.5 0 01-1.06.44H5.5A2.5 2.5 0 013 12.5v-2.1c.32.16.65.3 1 .4v1.7c0 .83.67 1.5 1.5 1.5H9v-2a3 3 0 013-3h2V5.5c0-.83-.67-1.5-1.5-1.5zM10 13.95a.5.5 0 00.14-.1l3.71-3.71a.5.5 0 00.1-.14H12a2 2 0 00-2 2v1.95z" fill={primaryFill} /></svg>;
}

const NoteAdd16Regular = wrapIcon(rawSvg({}), 'NoteAdd16Regular');
export default NoteAdd16Regular;
      