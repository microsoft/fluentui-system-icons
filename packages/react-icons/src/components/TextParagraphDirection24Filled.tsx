import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextParagraphDirection24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 3a5.5 5.5 0 100 11H15v7.2c0 .45.34.8.75.8s.75-.35.75-.8V4.5H18v16.7c0 .45.34.8.75.8s.75-.35.75-.8V4.5h.67c.47-.06.83-.37.83-.75 0-.41-.43-.75-.95-.75H13.5z" fill={primaryFill} /><path d="M4.08 11.86a.67.67 0 01-.9-.99L4.9 9 3.18 7.13l-.06-.08a.67.67 0 011.03-.84L6.3 8.54l.06.08c.18.26.16.6-.06.84l-2.15 2.33-.07.07z" fill={primaryFill} /><path d="M5.4 19.86a.67.67 0 00.9-.99L4.59 17l1.7-1.87.07-.08a.67.67 0 00-1.03-.84l-2.15 2.33-.06.08c-.18.26-.16.6.06.84l2.15 2.33.07.07z" fill={primaryFill} /></svg>;
};

export default TextParagraphDirection24Filled;