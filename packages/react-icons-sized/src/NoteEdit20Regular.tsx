import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 14.18A3 3 0 006 17h2l.06-.35.16-.65H5.85A2 2 0 014 14v-4h3.18A3 3 0 0010 7V4h4.15A2 2 0 0116 6v2c.34-.01.68.03 1 .13V5.82A3 3 0 0014 3H9.45a2 2 0 00-1.24.59L3.59 8.2l-.12.13A2 2 0 003 9.62v4.56zM7 9H4.22a1 1 0 01.07-.09L8.91 4.3 9 4.22V7.15A2 2 0 017 9zm2.98 5.38l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" fill={primaryFill} /></svg>;
}

const NoteEdit20Regular = wrapIcon(rawSvg({}), 'NoteEdit20Regular');
export default NoteEdit20Regular;
      