import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 8.16a4 4 0 001.23-1.64c.18.52.27 1.1.27 1.75a5.21 5.21 0 01-1.88 4.1l-.12.09v1.04c0 .83-.67 1.5-1.5 1.5H11a1 1 0 01-1-1H8a1 1 0 01-1 1h-.5A1.5 1.5 0 015 13.5v-.21a4.02 4.02 0 01-1.69-1.04c-.6-.6-.92-1.35-1.09-1.82a.43.43 0 00-.27-.28A1.3 1.3 0 011 8.89v-.8c0-.57.38-1.08.94-1.23.1-.03.21-.13.27-.3.13-.4.39-1.01.87-1.5a5.82 5.82 0 011.39-1.02V2.16c0-.35.23-.6.48-.7.24-.1.58-.09.82.15.26.24.59.52.94.76.37.23.71.39.99.41a4 4 0 00-.65 2.7c.12 1.04.91 1.66 1.58 1.93l2.39 1c.67.27 1.67.4 2.48-.25zM4.75 7.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M8.23 3.92a3 3 0 015.56-.05 3 3 0 01-.9 3.5c-.43.34-1 .31-1.49.1L9.01 6.5c-.49-.2-.9-.6-.97-1.12a2.98 2.98 0 010-.76l.19-.7z" fill={primaryFill} /><path d="M8.23 3.92l-.14.44a3.01 3.01 0 01.14-.44z" fill={primaryFill} /></svg>;
}

const Savings16Filled = wrapIcon(rawSvg({}), 'Savings16Filled');
export default Savings16Filled;
      