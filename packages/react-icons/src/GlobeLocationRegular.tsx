import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 18c.69 0 1.36-.09 2-.25-.37-.4-.68-.82-.94-1.24-.36.33-.72.49-1.06.49-.66 0-1.4-.59-2.02-1.9-.22-.47-.4-1.01-.56-1.6h2.84c.03-.34.09-.68.18-1H7.2a14.87 14.87 0 010-5h5.58c.1.61.18 1.27.2 1.95.31-.15.64-.26.99-.34-.03-.55-.09-1.1-.17-1.61h2.73c.23.61.38 1.26.44 1.94.37.17.71.4 1.02.65A8 8 0 1010 18zm0-15c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3zM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 017.7 3.38c-.24.33-.45.7-.64 1.1zM6.2 7.5a15.97 15.97 0 000 5H3.46a6.98 6.98 0 010-5h2.73zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 01-3.77-3.11h2.45zm5.9-10.12a7.02 7.02 0 013.77 3.12h-2.45a10.5 10.5 0 00-.68-2.01c-.19-.4-.4-.78-.64-1.1zM15 10a3.8 3.8 0 013.75 3.86c0 1.6-1.18 3.27-3.5 5.05a.4.4 0 01-.5 0c-2.32-1.78-3.5-3.46-3.5-5.05A3.8 3.8 0 0115 10zm0 2.57c-.69 0-1.25.58-1.25 1.29 0 .7.56 1.28 1.25 1.28s1.25-.57 1.25-1.28c0-.71-.56-1.29-1.25-1.29z" fill={primaryFill} /></svg>;
}

const GlobeLocationRegular = wrapIcon(rawSvg({}), 'GlobeLocationRegular');
export default GlobeLocationRegular;
      