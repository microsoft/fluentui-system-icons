import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.12 6.16L7.25 9.04l-1.4-1.4-.07-.05a.5.5 0 00-.63.76L6.9 10.1l.07.06c.2.14.46.12.63-.06l3.23-3.23.06-.07a.5.5 0 00-.77-.64zm-1.34-4.5a1 1 0 00-1.56 0L6.31 2.8l-1.4-.38a1 1 0 00-1.26.91l-.08 1.45-1.35.52a1 1 0 00-.48 1.48L2.53 8l-.8 1.22a1 1 0 00.49 1.48l1.35.52.08 1.45a1 1 0 001.26.91l1.4-.38.91 1.13a1 1 0 001.56 0l.91-1.13 1.4.38a1 1 0 001.26-.91l.08-1.45 1.35-.52a1 1 0 00.48-1.48L13.47 8l.8-1.22a1 1 0 00-.49-1.48l-1.35-.52-.08-1.45a1 1 0 00-1.26-.91l-1.4.38-.91-1.13zM3.93 5.73a1 1 0 00.64-.88l.08-1.46 1.4.38a1 1 0 001.04-.34L8 2.3l.91 1.12a1 1 0 001.04.34l1.4-.38.08 1.46a1 1 0 00.64.88l1.36.52-.8 1.21a1 1 0 000 1.1l.8 1.21-1.36.52a1 1 0 00-.64.88l-.08 1.46-1.4-.38a1 1 0 00-1.04.34L8 13.7l-.91-1.12a1 1 0 00-1.04-.34l-1.4.38-.08-1.46a1 1 0 00-.64-.88l-1.36-.52.8-1.21a1 1 0 000-1.1l-.8-1.21 1.36-.52zM9.7 2.8l-.39.31.4-.31z" fill={primaryFill} /></svg>;
}

const CheckmarkStarburst16Regular = wrapIcon(rawSvg({}), 'CheckmarkStarburst16Regular');
export default CheckmarkStarburst16Regular;
      