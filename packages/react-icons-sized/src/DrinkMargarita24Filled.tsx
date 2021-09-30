import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.49 2.63c.07.4-.2.8-.62.86l-5.49.91-.12.6h3.99c.41 0 .75.34.75.75v4a3.25 3.25 0 01-3 3.24v.51a4 4 0 01-3.25 3.93v3.07h2.5a.75.75 0 010 1.5h-6.5a.75.75 0 010-1.5h2.5v-3.07A4 4 0 018 13.5V13a3.25 3.25 0 01-3-3.25v-4c0-.41.34-.75.75-.75h6.98l.28-1.4c.07-.3.3-.54.62-.59l6-1c.4-.07.8.2.86.62zm-8.5 6.12l.45-2.25H6.5v2.25h5.48zm5.51 0V6.5h-3.54l-.45 2.25h3.99z" fill={primaryFill} /></svg>;
}

const DrinkMargarita24Filled = wrapIcon(rawSvg({}), 'DrinkMargarita24Filled');
export default DrinkMargarita24Filled;
      