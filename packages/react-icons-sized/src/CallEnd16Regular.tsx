import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.93 9.38l.03-.16c.15-.89-.15-1.8-.82-2.4C12.81 5.58 10.76 5 8 5s-4.8.6-6.14 1.8a2.66 2.66 0 00-.79 2.59l.14.57c.22.95 1.1 1.58 2.07 1.48l1.22-.12c.82-.09 1.5-.69 1.68-1.5l.28-1.25.01-.03.07-.03.2-.08c.29-.09.7-.13 1.26-.13.74 0 1.24.08 1.47.22.04.03.07.07.08.11l.27 1.2c.18.8.86 1.4 1.68 1.49l1.23.12c.96.1 1.84-.54 2.07-1.49l.13-.57zM8 6.06c2.52 0 4.33.52 5.43 1.54.4.36.58.9.5 1.42l-.02.12-.14.57c-.1.43-.5.72-.94.68l-1.22-.13a.88.88 0 01-.77-.68l-.27-1.19c-.07-.32-.27-.6-.56-.77A3.95 3.95 0 008 7.24c-1.4 0-2.26.26-2.52.96l-.03.1-.3 1.28a.88.88 0 01-.76.68l-1.22.13a.88.88 0 01-.94-.67l-.14-.58a1.6 1.6 0 01.48-1.55C3.67 6.58 5.48 6.06 8 6.06z" fill={primaryFill} /></svg>;
}

const CallEnd16Regular = wrapIcon(rawSvg({}), 'CallEnd16Regular');
export default CallEnd16Regular;
      