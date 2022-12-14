import React from 'react'
import { cls } from '../shared/cls'

export interface Props {
  primary?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = React.memo<Props>(({
  children,
  primary,
  onClick
}: Props) => {
  return (
    <button
      className={cls('btn', { 'btn-primary': primary })}
      onClick={onClick}
    >{children}</button>
  )
})

Button.displayName = 'Button'

export default Button
