import { Component } from 'react';
import { Result } from 'antd';

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (!this.state.errorInfo) {
      return this.props.children;
    }

    return (
      <>
        <Result
          status="500"
          title="Oops!"
          subTitle="Failed to load page due to an unexpected error occurred."
        />
        {import.meta.env.DEV && (
          <pre
            style={{
              background: '#f7f8f9',
              border: '1px dotted #ccc',
              padding: '12px'
            }}
          >
            <strong>{this.state.error?.toString()}</strong>
            <br />
            {this.state.errorInfo?.componentStack}
          </pre>
        )}
      </>
    );
  }
}
