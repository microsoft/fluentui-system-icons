import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.8 13H4a2 2 0 00-2 2v1.73C2.17 20.04 5.79 21 8.5 21c1.03 0 2.19-.14 3.24-.49a6.37 6.37 0 01-.54-1.4 8.8 8.8 0 01-2.38.39h-.64a7.63 7.63 0 01-3.26-.76c-.97-.52-1.42-1.23-1.42-2.24V15l.01-.1a.5.5 0 01.14-.26.5.5 0 01.25-.13l.1-.01h7.73c.29-.55.65-1.06 1.08-1.5zm.2-6.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-7.5 0a3 3 0 116 0 3 3 0 01-6 0zm15.5 1a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm-5.5 0a2 2 0 114 0 2 2 0 01-4 0zm.56 5.4l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7a2 2 0 01-1.44 2.5l-.59.14a5.73 5.73 0 00.01 1.8l.54.13a2 2 0 011.45 2.51l-.19.63c.44.39.94.7 1.49.93l.5-.52a2 2 0 012.89 0l.5.52a5.28 5.28 0 001.48-.91l-.2-.69a2 2 0 011.44-2.5l.59-.14a5.73 5.73 0 000-1.8l-.55-.13a2 2 0 01-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 01-2.9 0zm0 4.6c0-.83.64-1.5 1.44-1.5.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19c-.8 0-1.45-.67-1.45-1.5z" fill={primaryFill} /></svg>;
}

const PeopleSettings24Regular = wrapIcon(rawSvg({}), 'PeopleSettings24Regular');
export default PeopleSettings24Regular;
      