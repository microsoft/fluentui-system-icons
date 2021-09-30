import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 2c.28 0 .5.22.5.5v4a.5.5 0 101 0v-3a.5.5 0 111 0v4a.5.5 0 101 0v-2a.5.5 0 011 0v4c0 .57-.25 1.3-.63 2.04-.38.73-.84 1.43-1.2 1.92-.25.34-.66.54-1.1.54H8.22c-.72 0-1.4-.56-1.74-1.36a10.95 10.95 0 00-2.28-3.3c-.39-.4-.74-.7-1-.91v-.01c.1-.12.2-.2.3-.24a.7.7 0 01.45-.09c.34.05.74.32 1.19.76A.5.5 0 006 8.5v-5a.5.5 0 011 0v3a.5.5 0 001 0v-3-1c0-.28.22-.5.5-.5zM12 4.09V3.5a1.5 1.5 0 00-2.05-1.4 1.5 1.5 0 00-2.9 0A1.5 1.5 0 005 3.5v3.95c-.28-.17-.58-.3-.9-.35a1.7 1.7 0 00-1.08.2c-.35.2-.66.5-.94.92a.5.5 0 00.13.69l.02.01a5.33 5.33 0 01.35.28c.23.2.56.48.91.84a9.95 9.95 0 012.08 2.99C6 14.06 6.97 15 8.23 15h1.83c.74 0 1.46-.33 1.91-.95.38-.52.88-1.26 1.29-2.06.4-.78.74-1.68.74-2.49v-4a1.5 1.5 0 00-2-1.41zm0 3.41z" fill={primaryFill} /></svg>;
}

const HandLeft16Regular = wrapIcon(rawSvg({}), 'HandLeft16Regular');
export default HandLeft16Regular;
      