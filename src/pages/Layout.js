import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet} from "react-router-dom";
import ScrollTop from "react-scrolltop-button";

const Layout = (props) => {
    const {footerAuthorName, studentID, footerDocumentation,navItems,logo}=props;

  return (
    <>
        <div className="content-container">
          <Header
              logo={logo}
              navItems={navItems}/>
          <Outlet />
        </div>
        <Footer
            authorName={footerAuthorName}
            documentation={footerDocumentation}
            navItems={navItems}
            studentID={studentID}
            />
            <ScrollTop />
    </>
  )
};

export default Layout;
