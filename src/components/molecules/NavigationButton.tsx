import { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import CustomIcon from '../atoms/CustomIcon';

type NavigationButtonType = {
  icon: IconType;
  title: string;
  to: string;
};

const IconButton: FC<NavigationButtonType> = ({ icon, title, to }) => (
  <>
    <Button
      as={Link}
      bg="blue.50"
      fontSize="xl"
      leftIcon={<CustomIcon icon={icon} />}
      to={to}
    >
      {title}
    </Button>
  </>
);

export default IconButton;
