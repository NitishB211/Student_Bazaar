/* This component is used for header or navbar 
To give Navigation links do the following steps.
1)-  import links from react-router-dom using command: import { Link } from 'react-router-dom';
2)- Now replace the anchor tag i.e <a></a> with <Link></Link> and href with  to. 
Eg-      <Link className="nav-link active" aria-current="page" to="/home"> <h5>Home</h5></Link>
Eg2-   <Link className="navbar-brand" to="/" class="text-warning bg-dark"> <h3>Student Bazaar </h3> </Link>

*/
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5001/users/1') // Example API to fetch user data
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load user data');
        setLoading(false);
        console.error('Error fetching user data:', err);
      });
  }, []);

  const handleLogout = () => {
    // Clear session data (like tokens) or perform logout logic
    alert('Logged out successfully');
    setUser(null); // Update state to reflect the logged-out state
    navigate('/login');  // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-warning bg-dark" to="/">
          <h3>Student Bazaar</h3>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                <h5>Home</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-item">
                <h5>AddPaidItem</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                <h5>AboutUs</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                <h5>ContactUs</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/show-item">
                <h5>ShowItem</h5>
              </Link>
            </li>

            {/* If the user is not logged in, show Sign In and Sign Up links */}
            {!user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <h5>Sign In</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    <h5>Sign Up</h5>
                  </Link>
                </li>
              </>
            )}

            {/* Profile Dropdown if the user is logged in */}
            {user && (
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h5>{user.name}</h5> {/* Display user's name here */}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}

            {/* Loading & Error Handling */}
            <li className="nav-item">
              <div className="nav-link">
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : user ? (
                  <p> </p>
                ) : (
                  <p>Error loading user data</p>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;