import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 6a.5.5 0 000 1h3a.5.5 0 000-1h-3zM4 9.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM9.5 9a.5.5 0 000 1h2a.5.5 0 000-1h-2zM8 3c-1.4 0-2.42.57-3.07 1.37a4.2 4.2 0 00-.9 2.15C1.97 6.73 1 8.32 1 9.5c0 .57.14 1.33.69 1.95.55.64 1.46 1.05 2.81 1.05h7c1.07 0 1.96-.26 2.58-.8A2.8 2.8 0 0015 9.5c0-.94-.47-1.7-1.13-2.22a3.86 3.86 0 00-1.9-.75 3.73 3.73 0 00-1.34-2.6A4.23 4.23 0 008 3zM5 7c0-.65.22-1.4.7-2 .47-.57 1.2-1 2.3-1 .65 0 1.4.22 2 .7.57.47 1 1.2 1 2.3 0 .28.22.5.5.5.65 0 1.29.21 1.76.57.46.36.74.85.74 1.43 0 .65-.2 1.12-.58 1.44-.38.33-1 .56-1.92.56h-7c-1.15 0-1.74-.34-2.06-.7A1.96 1.96 0 012 9.5c0-.74.69-2 2.5-2A.5.5 0 005 7z" fill={primaryFill} /></svg>;
}

const CloudWords16Regular = wrapIcon(rawSvg({}), 'CloudWords16Regular');
export default CloudWords16Regular;
      