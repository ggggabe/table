import { Flex } from './Containers'

export const List = (props) => { //TODO
  const { children } = props 

  return <Flex column>
    {children}
  </Flex>
}