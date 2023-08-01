import Card from './Card';

export default function BlogsTile({ blogs, size }) {
  if (size === 'full')
    return (
      <ul className='px-4 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        {blogs?.map((item) => (
          <Card key={item.id} id={item.id}>
            <Card.Image src={item.image} alt={item.title} />
            <Card.Title>{item.title}</Card.Title>
          </Card>
        ))}
      </ul>
    );

  if (size === 'half') {
    const arr = blogs?.filter((item, index) => index < 6);
    return (
      <ul className='px-4 grid gap-3 grid-cols-1 md:grid-cols-2 '>
        {arr?.map((item) => (
          <Card key={item.id} id={item.id}>
            <Card.Image src={item.image} alt={item.title} />
            <Card.Title>{item.title}</Card.Title>
          </Card>
        ))}
      </ul>
    );
  }
}
