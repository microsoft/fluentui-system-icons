import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 6a.5.5 0 000 1h7a.5.5 0 000-1h-7z" fill={primaryFill} /><path d="M6 8.5c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M6.5 10a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /><path d="M4 3.5C4 2.67 4.67 2 5.5 2h9c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 16.5v-13zM5.5 3a.5.5 0 00-.5.5v13c0 .28.22.5.5.5h9a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-9z" fill={primaryFill} /></svg>;
}

const ReadingModeMobileRegular = wrapIcon(rawSvg({}), 'ReadingModeMobileRegular');
export default ReadingModeMobileRegular;
      