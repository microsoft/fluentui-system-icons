import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 9c-.24 0-.47.06-.68.16.82.2 1.56.58 2.18 1.1V10h3.5c.28 0 .5.22.5.5V12h-2.6c.16.32.3.65.4 1H13v1.5a.5.5 0 01-.5.5h-1.52c-.03.34-.1.68-.19 1h1.71c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-5zM4 9.2c.32-.08.66-.15 1-.18V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1h-3.6c-.18.36-.4.7-.66 1H14a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6a2 2 0 00-2 2v5.2zM14.8 7h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7zM10 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0L4.5 15.29l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const DocumentTableCheckmark20Regular = wrapIcon(rawSvg({}), 'DocumentTableCheckmark20Regular');
export default DocumentTableCheckmark20Regular;
      