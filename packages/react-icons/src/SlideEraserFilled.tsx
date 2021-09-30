import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v5.07l-.4-.41a2.25 2.25 0 00-3.2 0l-3.74 3.75A2.24 2.24 0 0010 16H4a2 2 0 01-2-2V6zm13.12 5.37a1.25 1.25 0 011.76 0l1.75 1.75c.5.48.5 1.28 0 1.76l-2.57 2.58-3.52-3.52 2.58-2.57zm-3.18 3.17l-.57.58a1.25 1.25 0 000 1.76l1.75 1.75c.48.5 1.28.5 1.76 0l.58-.57-3.52-3.52z" fill={primaryFill} /></svg>;
}

const SlideEraserFilled = wrapIcon(rawSvg({}), 'SlideEraserFilled');
export default SlideEraserFilled;
      