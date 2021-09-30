import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.75A3.75 3.75 0 0019.25 3h-.1a.75.75 0 00.1 1.5h.15a2.25 2.25 0 01-.15 4.5l-.1.01a.75.75 0 00.1 1.5v-.01h.2A3.75 3.75 0 0023 6.74zm-6.5-3a.75.75 0 00-.75-.75h-.2a3.75 3.75 0 00.2 7.5h.1a.75.75 0 00-.1-1.5h-.15a2.25 2.25 0 01.15-4.5h.1a.75.75 0 00.65-.75zm3.5 3a.75.75 0 00-.75-.75h-3.6a.75.75 0 00.1 1.5h3.6a.75.75 0 00.65-.75zm-.75 4.75h-2.77l-4.13 2.16a.75.75 0 01-.7 0L2 8.61v8.32A3.25 3.25 0 005.26 20h13.68A3.25 3.25 0 0022 16.74v-6.13c-.78.56-1.73.88-2.75.88zM5.25 4h6.63a4.73 4.73 0 002.05 7.14L12 12.15 2.02 6.92a3.25 3.25 0 013.04-2.91L5.25 4z" fill={primaryFill} /></svg>;
}

const MailLink24Filled = wrapIcon(rawSvg({}), 'MailLink24Filled');
export default MailLink24Filled;
      