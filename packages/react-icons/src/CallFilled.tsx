import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.99 2.07A2 2 0 019.3 3l.08.15.66 1.47a2.5 2.5 0 01-.44 2.72l-.13.13-1.05.98c-.19.17-.04.86.64 2.04.6 1.06 1.1 1.56 1.35 1.58h.1l2.05-.64a1.5 1.5 0 011.56.45l.1.11 1.35 1.88a2 2 0 01-.13 2.5l-.12.12-.54.52a3.5 3.5 0 01-3.72.7c-1.93-.78-3.69-2.56-5.29-5.33S3.52 7.2 3.82 5.14a3.5 3.5 0 012.26-2.8l.2-.06.7-.21z" fill={primaryFill} /></svg>;
}

const CallFilled = wrapIcon(rawSvg({}), 'CallFilled');
export default CallFilled;
      