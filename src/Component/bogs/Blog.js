import React from 'react'
import {blogImgOne, blogImgTwo, blogImgThree} from"../../assets"
import Title from '../Home/Title'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div>
      <Title title="Lates" subTitle="Posts"/>
      <div className='grid grid-cols-2 gap-10'>
      <div className='px-6'>
      <BlogCard
      image={blogImgOne}
      title="Selasa 14, 2023"
      subTitle="Learn Frontend 2023"
      category="Travel"
      />
      <BlogCard
      image={blogImgTwo}
      title="Selasa 14, 2023"
      subTitle="Learn Frontend 2023"
      category="Travel"
      />
      <BlogCard
      image={blogImgThree}
      title="Selasa 14, 2023"
      subTitle="Learn Frontend 2023"
      category="Travel"
      />
      <BlogCard
      image={blogImgOne}
      title="Selasa 14, 2023"
      subTitle="Learn Frontend 2023"
      category="Travel"
      />
      

      </div>

      <div className='px-6'>
      <BlogCard
      image={blogImgOne}
      title="Selasa 14, 2023"
      subTitle="Learn Frontend 2023"
      category="Travel"
      />
      <BlogCard
      image={blogImgTwo}
      title="Selasa 14, 2023"
      subTitle="Learn Frontend 2023"
      category="Travel"
      />
      <BlogCard
      image={blogImgThree}
      title="Selasa 14, 2023"
      subTitle="Learn Frontend 2023"
      category="Travel"
      />
      <BlogCard
      image={blogImgOne}
      title="Selasa 14, 2023"
      subTitle="Learn Frontend 2023"
      category="Travel"
      />

      </div>
      </div>
    </div>
  )
}

export default Blog
