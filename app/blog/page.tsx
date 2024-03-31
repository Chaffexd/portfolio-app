import BlogPage from "../components/Blog/BlogPage";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Shane Chaffe - Blog Page',
  description: 'I write things down here, they might not mean much to you, but to me, they mean something and help me keep track.'
}

const ArticlesPage = () => {
  return (
    <section>
      <BlogPage />
    </section>
  );
};

export default ArticlesPage;
