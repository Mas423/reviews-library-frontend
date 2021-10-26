import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type CustomIconType = {
  icon: IconType;
};

const CustomIcon: FC<CustomIconType> = ({ icon }) => (
  <>
    <Box as={icon} />
  </>
);

export default CustomIcon;
