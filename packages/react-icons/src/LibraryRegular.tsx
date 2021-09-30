import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3.5C2 2.67 2.67 2 3.5 2h1C5.33 2 6 2.67 6 3.5v12.98c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5V3.5zM3.5 3a.5.5 0 00-.5.5v12.98c0 .28.22.5.5.5h1a.5.5 0 00.5-.5V3.5a.5.5 0 00-.5-.5h-1zm3.5.5C7 2.67 7.67 2 8.5 2h1c.83 0 1.5.67 1.5 1.5v12.98c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5V3.5zM8.5 3a.5.5 0 00-.5.5v12.98c0 .28.22.5.5.5h1a.5.5 0 00.5-.5V3.5a.5.5 0 00-.5-.5h-1zm7.22 3.16a1.5 1.5 0 00-1.87-1.1l-.75.2A1.5 1.5 0 0012.04 7l2 9.8c.18.84 1.02 1.36 1.84 1.15l.99-.25c.79-.2 1.27-1 1.1-1.78l-2.25-9.76zM14.12 6a.5.5 0 01.62.37L17 16.14a.5.5 0 01-.37.6l-.98.25a.5.5 0 01-.61-.39l-2-9.8a.5.5 0 01.35-.58l.74-.2z" fill={primaryFill} /></svg>;
}

const LibraryRegular = wrapIcon(rawSvg({}), 'LibraryRegular');
export default LibraryRegular;
      