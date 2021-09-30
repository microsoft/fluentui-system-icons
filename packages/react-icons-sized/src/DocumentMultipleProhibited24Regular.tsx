import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4.63v6.45c-.52.08-1.03.22-1.5.42V6.75c0-.98.63-1.81 1.5-2.12zM17.75 19.5h-5.06c.15-.47.25-.98.3-1.5h4.76c.41 0 .75-.33.75-.75V9h-3.25c-1.2 0-2.17-.92-2.24-2.1L13 6.76V3.5H8.75a.75.75 0 00-.75.75v6.92A6.52 6.52 0 006.5 11V4.25C6.5 3.01 7.51 2 8.75 2h4.38c.6 0 1.17.24 1.59.66l4.62 4.62c.42.42.66 1 .66 1.6v8.37c0 1.25-1.01 2.25-2.25 2.25zM14.5 4.56v2.2c0 .37.28.69.65.74h2.29L14.5 4.56zM11.19 22c.42-.44.79-.94 1.08-1.5h5.1c-.31.88-1.15 1.5-2.13 1.5H11.2zm.81-4.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-9.5 0c0 .83.25 1.6.7 2.25l5.55-5.56a4 4 0 00-6.25 3.3zm4 4a4 4 0 003.3-6.25l-5.55 5.56c.64.44 1.42.69 2.25.69z" fill={primaryFill} /></svg>;
}

const DocumentMultipleProhibited24Regular = wrapIcon(rawSvg({}), 'DocumentMultipleProhibited24Regular');
export default DocumentMultipleProhibited24Regular;
      