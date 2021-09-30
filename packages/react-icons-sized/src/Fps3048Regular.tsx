import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M30 6a6 6 0 00-6 6v8a6 6 0 0012 0v-8a6 6 0 00-6-6zm0 17.5a3.5 3.5 0 01-3.5-3.5v-8a3.5 3.5 0 117 0v8a3.5 3.5 0 01-3.5 3.5z" fill={primaryFill} /><path d="M9.25 30C8.56 30 8 30.56 8 31.25v11.54a1.25 1.25 0 102.5 0V38.5h4.25a1.25 1.25 0 100-2.5H10.5v-3.5h5.26a1.25 1.25 0 100-2.5H9.25z" fill={primaryFill} /><path d="M20.75 30c-.69 0-1.25.56-1.25 1.25v11.54a1.25 1.25 0 102.5 0V38.5h2.25a4.25 4.25 0 000-8.5h-3.5zm3.5 6H22v-3.5h2.25a1.75 1.75 0 110 3.5z" fill={primaryFill} /><path d="M33 34.16c0-.92.74-1.66 1.66-1.66h1.59c.69 0 1.25.56 1.25 1.25a1.25 1.25 0 102.5 0A3.75 3.75 0 0036.25 30h-1.6a4.16 4.16 0 100 8.31h1.26a1.6 1.6 0 010 3.19h-1.66c-.69 0-1.25-.56-1.25-1.25a1.25 1.25 0 10-2.5 0A3.75 3.75 0 0034.25 44h1.66a4.1 4.1 0 100-8.19h-1.25c-.92 0-1.66-.74-1.66-1.65z" fill={primaryFill} /><path d="M19.5 11.63c0 1.57-1.41 3.12-3.5 3.12a1.25 1.25 0 000 2.5c2.09 0 3.5 1.55 3.5 3.13 0 1.57-1.41 3.12-3.5 3.12-1.67 0-2.94-1-3.35-2.44-.17-.57-.63-1.06-1.22-1.06-.8 0-1.49.63-1.33 1.41.55 2.66 3.12 4.59 5.9 4.59 3.31 0 6-2.52 6-5.63 0-1.76-.87-3.34-2.23-4.37A5.49 5.49 0 0022 11.62C22 8.53 19.31 6 16 6c-2.78 0-5.35 1.93-5.9 4.59-.16.78.53 1.41 1.33 1.41.6 0 1.05-.49 1.22-1.06A3.37 3.37 0 0116 8.5c2.09 0 3.5 1.55 3.5 3.13z" fill={primaryFill} /></svg>;
}

const Fps3048Regular = wrapIcon(rawSvg({}), 'Fps3048Regular');
export default Fps3048Regular;
      