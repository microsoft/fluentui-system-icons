import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6c2.89 0 5.78.36 8.67 1.08.73.18 1.26.8 1.32 1.55l.01.15v3.1c0 2.2-1.74 4-3.92 4.11H15.4c-.72 0-1.41-.28-1.93-.78l-.13-.15-.65-.74-.09-.08a.91.91 0 00-1.2 0l-.09.08-.65.74c-.48.55-1.15.88-1.87.93H6.13A4.13 4.13 0 012 12.09l-.01-.2v-3.1c0-.8.55-1.5 1.33-1.7C6.22 6.36 9.1 6 12 6zm0 1.5c-2.77 0-5.54.34-8.31 1.03a.25.25 0 00-.18.18l-.01.07v3.1c0 1.39 1.09 2.53 2.46 2.61H8.6c.31 0 .61-.11.84-.32l.1-.1.65-.74c.88-1 2.4-1.1 3.4-.22l.12.1.1.12.66.74c.2.24.5.39.8.42h2.61c1.39 0 2.53-1.08 2.61-2.45l.01-.17v-3.1a.25.25 0 00-.19-.24A34.32 34.32 0 0012 7.5zM16.75 9h1.5a.75.75 0 01.1 1.5h-1.6a.75.75 0 01-.1-1.5h.1zm-9.5 0a.75.75 0 01.1 1.5h-1.6a.75.75 0 01-.1-1.5h1.6zM12 8.5a.75.75 0 110 1.5.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const HeadsetVr24Regular = wrapIcon(rawSvg({}), 'HeadsetVr24Regular');
export default HeadsetVr24Regular;
      