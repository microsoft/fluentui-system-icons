import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.94 3c.21 0 .4.14.47.33l1.77 5a.5.5 0 01-.94.34l-.26-.73V8H3.73l-.26.68a.5.5 0 11-.94-.36l1.94-5A.5.5 0 014.94 3zm-.02 1.94L4.12 7h1.53l-.73-2.06z" fill={primaryFill} /><path d="M17.4 4.53c-.24-.69-.6-1.1-1.05-1.33-.4-.2-.83-.2-1.1-.2h-.03c-.55 0-1 .19-1.33.49-.32.29-.52.65-.64.99A4.06 4.06 0 0013 5.77v.05c0 .39 0 1.09.25 1.73.13.33.33.67.66.93.32.27.74.45 1.25.5.42.05 1.67.02 2.23-1.24a.5.5 0 10-.9-.4c-.3.64-.94.68-1.22.65a1.34 1.34 0 01-.73-.28 1.26 1.26 0 01-.36-.52A3.89 3.89 0 0114 5.8V5.8a1.78 1.78 0 01.02-.28c.03-.2.07-.44.16-.68.1-.25.22-.45.38-.6a.94.94 0 01.66-.23c.3 0 .5 0 .7.1.15.08.36.25.55.77a.5.5 0 10.94-.34z" fill={primaryFill} /><path d="M11.47 5.84c.2-.27.32-.63.32-1.08 0-.38-.07-.7-.22-.96a1.44 1.44 0 00-.56-.57c-.4-.23-.84-.23-1-.23H8.5a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h1.75c.22 0 .66-.03 1.07-.27.45-.26.8-.74.8-1.49 0-.38-.09-.7-.25-.98a1.45 1.45 0 00-.4-.42zm-.95-1.74c.07.04.13.1.18.18a1 1 0 01.1.48c0 .4-.16.54-.28.62-.17.1-.38.12-.5.12H9V4h1c.16 0 .36.01.52.1zM9.36 6.5h.83c.18 0 .43 0 .62.1.1.05.16.1.2.18.06.09.1.22.1.46 0 .38-.14.54-.3.62-.18.11-.42.14-.56.14H9V6.5h.36z" fill={primaryFill} /><path d="M13.75 10.82a.5.5 0 10-.77-.64l-3.74 4.58-1.89-1.89a.5.5 0 00-.7.71l2.27 2.27a.5.5 0 00.74-.03l4.1-5z" fill={primaryFill} /></svg>;
}

const TextProofingToolsRegular = wrapIcon(rawSvg({}), 'TextProofingToolsRegular');
export default TextProofingToolsRegular;
      