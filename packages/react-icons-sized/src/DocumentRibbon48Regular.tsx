import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.25 4A4.25 4.25 0 008 8.25v13.42a9.44 9.44 0 012.5-.62V8.25c0-.97.78-1.75 1.75-1.75H24v8.75A3.75 3.75 0 0027.75 19h9.75v20.75c0 .97-.78 1.75-1.75 1.75H19V44h16.75C38.1 44 40 42.1 40 39.75V18.41c0-.6-.24-1.16-.66-1.59L27.18 4.66c-.43-.42-1-.66-1.6-.66H12.26zm23.23 12.5h-7.73c-.69 0-1.25-.56-1.25-1.25V7.52l8.98 8.98zM10.5 23.07a7.5 7.5 0 102 14.86 7.5 7.5 0 00-2-14.86zM7.65 45.8c-.69.5-1.65 0-1.65-.84v-6.71a9.48 9.48 0 0011 0v6.7c0 .86-.96 1.35-1.65.85L11.5 43l-3.85 2.8z" fill={primaryFill} /></svg>;
}

const DocumentRibbon48Regular = wrapIcon(rawSvg({}), 'DocumentRibbon48Regular');
export default DocumentRibbon48Regular;
      