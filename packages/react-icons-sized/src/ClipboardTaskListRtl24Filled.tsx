import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 00-2.24-2zm-3.5 1.5h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5zm7.03 5.22c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 111.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0zm0 6.56l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 111.06-1.06l.47.47 1.47-1.47a.75.75 0 111.06 1.06zM7 10.25c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zM7.75 15h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const ClipboardTaskListRtl24Filled = wrapIcon(rawSvg({}), 'ClipboardTaskListRtl24Filled');
export default ClipboardTaskListRtl24Filled;
      