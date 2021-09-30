import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.21 2c-.47 0-.89.31-1.02.77l-2.25 7.87c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l2.21-2.27a5.5 5.5 0 016.22-6.35l.24-.24c.65-.68.19-1.82-.76-1.82H12.2l1.26-3.6c.23-.69-.28-1.4-1-1.4H7.2zm3.3 10.72l.35.35a2 2 0 010 2.86l-.36.35c.13.31.3.6.49.87l.4-.11a2 2 0 012.51 1.45l.12.48a4.26 4.26 0 00.96 0l.12-.48a2 2 0 012.52-1.45l.4.11c.18-.27.35-.56.48-.87l-.36-.35a2 2 0 010-2.86l.36-.35c-.13-.31-.3-.6-.49-.87l-.4.11a2 2 0 01-2.51-1.45l-.12-.48a4.26 4.26 0 00-.96 0l-.12.48a2 2 0 01-2.52 1.45l-.4-.11c-.18.27-.35.56-.48.87zm3.99 2.78a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const FlashSettingsFilled = wrapIcon(rawSvg({}), 'FlashSettingsFilled');
export default FlashSettingsFilled;
      