import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 7a3 3 0 100 6 3 3 0 000-6zm-2 3a2 2 0 114 0 2 2 0 01-4 0zm-.5-8c.28 0 .5.22.5.5V4h1.5V2.5a.5.5 0 011 0V4H12V2.5a.5.5 0 011 0V4h.5A2.5 2.5 0 0116 6.5V7h1.5a.5.5 0 010 1H16v1.5h1.5a.5.5 0 010 1H16V12h1.5a.5.5 0 010 1H16v.5a2.5 2.5 0 01-2.5 2.5H13v1.5a.5.5 0 01-1 0V16h-1.5v1.5a.5.5 0 01-1 0V16H8v1.5a.5.5 0 01-1 0V16h-.5A2.5 2.5 0 014 13.5V13H2.5a.5.5 0 010-1H4v-1.5H2.5a.5.5 0 010-1H4V8H2.5a.5.5 0 010-1H4v-.5A2.5 2.5 0 016.5 4H7V2.5c0-.28.22-.5.5-.5zM15 6.5c0-.83-.67-1.5-1.5-1.5h-7C5.67 5 5 5.67 5 6.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-7z" fill={primaryFill} /></svg>;
}

const DeveloperBoardRegular = wrapIcon(rawSvg({}), 'DeveloperBoardRegular');
export default DeveloperBoardRegular;
      