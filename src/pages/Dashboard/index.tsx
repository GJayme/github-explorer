import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Githup Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/47933829?s=460&u=d139517d3114dea97b87091d272bcb54873c7243&v=4"
            alt="Gabriel Jayme"
          />
          <div>
            <strong>react-projects</strong>
            <p>Works developed as a result of constant study.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/47933829?s=460&u=d139517d3114dea97b87091d272bcb54873c7243&v=4"
            alt="Gabriel Jayme"
          />
          <div>
            <strong>react-projects</strong>
            <p>Works developed as a result of constant study.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/47933829?s=460&u=d139517d3114dea97b87091d272bcb54873c7243&v=4"
            alt="Gabriel Jayme"
          />
          <div>
            <strong>react-projects</strong>
            <p>Works developed as a result of constant study.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
