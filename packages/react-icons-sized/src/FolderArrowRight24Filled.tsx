import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 11a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm2.25-4.5c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v3.06a6.5 6.5 0 00-9.98 8.2L4.25 20c-1.2 0-2.17-.93-2.24-2.1L2 17.75V10.5h6.4c.4-.04.77-.18 1.1-.4l.15-.12 4.17-3.48h5.93zm-1.96 7.05l-.07.04-.07.06-.06.07a.5.5 0 000 .56l.06.07L19.29 16h-5.38a.5.5 0 00-.4.41l-.01.09v.09c.05.2.2.36.41.4L14 17h5.3l-1.65 1.65-.06.07a.5.5 0 00.7.7l.06-.07 2.53-2.53.05-.06.03-.07.02-.06.02-.08v-.1l-.02-.08-.03-.08-.04-.07-.04-.06-2.52-2.51-.07-.06a.5.5 0 00-.49-.04zM8.21 4c.46 0 .9.14 1.28.4l.16.12 2.1 1.75-3.06 2.56-.09.06a.75.75 0 01-.29.1l-.1.01H2V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h3.96z" fill={primaryFill} /></svg>;
}

const FolderArrowRight24Filled = wrapIcon(rawSvg({}), 'FolderArrowRight24Filled');
export default FolderArrowRight24Filled;
      