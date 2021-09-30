import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.9 2.4a1.56 1.56 0 112.2 2.2l-2.25 2.25a.5.5 0 01-.7 0L8.9 4.6a1.56 1.56 0 112.2-2.2l.4.4.4-.4zm1.5.7a.56.56 0 00-.8 0l-.75.75a.5.5 0 01-.7 0l-.75-.75a.56.56 0 00-.8.8l1.9 1.9 1.9-1.9a.56.56 0 000-.8zM4.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm1.35-1.85l-2-2a1.5 1.5 0 012 2zm-.7.7a1.5 1.5 0 01-2-2l2 2zM5 9.5a.5.5 0 00-1 0V11H2.5a.5.5 0 000 1H4v1.5a.5.5 0 001 0V12h1.5a.5.5 0 000-1H5V9.5zM9.5 15a.5.5 0 01-.5-.5v-2a.5.5 0 01.51-.5H11a.5.5 0 010 1h-.64l.14.17c.38.43.94.83 1.75.83a2.5 2.5 0 001.85-.8.5.5 0 01.8.6l-.4-.3.4.3-.02.02a1.73 1.73 0 01-.17.19 3.5 3.5 0 01-2.46.99c-1 0-1.74-.43-2.25-.9v.4a.5.5 0 01-.5.5zm5-6c.28 0 .5.22.5.5v2a.5.5 0 01-.51.5H13a.5.5 0 010-1h.64a2.27 2.27 0 00-1.89-1 2.5 2.5 0 00-1.84.78v.01l-.01.01a.5.5 0 01-.8-.6l.4.3-.4-.3.02-.02a1.96 1.96 0 01.17-.19A3.5 3.5 0 0111.75 9c1 0 1.74.43 2.25.9v-.4c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const Symbols16Regular = wrapIcon(rawSvg({}), 'Symbols16Regular');
export default Symbols16Regular;
      