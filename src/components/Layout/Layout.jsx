const Layout = (props) => {
  return (
    <>
      <div className="container mx-auto px-8 xl:px-0">{props.children}</div>
    </>
  );
}

export default Layout;