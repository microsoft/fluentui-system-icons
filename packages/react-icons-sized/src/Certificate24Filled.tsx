import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 18a4.98 4.98 0 006 0v3.25c0 .57-.6.92-1.09.67l-.09-.06L18 20.6l-1.82 1.27a.75.75 0 01-1.17-.5v-.11L15 18zm4.25-15A2.75 2.75 0 0122 5.6V11c-.4-.54-.91-1-1.5-1.33V5.75c0-.64-.5-1.18-1.12-1.24H4.75c-.65 0-1.18.49-1.24 1.12l-.01.12v9.5c0 .65.5 1.18 1.12 1.25h9.05a5 5 0 00.33.5v1H4.75a2.75 2.75 0 01-2.74-2.58L2 15.25v-9.5a2.75 2.75 0 012.58-2.74h14.67zM18 10a4 4 0 110 8 4 4 0 010-8zm-6.75 2.5a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6zm6-5.5a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h10.6z" fill={primaryFill} /></svg>;
}

const Certificate24Filled = wrapIcon(rawSvg({}), 'Certificate24Filled');
export default Certificate24Filled;
      