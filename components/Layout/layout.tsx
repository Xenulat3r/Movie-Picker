
import Header from "./Header"
import Footer from "./Footer"
import NavBar from "./Nav"





export default function MainLayout({children})  {


  return (
   <>
   <Header />
  <NavBar/>
   <main>
       {children}
   </main>

   <Footer/>   
   </>
  )
}

