import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 3.7v4.8a.5.5 0 001 0V3.7l1.15 1.15a.5.5 0 00.7-.7l-2-2a.5.5 0 00-.7 0l-2 2a.5.5 0 00.7.7L15 3.71z" fill={primaryFill} /><path d="M2 4.5c0-.28.22-.5.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M2 9.5c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M2.5 14a.5.5 0 000 1h6a.5.5 0 000-1h-6z" fill={primaryFill} /><path d="M15 16.3v-4.8a.5.5 0 011 0v4.8l1.15-1.15a.5.5 0 01.7.7l-2 2a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7L15 16.29z" fill={primaryFill} /></svg>;
}

const TextLineSpacingRegular = wrapIcon(rawSvg({}), 'TextLineSpacingRegular');
export default TextLineSpacingRegular;
      