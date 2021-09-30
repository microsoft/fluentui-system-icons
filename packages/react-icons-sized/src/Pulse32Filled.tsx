import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.53 5c.55.01 1.02.38 1.17.91l4.36 15.44 3.25-10.47a1.25 1.25 0 012.33-.15l2.16 4.77h2.95a1.25 1.25 0 110 2.5H24c-.49 0-.94-.29-1.14-.73l-1.14-2.51-3.53 11.36a1.25 1.25 0 01-2.4-.03L11.4 10.5l-2.21 6.65c-.17.5-.65.85-1.19.85H4.25a1.25 1.25 0 110-2.5H7.1l3.21-9.65c.18-.52.67-.86 1.22-.85z" fill={primaryFill} /></svg>;
}

const Pulse32Filled = wrapIcon(rawSvg({}), 'Pulse32Filled');
export default Pulse32Filled;
      