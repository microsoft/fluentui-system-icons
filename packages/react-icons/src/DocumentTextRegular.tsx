import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 10a.5.5 0 000 1h7a.5.5 0 000-1h-7zm0 2a.5.5 0 000 1h7a.5.5 0 000-1h-7zm0 2a.5.5 0 000 1h7a.5.5 0 000-1h-7zM4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V8h-3.5A1.5 1.5 0 0110 6.5V3H6zm5.5 4h3.3L11 3.2v3.3c0 .28.22.5.5.5z" fill={primaryFill} /></svg>;
}

const DocumentTextRegular = wrapIcon(rawSvg({}), 'DocumentTextRegular');
export default DocumentTextRegular;
      