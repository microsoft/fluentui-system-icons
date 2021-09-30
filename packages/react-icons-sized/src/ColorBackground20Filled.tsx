import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10.66l1.08 1.08a3 3 0 004.24 0l.68-.68c.03 1.34.96 2.94 2.75 2.94 1.82 0 2.75-1.65 2.75-3 0-1.01-.53-1.96-.86-2.47-.2-.3-.38-.55-.52-.72l-.01-.02-.22-.26-.02-.03a1.5 1.5 0 00-.85-.48 3 3 0 00-.87-2.35L9.48 4h6.02A2.5 2.5 0 0118 6.5v7a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 13.5v-2.84z" fill={primaryFill} /><path d="M5 1.5a.5.5 0 011 0v1.17a2 2 0 011.32.59l2.12 2.12a2 2 0 010 2.83l-2.83 2.83a2 2 0 01-2.82 0L1.66 8.9a2 2 0 010-2.82L4.5 3.26A2 2 0 015 2.89V1.5zm0 4V4.16L2.66 6.5h6.32a1 1 0 00-.25-.41L6.61 3.96A1 1 0 006 3.68V5.5a.5.5 0 01-1 0zm-2.92 2c0 .26.1.51.3.7l2.11 2.13a1 1 0 001.42 0L8.73 7.5H2.08z" fill={primaryFill} /><path d="M10.38 8.17l-.22.26c-.12.15-.29.38-.46.64C9.4 9.57 9 10.3 9 11c0 1 .67 2 1.75 2s1.75-1 1.75-2c0-.7-.39-1.44-.7-1.93a8.13 8.13 0 00-.46-.64l-.22-.26a.5.5 0 00-.74 0zm.17 1.44c.06-.11.13-.21.2-.3l.2.3c.31.47.55 1 .55 1.39 0 .3-.1.57-.25.75a.62.62 0 01-.5.25.62.62 0 01-.5-.25A1.21 1.21 0 0110 11c0-.4.24-.92.55-1.4z" fill={primaryFill} /></svg>;
}

const ColorBackground20Filled = wrapIcon(rawSvg({}), 'ColorBackground20Filled');
export default ColorBackground20Filled;
      