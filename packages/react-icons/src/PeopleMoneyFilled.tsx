import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10a2 2 0 012 2h-2a2 2 0 00-2 2v2.9c-.47.06-.97.1-1.5.1C4.09 17 2 15.55 2 13.5V12c0-1.1.9-2 2-2h7zm2.37.16c.4.51.63 1.15.63 1.84h4a2 2 0 00-2-2h-2.76l.13.16zM7.5 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm7 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM19 14.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5zM17.5 18c0-.28.22-.5.5-.5v-1c-.83 0-1.5.67-1.5 1.5h1zm.5-3.5a.5.5 0 01-.5-.5h-1c0 .83.67 1.5 1.5 1.5v-1zm-6.5-.5a.5.5 0 01-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1zm3.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
}

const PeopleMoneyFilled = wrapIcon(rawSvg({}), 'PeopleMoneyFilled');
export default PeopleMoneyFilled;
      