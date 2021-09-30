import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.06V20c0 1.1.9 2 2 2h12a2 2 0 001.8-1.14l.92.92a.75.75 0 001.06-1.06L3.28 2.22a.75.75 0 10-1.06 1.06L4 5.06zm12.47 12.47l.5.5a.75.75 0 01-.72.97h-5.5a.75.75 0 010-1.5h5.5c.08 0 .15.01.22.03zM14.94 16h-4.19a.75.75 0 010-1.5h2.69l1.5 1.5zm-3-3h-1.19a.75.75 0 01-.26-1.45L11.94 13zM7 12.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm0 3a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm0 3a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM16.25 13h-.07L20 16.82V10h-6a2 2 0 01-1.29-.47l1.97 1.97h1.57a.75.75 0 010 1.5zM12 8c0 .5.18.94.47 1.29L5.31 2.12A2 2 0 016 2h6v6zm1.5 0V2.5l6 6H14a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentBulletListOff24Filled = wrapIcon(rawSvg({}), 'DocumentBulletListOff24Filled');
export default DocumentBulletListOff24Filled;
      