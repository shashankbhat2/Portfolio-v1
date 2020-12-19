import Head from "next/head";
import SideBar from "../components/sidebar";
import '../styles/styles.css'
function MyApp({ Component, pageProps }) {
  return (
    <>  
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600;700&display=swap" rel="stylesheet"/>
      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      </Head>
      <div className="columns">
      <div className="column is-one-third"> 
        <SideBar></SideBar>
      </div>  
      <div className="column">
      <Component {...pageProps}/>
      </div>
      <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
      </div>
    </>
  )
}

export default MyApp
