import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 01-.7-.7L13.8 10 8.65 4.85a.5.5 0 010-.7zm-4 0c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 01-.7-.7L9.8 10 4.65 4.85a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const ChevronDoubleRightRegular = wrapIcon(rawSvg({}), 'ChevronDoubleRightRegular');
export default ChevronDoubleRightRegular;
      