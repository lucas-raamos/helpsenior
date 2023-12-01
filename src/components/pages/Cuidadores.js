import styles from './Cuidadores.module.css'
import avatar1 from '../../img/avatar1.jpg'
import avatar2 from '../../img/avatar2.jpg'
import avatar3 from '../../img/avatar3.jpg'
import avatar4 from '../../img/avatar4.jpg'
import avatar5 from '../../img/avatar5.jpg'
import avatar6 from '../../img/avatar6.jpg'
import avatar7 from '../../img/avatar7.jpg'
import avatar8 from '../../img/avatar8.jpg'
import avatar9 from '../../img/avatar9.jpg'
import avatar10 from '../../img/avatar10.jpg'



import { useState } from "react";

const frutas = [
  {
    imagem: avatar1,
    nome: 'Maria Silva',
    conteudo: `
    Nome: Maria Silva
    Idade: 35 anos
    Endereço: Rua Augusta, 123, Bairro Vila Madalena, São Paulo (SP)

    Experiência: Maria acumulou mais de sete anos cuidando de pacientes idosos e com necessidades especiais. Sua dedicação se reflete em um histórico   sólido de oferecer suporte emocional e físico, garantindo o bem-estar e a segurança dos seus pacientes.Ela possui um entendimento profundo das condições médicas associadas aos idosos, resultando em um cuidado personalizado e atento.

    Habilidades:
    - Desenvolvimento de planos de cuidados individualizados, adaptados às necessidades específicas de cada paciente.
    - Promoção de atividades recreativas e terapêuticas para melhorar a qualidade de vida dos pacientes.
    - Implementação de técnicas de relaxamento e conforto para proporcionar um ambiente acolhedor.`
    
  },
  {
    imagem: avatar2,
    nome: 'João Santos',
    conteudo: `
    Nome: João Santos
    Idade: 40 anos
    Endereço: Avenida Atlântica, 567, Bairro Copacabana, Rio de Janeiro (RJ)

    Experiência: Com mais de oito anos de experiência, João demonstra uma dedicação exemplar no cuidado de pacientes idosos e com necessidades especiais. Sua capacidade de oferecer suporte emocional e físico tem sido fundamental para garantir o bem-estar e a segurança de seus pacientes. Seu profundo conhecimento das condições médicas comuns associadas aos idosos o torna um cuidador altamente confiável.

    Habilidades:
    - Implementação de estratégias de reabilitação para melhorar a mobilidade e funcionalidade dos pacientes.
    - Colaboração ativa com terapeutas e profissionais de saúde para coordenar um plano de cuidados abrangente.
    - Habilidade em lidar com situações de emergência de forma calma e eficaz.`
  },
  {
    imagem: avatar3,
    nome: 'Ana Oliveira',
    conteudo: `
    Nome: Ana Oliveira
    Idade: 28 anos
    Endereço: Rua Sergipe, 789, Bairro Savassi, Minas Gerais (MG)

    Experiência: Com mais de cinco anos de experiência, Ana se estabeleceu como uma cuidadora comprometida e atenciosa. Seu histórico comprovado de oferecer suporte emocional e físico destaca sua habilidade em garantir o bem-estar e a segurança de seus pacientes. Sua certificação em primeiros socorros a torna uma presença confiável em situações de emergência.

    Habilidades:
    - Implementação de atividades cognitivas para estimular a mente dos pacientes.
    - Utilização de técnicas de terapia ocupacional para manter a funcionalidade e independência dos pacientes.
    - Colaboração estreita com familiares para garantir um ambiente de cuidado contínuo e personalizado.`
  },
  {
    imagem: avatar4,
    nome: 'Carlos Fernandes',
    conteudo: `
    Nome: Carlos Fernandes
    Idade: 45 anos
    Endereço: Avenida Oceânica, 321, Bairro Barra, Salvador, Bahia (BA)

    Experiência: Com mais de nove anos de dedicação ao cuidado de pacientes idosos e com necessidades especiais, Carlos estabeleceu um histórico notável de fornecer suporte emocional e físico. Sua experiência extensa é evidente no seu comprometimento em garantir o bem-estar e a segurança dos pacientes. Carlos possui amplo conhecimento das condições médicas comuns associadas aos idosos..

    Habilidades:
    - Aplicação de técnicas de conforto e bem-estar para melhorar a qualidade de vida dos pacientes.
    - Coordenação de cuidados paliativos para pacientes em estado avançado, oferecendo apoio integral.
    - Facilidade em adaptar-se a diferentes ambientes e necessidades específicas de cada paciente.`
  },
  {
    imagem: avatar5,
    nome: 'Lúcia Santos',
    conteudo: `
    Nome: Lúcia Santos
    Idade: 32 anos
    Endereço: Rua Padre Chagas, 456, Bairro Moinhos de Vento, Porto Alegre, Rio Grande do Sul (RS)

    Experiência: Com mais de seis anos de experiência, Lúcia é reconhecida por sua dedicação e atenção no cuidado de pacientes idosos e com necessidades especiais. Seu histórico comprovado reflete a capacidade de oferecer suporte emocional e físico, garantindo o bem-estar e a segurança de seus pacientes. Seu entendimento profundo das condições médicas comuns aos idosos é uma vantagem significativa.

    Habilidades:
    - Implementação de estratégias de comunicação não verbal para pacientes com dificuldades de fala.
    - Colaboração eficaz com equipes multidisciplinares para otimizar os cuidados.
    - Capacidade de promover um ambiente acolhedor e seguro para os pacientes.`
  },
  {
    imagem: avatar6,
    nome: 'Pedro Oliveira',
    conteudo: `
    Nome: Pedro Oliveira
    Idade: 37 anos
    Endereço: Rua 24 horas, 567, Bairro Batel, Curitiba, Paraná (PR)

    Experiência: Com sete anos de experiência, Pedro demonstra um compromisso sólido no cuidado de pacientes idosos e com necessidades especiais. Seu histórico atesta sua capacidade de oferecer suporte emocional e físico, garantindo o bem-estar e a segurança de seus pacientes. Seu profundo conhecimento das condições médicas comuns associadas aos idosos é uma base fundamental para seu cuidado..

    Habilidades:
    - Implementação de programas de atividades físicas adaptadas para melhorar a mobilidade e saúde geral dos pacientes.
    - Utilização de abordagens de cuidado centradas no paciente para promover autonomia e independência.
    - Habilidade em criar um ambiente de confiança que encoraja a participação ativa dos pacientes em seu próprio cuidado.`
  },
  {
    imagem: avatar7,
    nome: 'Marta Lima',
    conteudo: `
    Nome: Marta Lima
    Idade: 41 anos
    Endereço: Avenida Boa Viagem, Bairro Boa Viagem, 789, Recife, Pernambuco (PE)

    Experiência: Com mais de oito anos de experiência, Marta demonstrou uma dedicação excepcional no cuidado de pacientes idosos e com necessidades especiais. Seu histórico comprovado de oferecer suporte emocional e físico destaca sua habilidade em garantir o bem-estar e a segurança de seus pacientes. Sua certificação em primeiros socorros a torna uma presença confiável em situações críticas.

    Habilidades:
    - Implementação de programas de cuidados holísticos, abrangendo aspectos físicos, emocionais e sociais.
    - Colaboração ativa com familiares e cuidadores auxiliares para assegurar uma continuidade nos cuidados.
    - Habilidade em identificar e responder rapidamente às necessidades emergentes dos pacientes.`
  },
  {
    imagem: avatar8,
    nome: 'Fernando Almeida',
    conteudo: `
    Nome: Fernando Almeida
    Idade: 36 anos
    Endereço: Avenida Beira Mar, 234, Bairro Meireles, Fortaleza, Ceará (CE)

    Experiência: Fernando é um cuidador dedicado com mais de 6 anos de experiência no cuidado de pacientes idosos e com necessidades especiais.Ele possui um histórico comprovado de oferecer suporte emocional e físico, garantindo o bem-estar e a segurança de seus pacientes. Fernando é certificado em primeiros socorros e possui um profundo entendimento das condições médicas comuns associadas aos idosos.

    Habilidades:
    - Implementação de estratégias de gerenciamento da dor para pacientes com condições crônicas.
    - Colaboração estreita com terapeutas ocupacionais para promover a independência funcional.
    - Capacidade de adaptar-se a diferentes ambientes e necessidades específicas de cada paciente.`
  },
  {
    imagem: avatar9,
    nome: 'Roberto miranda',
    conteudo: `
    Nome: Roberto Miranda
    Idade: 36 anos
    Endereço: Avenida T-63, 234, Bairro Setor Bueno, Goiânia, Goiás (GO)

    Experiência: Com seis anos de dedicação ao cuidado de pacientes idosos e com necessidades especiais, Roberto estabeleceu um histórico notável de fornecer suporte emocional e físico. Sua experiência extensa é evidente no seu comprometimento em garantir o bem-estar e a segurança dos pacientes. Possui amplo conhecimento das condições médicas comuns associadas aos idosos.

    Habilidades:
    - Aplicação de técnicas de estimulação cognitiva para pacientes com demência ou problemas de memória.
    - Coordenação eficaz de rotinas de cuidados complexos para pacientes com múltiplas necessidades.
    - Facilidade em estabelecer relações de confiança com pacientes e familiares, criando um ambiente de cuidado acolhedor.`
  },

  {
    imagem: avatar10,
    nome: 'Rita Souza',
    conteudo: `
    Nome: Rita Souza
    Idade: 33 anos
    Endereço: Avenida Ephigênio Salles, 67, Bairro Adrianópolis, Manaus, Amazonas (AM)

    Experiência: Rita acumulou mais de sete anos cuidando de pacientes idosos e com necessidades especiais. Sua dedicação se reflete em um histórico sólido de oferecer suporte emocional e físico, garantindo o bem-estar e a segurança dos seus pacientes. Ela possui um entendimento profundo das condições médicas associadas aos idosos, resultando em um cuidado personalizado e atento.
    
    Habilidades:
    - Desenvolvimento de planos de cuidados individualizados, adaptados às necessidades específicas de cada paciente.
    - Promoção de atividades recreativas e terapêuticas para melhorar a qualidade de vida dos pacientes.
    - Implementação de técnicas de relaxamento e conforto para proporcionar um ambiente acolhedor.`
  },
];

function Cuidadores() {
  const [busca, setBusca] = useState('');
  const lowerBusca = busca.toLowerCase();

  const frutasFiltradas = frutas
    .filter((fruta) => {
      if (typeof fruta === 'object') {
        return fruta.nome.toLowerCase().includes(lowerBusca) || fruta.conteudo.toLowerCase().includes(lowerBusca);
      }
      return fruta.toLowerCase().includes(lowerBusca);
    });

  return (
    <div className={styles.filtro_container}>
      <h1>Encontre cuidadores próximos a sua cidade</h1>
      <input
        className={styles.filtro_input}
        type='text'
        value={busca}
        onChange={(ev) => setBusca(ev.target.value)}
        placeholder='Pesquise por cidade'
      />
      <ul>
        {frutasFiltradas.map((fruta, index) => (
        <li className={styles.perfil_item} key={index}>
        <img src={fruta.imagem} alt={`Imagem de ${fruta.nome}`} className={styles.imagem_perfil} /> 
        {typeof fruta === 'object' ? <pre className={styles['pre-conteudo']}>{fruta.conteudo}</pre> : fruta} < br />
      </li>
            
        
        ))}
      </ul>
    </div>
  );
}

export default Cuidadores;
