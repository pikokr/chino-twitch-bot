import React from 'react';
import { NextPageContext } from 'next';

const Index = ({ query: { hello } }: any) => {
  return <div>Hello, {hello}!</div>;
};

Index.getInitialProps = async function (context: NextPageContext) {
  const { query } = context;
  return { query };
};

export default Index;
