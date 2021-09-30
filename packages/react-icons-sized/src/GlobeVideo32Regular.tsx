import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 16a14 14 0 0011.9 13.84 4.48 4.48 0 01-.4-1.84v-1.74a9.9 9.9 0 01-.83-1.49c-.38-.8-.7-1.74-.96-2.77h1.79v-2h-2.2a26.13 26.13 0 010-8h9.4c.12.8.21 1.63.26 2.5h2c-.04-.86-.12-1.7-.24-2.5h4.6c.4 1.14.64 2.37.67 3.64.1.08.18.17.27.26a3.43 3.43 0 011.73-.47A14 14 0 001 16zM15 4c1.03 0 2.28.95 3.33 3.23.38.8.7 1.74.96 2.77h-8.58c.26-1.03.58-1.96.96-2.77C12.72 4.95 13.97 4 15 4zM9.85 6.39c-.49 1.06-.9 2.28-1.2 3.61H4.6a12.04 12.04 0 016.13-5.22c-.33.5-.63 1.04-.9 1.6zM8.28 12a28.3 28.3 0 000 8h-4.6a11.98 11.98 0 010-8h4.6zm.37 10c.3 1.33.71 2.55 1.2 3.61.26.57.56 1.11.89 1.61A12.04 12.04 0 014.6 22h4.04zM19.26 4.78c2.6.98 4.76 2.84 6.13 5.22h-4.04c-.3-1.33-.71-2.55-1.2-3.61-.26-.57-.56-1.11-.89-1.61zm-2.8 25.15A2 2 0 0115 28v-9c0-1.1.9-2 2-2h7a2 2 0 012 2v.84l2.42-1.72a1 1 0 011.58.81v9.14a1 1 0 01-1.58.81L26 27.16V28a2 2 0 01-2 2h-7a2 2 0 01-.54-.07z" fill={primaryFill} /></svg>;
}

const GlobeVideo32Regular = wrapIcon(rawSvg({}), 'GlobeVideo32Regular');
export default GlobeVideo32Regular;
      