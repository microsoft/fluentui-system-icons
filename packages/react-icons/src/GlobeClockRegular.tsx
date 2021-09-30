import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 18h.25a5.5 5.5 0 01-.7-1.09c-.53-.2-1.1-.79-1.57-1.82-.22-.46-.4-1-.56-1.59h1.67c.06-.35.16-.68.28-1H7.21a14.87 14.87 0 010-5h5.58c.1.54.16 1.11.19 1.71.32-.09.65-.15 1-.18-.04-.53-.1-1.04-.17-1.53h2.73c.25.66.4 1.36.45 2.1.36.18.7.4 1 .65L18 10a8 8 0 10-8 8zm0-15c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3zM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 017.7 3.38c-.24.33-.45.7-.64 1.1zM6.2 7.5a15.97 15.97 0 000 5H3.46a6.98 6.98 0 010-5h2.73zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 01-3.77-3.11h2.45zm5.9-10.12a7.02 7.02 0 013.77 3.12h-2.45a10.5 10.5 0 00-.68-2.01c-.19-.4-.4-.78-.64-1.1zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 12a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 000-1h-1v-1.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const GlobeClockRegular = wrapIcon(rawSvg({}), 'GlobeClockRegular');
export default GlobeClockRegular;
      