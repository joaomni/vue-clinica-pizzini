<script>
import slideEffect from "./utils/slideEffect";

document.addEventListener('DOMContentLoaded', slideEffect)

</script>

<template>
  <header class="container-fluid">
    <nav class="row">
      <div class="col-md-3" id="logo">
        <img src="./assets/main/logo.png" alt="" />
      </div>
      <div class="col-md-6">
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#agendar">| AGENDAR CONSULTA</a></li>
          <li><a href="#consultorio">| CONSULTÓRIO</a></li>
          <li><a href="#avaliacao">| AVALIAÇÃO</a></li>
          <li><a href="#contato">| FALE CONOSCO</a></li>
        </ul>
      </div>
      <div class="col-md-3">
        <ul>
          <li>
            <a target=”_blank” href="https://api.whatsapp.com/send?phone=5515992565753&text=Ol%C3%A1%2C%20eu%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20os%20planos"
              ><i
                class="fa-brands fa-whatsapp m-1 fa-2xl"
                style="color: #ffffff"
              ></i
            ></a>
          </li>
          <li>
            <a target=”_blank” href="https://www.instagram.com/drfabiopizzini/"
              ><i
                class="fa-brands fa-instagram m-1 fa-2xl"
                style="color: #ffffff"
              ></i
            ></a>
          </li>
          <li>
            <a target=”_blank” href="https://www.facebook.com/drfabiopizzini"
              ><i
                class="fa-brands fa-facebook m-1 fa-2xl"
                style="color: #ffffff"
              ></i
            ></a>
          </li>
          <li>
            <a target=”_blank” href="https://open.spotify.com/show/2TiYZD6Ip8rufl7sjr4xO8?si=7069037074a048d9&nd=1"
              ><i
                class="fa-brands fa-spotify m-1 fa-2xl"
                style="color: #ffffff"
              ></i
            ></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <main id="home">
    <img src="./assets/main/slide1.png" alt="" class="slide1" id="imagem1" />
    <img src="./assets/main/slide1.png" alt="" class="slide2" id="imagem2" />

    <!-- <div class="main-title">
      <h1>NUTROLOGIA</h1>
      <p>NUTRIÇÃO E TREINAMENTO</p>
    </div> -->

    <div class="box-video" id="video">
      <div>
        <iframe
        src="https://www.youtube-nocookie.com/embed/dhlAcUAs9_c?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
        <p>Alcance seus objetivos com profissionais
        <br>
        renomados e focados com a sua saúde</p>
      </div>
    </div>

    <div id="desc">
      
    </div>
  </main>
  <section class="c-skills">
    <div class="skills">
      <div class="skill">
        <i class="fa-solid fa-child fa-2xl" style="color: #ffffff"></i><br />
        <strong>EMAGRECIMENTO</strong>
        <p>
          Através de uma análise detalhada de toda sua rotina, vamos ajustar
          tudo, para que tenha total condição de
          <span>emagrecer com saúde e qualidade</span>, seja para fins de
          <span>saúde</span> ou mesmo para <span>definição muscular</span>.
        </p>
      </div>
      <div class="skill">
        <i class="fa-solid fa-dumbbell fa-2xl" style="color: #ffffff"></i><br />
        <strong>HIPERTOFIA</strong>
        <p>
          <span>Você deseja ganhar massa muscular?</span> Vamos te dar todas as
          diretrizes a serem seguidas para que atinja esse objetivo de forma
          eficaz e com total segurança.
        </p>
      </div>
      <div class="skill">
        <i class="fa-solid fa-gauge fa-2xl" style="color: #ffffff"></i><br />
        <strong>PERFORMANCE</strong>
        <p>
          Para você que é um <span>atleta amador</span> ou
          <span>profissional</span> e deseja melhorar seu desempenho e
          <span>potencializar</span> seus resultados, temos uma estratégia
          personalizada para você, que será ajustada para sua rotina e sua
          individualidade.
        </p>
      </div>
      <div class="skill">
        <i class="fa-solid fa-notes-medical fa-2xl" style="color: #ffffff"></i
        ><br />
        <strong>SAÚDE</strong>
        <p>
          Se o seu objetivo é simplesmente uma
          <span>alimentação equilibrada e saudável,</span> visando saúde e
          qualidade de vida, daremos todas as informações necessárias para que
          tenha sucesso nessa mudança, de maneira sustentada e prolongada.
        </p>
      </div>
    </div>
  </section>
  <section class="container-fluid">
    <div class="row" id="about-container">
      <div class="col-md-6" id="about">
        <div class="row">
          <div class="col-md-12" id="about-content">
            <img
              src="./assets/pizzini.png"
              alt=""
              id="perfil"
            />
            <div>
              <strong>Dr. Fábio Pizzini</strong>
              <p>
                Formado em Medicina pela Pontifícia Universidade Católica de São
                Paulo-PUC/SP em 2002
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p class="doctor">
              Formado em Medicina pela Pontifícia Universidade Católica de São
              Paulo – PUC/SP - em 2002;
              <br />
              <br />
              Residência Médica em Otorrinolaringologia na PUC/SP;
              <br />
              <br />
              Título de Especialista em Otorrinolaringologia pela Associação
              Brasileira de Otorrinolaringologia e Cirurgia Cérvico-Facial –
              ABORL-CCF e pela Associação Médica Brasileira – AMB;
              <br />
              <br />
              Pós Graduação em Nutrologia pela Associação Brasileira de
              Nutrologia – ABRAN;
              <br />
              <br />
              Curso de Capacitação em Nutrologia do Exercício pela Associação
              Brasileira de Nutrologia – ABRAN
              <br />
              <br />
              Pós-Graduação em Nutrologia Esportiva pelo Instituto BWS;
              Certificação - Advanced Nutrition Specialist – International
              Federation of Body Building and Fitness – IFBB.
              <br />
              <br />
              Membro da Associação Brasileira de Nutrologia – ABRAN.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6" id="about">
        <div class="row">
          <div class="col-md-12" id="about-content">
            <img
              src="./assets/gianolla.png"
              alt=""
              id="perfil"
            />
            <div>
              <strong>Prof. Fábio Gianolla</strong>
              <p>Graduação em Educação Física ACM Sorocaba em 1964</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-start">
            <p class="doctor">
              Graduação em Educação Física ACM Sorocaba - em 1994;
              <br />
              <br />
              Aperfeiçoamento em Treinamento de Alto Nível - Institute Of The
              Russian Academy Of Sciences;
              <br />
              <br />
              Aperfeiçoamento em Personal Trainer - Faculdades Metropolitanas
              Unidas;
              <br />
              <br />
              Especialização em Ciências da Musculação – faculdades
              Metropolitanas Unidas;
              <br />
              <br />
              Especialização em Ginástica Corretiva - Faculdades Metropolitanas
              Unidas
              <br />
              <br />
              Especialização em Atividade Física e Exercícios Resistidos na
              Saúde
              <br />
              <br />
              Especialização em Atividade Física e Exercícios Resistidos na
              Saúde - USP;
              <br />
              <br />
              Especialização em andamento em Fisiologia – ACM Sorocaba;
              <br />
              <br />
              Mestrado profissional em Educação - PUC
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="c-clinic" id="clinic">
    <div>
      <img src="./assets/clinic.png" alt="" />
    </div>
  </section>
  <section class="c-info">
    <div class="box-info">
      
      <div class="info-title">
        <h1>SOBRE A NUTROLOGIA</h1>
      </div>

      <div class="box-card">

        <div class="card-flex">
          <div class="card-1">
            <img src="./assets/about/nutrologia.jpeg" alt="">
            <h1>NUTROLOGIA</h1>
            <p>“Nutrologia é a especialidade médica que estuda, pesquisa e avalia os benefícios e malefícios causados pela ingestão dos nutrientes, aplicando este conhecimento para a avaliação de nossas necessidades orgânicas, visando a manutenção da saúde e redução de risco de doenças (…)”.</p>
          </div>
          <div class="card-2">
            <img src="./assets/about/complemento.jpeg" alt="">
            <h1>COMPLEMENTO</h1>
            <p>O Nutrólogo do Esporte pode atuar com outros especialistas, como Médico do Esporte, Cardiologista do Esporte e Endocrinologista do Esporte, quando o objetivo é potencializar os resultados, aprimorando a performance e desempenho físico dos atletas profissionais e amadores.</p>
          </div>
        </div>

        <div class="card-flex">
          <div class="card-3">
            <img src="./assets/about/beneficios.jpeg" alt="">
            <h1>BENEFÍCIOS</h1>
            <p>A Nutrologia Esportiva é a área da Nutrologia responsável pela associação entre os conceitos nutrológicos fundamentais e os aspectos bioquímicos e fisiológicos do treinamento desportivo.</p>
          </div>
          <div class="card-4">
            <img src="./assets/about/objetivos.jpeg" alt="">
            <h1>OBJETIVOS</h1>
            <p>Entre os principais objetivos da Nutrologia Esportiva estão a promoção de saúde, a melhora do desempenho físico, a readequação da composição corporal e a correta recuperação após os exercícios.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
  <section class="roads" id="avaliacao">
    <div id="box-road">
      <div class="road" id="road1">
        <h1>CAMINHO 1</h1>
        <p>
          O primeiro caminho é aquele que, infelizmente, a maioria tem seguido.
          São pessoas que seguem planos prontos achados na internet, ignorando
          as necessidades e individualidades do seu corpo e, na grande parte dos
          casos, decidem frequentar a academia sem uma avaliação física e sem um
          planejamento personalizado de treinamento, além de mergulharem de
          cabeça nas “modinhas” que diariamente surgem por aí…
          <br />
          <br />
          <span
            >Obviamente que essa estratégia não funciona e isso acaba sendo
            fator de grande frustração e te afasta, cada vez mais, dos seus
            objetivos.</span
          >
        </p>
      </div>
      <div class="road" id="road2">
        <h1>CAMINHO 2</h1>
        <p>
          O segundo caminho, que poucos conseguem trilhar, é o caminho do
          sucesso. são pessoas
          <span
            >que conseguiram emagrecer, ganhar massa muscular, performar em seu
            esporte ou mesmo mudar seus hábitos de vida, seguindo um modelo
            planejado,</span
          >
          orientado e totalmente personalizado para cada indivíduo.
        </p>
      </div>
    </div>
  </section>
  <section class="error">
    <div class="content-error">
      <div class="box-error">
        <div class="error1">
          <h5>ERRO 1: NÃO TER ACOMPANHAMENTO MÉDICO</h5>
          <p>
            Seguir estratégias sem a orientação e o acompanhamento de um
            profissional médico pode ser muito arriscado. Um projeto
            personalizado e bem sucedido
            <span
              >requer a cuidadosa análise de par metros clínicos e a construção
              de um projeto personalizado.</span
            >
          </p>
        </div>
        <div class="error2">
          <h5>ERRO 2: NÃO TER ORIENTAÇÃO NUTRICIONAL</h5>
          <p>
            Tentar fazer ajustes alimentares por conta própria ou seguir
            receitas prontas da internet,
            <span>SEM</span>
            ter a
            <span>orientação de um profissional habilitado e experiente.</span>
            Seguir um plano alimentar sem contar com uma avaliação física prévia
            pode ser um grande erro.
          </p>
        </div>
        <div class="error3">
          <h5>ERRO 3: NÃO TER ORIENTAÇÃO E AUXÍLIO NOS TREINOS</h5>
          <p>
            O seguimento de um programa de exercícios elaborado
            <span>por um profissional que é referência mundial</span>
            no assunto é marca presente nos casos de sucesso. Quando elaborado
            em conjunto com as estratégias clínicas e nutricionais a chance de
            sucesso aumenta muito.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="c-feedback">
    <div class="box-feedback">
      <div class="feedback-title">
        <h1>DEPOIMENTOS</h1>
      </div>

      <div class="feedbacks">
        <img
          src="./assets/icone-clinica-erros.png"
          alt=""
        />
        <img
          src="./assets/icone-clinica-erros.png"
          alt=""
        />
        <img
          src="./assets/icone-clinica-erros.png"
          alt=""
        />
        <img
          src="./assets/icone-clinica-erros.png"
          alt=""
        />
        <!-- <img
          src="https://nucleodeatencao.com.br/wp-content/uploads/2019/11/depoimento-dos-pacientes-angela-monte-mor-rangel.jpg"
          alt=""
        />
        <img
          src="https://nucleodeatencao.com.br/wp-content/uploads/2019/11/depoimento-dos-pacientes-angela-monte-mor-rangel.jpg"
          alt=""
        />
        <img
          src="https://nucleodeatencao.com.br/wp-content/uploads/2019/11/depoimento-dos-pacientes-angela-monte-mor-rangel.jpg"
          alt=""
        />
        <img
          src="https://nucleodeatencao.com.br/wp-content/uploads/2019/11/depoimento-dos-pacientes-angela-monte-mor-rangel.jpg"
          alt=""
        /> -->
      </div>
    </div>
  </section>
  <footer class="c-rodape" id="agendar">
    <div class="footer-links">
      <ul>
        <li><a href="#home">HOME</a></li>
        <li><a href="#agendar">| AGENDAR CONSULTA</a></li>
        <li><a href="#clinic">| CONSULTÓRIO</a></li>
        <li><a href="#avaliacao">| AVALIAÇÃO</a></li>
      </ul>
    </div>
    <div class="box-footer">
      <div class="infos">
        <img src="" alt="" />
        <p>
          Av. Comendador Pereira Inácio, 950 - 6º Andar - Sala 661<br />Jardim
          Vergueiro - Sorocaba/SP (15) 99871-9454<br />www.drfabiopizzini.com
        </p>
      </div>
      <div class="contato" id="contato">
        <h4>(15) 99871-9454</h4>
        <a class="btn-whats" target=”_blank” href="https://api.whatsapp.com/send?phone=5515998719454&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20agendamento%20com%20o%20Dr.%20F%C3%A1bio%20Pizzini!">
          <i class="fa-brands fa-whatsapp fa-xl" style="color: #ffffff"></i>
          WHATSAPP
        </a>
      </div>
      <div class="icones">
        <a href="https://www.instagram.com/drfabiopizzini/" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-instagram fa-xl m-2" style="color: #ffffff"></i>
        </a>
        <a href="https://www.facebook.com/drfabiopizzini" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-facebook-f fa-xl m-2" style="color: #ffffff"></i>
        </a>
        <a href="https://open.spotify.com/show/2TiYZD6Ip8rufl7sjr4xO8?si=7069037074a048d9&nd=1" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-spotify fa-xl m-2" style="color: #ffffff"></i>
        </a>
      </div>
    </div>
  </footer>
</template>
