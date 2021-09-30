import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.14 3.3a4.53 4.53 0 00-.91-1.13.75.75 0 00-.96 1.16c.13.1.35.35.59.74.4.67.64 1.48.64 2.43 0 .95-.24 1.76-.64 2.43-.24.39-.46.64-.59.74a.75.75 0 00.96 1.16c.25-.21.59-.58.91-1.13.54-.9.86-1.96.86-3.2 0-1.24-.32-2.3-.86-3.2zm-2.27 1.1c-.23-.36-.48-.6-.67-.75a.75.75 0 00-.9 1.2A2.24 2.24 0 0119 6.5a2.24 2.24 0 01-.7 1.65l-.08.07a.75.75 0 00.98 1.13 3.73 3.73 0 001.3-2.85c0-.81-.23-1.52-.63-2.1zM17 3.75a.75.75 0 00-1.31-.5L14.16 5h-1.41a.75.75 0 00-.75.75v1.5c0 .41.34.75.75.75h1.41l1.53 1.74A.75.75 0 0017 9.25v-5.5zM12 4h1.53-9.28C3.01 4 2 5 2 6.25v11.5C2 19 3 20 4.25 20h15.5c1.24 0 2.25-1 2.25-2.25v-6.27l-.13.11a1.75 1.75 0 01-2.86-1.11c-.42.07-.87-.03-1.23-.27a1.76 1.76 0 01-2.8.33L13.52 9H12a1 1 0 01-1-1V5a1 1 0 011-1zm-1.75 11.5h3.5a.75.75 0 110 1.5h-3.5a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const TabletSpeaker24Filled = wrapIcon(rawSvg({}), 'TabletSpeaker24Filled');
export default TabletSpeaker24Filled;
      