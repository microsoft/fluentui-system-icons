import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.15 2.3c.14-.19.36-.3.6-.3h4.5c.41 0 .75.34.75.75V6.5l-.01.12c.62.5 1.01 1.27 1.01 2.13v10.5A2.75 2.75 0 0117.25 22H6.75A2.75 2.75 0 014 19.25V8.75A2.75 2.75 0 016.75 6h.75v-.25C7.5 4.78 6.72 4 5.75 4h-1a.75.75 0 010-1.5h1C7.55 2.5 9 3.96 9 5.75V6h1.44l2.7-3.7zm4.35 1.2h-3.37L12.3 6h4.95l.25.01V3.5zm-9.28 6.72c-.3.3-.3.77 0 1.06L10.94 14l-2.72 2.72a.75.75 0 101.06 1.06L12 15.06l2.72 2.72a.75.75 0 101.06-1.06L13.06 14l2.72-2.72a.75.75 0 10-1.06-1.06L12 12.94l-2.72-2.72a.75.75 0 00-1.06 0z" fill={primaryFill} /></svg>;
}

const Gas24Filled = wrapIcon(rawSvg({}), 'Gas24Filled');
export default Gas24Filled;
      