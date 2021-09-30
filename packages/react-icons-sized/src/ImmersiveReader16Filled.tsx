import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3.75C1 2.78 1.78 2 2.75 2H6c.79 0 1.5.33 2 .86.5-.53 1.21-.86 2-.86h3.25c.97 0 1.75.78 1.75 1.75V7.2a1.5 1.5 0 00-1.5 0V3.75a.25.25 0 00-.25-.25H10c-.69 0-1.25.56-1.25 1.25v3.38L7.88 9H7.5c-.09 0-.17 0-.25.02V4.75c0-.69-.56-1.25-1.25-1.25H2.75a.25.25 0 00-.25.25v8.5c0 .14.11.25.25.25H6c0 .6.36 1.12.87 1.36-.28.1-.57.14-.87.14H2.75C1.78 14 1 13.22 1 12.25v-8.5zm9.7 4.29c.18.08.3.26.3.46v6a.5.5 0 01-.85.35L8.29 13H7.5a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 01.54-.11zm3.95.16c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 01-.85-.52l.12-.19a5.9 5.9 0 00.58-2.6 5.9 5.9 0 00-.58-2.58l-.07-.11a.5.5 0 11.8-.6zm-1.7 1.08a5.5 5.5 0 01.55 2.22 4.9 4.9 0 01-.55 2.22.5.5 0 11-.9-.44l.08-.17.15-.4c.14-.42.22-.83.22-1.21s-.08-.8-.22-1.22a4.6 4.6 0 00-.23-.56.5.5 0 11.9-.44z" fill={primaryFill} /></svg>;
}

const ImmersiveReader16Filled = wrapIcon(rawSvg({}), 'ImmersiveReader16Filled');
export default ImmersiveReader16Filled;
      