import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 5a3 3 0 11-6 0 3 3 0 016 0zm6 5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-3.1.75c.06.24.1.49.1.75v3a2 2 0 01-2.5 1.94V20a2 2 0 01-3.25 1.56A2 2 0 014.5 20v-3.56A2 2 0 012 14.5v-3a2.75 2.75 0 012.75-2.75h6c1.26 0 2.32.85 2.65 2zm1.03 0h5.32a2.75 2.75 0 012.75 2.75v1.75a2 2 0 01-2.5 1.94V20a2 2 0 01-3.25 1.56A2 2 0 0113.5 20v-3.26a3 3 0 001-2.24v-3c0-.26-.03-.5-.07-.75z" fill={primaryFill} /></svg>;
}

const Guardian24Filled = wrapIcon(rawSvg({}), 'Guardian24Filled');
export default Guardian24Filled;
      