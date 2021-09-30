import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.76 4h12.73A1.5 1.5 0 0118 5.5v9a1.5 1.5 0 01-1.5 1.5H3.51a1.5 1.5 0 01-1.5-1.5V9.89c.16.07.33.1.5.11.17 0 .34-.04.5-.1v4.6a.5.5 0 00.5.5h2.5v-1.5A1.5 1.5 0 017.5 12h5a1.5 1.5 0 011.5 1.5V15h2.5a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H4.3a.57.57 0 01-.2-.12.57.57 0 01-.14-.23L3.76 4zM7 15h6v-1.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V15zm4.76-8.27a2.5 2.5 0 11-3.54 3.54 2.5 2.5 0 013.54-3.54zm-2.83.7a1.5 1.5 0 102.13 2.13 1.5 1.5 0 00-2.13-2.12zm-4.81 1.9a.18.18 0 00-.12.16c0 .04.01.08.03.1.02.04.05.06.09.08l.46.14a.96.96 0 01.6.6l.15.46a.18.18 0 00.16.13.18.18 0 00.17-.13l.15-.46a.94.94 0 01.6-.6l.46-.14a.17.17 0 00.08-.07.18.18 0 00-.08-.27h-.01l-.46-.15a.95.95 0 01-.6-.6l-.15-.46a.19.19 0 00-.04-.06.18.18 0 00-.13-.06.19.19 0 00-.1.04.18.18 0 00-.07.08l-.15.46a.99.99 0 01-.22.37c-.1.1-.23.18-.37.23l-.45.15zM2.5 9a.3.3 0 01-.28-.2l-.25-.76a1.57 1.57 0 00-1-1L.2 6.78A.3.3 0 010 6.5a.3.3 0 01.2-.28l.77-.25a1.57 1.57 0 00.98-.98v-.02l.25-.77A.3.3 0 012.5 4a.3.3 0 01.28.2l.25.77.1.22c.07.14.16.28.28.4.17.17.38.3.62.38l.76.25h.02a.3.3 0 01.2.29.3.3 0 01-.2.28l-.77.25a1.57 1.57 0 00-1 1l-.25.76v.02a.32.32 0 01-.1.13.3.3 0 01-.18.05z" fill={primaryFill} /></svg>;
}

const VideoPersonSparkle20Regular = wrapIcon(rawSvg({}), 'VideoPersonSparkle20Regular');
export default VideoPersonSparkle20Regular;
      