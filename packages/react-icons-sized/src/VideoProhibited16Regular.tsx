import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5c0-1.1.9-2 2-2h5a2 2 0 012 2V5l1.8-1.35a.75.75 0 011.2.6v2a5.5 5.5 0 00-1-.65v-.85l-.72.54A5.5 5.5 0 0010 5.02V4.5a1 1 0 00-1-1H4a1 1 0 00-1 1v5a1 1 0 001 1h1c0 .34.03.68.1 1H4a2 2 0 01-2-2v-5zm4 6a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm2.4 2.8l4.9-4.9a3.5 3.5 0 01-4.9 4.9zm-.7-.7a3.5 3.5 0 014.9-4.9l-4.9 4.9z" fill={primaryFill} /></svg>;
}

const VideoProhibited16Regular = wrapIcon(rawSvg({}), 'VideoProhibited16Regular');
export default VideoProhibited16Regular;
      