import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 1C3.78 1 3 1.78 3 2.75v10.5c0 .97.78 1.75 1.75 1.75h2.59c-.4-.28-.77-.62-1.08-1H4.75a.75.75 0 01-.75-.75V2.75c0-.41.34-.75.75-.75h6.5c.41 0 .75.34.75.75v2.46c.35.1.68.23 1 .39V2.75C13 1.78 12.22 1 11.25 1h-6.5zM6 3a1 1 0 000 2h4a1 1 0 100-2H6zm9 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.85 2.35a.5.5 0 00.35.15.5.5 0 00.35-.15l2-2a.5.5 0 00-.7-.7L11 11.29V8.5a.5.5 0 00-1 0v2.8l-1.15-1.15a.5.5 0 00-.7.7l2 2z" fill={primaryFill} /></svg>;
}

const DocumentHeaderArrowDown16Regular = wrapIcon(rawSvg({}), 'DocumentHeaderArrowDown16Regular');
export default DocumentHeaderArrowDown16Regular;
      