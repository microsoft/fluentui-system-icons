import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 17.75C3 19.55 4.46 21 6.25 21h4.92l.35-1.42.02-.08H6.25c-.97 0-1.75-.78-1.75-1.75V11h3.43A3.25 3.25 0 0011 7.74V4.5h6.75c.97 0 1.75.78 1.75 1.75v4.98c.48-.19 1-.26 1.5-.22V6.25C21 4.45 19.54 3 17.75 3h-6.88c-.6 0-1.17.24-1.59.66L3.66 9.28c-.42.42-.66 1-.66 1.6v6.87zM7.75 9.5H5.56L9.5 5.56V7.9c-.08.9-.83 1.61-1.75 1.61zm11.35 3.17l-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
}

const NoteEdit24Regular = wrapIcon(rawSvg({}), 'NoteEdit24Regular');
export default NoteEdit24Regular;
      