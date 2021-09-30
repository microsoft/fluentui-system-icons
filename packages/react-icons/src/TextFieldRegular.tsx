import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 7H12v.5a.5.5 0 001 0v-1a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v1a.5.5 0 001 0V7h1.5v6H9a.5.5 0 000 1h2a.5.5 0 000-1h-.5V7z" fill={primaryFill} /><path d="M2 7a3 3 0 013-3h10a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3V7zm3-2a2 2 0 00-2 2v6c0 1.1.9 2 2 2h10a2 2 0 002-2V7a2 2 0 00-2-2H5z" fill={primaryFill} /></svg>;
}

const TextFieldRegular = wrapIcon(rawSvg({}), 'TextFieldRegular');
export default TextFieldRegular;
      