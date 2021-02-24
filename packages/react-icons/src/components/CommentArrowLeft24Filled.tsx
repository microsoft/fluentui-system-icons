import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentArrowLeft24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.02 3A6.5 6.5 0 0022 11.2v3.55c0 1.8-1.46 3.25-3.25 3.25h-5.79l-5.38 3.82A1 1 0 016 21v-3h-.75A3.25 3.25 0 012 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77zm5.48-2a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-1.28 2.59l-.07.06-2.53 2.53-.03.04-.04.07-.03.08-.02.08v.14l.02.06.03.06.03.06.04.05 2.53 2.53a.5.5 0 00.76-.63l-.06-.07L15.21 7h5.29a.5.5 0 00.5-.41V6.5a.5.5 0 00-.41-.5H15.2l1.65-1.65a.5.5 0 00.06-.63l-.06-.07a.5.5 0 00-.63-.06z" fill={primaryFill} /></svg>;
};

export default CommentArrowLeft24Filled;