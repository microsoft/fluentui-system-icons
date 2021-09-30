import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.75c0-.41.34-.75.75-.75h18.5a.75.75 0 010 1.5H2.75A.75.75 0 012 5.75zm3.28 14.47l-.72-.72h14.88l-.72.72a.75.75 0 101.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 10-1.06 1.06l.72.72H4.56l.72-.72a.75.75 0 10-1.06-1.06l-2 2c-.3.3-.3.77 0 1.06l2 2a.75.75 0 001.06-1.06zM2.75 11.5a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /></svg>;
}

const TextAlignDistributedEvenly24Regular = wrapIcon(rawSvg({}), 'TextAlignDistributedEvenly24Regular');
export default TextAlignDistributedEvenly24Regular;
      