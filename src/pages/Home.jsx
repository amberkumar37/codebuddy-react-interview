import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import MasterForm from './Form1';

const Home = () => {
  const history = useHistory();

  // const onSubmit = () => history.push('/posts');

  return (
    <main>
      <MasterForm history={history} />
    </main>
  );
};

export default Home;
