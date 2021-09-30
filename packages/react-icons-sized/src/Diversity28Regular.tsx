import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 3a3 3 0 00-3 3v4a3 3 0 003 3h4a3 3 0 003-3V6a3 3 0 00-3-3h-4zM9.81 4.12a2.02 2.02 0 00-3.62 0l-2.97 5.9A2.05 2.05 0 005.04 13h5.92c1.52 0 2.5-1.62 1.82-2.98L9.8 4.12zm-2.28.68c.2-.4.74-.4.94 0l2.97 5.9c.2.38-.1.8-.48.8H5.04a.55.55 0 01-.48-.8l2.97-5.9zM3 20a4.98 4.98 0 015-5 5 5 0 11-5 5zm8.45.62A3.52 3.52 0 008 16.5c-.21 0-.42.02-.62.05l4.07 4.07zm-.65 1.48l-4.9-4.9c-.28.2-.53.46-.74.75l4.9 4.89c.28-.21.53-.46.74-.74zM8 23.5c.19 0 .37-.01.55-.04l-4-4.01A3.5 3.5 0 008 23.5zm11.05-8.26c.6-.32 1.3-.32 1.9 0l3 1.57c.65.34 1.05 1 1.05 1.73v2.92c0 .72-.4 1.39-1.05 1.73l-3 1.57c-.6.32-1.3.32-1.9 0l-3-1.57c-.65-.34-1.05-1-1.05-1.73v-2.92c0-.72.4-1.39 1.05-1.73l3-1.57zm1.2 1.32a.55.55 0 00-.5 0l-3 1.58a.45.45 0 00-.25.4v2.92c0 .15.08.31.25.4l3 1.58c.15.08.35.08.5 0l3-1.58a.45.45 0 00.25-.4v-2.92c0-.15-.08-.31-.25-.4l-3-1.58z" fill={primaryFill} /></svg>;
}

const Diversity28Regular = wrapIcon(rawSvg({}), 'Diversity28Regular');
export default Diversity28Regular;
      