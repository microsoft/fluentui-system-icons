import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2.75c0 .41.34.75.75.75h13a.75.75 0 000-1.5h-13a.75.75 0 00-.75.75zm0 18.5c0 .41.34.75.75.75h.87a.75.75 0 000-1.5h-.87a.75.75 0 00-.75.75zm3.47 0c0 .41.33.75.75.75h1.73a.75.75 0 000-1.5H8.72a.75.75 0 00-.75.75zm4.33 0c0 .41.34.75.75.75h1.73a.75.75 0 000-1.5h-1.73a.75.75 0 00-.75.75zm4.33 0c0 .41.34.75.75.75h.87a.75.75 0 000-1.5h-.87a.75.75 0 00-.75.75zm-4.35-2.47c-.3.3-.77.3-1.06 0l-5-5a.75.75 0 111.06-1.06L11 16.44V5.75a.75.75 0 011.5 0v10.69l3.72-3.72a.75.75 0 111.06 1.06l-5 5z" fill={primaryFill} /></svg>;
}

const PaddingDown24Regular = wrapIcon(rawSvg({}), 'PaddingDown24Regular');
export default PaddingDown24Regular;
      