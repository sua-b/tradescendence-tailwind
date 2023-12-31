import supabase, { supabaseUrl } from './supabase';

export async function getBlogs() {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('id', { ascending: false });

  if (error) throw new Error('Blogs could not be loaded');

  return data;
}

export async function getBlog(blogId) {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', blogId)
    .single();

  if (error) throw new Error('Blog could not be loaded');

  return data;
}

export async function addBlog(blogData) {
  //1. รับ obj blog มา
  // console.log(blogData);
  //2.ตั้ง imageName
  const imageName = `${Math.random()}-${blogData.image[0].name}`;
  //3.ตั้ง path จาก storage
  const imagePath = `${supabaseUrl}/storage/v1/object/public/postsImage/${imageName}`;

  // add obj
  const { data, error } = await supabase
    .from('blogs')
    .insert([{ ...blogData, image: imagePath }])
    .select();

  const { error: storageError } = await supabase.storage
    .from('postsImage')
    .upload(imageName, blogData.image[0]);

  if (error) throw new Error('Blog could not be added');
  if (storageError) throw new Error('Something wrong while uploading file');

  return data;
}

export async function filterBlogs(value) {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('label', value)
    .order('id', { ascending: false });

  if (error) throw new Error('Blog could not be added');

  return data;
}

export async function deleteBlog(id) {
  const { error } = await supabase.from('blogs').delete().eq('id', id);

  if (error) throw new Error('Blog could not be deleted');
  return error;
}
