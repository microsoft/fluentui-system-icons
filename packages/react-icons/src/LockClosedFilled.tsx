import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a3 3 0 013 3v1h1a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2V8c0-1.1.9-2 2-2h1V5a3 3 0 013-3zm0 8.5a1 1 0 100 2 1 1 0 000-2zM10 4a1 1 0 00-1 1v1h2V5a1 1 0 00-1-1z" fill={primaryFill} /></svg>;
}

const LockClosedFilled = wrapIcon(rawSvg({}), 'LockClosedFilled');
export default LockClosedFilled;
      