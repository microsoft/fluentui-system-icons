import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /><path d="M8.5 8a.5.5 0 00-.5.5V9H7v-.5C7 7.67 7.67 7 8.5 7h3c.83 0 1.5.67 1.5 1.5V9h-1v-.5a.5.5 0 00-.5-.5h-3z" fill={primaryFill} /><path d="M7 14.78v1.72c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1.72a.5.5 0 01.15-.36l3.7-3.56a.5.5 0 00-.34-.86H3.49a.5.5 0 00-.35.86l3.7 3.56c.1.1.16.23.16.36zm1 1.72v-1.72c0-.4-.17-.8-.46-1.08L4.74 11h10.53l-2.81 2.7c-.3.29-.46.68-.46 1.08v1.72a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const PresenterRegular = wrapIcon(rawSvg({}), 'PresenterRegular');
export default PresenterRegular;
      