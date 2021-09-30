import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 5.5a1 1 0 11-2 0 1 1 0 012 0zM2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v1.56a2.57 2.57 0 00-1-.02V4.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5v7c0 .23.05.45.15.64L6.8 8.5a1.7 1.7 0 012.4 0l.34.34-.7.71-.35-.34a.7.7 0 00-.99 0l-3.65 3.65c.2.1.42.15.65.15h1.8l-.25 1H4.5A2.5 2.5 0 012 11.5v-7zM13.26 7a1.56 1.56 0 00-.92.45l-4.3 4.3c-.34.34-.59.77-.71 1.25l-.01.03-.3 1.21a.6.6 0 00.73.74l1.22-.3c.48-.12.93-.38 1.29-.73l4.28-4.29a1.56 1.56 0 00-1.28-2.65z" fill={primaryFill} /></svg>;
}

const ImageEdit16Regular = wrapIcon(rawSvg({}), 'ImageEdit16Regular');
export default ImageEdit16Regular;
      