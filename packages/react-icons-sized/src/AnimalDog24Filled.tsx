import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.88 8.66c.38.22.84.34 1.37.34.84 0 1.55-.3 2.04-.84.48-.53.7-1.22.7-1.91a.75.75 0 00-1.5 0c0 .38-.11.69-.3.9-.18.19-.48.35-.94.35-.45 0-.73-.16-.92-.37-.18-.21-.3-.5-.33-.84V4.25C11 3.01 12 2 13.25 2h3.18c.51 0 1.01.14 1.45.4l2.76 1.71c.22.14.36.38.36.64v1.5c0 1.24-1 2.25-2.25 2.25h-.25v9.53c.92.1 1.62.37 2.05.97.25.36.36.76.4 1.13.05.35.05.73.05 1.09v.03c0 .41-.34.75-.75.75H17v-.77c0-.58 0-2.21-1.5-3.17v-2.8a.75.75 0 00-1.5 0v2.26a4.62 4.62 0 00-.7-.02h-.09a.75.75 0 10.08 1.5H13.5a1.94 1.94 0 01.93.18c1.04.48 1.07 1.44 1.07 2.07V22H5.83a3.83 3.83 0 01-1.97-7.12.75.75 0 01.78 1.28 2.33 2.33 0 001.2 4.34c.31 0 .51-.08.64-.18.14-.1.25-.23.33-.4a1.93 1.93 0 00.19-.7v-.03a7.94 7.94 0 01.03-.65c.04-.43.1-1.02.23-1.68.26-1.29.8-2.97 1.96-4.14a6.52 6.52 0 001.54-3.36l.12-.7z" fill={primaryFill} /></svg>;
}

const AnimalDog24Filled = wrapIcon(rawSvg({}), 'AnimalDog24Filled');
export default AnimalDog24Filled;
      