import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22l22.5 22.5a.75.75 0 01-1.06 1.06l-1.54-1.54c-.7.48-1.53.76-2.43.76H7.25A4.25 4.25 0 013 20.75V7.25c0-.9.28-1.74.76-2.43L2.22 3.28a.75.75 0 111.06-1.06zm18.81 20.93L4.85 5.91c-.22.4-.35.85-.35 1.34v13.5a2.75 2.75 0 002.75 2.75h13.5c.49 0 .94-.13 1.34-.35zM6.3 3.11L7.7 4.5h4.06a.75.75 0 000-1.5h-4.5c-.33 0-.65.04-.96.1zm18.6 18.6l-1.39-1.4v-4.06a.75.75 0 011.5 0v4.5c0 .33-.04.65-.1.96zM15.5 3.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v8a.75.75 0 01-1.5 0V5.56l-6.22 6.22a.75.75 0 11-1.06-1.06l6.22-6.22h-6.19a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const OpenOff28Regular = wrapIcon(rawSvg({}), 'OpenOff28Regular');
export default OpenOff28Regular;
      