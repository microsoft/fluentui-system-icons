import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.3 2.1c.24-.6.94-1.23 1.82-.98 1.78.5 2.45 2.38 2.64 4.15.16 1.51 0 3.23-.35 4.73h2.17a3.75 3.75 0 013.67 4.5l-1.22 6.04a6.75 6.75 0 01-8.47 5.15l-7.7-2.2A3.75 3.75 0 014.2 20.5L3.78 18a2.96 2.96 0 011.65-3.08c4.77-2.42 6.6-7.07 8.61-12.16l.26-.66zm1.43.5a358.53 358.53 0 00-.35.87c-1.95 4.94-3.97 10.1-9.27 12.79-.61.3-.94.93-.85 1.5l.42 2.5c.14.85.76 1.55 1.6 1.79l7.69 2.2c2.94.84 5.98-1 6.59-4l1.22-6.05c.29-1.4-.78-2.7-2.2-2.7h-3.14a.75.75 0 01-.72-.97c.47-1.54.72-3.49.55-5.1-.18-1.68-.74-2.62-1.52-2.86l-.02.02z" fill={primaryFill} /></svg>;
}

const ThumbLike28Regular = wrapIcon(rawSvg({}), 'ThumbLike28Regular');
export default ThumbLike28Regular;
      