import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2.75c0-.41.34-.75.75-.75h.87a.75.75 0 010 1.5h-.87a.75.75 0 01-.75-.75zm3.47 0c0-.41.33-.75.75-.75h1.73a.75.75 0 010 1.5H8.72a.75.75 0 01-.75-.75zm4.33 0c0-.41.34-.75.75-.75h1.73a.75.75 0 010 1.5h-1.73a.75.75 0 01-.75-.75zm4.33 0c0-.41.34-.75.75-.75h.87a.75.75 0 010 1.5h-.87a.75.75 0 01-.75-.75zM4.5 21.25c0-.41.34-.75.75-.75h13a.75.75 0 010 1.5h-13a.75.75 0 01-.75-.75zm7.78-16.03a.75.75 0 00-1.06 0l-5 5a.75.75 0 101.06 1.06L11 7.56v10.69a.75.75 0 001.5 0V7.56l3.72 3.72a.75.75 0 101.06-1.06l-5-5z" fill={primaryFill} /></svg>;
}

const PaddingTop24Regular = wrapIcon(rawSvg({}), 'PaddingTop24Regular');
export default PaddingTop24Regular;
      