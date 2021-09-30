import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.25C4 3.01 5 2 6.25 2h4.38c.6 0 1.17.24 1.6.66l4.61 4.62c.42.42.66 1 .66 1.59v8.38c0 1.24-1 2.25-2.25 2.25h-9c-1.24 0-2.25-1-2.25-2.25v-13zm2.25-.75a.75.75 0 00-.75.75v13c0 .41.34.75.75.75h9c.41 0 .75-.34.75-.75V9h-3.25c-1.24 0-2.25-1.01-2.25-2.25V3.5H6.25zM12 4.56v2.19c0 .41.34.75.75.75h2.19L12 4.56zM6.63 20.5c.3.87 1.14 1.5 2.12 1.5h6.5A4.75 4.75 0 0020 17.25v-5.88c0-.6-.24-1.17-.66-1.6l-.84-.83v8.31c0 1.8-1.45 3.25-3.25 3.25H6.63z" fill={primaryFill} /></svg>;
}

const DocumentMultiple24Regular = wrapIcon(rawSvg({}), 'DocumentMultiple24Regular');
export default DocumentMultiple24Regular;
      