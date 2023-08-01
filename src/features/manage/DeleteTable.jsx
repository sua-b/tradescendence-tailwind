import React from 'react';
import Table from '../../ui/Table';
import BlogRow from './BlogRow';
import Spinner from '../../ui/Spinner';
import useBlogs from '../blogs/useBlogs';

export default function DeleteTable() {
  const { blogs, isLoading } = useBlogs();

  if (isLoading) return <Spinner />;

  return (
    <div className='bg-gray-100 mx-4 flex flex-col gap-2'>
      <Table>
        <Table.Header>
          <div>ID</div>
          <div>Title</div>
          <div>Author</div>
          <div className='hidden md:inline'>Content</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={blogs}
          render={(blog) => <BlogRow blog={blog} key={blog.id} />}
        />
      </Table>
    </div>
  );
}
