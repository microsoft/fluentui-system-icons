import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l1.48 1.48A3 3 0 002 7v6a3 3 0 003 3h10l.28-.01 1.87 1.86a.5.5 0 00.7-.7l-1.48-1.48-.76-.77-2.93-2.93-1.06-1.05L10.5 9.8 8.94 8.23 7.77 7.06 4.72 4.01 2.85 2.15zM14.3 15H5a2 2 0 01-2-2V7a2 2 0 011.39-1.9l2.1 2.1-.09.04C5.56 7.66 5 8.61 5 10c0 1.39.56 2.34 1.4 2.76.82.41 1.8.24 2.45-.4a.5.5 0 10-.7-.71c-.35.35-.87.43-1.3.22C6.44 11.66 6 11.1 6 10s.44-1.66.85-1.87c.15-.07.3-.1.46-.11L14.3 15zm2.9.06l-.72-.7A2 2 0 0017 13V7a2 2 0 00-2-2H7.12l-1-1H15a3 3 0 013 3v6c0 .8-.31 1.52-.82 2.06zm-5.65-5.64l-.81-.81c.24-.65.65-1.11 1.17-1.37.82-.41 1.8-.24 2.45.4a.5.5 0 01-.7.71 1.12 1.12 0 00-1.3-.22c-.33.17-.68.56-.8 1.3z" fill={primaryFill} /></svg>;
}

const ClosedCaptionOffRegular = wrapIcon(rawSvg({}), 'ClosedCaptionOffRegular');
export default ClosedCaptionOffRegular;
      