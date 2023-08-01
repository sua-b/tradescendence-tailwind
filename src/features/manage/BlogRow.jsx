import Table from '../../ui/Table';
import { LiaTrashAltSolid } from 'react-icons/lia';
import useDeleteBlog from './useDeleteBlog';

export default function BlogRow({ blog }) {
  const { id, title, author, content } = blog;
  const { deleteBlog, isDeleting } = useDeleteBlog();
  return (
    <>
      <Table.Row>
        <span>{id}</span>
        <span>{title}</span>
        <span>{author}</span>
        <span className='hidden md:inline'>{content}</span>
        <button
          className='text-lg justify-self-end'
          disabled={isDeleting}
          onClick={() => deleteBlog(id)}
        >
          <LiaTrashAltSolid />
        </button>
      </Table.Row>
    </>
  );
}
