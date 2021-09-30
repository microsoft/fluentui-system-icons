import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.56 4.5h4.94a2.5 2.5 0 012.48 2.17l.01.17L18 7v4a3 3 0 10-5.24 2h-.26a2.5 2.5 0 00-2.5 2.5 4.84 4.84 0 00.24 1.5H4.5A2.5 2.5 0 012 14.66V7.5H7.22c.3-.04.6-.16.83-.36l.1-.1 2.41-2.54zM7.16 3c.28 0 .54.07.77.21l.14.09 1.31.99-1.95 2.05-.06.06a.5.5 0 01-.22.1H2v-1A2.5 2.5 0 014.34 3h2.83zM16 9.27a2 2 0 11-2 3.46 2 2 0 012-3.46zM11.03 16a3.83 3.83 0 01-.03-.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5 0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 01-2.79-.89A3.18 3.18 0 0111.03 16z" fill={primaryFill} /></svg>;
}

const FolderPersonFilled = wrapIcon(rawSvg({}), 'FolderPersonFilled');
export default FolderPersonFilled;
      