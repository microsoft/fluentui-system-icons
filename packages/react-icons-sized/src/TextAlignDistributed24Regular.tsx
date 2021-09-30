import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.28 7.22l-.72-.72h16.69a.75.75 0 000-1.5H4.56l.72-.72a.75.75 0 00-1.06-1.06l-2 2c-.3.3-.3.77 0 1.06l2 2a.75.75 0 001.06-1.06zM2.75 11.5a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H2.75zm0 8h16.69l-.72.72a.75.75 0 101.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 10-1.06 1.06l.72.72H2.75a.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const TextAlignDistributed24Regular = wrapIcon(rawSvg({}), 'TextAlignDistributed24Regular');
export default TextAlignDistributed24Regular;
      