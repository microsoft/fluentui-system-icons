import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4v6.25a.75.75 0 01-1.5 0V5.23a.5.5 0 00-.5-.48c-.26 0-.5.24-.5.5v7.5a.75.75 0 01-1.3.52 1.46 1.46 0 00-.12-.13c-.1-.08-.23-.2-.4-.32-.36-.25-.81-.5-1.3-.58a2.28 2.28 0 00-1.4.14c-.2.1-.36.26-.44.53l1.66 1.24.08.07 2.18 2.18c.93.93 1.7 2 2.3 3.19.28.56.85.91 1.47.91h2.73a1.5 1.5 0 001.33-.71c.73-1.26 1.71-3.29 1.71-5.04V7a.5.5 0 00-.5-.5.5.5 0 00-.5.5v3.5a.75.75 0 01-1.5 0V5.25a.5.5 0 00-.5-.5.5.5 0 00-.5.5v5a.75.75 0 01-1.5 0V4a.5.5 0 00-.5-.5c-.29 0-.5.22-.5.5zm-1.99-.75c.21 0 .42.03.6.1l-.6-.1zm.6.1c.27-.77.97-1.35 1.9-1.35.9 0 1.61.59 1.88 1.34a2 2 0 012.6 1.73A2 2 0 0119.5 7v7.74c0 2.18-1.17 4.51-1.92 5.8A3 3 0 0114.96 22h-2.73c-1.19 0-2.28-.67-2.81-1.74a10.76 10.76 0 00-2.02-2.8l-2.14-2.14-1.96-1.47a.75.75 0 01-.3-.6c0-1.06.53-1.8 1.3-2.2a3.76 3.76 0 012.33-.29c.52.1.99.29 1.37.5v-6c0-1.07.89-2.02 2.01-2.01" fill={primaryFill} /></svg>;
}

const HandLeft24Regular = wrapIcon(rawSvg({}), 'HandLeft24Regular');
export default HandLeft24Regular;
      