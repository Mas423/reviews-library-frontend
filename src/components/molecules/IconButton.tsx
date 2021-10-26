import { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import CustomIcon from '../atoms/CustomIcon';

type IconButtonType = {
  icon: IconType;
  title: string;
};

const IconButton: FC<IconButtonType> = ({ icon, title }) => (
  <>
    <Button fontSize="xl" leftIcon={<CustomIcon icon={icon} />}>
      {title}
    </Button>
  </>
);

export default IconButton;
