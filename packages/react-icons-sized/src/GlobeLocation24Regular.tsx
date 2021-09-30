import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 019.94 11.16c-.42-.43-.9-.79-1.44-1.06V12c0-.69-.08-1.36-.24-2h-3.35c.05.52.08 1.05.09 1.6-.53.09-1.03.26-1.5.5V12c0-.69-.04-1.36-.1-2H8.6a18.97 18.97 0 00.14 5h4.13c-.18.47-.3.98-.35 1.5H9.06c.65 2.41 1.79 4 2.94 4 .46 0 .9-.24 1.33-.7.36.62.83 1.23 1.4 1.83A10 10 0 1112 2zM7.5 16.5H4.8a8.53 8.53 0 004.09 3.41c-.52-.82-.95-1.84-1.27-3.01l-.1-.4zM7.1 10H3.73v.02a8.52 8.52 0 00.3 4.98h3.18a20.3 20.3 0 01-.13-5zm1.78-5.91h-.02A8.53 8.53 0 004.25 8.5H7.3c.31-1.75.86-3.28 1.58-4.41zm3.12-.6l-.12.01c-1.26.12-2.48 2.12-3.05 5h6.34c-.56-2.87-1.78-4.87-3.04-5H12zm3.12.6l.1.17A12.64 12.64 0 0116.7 8.5h3.05a8.53 8.53 0 00-4.34-4.29l-.29-.12z" fill={primaryFill} /><path d="M22.5 17a4.5 4.5 0 00-9 0c0 1.86 1.42 3.81 4.2 5.9a.5.5 0 00.6 0c2.78-2.09 4.2-4.04 4.2-5.9zm-6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill={primaryFill} /></svg>;
}

const GlobeLocation24Regular = wrapIcon(rawSvg({}), 'GlobeLocation24Regular');
export default GlobeLocation24Regular;
      