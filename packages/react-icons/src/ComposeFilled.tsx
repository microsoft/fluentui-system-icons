import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.78 3.28a.75.75 0 10-1.06-1.06l-7.5 7.5L9 11l1.28-.22 7.5-7.5z" fill={primaryFill} /><path d="M5.75 3A2.75 2.75 0 003 5.75v8.5A2.75 2.75 0 005.75 17h8.5A2.75 2.75 0 0017 14.25v-5.5a.75.75 0 00-1.5 0v5.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5c0-.69.56-1.25 1.25-1.25h5.5a.75.75 0 000-1.5h-5.5z" fill={primaryFill} /></svg>;
}

const ComposeFilled = wrapIcon(rawSvg({}), 'ComposeFilled');
export default ComposeFilled;
      