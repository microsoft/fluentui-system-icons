import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.85 2.15a.5.5 0 00-.85.35v1.51c-1.6.1-2.82.61-3.69 1.52a6.45 6.45 0 00-1.56 3.92.5.5 0 00.85.4c.95-.94 1.81-1.4 2.6-1.62A6.77 6.77 0 0110 8v1.5a.5.5 0 00.85.35l3.5-3.5a.5.5 0 000-.7l-3.5-3.5zM11 4.5v-.8L13.3 6 11 8.3v-.8a.5.5 0 00-.5-.5h-.02c-.74 0-1.61 0-2.55.27-.63.18-1.28.47-1.95.95.22-.82.57-1.49 1.06-2C7.76 5.47 8.84 5 10.5 5a.5.5 0 00.5-.5zm-8 1C3 4.67 3.67 4 4.5 4h1a.5.5 0 000-1h-1A2.5 2.5 0 002 5.5v6A2.5 2.5 0 004.5 14h6a2.5 2.5 0 002.5-2.5v-1a.5.5 0 00-1 0v1c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 013 11.5v-6z" fill={primaryFill} /></svg>;
}

const Share16Regular = wrapIcon(rawSvg({}), 'Share16Regular');
export default Share16Regular;
      