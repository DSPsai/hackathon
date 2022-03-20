import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'
function Home() {
  return (
    <div>
      <div className="links"><Link to='/Investor-Login'>Investor Login</Link><br/></div>
      <div className="links"><Link to='/Investor-SignUp'>Investor Signup</Link><br/></div>
      <div className="links"><Link to='/Collage-Login'>Collage Login</Link><br/></div>
      <div className="links"><Link to='/Collage-SignUp'>Collage Signup</Link><br/></div>
      <div className="links"><Link to='/Collage-Register'>Collage Register</Link><br/></div>
      <div className="links"><Link to='/About'>About</Link><br/></div>
      <div className="links"><Link to='/Projects'>Projects PAge</Link><br/></div>
      <div className="links"><Link to='/projectid-12345678'>Single Project PAge</Link><br/></div>
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