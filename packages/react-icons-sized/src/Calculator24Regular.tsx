import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 7c0-1.1.9-2 2-2h6a2 2 0 012 2v1a2 2 0 01-2 2H9a2 2 0 01-2-2V7zm2-.5a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h6a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5H9zm-.75 8a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm1.25 2.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm6.25-2.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM17 17.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-5-2.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm1.25 2.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM7.25 2A3.25 3.25 0 004 5.25v13.5C4 20.55 5.46 22 7.25 22h9.5c1.8 0 3.25-1.46 3.25-3.25V5.25C20 3.45 18.54 2 16.75 2h-9.5zM5.5 5.25c0-.97.78-1.75 1.75-1.75h9.5c.97 0 1.75.78 1.75 1.75v13.5c0 .97-.78 1.75-1.75 1.75h-9.5c-.97 0-1.75-.78-1.75-1.75V5.25z" fill={primaryFill} /></svg>;
}

const Calculator24Regular = wrapIcon(rawSvg({}), 'Calculator24Regular');
export default Calculator24Regular;
      