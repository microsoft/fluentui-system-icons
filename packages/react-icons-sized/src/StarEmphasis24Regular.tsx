import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.2 3.1c-.49-1-1.92-1-2.41 0L8.43 7.88l-5.27.77a1.35 1.35 0 00-.75 2.3l3.81 3.72-.9 5.25a1.35 1.35 0 001.96 1.42L12 18.86l4.71 2.48c1 .52 2.15-.32 1.96-1.42l-.9-5.25 3.82-3.72c.8-.78.36-2.14-.75-2.3l-5.27-.77L13.2 3.1zM9.75 8.61L12 4.04l2.26 4.57c.2.4.57.68 1.01.74l5.05.74-3.65 3.56c-.32.3-.46.76-.39 1.2l.86 5.02-4.51-2.37c-.4-.2-.87-.2-1.26 0l-4.52 2.37.87-5.03c.07-.43-.07-.88-.4-1.2L3.68 10.1l5.05-.74c.44-.06.82-.34 1.02-.74z" fill={primaryFill} /><path d="M1.16 3.78c-.25.32-.2.8.12 1.06l2.5 2a.75.75 0 10.94-1.18l-2.5-2a.75.75 0 00-1.06.12z" fill={primaryFill} /><path d="M22.84 18.22c.25-.32.2-.8-.12-1.06l-2.5-2a.75.75 0 00-.94 1.18l2.5 2c.32.25.8.2 1.06-.12z" fill={primaryFill} /><path d="M1.28 17.16a.75.75 0 10.94 1.18l2.5-2a.75.75 0 00-.94-1.18l-2.5 2z" fill={primaryFill} /><path d="M22.84 3.78c.25.32.2.8-.12 1.06l-2.5 2a.75.75 0 01-.94-1.18l2.5-2c.32-.25.8-.2 1.06.12z" fill={primaryFill} /></svg>;
}

const StarEmphasis24Regular = wrapIcon(rawSvg({}), 'StarEmphasis24Regular');
export default StarEmphasis24Regular;
      