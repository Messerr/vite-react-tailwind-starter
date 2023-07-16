import Button from '../Button/Button';

const Navigation = (props) => {
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
    <div className="py-4 flex justify-between items-center">
      <img src={props.logoSrc} alt={props.logoAlt} />
      <ul className="flex items-center">
        {navLinks.map((navLink) => (
          <li key={navLink.id} className="mx-1">
            <a href={navLink.url}>{navLink.text}</a>
          </li>
        ))}
      </ul>
      <Button text={'CTA Here'} />
    </div>
  );
};

export default Navigation;
