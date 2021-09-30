import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 4C21.2 4 22 4.8 22 5.75v12.5c0 .96-.79 1.75-1.75 1.75H13c-.09 0-.17 0-.26-.02V4.02L13 4h7.25zM11 4c.08 0 .16 0 .24.02v15.96L11 20H3.75C2.78 20 2 19.2 2 18.25V5.75C2 4.78 2.78 4 3.75 4H11zm6.5 3h-.1l-.1.03a.75.75 0 00-.54.6l-.01.12v6.7l-.97-.96-.08-.08a.75.75 0 00-.98.08.75.75 0 00-.07.97l.07.08 2.25 2.24.1.1.08.04.11.04.1.03.1.01h.09l.09-.01.06-.02.1-.03.06-.03.07-.04.06-.05.04-.04 2.25-2.24.07-.08c.2-.26.2-.62.01-.88l-.08-.1-.08-.07a.76.76 0 00-.89 0l-.1.08-.96.96v-6.8A.75.75 0 0017.6 7L17.5 7z" fill={primaryFill} /></svg>;
}

const DualScreenUpdate24Filled = wrapIcon(rawSvg({}), 'DualScreenUpdate24Filled');
export default DualScreenUpdate24Filled;
      