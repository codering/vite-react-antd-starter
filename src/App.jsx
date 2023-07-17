import { Suspense } from 'react';
import { Breadcrumb, Layout, Menu, Spin } from 'antd';
import { ErrorBoundary } from '@/components';
import routes from './routes';
import styles from './App.module.less';

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <Layout style={{ height: '100%' }}>
      <Header className={styles.header}>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={[{ key: '1', label: 'Home' }]}
        />
      </Header>
      <Content className={styles.content}>
        <Breadcrumb className={styles.breadcrumb} items={[{ title: 'Home' }]} />
        <div className={styles.contentBackground}>
          <Suspense fallback={<Spin />}>
            <ErrorBoundary>{routes()}</ErrorBoundary>
          </Suspense>
        </div>
      </Content>
      <Footer className={styles.footer}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}
