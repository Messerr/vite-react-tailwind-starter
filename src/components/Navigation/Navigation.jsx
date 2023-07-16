const Navigation = () => {
  const navLinks = [
    {
      id: '1',
      text: 'Link One',
      url: '/',
    },
    {
      id: '2',
      text: 'Link Two',
      url: '/',
    },
    {
      id: '3',
      text: 'Link Three',
      url: '/',
    },
    {
      id: '4',
      text: 'Link Four',
      url: '/',
    },
  ]

  return (
    <div>
      <ul className="">
        {navLinks.map((navLink) => (
          <li key={navLink.id}>
            <a href={navLink.url}>{navLink.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
