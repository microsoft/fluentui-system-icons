import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.49 10.9v-.03l.05-.15c.06-.13.15-.3.3-.49.28-.33.82-.73 1.9-.73.97 0 1.57.31 1.91.75.35.44.53 1.14.36 2.12-.1.58-.39.93-.84 1.22-.38.24-.8.4-1.3.61l-.63.26c-.74.32-1.57.75-2.2 1.5A4.9 4.9 0 007 19.26a.75.75 0 00.75.75h6a.75.75 0 000-1.5h-5.2c.1-.73.34-1.22.63-1.57.4-.48.96-.79 1.65-1.09l.5-.2c.54-.22 1.15-.47 1.65-.79a3.18 3.18 0 001.5-2.22 4.11 4.11 0 00-.65-3.31C13.13 8.44 12.04 8 10.75 8c-1.53 0-2.5.6-3.06 1.27a3.33 3.33 0 00-.67 1.32v.02a.75.75 0 001.47.29zm0 0zm8.79 3.32a.75.75 0 00-1.06 1.06L17.94 17l-1.72 1.72a.75.75 0 101.06 1.06L19 18.06l1.72 1.72a.75.75 0 101.06-1.06L20.06 17l1.72-1.72a.75.75 0 10-1.06-1.06L19 15.94l-1.72-1.72z" fill={primaryFill} /></svg>;
}

const Multiplier2X28Regular = wrapIcon(rawSvg({}), 'Multiplier2X28Regular');
export default Multiplier2X28Regular;
      