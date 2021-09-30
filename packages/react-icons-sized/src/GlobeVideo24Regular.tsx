import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 019.88 11.57l-.21.12-.96.64a2.5 2.5 0 00-.4-.55 8.53 8.53 0 00-.05-3.78h-3.35a20.85 20.85 0 01.07 3h-1.5a19.28 19.28 0 00-.08-3H8.6a18.97 18.97 0 00.14 5h2.31c-.03.16-.05.33-.05.5v1H9.06c.46 1.7 1.16 3 1.94 3.61v1.39c0 .16.02.3.04.46A10 10 0 0112 2zM7.5 16.5H4.8a8.53 8.53 0 004.1 3.41c-.53-.82-.96-1.84-1.28-3.01l-.1-.4zM7.1 10H3.73v.02a8.52 8.52 0 00.3 4.98h3.18a20.3 20.3 0 01-.13-5zm1.78-5.9h-.02a8.53 8.53 0 00-4.6 4.4H7.3c.31-1.75.86-3.28 1.58-4.4zM12 3.5h-.11c-1.27.12-2.5 2.12-3.06 5h6.34c-.56-2.87-1.78-4.87-3.04-5H12zm3.12.6l.1.16A12.65 12.65 0 0116.7 8.5h3.05a8.53 8.53 0 00-4.34-4.29l-.29-.12zM12 15.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v.5l2.22-1.48a.5.5 0 01.78.41v7.14a.5.5 0 01-.78.41L20 21v.5c0 .83-.67 1.5-1.5 1.5h-5a1.5 1.5 0 01-1.5-1.5v-6z" fill={primaryFill} /></svg>;
}

const GlobeVideo24Regular = wrapIcon(rawSvg({}), 'GlobeVideo24Regular');
export default GlobeVideo24Regular;
      