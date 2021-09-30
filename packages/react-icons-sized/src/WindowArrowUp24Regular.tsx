import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.01 2h-.08l-.06.02-.08.03-.07.04-.06.04-2.51 2.52-.06.07a.5.5 0 000 .56l.06.07.07.06c.17.12.4.12.56 0l.07-.06L17 15.71v5.38c.05.2.2.36.41.4l.09.01h.09a.5.5 0 00.4-.41L18 21v-5.3l1.65 1.65.07.06a.5.5 0 00.7-.7l-.07-.06-2.54-2.55-.05-.03-.07-.03-.06-.02-.06-.01a.5.5 0 00-.06-.01zM6.25 3h11.5a3.25 3.25 0 013.24 3.07l.01.18v5.77c-.46-.3-.97-.53-1.5-.7V8h-15v9.75c0 .92.7 1.67 1.6 1.74l.15.01h5.06c.18.53.42 1.04.71 1.5H6.25a3.25 3.25 0 01-3.24-3.07L3 17.75V6.25a3.25 3.25 0 013.07-3.24L6.25 3z" fill={primaryFill} /></svg>;
}

const WindowArrowUp24Regular = wrapIcon(rawSvg({}), 'WindowArrowUp24Regular');
export default WindowArrowUp24Regular;
      