import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.75A2.75 2.75 0 015.75 3h9.96c.87 0 1.7.34 2.3.95L20.05 6c.6.6.95 1.43.95 2.3v3.73c-.46-.3-.97-.53-1.5-.7V8.28c0-.47-.18-.91-.51-1.24L16.95 5c-.26-.26-.6-.43-.95-.49v2.73c0 1.24-1 2.25-2.25 2.25h-4.5C8.01 9.5 7 8.5 7 7.25V4.5H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25H6v-5.25C6 13.01 7 12 8.25 12h5.78c-.63.4-1.2.91-1.65 1.5H8.25a.75.75 0 00-.75.75v5.25h3.81c.18.53.42 1.04.71 1.5H5.75A2.75 2.75 0 013 18.25V5.75zM8.5 4.5v2.75c0 .41.34.75.75.75h4.5c.41 0 .75-.34.75-.75V4.5h-6zm14.5 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-8.5-.5a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L19.29 17H14.5z" fill={primaryFill} /></svg>;
}

const SaveArrowRight24Regular = wrapIcon(rawSvg({}), 'SaveArrowRight24Regular');
export default SaveArrowRight24Regular;
      