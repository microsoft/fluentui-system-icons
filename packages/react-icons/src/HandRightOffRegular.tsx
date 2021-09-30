import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 6c0-.36.13-.7.34-.95l-2.2-2.2a.5.5 0 11.71-.7l15 15a.5.5 0 01-.7.7l-3.57-3.56-.21.22c-.7.72-1.22 1.56-1.72 2.43a2.16 2.16 0 01-1.87 1.08H7.23c-.3 0-.6-.07-.86-.21a2.55 2.55 0 01-1.18-1.3l-.58-1.41c-.4-.98-.61-2.02-.61-3.08V6zm8.87 7.58L7 7.7V9.5a.5.5 0 01-1 0V6.7l-.94-.93A.5.5 0 005 6v6.02c0 .93.18 1.84.53 2.7l.59 1.42c.14.34.4.61.71.78.13.07.27.1.4.1h2.55c.42 0 .8-.22 1-.58.55-.94 1.11-1.84 1.86-2.63l.23-.23z" fill={primaryFill} /><path d="M10 3.5v4.38l.9.9a.5.5 0 00.1-.28v-4a.5.5 0 011 0v5.38l.92.92c.2-.2.4-.38.66-.51.7-.35 2.22-.57 2.4.5l-.53.4c-.4.3-.81.61-1.18.95l.7.71c.38-.34.8-.65 1.2-.96l.6-.45a.6.6 0 00.23-.47c0-.75-.54-1.57-1.22-1.79a3.34 3.34 0 00-2.78.29V4.5a1.5 1.5 0 00-2.05-1.4 1.5 1.5 0 00-2.9 0 1.5 1.5 0 00-1.96.87l.91.9V4.5a.5.5 0 011 0v1.38l1 1V3.5a.5.5 0 011 0z" fill={primaryFill} /></svg>;
}

const HandRightOffRegular = wrapIcon(rawSvg({}), 'HandRightOffRegular');
export default HandRightOffRegular;
      