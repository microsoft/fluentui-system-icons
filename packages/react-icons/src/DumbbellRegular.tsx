import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.6 7.38a.5.5 0 000-.7L13.33 5.4a.5.5 0 00-.71.7l1.27 1.28c.2.2.51.2.71 0zm-6.79 6.08a.5.5 0 11-.7.7L5.82 12.9a.5.5 0 11.7-.71l1.28 1.27zm9.36-10.61a1.47 1.47 0 00-2.07 0l-.62.62-.25-.25a1.85 1.85 0 00-2.84.28 2.27 2.27 0 00-2.1 3.83l.67.66-1.97 1.97-.66-.66a2.27 2.27 0 00-3.83 2.09 1.85 1.85 0 00-.28 2.84l.25.25-.64.64a1.47 1.47 0 002.07 2.07l.64-.64.24.25a1.85 1.85 0 002.85-.28 2.27 2.27 0 002.09-3.83l-.66-.66 1.97-1.97.66.66a2.27 2.27 0 003.83-2.1 1.85 1.85 0 00.28-2.83l-.25-.25.62-.62c.57-.57.57-1.5 0-2.07zm-1.33 1.98l-.66-.65.62-.63a.47.47 0 01.66.66l-.62.62zm-4.52 4.52l-1.97 1.97-.65-.66 1.96-1.96.66.65zm-6.49 6.5l-.63.63a.47.47 0 01-.66-.66l.63-.63.66.65zm7.5-11.92a.85.85 0 011.2 0l2.56 2.56a.85.85 0 01-.34 1.4.5.5 0 00-.3.7A1.27 1.27 0 0113.4 10l-3.38-3.39a1.27 1.27 0 011.43-2.05.5.5 0 00.68-.3c.04-.13.1-.24.2-.34zm-7.5 6.08c.49-.5 1.3-.5 1.8 0L10 13.4a1.27 1.27 0 01-1.43 2.05.5.5 0 00-.68.3.85.85 0 01-1.4.34l-2.57-2.56a.85.85 0 01.34-1.41.5.5 0 00.3-.68A1.27 1.27 0 014.82 10z" fill={primaryFill} /></svg>;
}

const DumbbellRegular = wrapIcon(rawSvg({}), 'DumbbellRegular');
export default DumbbellRegular;
      