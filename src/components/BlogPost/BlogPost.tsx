import { Card, CardBody, CardHeader, Text } from '@chakra-ui/react';

import UserAvatar from '../UserAvatar/UserAvatar';
import styles from './BlogPost.module.css';
import { IBlogPostProps } from './BlogPost.types';

const BlogPost = ({ user, postText }: IBlogPostProps) => (
    <Card className={styles['blogPost']}>
        <CardHeader p={{ base: '16px 16px 8px 16px', '2xl': '24px 24px 16px 24px' }}>
            <UserAvatar name={user.name} userImage={user.userImage} nickname={user.nickname} />
        </CardHeader>
        <CardBody p={{ base: '8px 16px 16px 16px', '2xl': '12px 24px 20px 24px' }}>
            <Text noOfLines={3} fontSize='14px' fontWeight='400' lineHeight='143%'>
                {postText}
            </Text>
        </CardBody>
    </Card>
);

export default BlogPost;
