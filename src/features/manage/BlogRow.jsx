import Table from '../../ui/Table';
import { LiaTrashAltSolid } from 'react-icons/lia';
import useDeleteBlog from './useDeleteBlog';

export default function BlogRow({ blog }) {
  const { id, title, author, content } = blog;
  const { deleteBlog, isDeleting } = useDeleteBlog();
  return (
    <>
      <Table.Row>
        <span>{title}</span>
        <span>{author}</span>
        <span className='hidden md:inline h-40 overflow-hidden text-ellipsis'>
          {content}
        </span>
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
