import { FC } from 'react';
import {
  Box,
  Wrap,
  // VStack
} from '@chakra-ui/react';

const NavigationBar: FC = () => {
  const st = 'sticky';

  return (
    <Wrap spacing="-0.5">
      <Box top={0} position={st} zIndex="sticky">
        Navigation
        <Box>テスト1</Box>
        <Box>テスト2</Box>
        <Box>テスト3</Box>
      </Box>
    </Wrap>
  );
};

export default NavigationBar;
