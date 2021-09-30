import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.07 3.57a3 3 0 013.86 0l9 7.57a3 3 0 011.07 2.3V26a2 2 0 01-2 2h-5.5a2 2 0 01-2-2v-7h-5v7a2 2 0 01-2 2H6a2 2 0 01-2-2V13.43a3 3 0 011.07-2.3l9-7.56z" fill={primaryFill} /></svg>;
}

const Home32Filled = wrapIcon(rawSvg({}), 'Home32Filled');
export default Home32Filled;
      