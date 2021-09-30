import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4.25c0-.41.34-.75.75-.75H12V8c0 1.1.9 2 2 2h4.5v1.43c.48-.2.99-.3 1.5-.3V9.66c0-.46-.18-.9-.51-1.23L13.57 2.5A1.75 1.75 0 0012.34 2H6.25C5.01 2 4 3 4 4.25v15.5C4 20.99 5 22 6.25 22h5.43a3.86 3.86 0 01-.52-1.5H6.25a.75.75 0 01-.75-.75V4.25zM17.44 8.5H14a.5.5 0 01-.5-.5V4.56l3.94 3.94zm4.59 4.47a2.87 2.87 0 00-4.06 0l-5 5a2.87 2.87 0 104.06 4.06l5-5a2.87 2.87 0 000-4.06zm-3 1.06a1.37 1.37 0 111.94 1.94L19 17.94 17.06 16l1.97-1.97zm-2 4.94c.3.3.3.77 0 1.06l-1 1a.75.75 0 11-1.06-1.06l1-1c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const DocumentPill24Regular = wrapIcon(rawSvg({}), 'DocumentPill24Regular');
export default DocumentPill24Regular;
      