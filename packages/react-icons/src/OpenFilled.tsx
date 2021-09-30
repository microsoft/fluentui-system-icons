import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 4.5c-.97 0-1.75.78-1.75 1.75v7.5c0 .97.78 1.75 1.75 1.75h7.5c.97 0 1.75-.78 1.75-1.75v-2a.75.75 0 011.5 0v2c0 1.8-1.46 3.25-3.25 3.25h-7.5A3.25 3.25 0 013 13.75v-7.5C3 4.45 4.46 3 6.25 3h2a.75.75 0 010 1.5h-2zm4.25-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75v5a.75.75 0 01-1.5 0V5.56l-3.72 3.72a.75.75 0 11-1.06-1.06l3.72-3.72h-3.19a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const OpenFilled = wrapIcon(rawSvg({}), 'OpenFilled');
export default OpenFilled;
      