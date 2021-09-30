import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.6 15.35a.75.75 0 011.06 1.06l-3.1 3.1h2.19c.38 0 .7.28.74.64l.01.1c0 .42-.34.75-.75.75h-4a.75.75 0 01-.75-.75v-4a.75.75 0 011.5 0v2.2l3.1-3.1zM16.25 21a.75.75 0 010-1.5h2.2l-3.1-3.09a.75.75 0 01-.07-.98l.07-.08c.3-.3.77-.3 1.06 0l3.1 3.1v-2.2c0-.38.28-.69.64-.74h.1c.42 0 .75.33.75.74v4c0 .42-.33.75-.75.75h-4zM7.75 3a.75.75 0 010 1.5H5.56l3.1 3.1c.26.26.29.68.07.97l-.07.09c-.3.29-.77.29-1.07 0L4.5 5.56v2.19c0 .38-.28.7-.65.74l-.1.01A.75.75 0 013 7.75v-4c0-.41.34-.75.75-.75h4zm12.5 0c.42 0 .75.34.75.75v4a.75.75 0 01-1.5 0v-2.2l-3.09 3.1a.75.75 0 01-.98.08l-.08-.07a.75.75 0 010-1.07l3.1-3.09h-2.2a.75.75 0 01-.74-.65v-.1c0-.41.33-.75.74-.75h4z" fill={primaryFill} /></svg>;
}

const ArrowExpand24Regular = wrapIcon(rawSvg({}), 'ArrowExpand24Regular');
export default ArrowExpand24Regular;
      