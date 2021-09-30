import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.22 1.67a1 1 0 011.56 0l.91 1.13 1.4-.38a1 1 0 011.26.91l.08 1.45 1.35.52a1 1 0 01.48 1.48L13.47 8l.8 1.22a1 1 0 01-.49 1.48l-1.35.52-.08 1.45a1 1 0 01-1.26.91l-1.4-.38-.91 1.13a1 1 0 01-1.56 0l-.91-1.13-1.4.38a1 1 0 01-1.26-.91l-.08-1.45-1.35-.52a1 1 0 01-.48-1.48L2.53 8l-.8-1.22a1 1 0 01.49-1.48l1.35-.52.08-1.45a1 1 0 011.26-.91l1.4.38.91-1.13zm2.9 4.5L7.25 9.03l-1.4-1.4-.07-.05a.5.5 0 00-.63.76L6.9 10.1l.07.06c.2.14.46.12.63-.06l3.23-3.23.06-.07a.5.5 0 00-.77-.64zM3.57 4.77l.18.47-.18-.47z" fill={primaryFill} /></svg>;
}

const CheckmarkStarburst16Filled = wrapIcon(rawSvg({}), 'CheckmarkStarburst16Filled');
export default CheckmarkStarburst16Filled;
      