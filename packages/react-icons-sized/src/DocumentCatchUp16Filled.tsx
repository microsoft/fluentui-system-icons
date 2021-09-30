import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1v3.5C8 5.33 8.67 6 9.5 6H13v7.5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 13.5V11h1.5c.44 0 .85-.2 1.13-.51l.43 1.44a1.5 1.5 0 002.64.47L9.75 11h.75a1.5 1.5 0 000-3H9c-.33 0-.64.1-.9.3l-.66-2.23a1.5 1.5 0 00-2.78-.24L3.57 8H3V2.5C3 1.67 3.67 1 4.5 1H8z" fill={primaryFill} /><path d="M9 1.25V4.5c0 .28.22.5.5.5h3.25L9 1.25z" fill={primaryFill} /><path d="M6.48 6.36a.5.5 0 00-.93-.08L4.2 9H2.5a.5.5 0 000 1h2a.5.5 0 00.45-.28l.93-1.87 1.14 3.8a.5.5 0 00.88.15L9.25 10h1.25a.5.5 0 000-1H9a.5.5 0 00-.4.2l-.9 1.2-1.22-4.04z" fill={primaryFill} /></svg>;
}

const DocumentCatchUp16Filled = wrapIcon(rawSvg({}), 'DocumentCatchUp16Filled');
export default DocumentCatchUp16Filled;
      