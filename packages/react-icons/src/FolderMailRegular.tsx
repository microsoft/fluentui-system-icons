import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.93 3.21A1.5 1.5 0 007.17 3H4.34A2.5 2.5 0 002 5.5v9.16A2.5 2.5 0 004.5 17H9v-1H4.36A1.5 1.5 0 013 14.5v-7H7.22c.36-.04.69-.2.94-.47L9.62 5.5h6.02A1.5 1.5 0 0117 7v4h.5c.17 0 .34.02.5.05V6.84l-.02-.17A2.5 2.5 0 0015.5 4.5H9.67l-1.6-1.2-.14-.09zM4.5 4h2.75a.5.5 0 01.22.1l1.22.92-1.26 1.32-.06.06a.5.5 0 01-.3.1H3V5.36A1.5 1.5 0 014.5 4zm10.01 11.93l-4.5-2.63c.1-.73.73-1.3 1.49-1.3h6c.83 0 1.5.67 1.5 1.5l-4.49 2.43zm.23 1.01l4.26-2.3v2.86c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-3.05l4.25 2.48c.15.09.33.1.49.01z" fill={primaryFill} /></svg>;
}

const FolderMailRegular = wrapIcon(rawSvg({}), 'FolderMailRegular');
export default FolderMailRegular;
      