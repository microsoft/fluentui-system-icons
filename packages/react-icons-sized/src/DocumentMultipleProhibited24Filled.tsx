import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 6.75V2H8.75C7.51 2 6.5 3 6.5 4.25V11a6.5 6.5 0 016.19 8.5h5.06c1.24 0 2.25-1 2.25-2.25V9h-4.75C14.01 9 13 8 13 6.75zM5.5 4.63v6.45c-.52.08-1.03.22-1.5.42V6.75c0-.98.63-1.81 1.5-2.12zM15.24 22H11.2c.42-.44.79-.94 1.08-1.5h5.1c-.31.88-1.15 1.5-2.13 1.5zM14.5 6.75V2.5l5 5h-4.25a.75.75 0 01-.75-.75zM12 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-9.5 0c0 .83.25 1.6.7 2.25l5.55-5.56a4 4 0 00-6.25 3.3zm4 4a4 4 0 003.3-6.25l-5.55 5.56c.64.44 1.42.69 2.25.69z" fill={primaryFill} /></svg>;
}

const DocumentMultipleProhibited24Filled = wrapIcon(rawSvg({}), 'DocumentMultipleProhibited24Filled');
export default DocumentMultipleProhibited24Filled;
      