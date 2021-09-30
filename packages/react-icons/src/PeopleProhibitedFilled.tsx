import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill={primaryFill} /><path d="M14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill={primaryFill} /><path d="M11.3 10.02L11 10H4a2 2 0 00-2 2v1.5C2 15.55 4.09 17 7.5 17c.73 0 1.4-.07 2-.2a5.48 5.48 0 011.8-6.78z" fill={primaryFill} /><path d="M10 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm2.4 2.8l4.9-4.9a3.5 3.5 0 01-4.9 4.9zm-.7-.7a3.5 3.5 0 014.9-4.9l-4.9 4.9z" fill={primaryFill} /></svg>;
}

const PeopleProhibitedFilled = wrapIcon(rawSvg({}), 'PeopleProhibitedFilled');
export default PeopleProhibitedFilled;
      