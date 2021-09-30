import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.24 2.93l4.83 4.83a2.75 2.75 0 01-.72 4.4l-4.87 2.44a.75.75 0 00-.37.42l-1.44 4.17a1.25 1.25 0 01-2.07.48l-3.1-3.1L4.06 21H3v-1.06l4.44-4.44-3.1-3.1c-.66-.66-.4-1.77.47-2.07l4.17-1.44c.18-.06.34-.2.42-.37l2.44-4.87a2.75 2.75 0 014.4-.72zm3.77 5.89l-4.83-4.83c-.6-.6-1.62-.44-2 .33l-2.44 4.87c-.26.52-.72.93-1.27 1.12l-3.8 1.3 6.71 6.71 1.31-3.79c.2-.55.6-1.01 1.12-1.27l4.87-2.44c.77-.38.93-1.4.33-2z" fill={primaryFill} /></svg>;
}

const Pin24Regular = wrapIcon(rawSvg({}), 'Pin24Regular');
export default Pin24Regular;
      