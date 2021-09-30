import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2 2 0 00-2 2v5h1V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1h-3v1h3a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6zm8.8 5h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7zM4 10h3v2H4v-2zm-2 0h1v2.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-2.41c.1.05.2.12.3.2l1.4 1.42a1 1 0 01.3.7V18a1 1 0 01-1 1v-4.5a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5V19a1 1 0 01-1-1v-7a1 1 0 011-1zm6 5v4H3v-4h5z" fill={primaryFill} /></svg>;
}

const DocumentSave20Regular = wrapIcon(rawSvg({}), 'DocumentSave20Regular');
export default DocumentSave20Regular;
      