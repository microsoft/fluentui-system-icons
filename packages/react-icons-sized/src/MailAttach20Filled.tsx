import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.3 8.7c.2.2.44.32.7.39-.21.43-.29.91-.23 1.38l-.77.45-7.98-4.7A2.5 2.5 0 014.5 4h8.37L10.3 6.58a1.5 1.5 0 000 2.12zm.78 2.74a2.56 2.56 0 004.04.55L18 9.12v5.38a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5V7.37l7.75 4.56c.15.1.35.1.5 0l.83-.49zm4.15-6.96a1.62 1.62 0 012.3 2.3h-.02l-3.85 3.85h-.01a.56.56 0 11-.78-.8l3.48-3.48a.5.5 0 10-.7-.7l-3.5 3.49-.02.02a1.56 1.56 0 002.21 2.2l.01-.01 3.88-3.87.01-.01a2.63 2.63 0 00-3.72-3.7l-3.57 3.57a.5.5 0 00.7.7l3.58-3.56z" fill={primaryFill} /></svg>;
}

const MailAttach20Filled = wrapIcon(rawSvg({}), 'MailAttach20Filled');
export default MailAttach20Filled;
      