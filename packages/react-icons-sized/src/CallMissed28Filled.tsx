import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.77 8.94a4.93 4.93 0 01-1.36 3.16c-.55.6-1.34.88-2.14.78l-1.75-.22a2.75 2.75 0 01-2.33-2.06l-.45-1.8c-.1-.37-.3-.58-.52-.64a13.3 13.3 0 00-3.23-.33c-1.2 0-2.38.12-3.21.34-.21.05-.43.26-.52.63l-.45 1.8a2.75 2.75 0 01-2.33 2.06l-1.75.22c-.8.1-1.6-.19-2.14-.78a4.93 4.93 0 01-1.36-3.16 3.38 3.38 0 011.6-3.01C5.8 4.67 8.99 3.5 14 3.5s8.2 1.17 10.16 2.43a3.38 3.38 0 011.61 3z" fill={primaryFill} /><path d="M14.5 17.25a.75.75 0 00-1.5 0v3c0 .41.34.75.75.75h2a.75.75 0 000-1.5H14.5v-2.25z" fill={primaryFill} /><path d="M20.5 19.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-1.5 0a5 5 0 10-10 0 5 5 0 0010 0z" fill={primaryFill} /></svg>;
}

const CallMissed28Filled = wrapIcon(rawSvg({}), 'CallMissed28Filled');
export default CallMissed28Filled;
      