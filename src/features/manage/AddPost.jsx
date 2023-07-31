import Form from '../../ui/Form';
import useAddBlog from '../blogs/useAddBlog';
import Spinner from '../../ui/Spinner';

export default function AddPost() {
  const { addBlog, isAdding } = useAddBlog();

  if (isAdding) return <Spinner />;

  return <Form onFunc={addBlog} />;
}
