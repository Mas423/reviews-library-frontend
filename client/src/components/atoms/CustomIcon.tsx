import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface CustomIconProps extends BoxProps {
  icon: IconType;
}

const CustomIcon: FC<CustomIconProps> = (props) => {
  const { icon } = props;

  return (
    <>
      <Box as={icon} />
    </>
  );
};

export default CustomIcon;
