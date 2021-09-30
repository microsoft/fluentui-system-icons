import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3A2.5 2.5 0 002 5.5v9A2.5 2.5 0 004.5 17H8v-1H4.5A1.5 1.5 0 013 14.5v-7h4.07c.41 0 .8-.17 1.09-.47L9.62 5.5h5.88c.83 0 1.5.67 1.5 1.5v4a3 3 0 011 .17V7a2.5 2.5 0 00-2.5-2.5H9.67l-1.6-1.2a1.5 1.5 0 00-.9-.3H4.5zM3 5.5C3 4.67 3.67 4 4.5 4h2.67c.1 0 .21.04.3.1l1.22.92-1.26 1.32a.5.5 0 01-.36.16H3v-1z" fill={primaryFill} /><path d="M12 10.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h1a2 2 0 012 2v3a2 2 0 01-2 2h-6a2 2 0 01-2-2v-3c0-1.1.9-2 2-2h1v-1.5zm3 .5h-2v1h2v-1z" fill={primaryFill} /></svg>;
}

const FolderBriefcaseRegular = wrapIcon(rawSvg({}), 'FolderBriefcaseRegular');
export default FolderBriefcaseRegular;
      