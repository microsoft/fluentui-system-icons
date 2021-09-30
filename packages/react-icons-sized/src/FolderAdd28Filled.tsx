import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.5 15a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2h-.09a.5.5 0 00-.4.4l-.01.1V20h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H21v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V21h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H22v-2.6a.5.5 0 00-.41-.4h-.09zm2.25-10.5c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v7.06a6.5 6.5 0 00-9.98 8.2L4.25 24c-1.2 0-2.17-.93-2.24-2.1L2 21.75V10.5H10.4c.4-.04.77-.18 1.1-.4l.15-.12 4.17-3.48h7.93zM10.21 4c.46 0 .9.14 1.28.4l.16.12 2.1 1.75-3.06 2.56-.09.06a.75.75 0 01-.29.1l-.1.01H2V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h5.96z" fill={primaryFill} /></svg>;
}

const FolderAdd28Filled = wrapIcon(rawSvg({}), 'FolderAdd28Filled');
export default FolderAdd28Filled;
      