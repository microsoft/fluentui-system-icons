import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4c0-1.1.9-2 2-2h3.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V14a2 2 0 01-2 2h-2.17a3 3 0 00-.6-1H13a1 1 0 001-1V8h-3.5A1.5 1.5 0 019 6.5V3H6a1 1 0 00-1 1v5.76a3 3 0 00-1-.59V4zm6-.8v3.3c0 .28.22.5.5.5h3.3L10 3.2zM8 15a2 2 0 110 4 2 2 0 010-4zm-1 2a1 1 0 001 1 1 1 0 10-1-1zm4 0a3 3 0 01-.17 1h2.23A3.94 3.94 0 0017 14.06V9a1 1 0 00-1-1v6a3 3 0 01-3 3h-2zm-8.15.85a.5.5 0 01-.7-.7l6-6a.5.5 0 01.7.7l-6 6zM5 12a2 2 0 11-4 0 2 2 0 014 0zm-1 0a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const DocumentMultiplePercent20Regular = wrapIcon(rawSvg({}), 'DocumentMultiplePercent20Regular');
export default DocumentMultiplePercent20Regular;
      