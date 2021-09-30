import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 6a1 1 0 00-1-1v6a3 3 0 01-3 3H5a1 1 0 001 1h4.21c2.1 0 3.79-1.7 3.79-3.79V6zM5 1a2 2 0 00-2 2v8c0 1.1.9 2 2 2h5a2 2 0 002-2V4.41c0-.4-.16-.78-.44-1.06L9.64 1.44A1.5 1.5 0 008.58 1H5zm5 11H5a1 1 0 01-1-1V3a1 1 0 011-1h3v1.5C8 4.33 8.67 5 9.5 5H11v6a1 1 0 01-1 1zm.8-8H9.5a.5.5 0 01-.5-.5V2.2L10.8 4z" fill={primaryFill} /></svg>;
}

const DocumentMultiple16Regular = wrapIcon(rawSvg({}), 'DocumentMultiple16Regular');
export default DocumentMultiple16Regular;
      