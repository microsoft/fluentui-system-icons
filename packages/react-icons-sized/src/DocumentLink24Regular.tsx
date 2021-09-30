import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.5 20a.5.5 0 01-.5.5h-4.23A4.99 4.99 0 0113 22h5a2 2 0 002-2V9.83a2 2 0 00-.59-1.42L13.6 2.6a.5.5 0 00-.05-.04 2.07 2.07 0 00-.34-.25l-.05-.03-.05-.03-.16-.09c-.2-.08-.41-.12-.63-.14h-.06a.6.6 0 00-.08-.01H6a2 2 0 00-2 2v10h1.5V4c0-.27.22-.5.5-.5h6V8c0 1.1.9 2 2 2h4.5v10zm-5-15.38l3.88 3.88H14a.5.5 0 01-.5-.5V4.62zM5.75 15.75A.75.75 0 005 15h-.2a4 4 0 00.2 8h.1a.75.75 0 00-.1-1.5h-.16a2.5 2.5 0 01.16-5h.1a.75.75 0 00.65-.75zM13 19a4 4 0 00-4-4h-.1a.75.75 0 00.1 1.5h.16a2.5 2.5 0 01-.16 5h-.1A.75.75 0 009 23h.2a4 4 0 003.8-4zm-4.25-.75h-3.6a.75.75 0 00.1 1.5h3.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /></svg>;
}

const DocumentLink24Regular = wrapIcon(rawSvg({}), 'DocumentLink24Regular');
export default DocumentLink24Regular;
      