import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'




  
  function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
 
  return (
    <div className='w-full py-8'>
        <Container>
            <div className=' grid  md:grid-cols-3 grid-cols-1 justify-items-center place-items-center gap-10'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-[300px]'>
                        <PostCard {...post} className='' />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
                }

export default AllPosts

