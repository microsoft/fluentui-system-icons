import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2H9.49l3.17-3.17a4.47 4.47 0 00-5.65-6.87c-.9-.6-1.97-.85-3.01-.73V4c0-1.1.9-2 2-2h6zm1.5.5V8c0 .28.22.5.5.5h5.5l-6-6zM7.01 22.75a.75.75 0 01-.53-.22l-4.4-4.4a3.47 3.47 0 114.9-4.91l.03.04.04-.04a3.47 3.47 0 114.9 4.9l-4.4 4.41a.75.75 0 01-.54.22z" fill={primaryFill} /></svg>;
}

const DocumentHeart24Filled = wrapIcon(rawSvg({}), 'DocumentHeart24Filled');
export default DocumentHeart24Filled;
      