import CreatePost from '../components/CreatePost';

import Head from 'next/head';
const Home = () => {
  return (
      <div>
        <Head>
          <title>Blog App</title>
        </Head>
        <h1>Blog</h1>
        <CreatePost/>
      </div>
  )
}
export default Home;