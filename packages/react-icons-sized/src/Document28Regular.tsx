import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.4 2A2.4 2.4 0 004 4.4v19.2A2.4 2.4 0 006.4 26h15.2a2.4 2.4 0 002.4-2.4V11.58c0-.73-.29-1.43-.8-1.95L16.25 2.7a2.4 2.4 0 00-1.7-.7H6.4zm-.9 2.4c0-.5.4-.9.9-.9H14V10c0 1.1.9 2 2 2h6.5v11.6c0 .5-.4.9-.9.9H6.4a.9.9 0 01-.9-.9V4.4zm16.44 6.1H16a.5.5 0 01-.5-.5V4.06l6.44 6.44z" fill={primaryFill} /></svg>;
}

const Document28Regular = wrapIcon(rawSvg({}), 'Document28Regular');
export default Document28Regular;
      