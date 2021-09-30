import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.25C4 3.01 5 2 6.25 2h4.25v4.75C10.5 7.99 11.51 9 12.75 9h4.75v8.25c0 1.24-1 2.25-2.25 2.25h-9c-1.24 0-2.25-1-2.25-2.25v-13zm8 2.5V2.47l.22.19 4.62 4.62.2.22h-4.29a.75.75 0 01-.75-.75zM8.75 22c-.98 0-1.81-.63-2.12-1.5h8.62c1.8 0 3.25-1.46 3.25-3.25V8.94l.84.84c.42.42.66 1 .66 1.59v5.88A4.75 4.75 0 0115.25 22h-6.5z" fill={primaryFill} /></svg>;
}

const DocumentMultiple24Filled = wrapIcon(rawSvg({}), 'DocumentMultiple24Filled');
export default DocumentMultiple24Filled;
      