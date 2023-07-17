import { Button, Typography } from 'antd';
import styles from './Home.module.less';

const { Paragraph, Text } = Typography;

export default function Home() {
  return (
    <>
      <Button type="primary" size="large">
        Primary Button
      </Button>
      <Paragraph className={styles.paragraph}>
        {/* environment variables */}
        <Text code>{JSON.stringify(import.meta.env)}</Text>
      </Paragraph>
    </>
  );
}
