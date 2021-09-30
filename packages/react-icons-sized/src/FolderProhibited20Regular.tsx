import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.5A2.5 2.5 0 014.5 3h2.67c.32 0 .64.1.9.3l1.6 1.2h5.83A2.5 2.5 0 0118 7v3.26a5.5 5.5 0 00-1-.66V7c0-.83-.67-1.5-1.5-1.5H9.62L8.16 7.03c-.29.3-.68.47-1.09.47H3v7c0 .83.67 1.5 1.5 1.5h4.7c.1.35.24.68.4 1H4.5A2.5 2.5 0 012 14.5v-9zM4.5 4C3.67 4 3 4.67 3 5.5v1h4.07a.5.5 0 00.36-.16L8.7 5.02 7.47 4.1a.5.5 0 00-.3-.1H4.5z" fill={primaryFill} /><path d="M10 14.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm4.5-3.5a3.5 3.5 0 00-2.8 5.6l4.9-4.9a3.48 3.48 0 00-2.1-.7zm2.8 1.4l-4.9 4.9a3.5 3.5 0 004.9-4.9z" fill={primaryFill} /></svg>;
}

const FolderProhibited20Regular = wrapIcon(rawSvg({}), 'FolderProhibited20Regular');
export default FolderProhibited20Regular;
      