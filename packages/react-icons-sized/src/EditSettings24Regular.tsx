import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.03 2.97a3.58 3.58 0 010 5.06l-3 3a6.57 6.57 0 00-2.35.23L17.94 9 15 6.06 5.06 16c-.09.1-.16.2-.19.33l-1.05 3.85 3.85-1.05c.13-.03.24-.1.33-.2l3.26-3.25a6.5 6.5 0 00-.24 2.36L9.06 20c-.27.28-.62.48-1 .58l-5.11 1.4a.75.75 0 01-.92-.93l1.4-5.11c.1-.38.3-.73.57-1L15.97 2.97a3.58 3.58 0 015.06 0zm-4 1.06l-.97.97L19 7.94l.97-.97a2.08 2.08 0 10-2.94-2.94zm-2.75 9.95a2 2 0 01-1.44 2.5l-.59.14a5.73 5.73 0 00.01 1.8l.54.13a2 2 0 011.45 2.51l-.19.63c.44.39.94.7 1.49.93l.5-.52a2 2 0 012.89 0l.5.52a5.28 5.28 0 001.48-.91l-.2-.69a2 2 0 011.44-2.5l.59-.14a5.73 5.73 0 000-1.8l-.55-.13a2 2 0 01-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 01-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7zM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
}

const EditSettings24Regular = wrapIcon(rawSvg({}), 'EditSettings24Regular');
export default EditSettings24Regular;
      