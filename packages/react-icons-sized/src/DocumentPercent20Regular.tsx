import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 01-2 2h-3.17a3 3 0 00.17-1h3a1 1 0 001-1V8h-3.5A1.5 1.5 0 0110 6.5V3H6a1 1 0 00-1 1v5.76a3 3 0 00-1-.59V4zm7.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5zM5 12a2 2 0 11-4 0 2 2 0 014 0zm-1 0a1 1 0 10-2 0 1 1 0 002 0zm6 5a2 2 0 11-4 0 2 2 0 014 0zm-1 0a1 1 0 10-2 0 1 1 0 002 0zm-.15-5.85c.2.2.2.5 0 .7l-6 6a.5.5 0 01-.7-.7l6-6c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const DocumentPercent20Regular = wrapIcon(rawSvg({}), 'DocumentPercent20Regular');
export default DocumentPercent20Regular;
      