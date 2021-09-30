import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.15 2.15c.2-.2.5-.2.7 0l1.65 1.64 1.65-1.64a.5.5 0 11.7.7l-2 2a.5.5 0 01-.7 0l-2-2a.5.5 0 010-.7zM10 4c.2 0 .39.12.46.31l4.5 11a.5.5 0 11-.92.38l-1.54-3.76V12h-5v-.07L5.96 15.7a.5.5 0 11-.92-.38l4.5-11A.5.5 0 0110 4zm-2.12 7h4.24L10 5.82 7.88 11z" fill={primaryFill} /></svg>;
}

const FontDecreaseRegular = wrapIcon(rawSvg({}), 'FontDecreaseRegular');
export default FontDecreaseRegular;
      