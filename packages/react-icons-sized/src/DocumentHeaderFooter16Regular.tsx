import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3a1 1 0 000 2h4a1 1 0 100-2H6zm0 8a1 1 0 100 2h4a1 1 0 100-2H6zM4.75 1C3.78 1 3 1.78 3 2.75v10.5c0 .97.78 1.75 1.75 1.75h6.5c.97 0 1.75-.78 1.75-1.75V2.75C13 1.78 12.22 1 11.25 1h-6.5zM4 2.75c0-.41.34-.75.75-.75h6.5c.41 0 .75.34.75.75v10.5c0 .41-.34.75-.75.75h-6.5a.75.75 0 01-.75-.75V2.75z" fill={primaryFill} /></svg>;
}

const DocumentHeaderFooter16Regular = wrapIcon(rawSvg({}), 'DocumentHeaderFooter16Regular');
export default DocumentHeaderFooter16Regular;
      