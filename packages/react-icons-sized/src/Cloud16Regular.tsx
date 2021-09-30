import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.7 5c-.48.6-.7 1.35-.7 2a.5.5 0 01-.5.5C2.69 7.5 2 8.76 2 9.5c0 .43.1.92.44 1.3.32.36.91.7 2.06.7h7c.93 0 1.54-.23 1.92-.56.37-.32.58-.8.58-1.44 0-.58-.28-1.07-.74-1.43a2.92 2.92 0 00-1.76-.57.5.5 0 01-.5-.5c0-1.1-.43-1.83-1-2.3A3.23 3.23 0 008 4c-1.1 0-1.83.43-2.3 1zm-.77-.63A3.82 3.82 0 018 3c.85 0 1.84.28 2.63.93a3.73 3.73 0 011.35 2.6c.69.08 1.35.34 1.89.75A2.77 2.77 0 0115 9.5c0 .88-.3 1.65-.92 2.2-.62.54-1.5.8-2.58.8h-7c-1.35 0-2.26-.41-2.81-1.05A2.95 2.95 0 011 9.5c0-1.18.97-2.77 3.03-2.98.08-.72.37-1.5.9-2.15z" fill={primaryFill} /></svg>;
}

const Cloud16Regular = wrapIcon(rawSvg({}), 'Cloud16Regular');
export default Cloud16Regular;
      