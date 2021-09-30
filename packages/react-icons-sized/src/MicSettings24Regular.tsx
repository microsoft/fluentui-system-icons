import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 17.5c0 1.1.27 2.13.75 3.03v.72a.75.75 0 01-1.5.1v-2.37A6.75 6.75 0 014 12.48v-.73a.75.75 0 011.5-.1v.6a5.25 5.25 0 005.03 5.25H11zM15 6v5.5a6.5 6.5 0 00-1.53.9c.02-.13.03-.26.03-.4V6a2.5 2.5 0 00-5 0v6a2.5 2.5 0 003.3 2.37c-.28.5-.49 1.05-.63 1.63H11a4 4 0 01-4-4V6a4 4 0 118 0zm-.72 7.98a2 2 0 01-1.44 2.5l-.59.14a5.73 5.73 0 000 1.8l.55.13a2 2 0 011.45 2.51l-.19.63c.44.39.94.7 1.49.93l.49-.52a2 2 0 012.9 0l.5.52a5.28 5.28 0 001.48-.91l-.2-.69a2 2 0 011.44-2.5l.59-.14a5.72 5.72 0 000-1.8l-.55-.13a2 2 0 01-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 01-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7zM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
}

const MicSettings24Regular = wrapIcon(rawSvg({}), 'MicSettings24Regular');
export default MicSettings24Regular;
      