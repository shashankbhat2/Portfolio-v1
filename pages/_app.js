import Head from "next/head";
import Footer from "../components/footer";
import CustomHead from "../components/head";
import SideBar from "../components/sidebar";
import '../styles/styles.css'
function MyApp({ Component, pageProps }) {
  return (
    <>  
      <CustomHead title="Home"></CustomHead>
      <div className="columns">
      <div className="column"> 
        <SideBar></SideBar>
      </div>  
      <div className="column is-half">
      <Component {...pageProps}/>
      </div>
      <div className="column">
      <Footer></Footer>
      </div>
      </div>
      <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
    </>
  )
}

export default MyApp
