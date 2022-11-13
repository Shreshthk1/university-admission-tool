import { useNavigate } from 'react-router-dom';

// Needed helper class to be able to redirect user to a specific page using react-router-dom v6
// it is a wrapper function.
export const withRouter = (Component) => {
    const Wrapper = (props) => {
      const navigate = useNavigate();
      
      return (
        <Component
          navigate={navigate}
          {...props}
          />
      );
    };
    
    return Wrapper;
  };