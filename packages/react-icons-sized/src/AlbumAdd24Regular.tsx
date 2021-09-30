import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6c0-1.1.9-2 2-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-7.5c.2-.47.34-.98.42-1.5H20a.5.5 0 00.5-.5V6a.5.5 0 00-.5-.5H7.5v5.58a6.55 6.55 0 00-1.5-.06V5.5H4a.5.5 0 00-.5.5v5.73c-.55.29-1.06.65-1.5 1.08V6z" fill={primaryFill} /><path d="M12 7a2 2 0 00-2 2v1c0 1.1.9 2 2 2h4a2 2 0 002-2V9a2 2 0 00-2-2h-4zm4 1.5c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V9c0-.28.22-.5.5-.5h4z" fill={primaryFill} /><path d="M6.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.5 8.5V18h2.5a.5.5 0 000-1H7v-2.5a.5.5 0 10-1 0V17H3.5a.5.5 0 000 1H6v2.5a.5.5 0 101 0z" fill={primaryFill} /></svg>;
}

const AlbumAdd24Regular = wrapIcon(rawSvg({}), 'AlbumAdd24Regular');
export default AlbumAdd24Regular;
      