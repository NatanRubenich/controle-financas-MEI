import { useEffect } from 'react';
import { useLogin } from '../../Context/LoginContext';
import axios from '../../axios/axios';

const AtualizarStateLogin = () => {
  const { logado, setLogado } = useLogin();

  useEffect(() => {
   const verificarLogin = async () => {
      if(localStorage.getItem("token")) {
        await axios({
          method: 'get',
          url: '/auth',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then((res) => {
          setLogado(true);
        })
        .catch(err => {
          setLogado(false);
        });
      } else {
        localStorage.clear();
        setLogado(false);
      }
    }
    verificarLogin();
  }, [logado]);

  return null;
}

export default AtualizarStateLogin;
