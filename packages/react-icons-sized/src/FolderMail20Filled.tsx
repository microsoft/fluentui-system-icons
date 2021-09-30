import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 4.5h-4.94l-2.4 2.53-.11.1c-.23.2-.52.33-.83.36l-.15.01H2v7.16A2.5 2.5 0 004.5 17H9v-3.5a2.5 2.5 0 012.5-2.5h6c.17 0 .34.02.5.05V6.84l-.02-.17A2.5 2.5 0 0015.5 4.5zM7.93 3.21A1.5 1.5 0 007.17 3H4.34A2.5 2.5 0 002 5.5v1h5.15a.5.5 0 00.22-.1l.06-.06L9.4 4.3 8.06 3.3l-.14-.09zm6.58 12.72l-4.5-2.63c.1-.73.73-1.3 1.49-1.3h6c.83 0 1.5.67 1.5 1.5l-4.49 2.43zm.23 1.01l4.26-2.3v2.86c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-3.05l4.25 2.48c.15.09.33.1.49.01z" fill={primaryFill} /></svg>;
}

const FolderMail20Filled = wrapIcon(rawSvg({}), 'FolderMail20Filled');
export default FolderMail20Filled;
      