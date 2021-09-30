import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v3.76c.32-.12.65-.2 1-.23V4.5c0-.28.22-.5.5-.5h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 01-.5.5h-2.59c.12.32.12.68 0 1h2.59c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3zm3 1a.5.5 0 010 1h-3a.5.5 0 010-1h3zM8.3 14.6a3.5 3.5 0 10-.7.7l2.55 2.55a.5.5 0 00.7-.7L8.3 14.6zm-2.8.4a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill={primaryFill} /></svg>;
}

const ClipboardSearchRegular = wrapIcon(rawSvg({}), 'ClipboardSearchRegular');
export default ClipboardSearchRegular;
      