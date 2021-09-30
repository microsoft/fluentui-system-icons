import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.94 5L19 10.06l-.96.96a6.5 6.5 0 00-7.02 7.02L9.06 20c-.27.28-.62.48-1 .58l-5.11 1.4a.75.75 0 01-.92-.93l1.4-5.11c.1-.38.3-.73.57-1L13.94 5zm7.1-2.03a3.58 3.58 0 010 5.06l-.98.97L15 3.94l.97-.97a3.58 3.58 0 015.06 0zm-6.76 11a2 2 0 01-1.44 2.5l-.59.15a5.73 5.73 0 00.01 1.8l.54.13a2 2 0 011.45 2.51l-.19.63c.44.39.94.7 1.49.93l.5-.52a2 2 0 012.89 0l.5.52a5.28 5.28 0 001.48-.91l-.2-.69a2 2 0 011.44-2.5l.59-.14a5.73 5.73 0 000-1.8l-.55-.13a2 2 0 01-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 01-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7zM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
}

const EditSettings24Filled = wrapIcon(rawSvg({}), 'EditSettings24Filled');
export default EditSettings24Filled;
      