import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 9.25c0-.14.11-.25.25-.25H7v1H6v-.75zM6 11h1v1h-.75a.25.25 0 01-.25-.25V11zm4 .75V11H8v1h1.75c.14 0 .25-.11.25-.25zM8 9v1h2v-.75A.25.25 0 009.75 9H8zm0-4.5V1H4.5C3.67 1 3 1.67 3 2.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V6H9.5A1.5 1.5 0 018 4.5zM5 9.25C5 8.56 5.56 8 6.25 8h3.5c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-3.5C5.56 13 5 12.44 5 11.75v-2.5zM9 4.5V1.25L12.75 5H9.5a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentTable16Filled = wrapIcon(rawSvg({}), 'DocumentTable16Filled');
export default DocumentTable16Filled;
      