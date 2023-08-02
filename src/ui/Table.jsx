const styles =
  'grid grid-cols-[1fr_1fr_0.2fr] md:grid-cols-[1fr_0.8fr_2.4fr_0.3fr] text-xs md:text-sm gap-2 py-3 px-3 ';

export default function Table({ children }) {
  return (
    <div>
      <div className='border bg-gray-200 overflow-clip'>{children}</div>
    </div>
  );
}

function Header({ children }) {
  return (
    <div
      className={
        styles +
        'items-center bg-gray-50 border-b uppercase tracking-wide font-semibold text-gray-600 '
      }
    >
      {children}
    </div>
  );
}

function Row({ children }) {
  return <div className={styles + ''}>{children}</div>;
}

function Body({ data, render }) {
  if (!data?.length) return <div>No data to show</div>;

  return <div>{data.map(render)}</div>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
