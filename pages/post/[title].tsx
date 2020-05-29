import { NextPage } from "next";
import { useRouter } from "next/router";

import PostPageContainer from "../../features/post/components/PostPageContainer";

const PostPage: NextPage<{}> = () => {
  const router = useRouter();
  const { title } = router.query;

  return <PostPageContainer title={title as string} />;
};

export default PostPage;
