import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 7.12V13a2 2 0 01-2 2H4a2 2 0 01-2-2V7c0-1.1.9-2 2-2h11.88l-1 1H4a1 1 0 00-1 1v6a1 1 0 001 1h12a1 1 0 001-1V8.12l1-1zM4 8.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm0 3c0-.28.22-.5.5-.5H9a.5.5 0 010 1H4.5a.5.5 0 01-.5-.5zm13.85-6.35c.2.2.2.5 0 .7l-6 6a.5.5 0 01-.7-.7l6-6c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const Check20Regular = wrapIcon(rawSvg({}), 'Check20Regular');
export default Check20Regular;
      