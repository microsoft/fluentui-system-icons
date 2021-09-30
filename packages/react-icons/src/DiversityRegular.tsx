import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 5c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM4.91 3.67c.45-.9 1.73-.9 2.18 0l1.78 3.54c.4.82-.18 1.79-1.1 1.79H4.23c-.9 0-1.5-.97-1.09-1.79l1.78-3.54zm1.28.45a.21.21 0 00-.38 0L4.03 7.66c-.09.17.04.34.2.34h3.55c.15 0 .28-.17.2-.34L6.18 4.12zM9 14a3 3 0 11-6 0 3 3 0 016 0zm-1 0a2 2 0 00-3.02-1.72l2.74 2.74A2 2 0 008 14zm-2 2a2 2 0 001.02-.28l-2.74-2.74A2 2 0 006 16zm7.64-4.91c.23-.12.5-.12.72 0l2.23 1.15c.25.13.41.38.41.66v2.2c0 .28-.16.53-.41.66l-2.23 1.15a.79.79 0 01-.72 0l-2.23-1.15a.75.75 0 01-.41-.66v-2.2c0-.28.16-.53.41-.66l2.23-1.15zM12 13.06v1.88l2 1.03 2-1.03v-1.88l-2-1.03-2 1.03z" fill={primaryFill} /></svg>;
}

const DiversityRegular = wrapIcon(rawSvg({}), 'DiversityRegular');
export default DiversityRegular;
      