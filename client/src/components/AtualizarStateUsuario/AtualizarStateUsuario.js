import { useEffect } from 'react';
import { useCliente } from '../../Context/ClienteContext';

const AtualizarStateUsuario = () => {
  const { usuario, setUsuario } = useCliente();

  useEffect(() => {
    if(localStorage.getItem("usuario")) {
      console.log('LOCAL', localStorage.getItem("usuario"));
      setUsuario(true);
    }
  }, [usuario]);

  return null;
}

export default AtualizarStateUsuario;
