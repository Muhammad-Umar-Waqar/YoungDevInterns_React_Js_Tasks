import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config'



function Home() {
  const [posts, setPosts] = useState([])
useEffect(()=>{

    appwriteService.getPosts([]).then((posts)=> {
        if (posts){
            setPosts(posts.documents)
        }
      })
},[])

if (posts.length === 0) {
    return (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            Start Creating your Posts
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    )
}

return (
    <div className='w-full py-8'>
        <Container>
            <div className='grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center place-items-center gap-10'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-[300px]'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
)
}

export default Home

