import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.51 9.13c.4-.34.9-.63 1.49-.63.58 0 1.1.3 1.49.63a3.88 3.88 0 01.56.6l.03.05a.5.5 0 00.84 0l.03-.05a3.18 3.18 0 01.56-.6c.4-.34.9-.63 1.49-.63.58 0 1.1.3 1.49.63a3.88 3.88 0 01.56.6l.03.05A.5.5 0 0018 9.5C18 5.72 14.78 2 10 2 5.22 2 2 5.72 2 9.5a.5.5 0 00.92.28l.03-.05a3.2 3.2 0 01.56-.6c.4-.34.9-.63 1.49-.63.58 0 1.1.3 1.49.63a3.88 3.88 0 01.56.6l.03.05a.5.5 0 00.84 0l.03-.05a3.2 3.2 0 01.56-.6zM10 9.5c-.15 0-.32.05-.5.15v6.1a1.25 1.25 0 11-2.5 0v-.25a.5.5 0 00-1 0v.25a2.25 2.25 0 004.5 0v-6.1c-.18-.1-.35-.15-.5-.15z" fill={primaryFill} /></svg>;
}

const Umbrella20Filled = wrapIcon(rawSvg({}), 'Umbrella20Filled');
export default Umbrella20Filled;
      