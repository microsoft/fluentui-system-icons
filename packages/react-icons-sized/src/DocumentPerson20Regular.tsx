import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 01-2 2H9.25c.21-.3.38-.64.5-1H14a1 1 0 001-1V8h-3.5A1.5 1.5 0 0110 6.5V3H6a1 1 0 00-1 1v4a3 3 0 00-1 .17V4zm7.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5zM7 11a2 2 0 10-4 0 2 2 0 004 0zm-6 4.5a3.83 3.83 0 00.32 1.5c.21.44.52.81.9 1.11.73.6 1.73.89 2.78.89 1.05 0 2.05-.29 2.79-.89.75-.6 1.21-1.5 1.21-2.61 0-.83-.67-1.5-1.5-1.5h-5c-.83 0-1.5.67-1.5 1.5z" fill={primaryFill} /></svg>;
}

const DocumentPerson20Regular = wrapIcon(rawSvg({}), 'DocumentPerson20Regular');
export default DocumentPerson20Regular;
      