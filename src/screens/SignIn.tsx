import { Heading, VStack, useTheme} from 'native-base';
import Logo from '../assets/logo_primary.svg';
import { Input } from 'native-base';
import { Envelope } from 'phosphor-react-native';

export function SignIn() {
  const [ colors ] = useTheme();
  return (
     <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={32}>
     <Logo />
  
     <Heading color="gray.100" fontSize="xl" mt={20} mb={6}> 
     Olá Henrique  
     </Heading> 
    
     <Input
       placeholder="E-mail"
       ImputLeftElement={<Icon as={ <Envelope /> } />}
       mb={4}
       />
     <Input placeholder="Senha"/>
     </VStack>
 )
}
