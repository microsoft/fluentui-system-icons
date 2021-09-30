import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h4.92a4.3 4.3 0 00-1.56.97l-6.05 6.1c-.35.35-.6.79-.73 1.27l-.52 2.03c-.16.6-.04 1.17.24 1.63H5.5A1.5 1.5 0 014 20.5v-17C4 2.67 4.67 2 5.5 2H12z" fill={primaryFill} /><path d="M13.5 2.5V8c0 .28.22.5.5.5h5.5l-6-6z" fill={primaryFill} /><path d="M12.2 17.57l5.9-5.9a2.29 2.29 0 113.23 3.23l-5.9 5.9c-.35.35-.78.6-1.25.71l-1.83.46c-.8.2-1.52-.52-1.32-1.32l.46-1.83c.12-.47.36-.9.7-1.25z" fill={primaryFill} /></svg>;
}

const DocumentEdit24Filled = wrapIcon(rawSvg({}), 'DocumentEdit24Filled');
export default DocumentEdit24Filled;
      