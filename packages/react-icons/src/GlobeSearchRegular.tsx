import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.05 9.11a8 8 0 119.72 8.7 1.5 1.5 0 00-.2-1.87l-.02-.01c.16-.24.32-.52.47-.84.22-.46.4-1 .56-1.59H9.74c.12-.32.2-.65.23-1h2.82a14.86 14.86 0 000-5H7.21l-.05.31c-.31-.12-.64-.2-.98-.26l.01-.05H3.46l-.2.6c-.46.26-.87.6-1.21 1.01zm9.97-4.2C11.41 3.59 10.66 3 10 3c-.66 0-1.4.59-2.02 1.9-.22.47-.4 1.01-.56 1.6h5.16a9.25 9.25 0 00-.56-1.6zM6.4 6.5c.17-.74.4-1.42.68-2.01.19-.4.4-.78.64-1.1A7.02 7.02 0 003.94 6.5h2.45zm9.67 7h-2.45c-.17.74-.4 1.42-.68 2.01-.19.4-.4.78-.64 1.1a7.02 7.02 0 003.77-3.11zm-2.25-1h2.73a6.98 6.98 0 000-5h-2.73a15.97 15.97 0 010 5zm2.25-6a7.02 7.02 0 00-3.77-3.12c.24.33.45.7.64 1.1.27.6.5 1.28.68 2.02h2.45zM8.3 14.1a3.5 3.5 0 10-.7.7l2.55 2.55a.5.5 0 00.7-.7L8.3 14.1zM8 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fill={primaryFill} /></svg>;
}

const GlobeSearchRegular = wrapIcon(rawSvg({}), 'GlobeSearchRegular');
export default GlobeSearchRegular;
      