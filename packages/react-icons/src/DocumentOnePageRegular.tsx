import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H6z" fill={primaryFill} /><path d="M13 6.5a.5.5 0 01-.41.5H7.5a.5.5 0 01-.09-1h5.09c.28 0 .5.22.5.5zm0 3.5a.5.5 0 01-.41.5H7.5a.5.5 0 01-.09-1h5.09c.28 0 .5.22.5.5zm0 3.5a.5.5 0 01-.41.5H7.5a.5.5 0 01-.09-1h5.09c.28 0 .5.22.5.5z" fill={primaryFill} /></svg>;
}

const DocumentOnePageRegular = wrapIcon(rawSvg({}), 'DocumentOnePageRegular');
export default DocumentOnePageRegular;
      