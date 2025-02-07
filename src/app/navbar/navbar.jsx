'use client';

import { useState,useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import './navbar.css';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const { instance } = useMsal();

  const router = useRouter();
   const [user, setUser] = useState(null);
 
   useEffect(() => {
     const account = instance?.getAllAccounts();
     console.log("ACCOUNT : " ,account)
     if (account?.length > 0) {
      console.log(account)
       setUser(account[0])
     }
     else{
       router.push("/login")
     }
},[instance]);

 const handleLogout = async () => {
   await instance.logoutPopup();
   setUser(null);
   router.push("/login");
 }


  return (
    <>
      <header className="navbar">
        <div className="left">
          <div className="logo">
            <img src="https://www.cybercom.co.in/wp-content/uploads/2013/04/logo5.png" alt="Cybercom Logo" className='cybercom'/>
          </div>
          <div className="divider"></div>
          <div className="styles">Deployment Checklist</div>
        </div>
        <div className="right">
          <div className="userInfo" onClick={toggleDropdown}>
            <span className="user">{user?.name}</span>
            <span className="arrow">▼</span>
          </div>
          {dropdownOpen && (
            <div className="dropdown">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </header>
      <ul className="menu-bar">
        <li className="menu-item active">
          <a>Dashboard</a>
        </li>
      </ul>
    </>
  );
}
