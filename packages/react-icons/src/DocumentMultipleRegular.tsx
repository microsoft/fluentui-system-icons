import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4c0-1.1.9-2 2-2h3.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V14a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v10a1 1 0 001 1h7a1 1 0 001-1V8h-3.5A1.5 1.5 0 019 6.5V3H6zm4 .2v3.3c0 .28.22.5.5.5h3.3L10 3.2zM17 9a1 1 0 00-1-1v6a3 3 0 01-3 3H6a1 1 0 001 1h6.06A3.94 3.94 0 0017 14.06V9z" fill={primaryFill} /></svg>;
}

const DocumentMultipleRegular = wrapIcon(rawSvg({}), 'DocumentMultipleRegular');
export default DocumentMultipleRegular;
      