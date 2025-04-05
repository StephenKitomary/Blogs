import dayjs from "dayjs";

import { PostItem } from "@/components/post-item";
import { getAllPosts } from "@/data/blog";

export default function HomePage() {
  // Fetch all posts using the imported function
  const allPosts = getAllPosts();
  
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {allPosts
        .slice()
        .sort((a, b) => {
          const dateA = dayjs(a.metadata.createdAt);
          const dateB = dayjs(b.metadata.createdAt);
          // Ensure both dates are valid before comparing
          if (dateA.isValid() && dateB.isValid()) {
            return dateB.diff(dateA);
          }
          return 0;
        })
        .map((post, index) => (
          <PostItem
            key={post.slug}
            post={post}
            shouldPreloadImage={index <= 4}
          />
        ))}
    </div>
  );
}