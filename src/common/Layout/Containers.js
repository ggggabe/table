export const Flex = (props) => {
  const {style, children, column} = props

  return <div style={{
    display: 'flex',
    flexDirection: column ? 'column' : 'row',
    ...style
  }}>
    {children}
  </div>
}

export const Block = (props) => {
  const {style, children} = props

  return (
    <div style={{
      display: 'block',
      ...style
    }}>
      {children}
    </div>
  )
} 

export const FullScreen = (props) => {
  const {style, children} = props

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      ...style
    }}>
      {children}
    </div>
  )
}

export const FillContainer = (props) => {
  const {style, children} = props

  return (
    <div style={{
      height: '100%',
      width: '100%',
      ...style
    }}>
      {children}
    </div>
  )
}

export const HeaderBodyFooter = (props) => {
  const {header, body, footer} = props        // Where header, body, and footer are all react components. `body` is required

  return (
    <Flex column>
      {header && <Flex>{header}</Flex>}
      <Flex style={{flex: 1}}>{body}</Flex>
      {footer && <Flex>{footer}</Flex>}
    </Flex>
  )
}

export const LeftMiddleRight = (props) => {
  const { left, middle, right} = props

  return (
    <Flex style={{ wrap: 'nowrap' }}>
      {left && <Flex column>{left}</Flex>}
      <Flex column style={{flex: '1'}}>{middle}</Flex>
      {right && <Flex column>{right}</Flex>}
    </Flex>
  )
}