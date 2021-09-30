import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.39 4.29L8.07 3.3a1.5 1.5 0 00-.9-.3H4.5A2.5 2.5 0 002 5.5v1h5.07a.5.5 0 00.36-.16L9.4 4.3zm1.17.21l-2.4 2.53c-.29.3-.68.47-1.09.47H2v7A2.5 2.5 0 004.5 17h5.1a5.5 5.5 0 018.4-6.74V6.84a2.5 2.5 0 00-2.5-2.34h-4.94zm2.45 9.5a8.9 8.9 0 01.54-2.85c.17-.42.35-.72.53-.91.19-.2.33-.24.42-.24.1 0 .23.05.42.24.18.19.36.5.53.91.3.73.5 1.72.54 2.85h-2.98zm-.39-3.22l.2-.46a4.5 4.5 0 00-2.8 3.68h1.99c.05-1.23.27-2.36.61-3.22zm3.76 0a5.29 5.29 0 00-.21-.46c1.51.6 2.62 2 2.8 3.68H17a9.92 9.92 0 00-.61-3.22zm.61 4.22h1.98a4.5 4.5 0 01-2.8 3.68 9.92 9.92 0 00.82-3.68zm-2.07 3.76c-.19.2-.33.24-.42.24-.1 0-.23-.05-.42-.24-.18-.19-.36-.5-.53-.91a8.9 8.9 0 01-.54-2.85h2.98a8.9 8.9 0 01-.54 2.85c-.17.42-.35.72-.53.91zM10.02 15a4.5 4.5 0 002.8 3.68l-.2-.46a9.92 9.92 0 01-.61-3.22h-1.98z" fill={primaryFill} /></svg>;
}

const FolderGlobeFilled = wrapIcon(rawSvg({}), 'FolderGlobeFilled');
export default FolderGlobeFilled;
      