import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 3.5a19.05 19.05 0 00-5.68.83 5.78 5.78 0 00-.26.1.75.75 0 01-.61-1.37s.24-.1 0 0l.03-.01a4.26 4.26 0 01.34-.13A20.55 20.55 0 0114 2c2.32 0 4.08.33 5.2.62a12.31 12.31 0 011.32.43l.02.01h.01a.75.75 0 01-.6 1.38h-.01a2.65 2.65 0 00-.26-.1c-.19-.07-.48-.17-.87-.27-1-.26-2.63-.57-4.81-.57zM7.25 7A2.75 2.75 0 004.5 9.75v8.5A2.75 2.75 0 007.25 21h8.5a2.75 2.75 0 002.75-2.75v-1.11l4.07 2.65c.83.55 1.93-.05 1.93-1.04v-9.5c0-.99-1.1-1.59-1.93-1.04l-4.07 2.65V9.75A2.75 2.75 0 0015.75 7h-8.5zm11.25 5.66L23 9.72v8.56l-4.5-2.94v-2.68zM6 9.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5zm3.2 14.18c.99.26 2.62.57 4.8.57a19.06 19.06 0 005.68-.83l.21-.08.05-.02a.75.75 0 01.61 1.37h-.03a3.9 3.9 0 01-.34.14A20.55 20.55 0 0114 26c-2.32 0-4.08-.33-5.19-.62a12.32 12.32 0 01-1.33-.43l-.02-.01h-.01c.24.1 0 0 0 0a.75.75 0 01.6-1.38h.01l.05.03.2.08c.2.06.5.16.88.26z" fill={primaryFill} /></svg>;
}

const MeetNow28Regular = wrapIcon(rawSvg({}), 'MeetNow28Regular');
export default MeetNow28Regular;
      