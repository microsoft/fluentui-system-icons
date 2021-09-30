import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v6.88c0 .6-.24 1.17-.66 1.59l-5.62 5.62c-.42.42-1 .66-1.6.66H6.26A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm0 1.5H6.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75H13v-3.25a3.25 3.25 0 013.07-3.24l.18-.01h3.25V6.25c0-.97-.78-1.75-1.75-1.75zm.69 10h-2.19c-.92 0-1.67.7-1.74 1.6l-.01.15v2.19l3.94-3.94z" fill={primaryFill} /></svg>;
}

const Note24Regular = wrapIcon(rawSvg({}), 'Note24Regular');
export default Note24Regular;
      