import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 11a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm3.3 3.25l-5.55 5.56a4 4 0 005.56-5.56zM19.76 6.5c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v3.06a6.5 6.5 0 00-9.98 8.2L4.25 20c-1.2 0-2.17-.93-2.24-2.1L2 17.75V10.5h6.4c.4-.04.77-.18 1.1-.4l.15-.12 4.17-3.48h5.93zm-2.25 6a4 4 0 00-3.3 6.25l5.55-5.56a3.98 3.98 0 00-2.25-.69zM8.2 4c.47 0 .92.14 1.3.4l.15.12 2.1 1.75-3.06 2.56-.09.06a.75.75 0 01-.29.1l-.1.01H2V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h3.96z" fill={primaryFill} /></svg>;
}

const FolderProhibited24Filled = wrapIcon(rawSvg({}), 'FolderProhibited24Filled');
export default FolderProhibited24Filled;
      