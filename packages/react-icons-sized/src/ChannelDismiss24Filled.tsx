import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.25-9A3.25 3.25 0 0121 6.07V12.02a6.47 6.47 0 00-8.2.98H8.76l-.1.01a.75.75 0 000 1.49h3.08a6.47 6.47 0 00.3 6.5H6.24a3.25 3.25 0 01-3.24-3.07L3 17.75V9.37a2.25 2.25 0 10.22-4.3A3.25 3.25 0 016.05 3l.2-.01h11.5zm-2.66 11.97l-.07.05-.05.07a.5.5 0 000 .57l.05.07 1.77 1.77-1.76 1.77-.06.07a.5.5 0 000 .57l.06.06.07.06c.17.12.4.12.56 0l.07-.06 1.77-1.76 1.77 1.77.07.05c.17.12.4.12.57 0l.07-.05.05-.07a.5.5 0 000-.57l-.05-.07-1.77-1.77 1.77-1.77.06-.07a.5.5 0 000-.57l-.06-.07-.07-.05a.5.5 0 00-.57 0l-.07.05-1.77 1.77-1.77-1.77-.07-.05a.5.5 0 00-.5-.05l-.07.05zm.16-5.47h-6.6a.75.75 0 000 1.49H15.35a.75.75 0 00-.1-1.5zM3.75 6a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
}

const ChannelDismiss24Filled = wrapIcon(rawSvg({}), 'ChannelDismiss24Filled');
export default ChannelDismiss24Filled;
      