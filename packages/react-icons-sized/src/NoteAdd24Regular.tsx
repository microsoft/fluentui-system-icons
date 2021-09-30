import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM7 7v2.5a.5.5 0 01-1 0V7H3.5a.5.5 0 010-1H6V3.5a.5.5 0 011 0V6h2.5a.5.5 0 010 1H7z" fill={primaryFill} /><path d="M17.75 4.5h-5.06a6.47 6.47 0 00-.71-1.5h5.77C19.55 3 21 4.46 21 6.25v6.88c0 .6-.24 1.17-.66 1.59l-5.62 5.62c-.42.42-1 .66-1.6.66H6.26A3.25 3.25 0 013 17.75v-5.77c.46.3.97.53 1.5.7v5.07c0 .97.78 1.75 1.75 1.75H13v-3.25a3.25 3.25 0 013.07-3.24l.18-.01h3.25V6.25c0-.97-.78-1.75-1.75-1.75zm.69 10h-2.19c-.92 0-1.67.7-1.74 1.6l-.01.15v2.19l3.94-3.94z" fill={primaryFill} /></svg>;
}

const NoteAdd24Regular = wrapIcon(rawSvg({}), 'NoteAdd24Regular');
export default NoteAdd24Regular;
      