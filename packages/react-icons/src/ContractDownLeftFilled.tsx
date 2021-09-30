import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.7 8l4.15-4.15a.5.5 0 00-.7-.7L12 7.29V3.5a.5.5 0 00-1 0v5c0 .28.22.5.5.5h5a.5.5 0 000-1h-3.8zM6 4a2 2 0 00-2 2v4h4a2 2 0 012 2v4h4a2 2 0 002-2v-2.5a.5.5 0 011 0V14a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h2.5a.5.5 0 010 1H6z" fill={primaryFill} /></svg>;
}

const ContractDownLeftFilled = wrapIcon(rawSvg({}), 'ContractDownLeftFilled');
export default ContractDownLeftFilled;
      