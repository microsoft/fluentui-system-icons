import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6c3.33 0 5.59 1.28 7.15 2.66.66.58.97 1.46.8 2.28l-.15.83c-.15.78-.87 1.3-1.7 1.22l-1.63-.16c-.72-.07-1.25-.59-1.47-1.33-.3-1-.5-1.75-.5-1.75a6.63 6.63 0 00-5 0s-.2.75-.5 1.75c-.2.67-.5 1.26-1.2 1.33l-1.63.16c-.81.08-1.6-.43-1.82-1.2l-.25-.84c-.25-.82-.03-1.7.58-2.28C4.1 7.3 6.68 6 10 6zm3.48 3.53l.02.1a46.1 46.1 0 00.46 1.58c.13.45.39.6.6.62l1.64.16c.35.04.57-.17.62-.4l.16-.84c.09-.46-.08-.98-.49-1.34A9.37 9.37 0 0010 7C6.93 7 4.6 8.2 3.37 9.39c-.33.32-.46.8-.31 1.28l.24.83c.1.3.43.53.77.5l1.63-.17.05-.01.05-.05c.07-.09.15-.26.24-.55a115.65 115.65 0 00.46-1.6l.03-.1c.1-.37.45-.62.62-.7a7.62 7.62 0 015.73 0c.15.07.48.29.59.68v.03z" fill={primaryFill} /></svg>;
}

const CallEndRegular = wrapIcon(rawSvg({}), 'CallEndRegular');
export default CallEndRegular;
      