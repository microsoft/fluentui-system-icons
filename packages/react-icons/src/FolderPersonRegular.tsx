import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.17 3H4.34A2.5 2.5 0 002 5.5v9.16A2.5 2.5 0 004.5 17h5.74a4.4 4.4 0 01-.21-1H4.36A1.5 1.5 0 013 14.5v-7H7.22c.36-.04.69-.2.94-.47L9.62 5.5h6.02A1.5 1.5 0 0117 7v1.76A3 3 0 0118 11V6.84l-.02-.17A2.5 2.5 0 0015.5 4.5H9.67l-1.6-1.2-.14-.09A1.5 1.5 0 007.17 3zm0 1h.08a.5.5 0 01.22.1l1.22.92-1.26 1.32-.06.06a.5.5 0 01-.3.1H3V5.36A1.5 1.5 0 014.5 4h2.67zM16 9.27a2 2 0 11-2 3.46 2 2 0 012-3.46zM11.03 16a3.83 3.83 0 01-.03-.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5 0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 01-2.79-.89A3.18 3.18 0 0111.03 16z" fill={primaryFill} /></svg>;
}

const FolderPersonRegular = wrapIcon(rawSvg({}), 'FolderPersonRegular');
export default FolderPersonRegular;
      