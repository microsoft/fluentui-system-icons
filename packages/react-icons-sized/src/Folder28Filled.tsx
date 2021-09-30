import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.82 6.5h7.93c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v13c0 1.2-.93 2.17-2.1 2.24l-.15.01H4.25c-1.2 0-2.17-.93-2.24-2.1L2 21.75V10.5H10.4c.4-.04.77-.18 1.1-.4l.15-.12 4.17-3.48zM10.21 4c.46 0 .9.14 1.28.4l.16.12 2.1 1.75-3.06 2.56-.09.06a.75.75 0 01-.29.1l-.1.01H2V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h5.96z" fill={primaryFill} /></svg>;
}

const Folder28Filled = wrapIcon(rawSvg({}), 'Folder28Filled');
export default Folder28Filled;
      