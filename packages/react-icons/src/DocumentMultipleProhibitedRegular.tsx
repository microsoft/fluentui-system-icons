import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a2 2 0 00-2 2v5.02c.34.03.68.1 1 .19V4a1 1 0 011-1h3v3.5c0 .83.67 1.5 1.5 1.5H16v6a1 1 0 01-1 1h-4.02c-.03.34-.1.68-.19 1H15a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0011.59 2H8zm4 4.5V3.2L15.8 7h-3.3a.5.5 0 01-.5-.5zM5 9.02V4a1 1 0 00-1 1v4.2c.32-.08.66-.15 1-.18zM9.74 18c.26-.3.48-.64.66-1H15a1 1 0 01-1 1H9.74zM1 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm2.4 2.8l4.9-4.9a3.5 3.5 0 01-4.9 4.9zm-.7-.7a3.5 3.5 0 014.9-4.9l-4.9 4.9z" fill={primaryFill} /></svg>;
}

const DocumentMultipleProhibitedRegular = wrapIcon(rawSvg({}), 'DocumentMultipleProhibitedRegular');
export default DocumentMultipleProhibitedRegular;
      