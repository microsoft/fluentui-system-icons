import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.25 10.5c1.2 0 2.17.93 2.24 2.1l.01.15v7c0 1.2-.93 2.17-2.1 2.24l-.15.01h-9c-1.2 0-2.17-.93-2.24-2.1L2 19.75v-7c0-1.2.93-2.17 2.1-2.24l.15-.01h9zm8 0c.38 0 .7.28.74.65l.01.1v8.5c0 1.2-.93 2.17-2.1 2.24l-.15.01h-2a.75.75 0 01-.1-1.5h2.1c.38 0 .7-.28.74-.65l.01-.1v-8.5c0-.41.34-.75.75-.75zm-8 1.5h-9c-.38 0-.7.28-.74.65l-.01.1v7c0 .38.28.7.65.74l.1.01h9c.38 0 .7-.28.74-.65l.01-.1v-7a.75.75 0 00-.75-.75zm-2.5 5.5c.41 0 .75.34.75.75 0 .38-.34.75-.75.75h-4a.75.75 0 01-.75-.75c0-.38.34-.75.75-.75h4zM6 13.5a1 1 0 110 2 1 1 0 010-2zm5.5 0a1 1 0 110 2 1 1 0 010-2zm-2.75 0a1 1 0 110 2 1 1 0 010-2zM21.25 2a.76.76 0 01.33.07l.04.03a.75.75 0 01.08.05l.08.07.05.06.01.01.04.05a.74.74 0 01.11.3l.01.11v5a.75.75 0 01-1.5.1V4.56l-4.47 4.47a.75.75 0 01-1.13-.98l.07-.08 4.47-4.47h-3.19a.75.75 0 01-.74-.65l-.01-.1c0-.38.28-.7.65-.74l.1-.01h5zm-8.5 0a.75.75 0 01.1 1.5h-8.6c-.38 0-.7.28-.74.65l-.01.1v4a.75.75 0 01-1.5.1v-4.1c0-1.2.93-2.17 2.1-2.24L4.25 2h8.5z" fill={primaryFill} /></svg>;
}

const KeyboardLayoutResize24Regular = wrapIcon(rawSvg({}), 'KeyboardLayoutResize24Regular');
export default KeyboardLayoutResize24Regular;
      