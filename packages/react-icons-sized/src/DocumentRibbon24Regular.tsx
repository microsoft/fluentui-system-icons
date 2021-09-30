import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.5 20a.5.5 0 01-.5.5H9V22h9a2 2 0 002-2V9.83a2 2 0 00-.59-1.42L13.6 2.6a.49.49 0 00-.05-.04 2.07 2.07 0 00-.34-.25l-.05-.03-.05-.03-.16-.09c-.2-.08-.41-.12-.63-.14h-.06a.6.6 0 00-.08-.01H6a2 2 0 00-2 2v7.26A4.5 4.5 0 015.5 11V4c0-.27.22-.5.5-.5h6V8c0 1.1.9 2 2 2h4.5v10zm-5-15.38l3.88 3.88H14a.5.5 0 01-.5-.5V4.62zM9 15.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-6 3.74v3.05c0 .63.76.95 1.21.5L5.5 21.5l1.29 1.3A.71.71 0 008 22.28v-3.05a4.48 4.48 0 01-5 0z" fill={primaryFill} /></svg>;
}

const DocumentRibbon24Regular = wrapIcon(rawSvg({}), 'DocumentRibbon24Regular');
export default DocumentRibbon24Regular;
      