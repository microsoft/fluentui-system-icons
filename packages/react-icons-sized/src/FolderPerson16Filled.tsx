import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.18 3h.03L5.56 4.5H2V4c0-1.1.9-2 2-2h1.75a.5.5 0 01.31.11L7.18 3zm-1.1 2.37L8.7 3H12a2 2 0 012 2v1.34a3 3 0 10-4.65 3.75h-.02c-1.13 0-2.12.8-2.3 1.91H4a2 2 0 01-2-2V5.5h3.75a.5.5 0 00.34-.13zM11.5 10a2 2 0 100-4 2 2 0 000 4zm-2.17 1.09A1.3 1.3 0 008 12.38c0 1.14.8 2.15 1.96 2.43l.08.02a6.2 6.2 0 002.92 0l.08-.02A2.52 2.52 0 0015 12.38c0-.72-.6-1.3-1.33-1.3H9.33z" fill={primaryFill} /></svg>;
}

const FolderPerson16Filled = wrapIcon(rawSvg({}), 'FolderPerson16Filled');
export default FolderPerson16Filled;
      