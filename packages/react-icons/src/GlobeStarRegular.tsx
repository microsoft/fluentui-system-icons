import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 18H10a8 8 0 118-7.75 5.5 5.5 0 00-1.01-.66 6.97 6.97 0 00-.45-2.09h-2.73c.08.49.13 1 .16 1.53-.34.03-.67.1-.99.18-.03-.6-.1-1.17-.19-1.71H7.21a14.87 14.87 0 000 5h2.16c-.12.32-.22.65-.28 1H7.42c.15.59.34 1.13.56 1.6.48 1.02 1.04 1.6 1.58 1.81.19.4.42.76.7 1.09zm1.77-13.1C11.41 3.6 10.66 3 10 3c-.66 0-1.4.59-2.02 1.9-.22.47-.4 1.01-.56 1.6h5.16a9.25 9.25 0 00-.56-1.6zM6.4 6.5c.17-.74.4-1.42.68-2.01.19-.4.4-.78.64-1.1A7.02 7.02 0 003.94 6.5h2.45zM6 10c0-.87.07-1.71.2-2.5H3.45a6.98 6.98 0 000 5h2.73C6.07 11.71 6 10.87 6 10zm1.07 5.51c-.27-.59-.5-1.27-.68-2.01H3.94a7.02 7.02 0 003.77 3.12c-.24-.33-.45-.7-.64-1.1zm9-9.01a7.02 7.02 0 00-3.78-3.12c.24.33.45.7.64 1.1.27.6.5 1.28.68 2.02h2.45zM14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm.95-5.6H17c.48 0 .68.64.3.94l-1.26.94.48 1.53c.15.49-.38.89-.77.59l-1.25-.95-1.25.95c-.4.3-.92-.1-.77-.59l.48-1.53-1.25-.94c-.4-.3-.2-.95.3-.95h1.54l.47-1.53a.5.5 0 01.96 0l.47 1.53z" fill={primaryFill} /></svg>;
}

const GlobeStarRegular = wrapIcon(rawSvg({}), 'GlobeStarRegular');
export default GlobeStarRegular;
      