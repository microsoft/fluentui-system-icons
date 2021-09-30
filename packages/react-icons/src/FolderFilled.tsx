import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.56 4.5h4.94a2.5 2.5 0 012.48 2.17l.01.17L18 7v7.5a2.5 2.5 0 01-2.34 2.5H4.5A2.5 2.5 0 012 14.66V7.5H7.22c.3-.04.6-.16.83-.36l.1-.1 2.41-2.54zM7.16 3c.28 0 .54.07.77.21l.14.09 1.31.99-1.95 2.05-.06.06a.5.5 0 01-.22.1H2v-1A2.5 2.5 0 014.34 3h2.83z" fill={primaryFill} /></svg>;
}

const FolderFilled = wrapIcon(rawSvg({}), 'FolderFilled');
export default FolderFilled;
      