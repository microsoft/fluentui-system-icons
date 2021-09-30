import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7L3.3 4.01C2.57 4.11 2 4.74 2 5.5v9c0 .83.67 1.5 1.5 1.5h5.7c-.08-.32-.15-.66-.18-1H7v-1.5c0-.28.22-.5.5-.5h1.7c.1-.35.24-.68.4-1H7.5c-.83 0-1.5.67-1.5 1.5V15H3.5a.5.5 0 01-.5-.5v-9c0-.28.22-.5.5-.5h.8l3.22 3.22-.02.28a2.5 2.5 0 002.77 2.49v-.01l.71.71a4.5 4.5 0 006.37 6.29.5.5 0 00.5-.83l-15-15zM16.5 17.2c-.13.27-.47.4-.75.2l-1.25-.95-1.25.95c-.4.3-.92-.1-.77-.59l.48-1.53-1.25-.94c-.4-.3-.2-.95.3-.95h.68l3.8 3.81z" fill={primaryFill} /><path d="M8.57 6.45l.73.73a1.5 1.5 0 012.03 2.03l.49.49c.16-.1.32-.17.5-.25A2.5 2.5 0 0010 6c-.53 0-1.02.17-1.43.45z" fill={primaryFill} /><path d="M12.56 10.44l1.45 1.45.01-.03a.5.5 0 01.96 0l.45 1.45.08.08H17c.48 0 .68.65.3.95l-.48.36 1.74 1.74a4.5 4.5 0 00-6-6z" fill={primaryFill} /><path d="M6.12 4l1 1h9.38c.28 0 .5.22.5.5v4.1c.36.18.7.4 1 .66V5.5c0-.83-.67-1.5-1.5-1.5H6.12z" fill={primaryFill} /></svg>;
}

const VideoPersonStarOffRegular = wrapIcon(rawSvg({}), 'VideoPersonStarOffRegular');
export default VideoPersonStarOffRegular;
      