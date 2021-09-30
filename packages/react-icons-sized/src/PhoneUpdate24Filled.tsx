import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5zM12 7.03h-.1l-.1.03a.75.75 0 00-.54.6l-.01.12v6.71l-.96-.96-.09-.07a.75.75 0 00-1.04 1.05l.07.08 2.24 2.24.05.05.06.04.07.05.12.05.1.02.08.01h.1l.09-.01.06-.01.1-.04.06-.03.07-.04.06-.05.04-.04 2.24-2.24.07-.08c.2-.26.2-.62.01-.89l-.08-.09-.08-.07a.75.75 0 00-.88 0l-.1.07-.96.96V7.68a.75.75 0 00-.65-.64H12z" fill={primaryFill} /></svg>;
}

const PhoneUpdate24Filled = wrapIcon(rawSvg({}), 'PhoneUpdate24Filled');
export default PhoneUpdate24Filled;
      