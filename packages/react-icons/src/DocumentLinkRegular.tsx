import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2 2 0 00-2 2v7h1V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1h-2.26c-.12.36-.3.7-.5 1H14a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6zm8.8 5h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7zM5 12.5a.5.5 0 00-.5-.5h-.2a3.5 3.5 0 00.2 7h.09a.5.5 0 00-.09-1h-.16a2.5 2.5 0 01.16-5h.09a.5.5 0 00.41-.5zm6 3A3.5 3.5 0 007.5 12h-.09a.5.5 0 00.09 1h.16a2.5 2.5 0 01-.16 5l-.1.01a.5.5 0 00.1 1V19h.2a3.5 3.5 0 003.3-3.5zM7.5 15H4.41a.5.5 0 00.09 1h3.09a.5.5 0 00-.09-1z" fill={primaryFill} /></svg>;
}

const DocumentLinkRegular = wrapIcon(rawSvg({}), 'DocumentLinkRegular');
export default DocumentLinkRegular;
      