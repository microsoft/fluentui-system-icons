import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.5 7.78l14.5 3c.58.12 1 .63 1 1.22v24c0 .6-.42 1.1-1 1.22l-14.5 3c-.77.16-1.5-.43-1.5-1.22V9c0-.8.73-1.38 1.5-1.22zM18 10l.13 28h-6.88c-.65 0-1.18-.5-1.24-1.12l-.01-.13v-25.5c0-.65.5-1.18 1.12-1.24l.13-.01H18zm8.5 12.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
}

const ConferenceRoom48Filled = wrapIcon(rawSvg({}), 'ConferenceRoom48Filled');
export default ConferenceRoom48Filled;
      