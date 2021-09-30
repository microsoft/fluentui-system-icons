import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 3.5c1.8 0 3.25 1.46 3.25 3.25v10.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 17.25V6.75C2 4.95 3.46 3.5 5.25 3.5h13.5zM8.01 8.87c-1.62 0-2.75 1.41-2.75 3.12 0 1.72 1.13 3.13 2.75 3.13.9 0 1.7-.43 2.12-1.21l.07-.17.03-.06.01-.08.01-.08V11.9a.63.63 0 00-.52-.52H8.53a.63.63 0 00-.52.51L8 12v.1c.05.27.26.48.52.52l.1.01H9v.75c-.2.32-.56.5-.99.5-.86 0-1.5-.8-1.5-1.88 0-1.07.64-1.87 1.5-1.87.43 0 .67.05.97.2a.63.63 0 00.54-1.13c-.49-.24-.9-.32-1.5-.32zm4.62.12a.63.63 0 00-.62.54V14.48a.63.63 0 001.24 0V9.51a.63.63 0 00-.62-.53zm5 .01h-2a.63.63 0 00-.63.52V14.46c.04.27.25.48.52.52l.1.01h.1a.63.63 0 00.52-.52V13.25h1.23a.63.63 0 00.52-.52v-.2a.63.63 0 00-.52-.52h-.1L16.25 12v-1.75H17.7a.63.63 0 000-1.24h-.09l-2-.02 2 .01z" fill={primaryFill} /></svg>;
}

const Gif24Filled = wrapIcon(rawSvg({}), 'Gif24Filled');
export default Gif24Filled;
      