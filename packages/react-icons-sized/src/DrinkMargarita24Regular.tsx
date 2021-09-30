import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.87 3.49a.75.75 0 10-.24-1.48l-6 1a.75.75 0 00-.62.6L12.73 5H5.75a.75.75 0 00-.75.75v4a3.25 3.25 0 003 3.24v.51a4 4 0 003.25 3.93v3.07h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5v-3.07A4 4 0 0016 13.5V13c1.68-.14 3-1.54 3-3.25v-4a.75.75 0 00-.75-.75h-3.99l.12-.6 5.5-.91zM17.5 8h-3.84l.3-1.5h3.54V8zm-4.14 1.5h4.14v.25c0 .97-.78 1.75-1.75 1.75h-.5a.75.75 0 00-.75.75v1.25a2.5 2.5 0 01-5 0v-1.25a.75.75 0 00-.75-.75h-.5c-.97 0-1.75-.78-1.75-1.75V9.5h5.34L11 13.6a.75.75 0 101.48.3l.87-4.4zM12.14 8H6.5V6.5h5.94l-.3 1.5z" fill={primaryFill} /></svg>;
}

const DrinkMargarita24Regular = wrapIcon(rawSvg({}), 'DrinkMargarita24Regular');
export default DrinkMargarita24Regular;
      