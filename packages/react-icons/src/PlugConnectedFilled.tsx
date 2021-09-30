import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.78 3.28a.75.75 0 00-1.06-1.06l-2.45 2.45a4.04 4.04 0 00-5.12.48l-.3.3a1.49 1.49 0 000 2.1l3.6 3.6c.58.59 1.52.59 2.1 0l.3-.3a4.04 4.04 0 00.48-5.12l2.45-2.45zM7.55 8.85a1.49 1.49 0 00-2.1 0l-.3.3a4.04 4.04 0 00-.48 5.12l-2.45 2.45a.75.75 0 101.06 1.06l2.45-2.45a4.04 4.04 0 005.12-.48l.3-.3c.59-.58.59-1.52 0-2.1l-3.6-3.6z" fill={primaryFill} /></svg>;
}

const PlugConnectedFilled = wrapIcon(rawSvg({}), 'PlugConnectedFilled');
export default PlugConnectedFilled;
      