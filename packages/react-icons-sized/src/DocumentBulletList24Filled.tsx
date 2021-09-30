import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 8V2H6a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12a2 2 0 002-2V10h-6a2 2 0 01-2-2zm-5 4.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm0 3a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm0 3a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm3-6c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zm0 3c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zm0 3c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zM13.5 8V2.5l6 6H14a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentBulletList24Filled = wrapIcon(rawSvg({}), 'DocumentBulletList24Filled');
export default DocumentBulletList24Filled;
      