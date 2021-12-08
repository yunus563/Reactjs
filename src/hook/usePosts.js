import {useMemo} from 'react'

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
      if(sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
      }
      return posts;
  }, [sort, posts])
  return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
  const sortedposts = useSortedPosts(posts,sort)
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedposts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedposts]);
  return sortedAndSearchedPosts
} 
