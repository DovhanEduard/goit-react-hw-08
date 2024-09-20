import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
