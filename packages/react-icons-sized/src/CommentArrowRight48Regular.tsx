import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M46 13a11 11 0 11-22 0 11 11 0 0122 0zm-9.7-5.7a1 1 0 000 1.4l3.29 3.3H28a1 1 0 100 2h11.59l-3.3 3.3a1 1 0 001.42 1.4l5-5a1 1 0 000-1.4l-5-5a1 1 0 00-1.42 0z" fill={primaryFill} /><path d="M41.5 28.75v-4.49c.9-.52 1.75-1.16 2.5-1.88v6.37c0 4-3.25 7.25-7.25 7.25H26.4l-10.85 7.66A2.25 2.25 0 0112 41.82V36h-.75C7.25 36 4 32.75 4 28.75v-15.5C4 9.25 7.25 6 11.25 6h12.8c-.5.78-.92 1.62-1.25 2.5H11.25a4.75 4.75 0 00-4.75 4.75v15.5a4.75 4.75 0 004.75 4.75h3.25v7.84l11.1-7.84h11.15a4.75 4.75 0 004.75-4.75z" fill={primaryFill} /></svg>;
}

const CommentArrowRight48Regular = wrapIcon(rawSvg({}), 'CommentArrowRight48Regular');
export default CommentArrowRight48Regular;
      