import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.7 2.27a10.03 10.03 0 014.6 0 .75.75 0 11-.35 1.46 8.53 8.53 0 00-3.9 0 .75.75 0 11-.35-1.46z" fill={primaryFill} /><path d="M7.77 3.74c.22.35.11.81-.24 1.03a8.55 8.55 0 00-2.76 2.76.75.75 0 11-1.28-.79A10.05 10.05 0 016.74 3.5a.75.75 0 011.03.25z" fill={primaryFill} /><path d="M16.23 3.74a.75.75 0 011.03-.25c1.32.82 2.43 1.93 3.25 3.25a.75.75 0 11-1.28.8 8.55 8.55 0 00-2.76-2.77.75.75 0 01-.24-1.03z" fill={primaryFill} /><path d="M3.17 9.14c.4.1.65.5.56.9a8.53 8.53 0 000 3.91.75.75 0 11-1.46.35 10.03 10.03 0 010-4.6c.09-.4.5-.65.9-.56z" fill={primaryFill} /><path d="M20.83 9.14c.4-.09.81.16.9.56a10.03 10.03 0 010 4.6.75.75 0 11-1.46-.35 8.52 8.52 0 000-3.9c-.09-.4.16-.81.56-.9z" fill={primaryFill} /><path d="M3.74 16.23a.75.75 0 011.03.24 8.55 8.55 0 002.76 2.76.75.75 0 01-.79 1.28 10.05 10.05 0 01-3.25-3.25.75.75 0 01.25-1.03z" fill={primaryFill} /><path d="M20.42 17.09a.75.75 0 10-1.34-.68l-.02.04a4.63 4.63 0 01-.36.59c-.22.33-.54.77-.96 1.22A7 7 0 0013 16.25c-2.35 0-3.99 1.2-3.99 2.88C9.01 20.8 10.65 22 13 22c1.94 0 3.5-.75 4.66-1.65a11.73 11.73 0 011.39 2.16l.01.04a.75.75 0 001.37-.6c-.08-.19 0 0 0 0v-.03a3.63 3.63 0 00-.12-.24 11.87 11.87 0 00-1.54-2.33 11.06 11.06 0 001.62-2.2l.02-.04v-.02h.01zm-7.42.66c1.43 0 2.64.65 3.62 1.51A6.02 6.02 0 0113 20.5c-1.97 0-2.49-.92-2.49-1.38 0-.45.52-1.37 2.49-1.37z" fill={primaryFill} /></svg>;
}

const Lasso24Regular = wrapIcon(rawSvg({}), 'Lasso24Regular');
export default Lasso24Regular;
      