import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 10.5C6 9.67 6.67 9 7.5 9h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 016 14.5v-4zM8 15v-2H7v1.5c0 .28.22.5.5.5H8zm1-3h4v-1.5a.5.5 0 00-.5-.5H9v2zm0 3h3.5a.5.5 0 00.5-.5V13H9v2zm-1.5-5a.5.5 0 00-.5.5V12h1v-2h-.5zM6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h8a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6zM5 4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1H6a1 1 0 01-1-1V4zm9.8 3h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7z" fill={primaryFill} /></svg>;
}

const DocumentTableRegular = wrapIcon(rawSvg({}), 'DocumentTableRegular');
export default DocumentTableRegular;
      