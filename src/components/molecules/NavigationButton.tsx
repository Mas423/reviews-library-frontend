import { FC } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import CustomIcon from '../atoms/CustomIcon';

interface NavigationButtonProp extends ButtonProps {
  icon: IconType;
  name: string;
  to: string;
}

const IconButton: FC<NavigationButtonProp> = (props) => {
  const { icon, name: title, to } = props;

  return (
    <Button
      as={Link}
      fontSize="xl"
      leftIcon={<CustomIcon icon={icon} />}
      to={to}
    >
      {title}
    </Button>
  );
};

export default IconButton;
