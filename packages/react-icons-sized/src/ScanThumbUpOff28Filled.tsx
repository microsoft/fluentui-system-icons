import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l1.4 1.4c-.4.6-.62 1.3-.62 2.07v3.5a.75.75 0 001.5 0v-3.5c0-.35.08-.68.22-.97l6.21 6.21a5.44 5.44 0 01-.45.46l-1.86 1.08a2.74 2.74 0 00-1.2 3.35l.53 1.38c.3.8.96 1.4 1.77 1.66l5.41 1.68c1.52.47 3.13-.2 3.86-1.55l3.23 3.23c-.3.14-.62.22-.97.22h-3.5a.75.75 0 000 1.5h3.5c.76 0 1.48-.23 2.07-.62l1.4 1.4a.75.75 0 001.06-1.06L3.28 2.22zm2.94.82L7.68 4.5h2.57a.75.75 0 000-1.5h-3.5c-.18 0-.36.01-.53.04zm6.27 6.27l7.53 7.53.62-2.08a2.76 2.76 0 00-2.66-3.52h-.43c.12-.55.22-1.18.2-1.75a4.4 4.4 0 00-.33-1.76 2.54 2.54 0 00-1.68-1.4c-1.28-.36-2.18.6-2.46 1.3-.23.57-.43.97-.69 1.47l-.1.2zm11.01 11l1.46 1.47c.03-.17.04-.35.04-.53v-3.5a.75.75 0 00-1.5 0v2.57zM21.25 3A3.75 3.75 0 0125 6.75v3.5a.75.75 0 01-1.5 0v-3.5c0-1.24-1-2.25-2.25-2.25h-3.5a.75.75 0 010-1.5h3.5zM3 21.25A3.75 3.75 0 006.75 25h3.5a.75.75 0 000-1.5h-3.5c-1.24 0-2.25-1-2.25-2.25v-3.5a.75.75 0 00-1.5 0v3.5z" fill={primaryFill} /></svg>;
}

const ScanThumbUpOff28Filled = wrapIcon(rawSvg({}), 'ScanThumbUpOff28Filled');
export default ScanThumbUpOff28Filled;
      