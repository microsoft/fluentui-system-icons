import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 9.5A3.5 3.5 0 015.5 6h21A3.5 3.5 0 0130 9.5v4.68a5 5 0 00-.56-.24l-.02-.01-.24-.08-.73-.22c-.15-.04-.3-.08-.45-.1V9.5c0-.83-.67-1.5-1.5-1.5h-21C4.67 8 4 8.67 4 9.5v13c0 .83.67 1.5 1.5 1.5H10v-2c0-1.1.9-2 2-2h8a2 2 0 012 2v.88a3 3 0 00-2 .76V22h-8v2h7.66l-.08.1-1.37 1.9H5.5A3.5 3.5 0 012 22.5v-13zM16 18a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4zm9.69.01a2 2 0 012.32-.94l.72.21.2.07a3.5 3.5 0 012.25 2.79c.3 2.06-.36 4.48-1.96 7.25-1.6 2.77-3.36 4.55-5.3 5.33a3.5 3.5 0 01-3.7-.7l-.55-.52-.12-.12a2 2 0 01-.13-2.5L20.78 25l.09-.11c.39-.44 1-.62 1.56-.45l2.05.63.06.01h.04c.25-.02.74-.52 1.35-1.58.68-1.18.83-1.87.64-2.04l-1.05-.98-.13-.13a2.5 2.5 0 01-.44-2.72l.66-1.47.08-.15z" fill={primaryFill} /></svg>;
}

const VideoPersonCall32Regular = wrapIcon(rawSvg({}), 'VideoPersonCall32Regular');
export default VideoPersonCall32Regular;
      