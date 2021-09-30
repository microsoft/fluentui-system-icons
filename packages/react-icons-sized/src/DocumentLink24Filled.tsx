import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2h-5a5 5 0 00-4-8H4V4c0-1.1.9-2 2-2h6zm1.5.5V8c0 .28.22.5.5.5h5.5l-6-6zM5.75 15.75A.75.75 0 005 15h-.2a4 4 0 00.2 8h.1a.75.75 0 00-.1-1.5h-.16a2.5 2.5 0 01.16-5h.1a.75.75 0 00.65-.75zM13 19a4 4 0 00-4-4h-.1a.75.75 0 00.1 1.5h.16a2.5 2.5 0 01-.16 5h-.1A.75.75 0 009 23h.2a4 4 0 003.8-4zm-4.25-.75h-3.6a.75.75 0 00.1 1.5h3.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /></svg>;
}

const DocumentLink24Filled = wrapIcon(rawSvg({}), 'DocumentLink24Filled');
export default DocumentLink24Filled;
      