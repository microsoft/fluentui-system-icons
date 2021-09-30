import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2v8c0 1.1.9 2 2 2h8v11.6a2.4 2.4 0 01-2.4 2.4H6.4A2.4 2.4 0 014 23.6V4.4A2.4 2.4 0 016.4 2H14z" fill={primaryFill} /><path d="M15.5 2.48V10c0 .28.22.5.5.5h7.5c-.09-.13-.2-.25-.3-.37L15.75 2.7a2.4 2.4 0 00-.26-.22z" fill={primaryFill} /></svg>;
}

const Document28Filled = wrapIcon(rawSvg({}), 'Document28Filled');
export default Document28Filled;
      