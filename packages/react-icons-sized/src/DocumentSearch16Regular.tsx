import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 1a2 2 0 00-2 2v2.26c.32-.12.65-.2 1-.23V3a1 1 0 011-1h3v2.5C8 5.33 8.67 6 9.5 6H12v7a1 1 0 01-1 1h-.09c.12.32.12.68 0 1H11a2 2 0 002-2V5.41c0-.4-.16-.78-.44-1.06L9.65 1.44A1.5 1.5 0 008.59 1H5zm6.8 4H9.5a.5.5 0 01-.5-.5V2.2L11.8 5zm-5.2 7.3a3.5 3.5 0 11.7-.7l2.55 2.55a.5.5 0 01-.7.7L6.6 12.3zM7 9.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" fill={primaryFill} /></svg>;
}

const DocumentSearch16Regular = wrapIcon(rawSvg({}), 'DocumentSearch16Regular');
export default DocumentSearch16Regular;
      