import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 17.25V16h-2.67c.11.48.17.98.17 1.5h2.25c.14 0 .25-.11.25-.25zm0-2.75h-3.23c-.22-.41-.48-.8-.77-1.15V13h3.75c.14 0 .25.11.25.25v1.25zm-9-3.5c.89 0 1.73.18 2.5.5h6.25c.97 0 1.75.78 1.75 1.75v4c0 .97-.78 1.75-1.75 1.75h-2.42a6.49 6.49 0 01-1.64 3H18a2 2 0 002-2V10h-6a2 2 0 01-2-2V2H6a2 2 0 00-2 2v7.5c.77-.32 1.61-.5 2.5-.5zm7-3V2.5l6 6H14a.5.5 0 01-.5-.5zM12 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-2.15-2.35a.5.5 0 00-.7 0L5.5 18.79l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const DocumentTableCheckmark24Filled = wrapIcon(rawSvg({}), 'DocumentTableCheckmark24Filled');
export default DocumentTableCheckmark24Filled;
      