import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.96 3.5H8.5v2h.46a.75.75 0 010 1.5h-.71C7.56 7 7 6.44 7 5.75v-2.5C7 2.56 7.56 2 8.25 2h.71a.75.75 0 010 1.5zM11.5 2a.75.75 0 000 1.5h1a.75.75 0 000-1.5h-1zm3.54 0a.75.75 0 000 1.5h.46v2h-.46a.75.75 0 000 1.5h.71C16.44 7 17 6.44 17 5.75v-2.5C17 2.56 16.44 2 15.75 2h-.71zM11.5 5.5a.75.75 0 000 1.5h1a.75.75 0 000-1.5h-1zm-6 3.25a.75.75 0 00-1.5 0v10C4 20.55 5.46 22 7.25 22h9.5c1.8 0 3.25-1.46 3.25-3.25v-10a.75.75 0 00-1.5 0v10c0 .97-.78 1.75-1.75 1.75h-9.5c-.97 0-1.75-.78-1.75-1.75v-10zM8.25 14C7.56 14 7 14.56 7 15.25v2.5c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25h-7.5zm.25 3.5v-2h7v2h-7zm0-8h.46a.75.75 0 000-1.5h-.71C7.56 8 7 8.56 7 9.25v2.5c0 .69.56 1.25 1.25 1.25h.71a.75.75 0 000-1.5H8.5v-2zm2.25-.75c0-.41.34-.75.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75zm3.54 0c0-.41.33-.75.75-.75h.71c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-.71a.75.75 0 010-1.5h.46v-2h-.46a.75.75 0 01-.75-.75zm-3.54 3.5c0-.41.34-.75.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const Shortpick24Regular = wrapIcon(rawSvg({}), 'Shortpick24Regular');
export default Shortpick24Regular;
      