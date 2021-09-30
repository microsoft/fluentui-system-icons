import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 0110 9.9 6.06 6.06 0 01-1.53-.57c-.03-.46-.1-.9-.2-1.33h-1.95a1.62 1.62 0 00-.65 0h-.76l.03.37c-.33.28-.83.65-1.45.97-.02-.46-.05-.9-.1-1.34H8.6a18.97 18.97 0 00.14 5H12v1.5H9.06c.65 2.41 1.79 4 2.94 4 .28 0 .55-.09.82-.26.34.6.75 1.12 1.2 1.56A10 10 0 1112 2zM7.5 16.5H4.8a8.53 8.53 0 004.09 3.41c-.52-.82-.95-1.84-1.27-3.01l-.1-.4zM7.1 10H3.73v.02a8.52 8.52 0 00.3 4.98h3.18a20.3 20.3 0 01-.13-5zm1.78-5.91h-.02A8.53 8.53 0 004.25 8.5H7.3c.31-1.75.86-3.28 1.58-4.41zm3.12-.6l-.12.01c-1.26.12-2.48 2.12-3.05 5h6.34c-.57-2.87-1.78-4.87-3.04-5H12zm3.12.6l.1.17A12.64 12.64 0 0116.7 8.5h3.05a8.53 8.53 0 00-4.34-4.29l-.29-.12zm7.38 8.89a7.7 7.7 0 01-4.12-1.87.6.6 0 00-.77 0c-.68.58-2.2 1.7-4.11 1.87a.54.54 0 00-.5.52V17c0 4.22 4.1 5.72 4.87 5.96.09.03.17.03.26 0C18.9 22.72 23 21.22 23 17v-3.5c0-.28-.23-.5-.5-.52z" fill={primaryFill} /></svg>;
}

const GlobeShield24Regular = wrapIcon(rawSvg({}), 'GlobeShield24Regular');
export default GlobeShield24Regular;
      