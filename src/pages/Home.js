import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'
function Home() {
  return (
    <div>
      <div className="links"><Link to='/Login/Investor'>Investor Login</Link><br/></div>
      <div className="links"><Link to='/SignUp/Investor'>Investor Signup</Link><br/></div>
      <div className="links"><Link to='/Login/College'>Collage Login</Link><br/></div>
      <div className="links"><Link to='/SignUp/College'>Collage Signup</Link><br/></div>
      <div className="links"><Link to='/Collage-Register'>Collage Register</Link><br/></div>
      <div className="links"><Link to='/Projects'>Projects Page</Link><br/></div>
      <div className="links"><Link to='/About'>About</Link><br/></div>
      <div className="links"><Link to='/Projects/projectid-12345678'>Single Project PAge</Link><br/></div>
      <div className="links"><Link to='/Invest-Dialog'>Invest Dialog</Link><br/></div>
      <div className="links"><Link to='/Collage-Dashboard'>Collage Dashboard</Link><br/></div>
      <div className="links"><Link to='/projectUpload'>Project Upload PAge</Link><br/></div>
      <div className="links"><Link to='/CollageDetails'>Collage Details PAge</Link><br/></div>
      <div className="links"><Link to='/Investor-Dashboard'>Investor Dashboard</Link><br/></div>
      <div className="links"><Link to='/InvestorDetails'>Investor Details</Link><br/></div>
    </div>
  )
}

export default Home