import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from '@/theme/extends'

export const WrapChakraProvider: React.FC = ({ children }) => (
  <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
)
