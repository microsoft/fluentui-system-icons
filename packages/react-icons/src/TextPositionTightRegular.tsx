import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M3.5 6h2.76c-.2.3-.38.64-.5 1H3.5a.5.5 0 010-1z" fill={primaryFill} /><path d="M3.5 9h2v1h-2a.5.5 0 010-1z" fill={primaryFill} /><path d="M3.5 12h2v1h-2a.5.5 0 010-1z" fill={primaryFill} /><path d="M3.5 15h13a.5.5 0 010 1h-13a.5.5 0 010-1z" fill={primaryFill} /><path d="M16.5 13h-2v-1h2a.5.5 0 010 1z" fill={primaryFill} /><path d="M14.5 9v1h2a.5.5 0 000-1h-2z" fill={primaryFill} /><path d="M13.74 6c.2.3.38.64.5 1h2.26a.5.5 0 000-1h-2.76z" fill={primaryFill} /><path d="M7.5 8.5a2.5 2.5 0 015 0v5a.5.5 0 001 0v-5a3.5 3.5 0 10-7 0v5a.5.5 0 001 0v-5z" fill={primaryFill} /></svg>;
}

const TextPositionTightRegular = wrapIcon(rawSvg({}), 'TextPositionTightRegular');
export default TextPositionTightRegular;
      