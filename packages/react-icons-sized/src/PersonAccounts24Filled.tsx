import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 14h5.88c-.35.42-.58.95-.62 1.53l-.01.22v4.5c0 .66.23 1.27.63 1.75H10c-3.42 0-5.95-1.08-7.49-3.24a2.75 2.75 0 01-.51-1.6v-.92C2 15 3 14 4.25 14zm10.5-2.5h3c.64 0 1.18.49 1.24 1.12v1.37h1.26c.96 0 1.75.79 1.75 1.76v4.5c0 .96-.79 1.75-1.75 1.75h-8c-.97 0-1.75-.79-1.75-1.75v-4.5c0-.97.78-1.75 1.75-1.75h1.25v-1.25c0-.65.49-1.18 1.12-1.25h3.13-3zM17.5 13H15v1h2.5v-1zM10 2a5 5 0 110 10 5 5 0 010-10z" fill={primaryFill} /></svg>;
}

const PersonAccounts24Filled = wrapIcon(rawSvg({}), 'PersonAccounts24Filled');
export default PersonAccounts24Filled;
      