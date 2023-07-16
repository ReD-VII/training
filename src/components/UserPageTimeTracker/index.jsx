import React, { useEffect, useState } from 'react';

const UserPageTimeTracker = () => {
  const [contTime, setContTime] = useState({
    start: null,
    end: null
  });

  useEffect(() => {
    setContTime(prevState => ({
      ...prevState,
      start: new Date().getTime()
    }));

    const interval = setInterval(() => {
      setContTime(prevState => ({
        ...prevState,
        end: new Date().getTime()
      }));
    }, 1000); // Atualiza o tempo a cada segundo

    return () => {
      clearInterval(interval);
    };
  }, []);

  const calculateTimeSpent = () => {
    if (contTime.start && contTime.end) {
      const timeSpent = (contTime.end - contTime.start) / 1000;
      return timeSpent.toFixed(2); // Ajuste para exibir apenas duas casas decimais
    }
    return 0;
  };

  return (
    <div>
      <h1>Contador de tempo de usuário na página</h1>
      <p>Tempo gasto: {calculateTimeSpent()} segundos</p>
    </div>
  );
};

export default UserPageTimeTracker;
