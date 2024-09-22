<template>
  <div class="main_container">
    <BarraSuperior :currentLevel="currentLevel" :missao="missao" :fase="fase" />

    <div class="level__content">
      <div class="artefato">
        <h1>Casos de teste gerados</h1>

        <div class="CTs-gerados">
          <div class="cabecalho">
            <span>Entrada</span>
            <span>Saída esperada</span>
          </div>

          <div class="CTs">
            <div class="CT" v-for="(caso, index) in casosTeste" :key="index">
                <label class="custom-checkbox">
                  <input type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              <div class="entrada-saida">
                <p>{{ caso.entrada }}</p>
                <p>{{ caso.saida }}</p>
              </div>
            </div>
          </div>
        </div>

        <span id="aviso">* Clique <span class="link_modal" @click="openModalDados()">aqui</span> para ver os dados necessários para os testes.</span>
        
        <a href="#" class="consultar_especificacao" @click="open_modal">
          <img src="@/assets/img/respostas.png" alt="consultar especificação" />
        </a>
      </div>

      <div class="execucao-casos-teste">
        <h1>Ambiente para execução dos casos de teste</h1>
        <div class="ambiente">
          <div class="login" v-if="nao_logado">

          <div class="container-user-senha">
            <span>Usuário:</span>
            <input type="text" class="input-user-senha" v-model="usuario" :disabled="isDivVisible">
          </div>

          <div class="container-user-senha">
            <span>Senha:</span>
            <input style="margin-left:9px;" type="password" class="input-user-senha" v-model="senha" :disabled="isDivVisible">
          </div>

          <div class="container-tipo-user" style="gap:0;">
            <span>Tipo de usuário:</span>
            <select style="margin-left:12px;" class="select-tipo-user" v-model="tipo_usuario" :disabled="isDivVisible">
              <option value="default">--</option>
              <option value="Operador de energia">Operador de energia</option>
              <option value="Técnico em comunicação">Técnico em comunicação</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>

          <a href="#" class="ativa-btn" :class="{ disabled: isDivVisible }" @click="retornoLogin">Entrar</a>

          <div class="alert-box" v-if="isDivVisible">
            {{ texto_mensagem }}
            <div class="progress-bar" :style="{ width: progressBarWidth + '%' }"></div>
          </div>

          </div>

          <div class="logado" v-if="logado">
            <!-- Botão de abrir/fechar menu -->
              <svg @click="toggleMenu" v-if="!menuAberto" class="menu-aberto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
              
             <!-- Menu lateral -->
            <transition name="slide">
              <div class="menu" v-if="menuAberto">
                <svg @click="toggleMenu" v-if="menuAberto" class="menu-fechado" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                <p class="inicio" @click="troca_tela('inicio')"><span class="current">• Início</span></p>
                <p class="title" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')">Módulo de infraestrutura de energia</p>
                <p class="opcao" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')" @click="troca_tela('interrupcoes')">Monitoramento de interrupções de corrente</p>
                <p class="opcao" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')" @click="troca_tela('tensao')">Monitoramento de tensão</p>
                <p class="opcao" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')" @click="troca_tela('deteccao')">Detecção de falhas de energia</p>
                <p class="title" v-if="(tipo_usuario === 'Técnico em comunicação' || tipo_usuario === 'Administrador')">Módulo de redes de comunicação</p>
                <p class="opcao" v-if="(tipo_usuario === 'Técnico em comunicação' || tipo_usuario === 'Administrador')" @click="troca_tela('alertas')">Envio de alertas</p>
              </div>
            </transition>
            <div class="conteudo">
              <h2>Bem vindo(a)!</h2>
              <p class="logado_como">Você está logado como {{ tipo_usuario }}.</p>
              
            </div>
            <span @click="sair" class="desloga">Sair</span>
          </div>

          <div class="monitora-interrup" v-if="monitora_interrup">
             <!-- Botão de abrir/fechar menu -->
              <svg @click="toggleMenu" v-if="!menuAberto" class="menu-aberto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
              
             <!-- Menu lateral -->
            <transition name="slide">
              <div class="menu" v-if="menuAberto">
                <svg @click="toggleMenu" v-if="menuAberto" class="menu-fechado" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                 <p class="inicio" @click="troca_tela('inicio')">Início</p>
                <p class="title" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')">Módulo de infraestrutura de energia</p>
                <p class="opcao" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')" @click="troca_tela('interrupcoes')"><span class="current">• Monitoramento de interrupções de corrente</span></p>
                <p class="opcao" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')" @click="troca_tela('tensao')">Monitoramento de tensão</p>
                <p class="opcao" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')" @click="troca_tela('deteccao')">Detecção de falhas de energia</p>
                <p class="title" v-if="(tipo_usuario === 'Técnico em comunicação' || tipo_usuario === 'Administrador')">Módulo de redes de comunicação</p>
                <p class="opcao" v-if="(tipo_usuario === 'Técnico em comunicação' || tipo_usuario === 'Administrador')" @click="troca_tela('alertas')">Envio de alertas</p>
              </div>
            </transition>
            <div class="conteudo">
              <div class="interrupcoes">
              <span>Digite a quantidade de interrupções de corrente nos últimos 5 minutos (simulação do retorno do sensor):</span>
              <input type="number" @input="validateInputInterrup()" class="input-interrupcoes" v-model="interrupcoes" :disabled="isDivVisible_Interrup">
              <a href="#" class="ativa-btn-interrup" :class="{ disabled: isDivVisible_Interrup }" @click="retorno_interrup">OK</a>
              </div>

            <span id="codigo-retornado-interrup">Código retornado: <b>{{ codigo_interrup }}</b></span>

            <div class="alert-box-interrup" v-if="isDivVisible_Interrup">
              {{ texto_alerta_interrup }}
              <div class="progress-bar" :style="{ width: progressBarWidth_Interrup + '%' }"></div>
            </div>
          </div>
          </div>

          <div class="monitora-tensao" v-if="monitora_tensao">
            <!-- Botão de abrir/fechar menu -->
              <svg @click="toggleMenu" v-if="!menuAberto" class="menu-aberto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
              
             <!-- Menu lateral -->
            <transition name="slide">
              <div class="menu" v-if="menuAberto">
                <svg @click="toggleMenu" v-if="menuAberto" class="menu-fechado" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                 <p class="inicio" @click="troca_tela('inicio')">Início</p>
                <p class="title" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')">Módulo de infraestrutura de energia</p>
                <p class="opcao" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')" @click="troca_tela('interrupcoes')">Monitoramento de interrupções de corrente</p>
                <p class="opcao" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')" @click="troca_tela('tensao')"><span class="current">• Monitoramento de tensão</span></p>
                <p class="opcao" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')" @click="troca_tela('deteccao')">Detecção de falhas de energia</p>
                <p class="title" v-if="(tipo_usuario === 'Técnico em comunicação' || tipo_usuario === 'Administrador')">Módulo de redes de comunicação</p>
                <p class="opcao" v-if="(tipo_usuario === 'Técnico em comunicação' || tipo_usuario === 'Administrador')" @click="troca_tela('alertas')">Envio de alertas</p>
              </div>
            </transition>
            <div class="conteudo">
            <div class="tensao">
              <span>Digite a tensão (simulação do retorno do sensor):</span>
              <input type="number" @input="validateInputTensao()" class="input-tensao" v-model="tensao" :disabled="isDivVisibleTensao">
              <a href="#" class="ativa-btn-tensao" :class="{ disabled: isDivVisibleTensao }" @click="retorno_tensao">OK</a>
            </div>

          <span id="codigo-retornado-tensao">Código retornado: <b>{{ codigo_tensao }}</b></span>

          <div class="alert-box-tensao" v-if="isDivVisibleTensao">
            {{ texto_alerta_tensao }}
            <div class="progress-bar" :style="{ width: progressBarWidthTensao + '%' }"></div>
          </div>
            </div>
          </div>

          <div class="detecta_falhas" v-if="detecta_falhas">
            <!-- Botão de abrir/fechar menu -->
              <svg @click="toggleMenu" v-if="!menuAberto" class="menu-aberto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
              
             <!-- Menu lateral -->
            <transition name="slide">
              <div class="menu" v-if="menuAberto">
                <svg @click="toggleMenu" v-if="menuAberto" class="menu-fechado" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                 <p class="inicio" @click="troca_tela('inicio')">Início</p>
                <p class="title" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')">Módulo de infraestrutura de energia</p>
                <p class="opcao" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')" @click="troca_tela('interrupcoes')">Monitoramento de interrupções de corrente</p>
                <p class="opcao" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')" @click="troca_tela('tensao')">Monitoramento de tensão</p>
                <p class="opcao" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')" @click="troca_tela('deteccao')"><span class="current">• Detecção de falhas de energia</span></p>
                <p class="title" v-if="(tipo_usuario === 'Técnico em comunicação' || tipo_usuario === 'Administrador')">Módulo de redes de comunicação</p>
                <p class="opcao" v-if="(tipo_usuario === 'Técnico em comunicação' || tipo_usuario === 'Administrador')" @click="troca_tela('alertas')">Envio de alertas</p>
              </div>
            </transition>
            <div class="conteudo">
              <span class="alerta_emitido"><b>Alerta emitido:</b> {{ encontrou_falha_um_nivel_quatro ? alerta_detecta_sem_falha_um : alerta_detecta_com_falha_um }}</span>
              <span class="mensagem_detecta">{{ mensagem_detecta }}</span>
            </div>

            <!-- <ModalGeradores
              :isVisible="showModalGeradores"
              @close="showModalGeradores = false"
            /> -->

            <ModalGeradores
              :isVisible="shouldShowModal"
              @close="closeModalGeradores"
            />

            <!-- Condições para exibir modal geradores
               - estar na tela de detecção de alertas
               - alerta_detecta_sem_falha_um ou alerta_detecta_com_falha_um a depender do encontrou_falha_um_nivel_quatro (um watch pra cada)
               - ter encontrado a falha 2 do nivel 4
               - alerta de falha de energia
               - tipo de usuario = admin ou usuario = op de energia >= 1 ano
             -->
          </div>

          <div class="envia_alertas" v-if="envia_alertas">
            <!-- Botão de abrir/fechar menu -->
              <svg @click="toggleMenu" v-if="!menuAberto" class="menu-aberto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
              
             <!-- Menu lateral -->
            <transition name="slide">
              <div class="menu" v-if="menuAberto">
                <svg @click="toggleMenu" v-if="menuAberto" class="menu-fechado" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                 <p class="inicio" @click="troca_tela('inicio')">Início</p>
                <p class="title" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')">Módulo de infraestrutura de energia</p>
                <p class="opcao" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')" @click="troca_tela('interrupcoes')">Monitoramento de interrupções de corrente</p>
                <p class="opcao" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')" @click="troca_tela('tensao')">Monitoramento de tensão</p>
                <p class="opcao" v-if="(tipo_usuario === 'Operador de energia' || tipo_usuario === 'Administrador')" @click="troca_tela('deteccao')">Detecção de falhas de energia</p>
                <p class="title" v-if="(tipo_usuario === 'Técnico em comunicação' || tipo_usuario === 'Administrador')">Módulo de redes de comunicação</p>
                <p class="opcao" v-if="(tipo_usuario === 'Técnico em comunicação' || tipo_usuario === 'Administrador')" @click="troca_tela('alertas')"><span class="current">• Envio de alertas</span></p>
              </div>
            </transition>
            <div class="conteudo">
            <div class="container_ID">
            <span>ID do alerta:</span>
            <input type="text" @input="validateInputID()" class="input-ID" v-model="ID" :disabled="isDivVisibleAlerta">
          </div>

          <div class="container_msg">
            <span>Mensagem:</span>
            <textarea class="input-msg" v-model="msg" :disabled="isDivVisibleAlerta" rows="3" cols="30"></textarea>
          </div>

          <div class="container_dep">
            <span>Departamento:</span>
            <select class="select-dep" v-model="dep" :disabled="isDivVisibleAlerta">
              <option value="default">--</option>
              <option value="Energia Elétrica">Energia Elétrica</option>
              <option value="Trânsito">Trânsito</option>
              <option value="Saúde">Saúde</option>
            </select>
          </div>

          <a href="#" v-if="autorizado_enviar_alertas" class="ativa-btn-alerta" :class="{ disabled_alerta: isDivVisibleAlerta }" @click="retorno_alerta">Enviar</a>

          <div class="alert-box-alerta" v-if="isDivVisibleAlerta">
            {{ texto_mensagem_alerta }}
            <div class="progress-bar" :style="{ width: progressBarWidthAlerta + '%' }"></div>
          </div>
          </div>
          </div>
        </div>

        <a href="#" class="reportar-falha" @click="validaFalha">
          <img src="@/assets/img/bug (1).png" alt="reportar falha">
          <span>Reportar falha</span>
        </a>

        <a href="#" class="dica" v-if="!usouTodasDicas" @click="open_modal2">
          <img src="@/assets/img/idea2.png" alt="consultar dica" />
        </a>
      </div>
    </div>

    <a href="#" class="avancar-botao" @click="validarRespostas">
      <span>Finalizar & Avançar</span>
      <img src="@/assets/img/seta-avanca-nivel.png" alt="seta direita" />
    </a>

    <ModalEspecificacao
      :isVisible="showModal"
      @close="showModal = false"
      title="Uso habitual do sistema por tipo de usuário e tempo de serviço"
      :paragrafos="paragrafos"
    />

    <ModalConfirmaDica
      :isVisible="showModal2"
      @close="showModal2 = false"
      @confirmar="abrirDica"
    />

    <ModalDica
      :isVisible="showModal3"
      @close="showModal3 = false"
      :dica="dica"
    />

    <ModalTodosDados
      :isVisible="show_modalDados"
      @close="show_modalDados = false"
      :top="'2%'" 
      :left="'3%'"
    />

  </div>
</template>

<script>
import BarraSuperior from "@/components/niveis/BarraSuperior.vue";
import ModalEspecificacao from "@/components/niveis/ModalEspecificacao.vue";
import ModalConfirmaDica from "@/components/niveis/ModalConfirmaDica.vue";
import ModalDica from "@/components/niveis/ModalDica.vue";
import { store } from "@/store";
import ModalGeradores from "@/components/niveis/ModalGeradores.vue";
import ModalTodosDados from "@/components/niveis/ModalTodosDados.vue";

export default {
  name: "NivelOitoFaseTres",
  components: {
    BarraSuperior,
    ModalEspecificacao,
    ModalConfirmaDica,
    ModalDica,
    ModalGeradores,
    ModalTodosDados
  },
  data() {
    const usouTodasDicas = store.dicas.dicas === 0 ? true : false;
    const encontrou_falha_um_nivel_quatro = store.respostas_fase_tres.falhas_encontradas_missao_quatro[0];
    
    return {
      paragrafos: [
        'Como já mencionado anteriormente, o sistema possui três tipos de usuário: Operador de Energia, Técnico em Comunicação e Administrador, cada um com acessos e permissões específicos.',
        'Operadores de energia têm acesso apenas aos submódulos de infraestrutura de energia (Submódulo de ativação de geradores, Submódulo de monitoramento de interrupções de corrente, Submódulo de monitoramento de tensão e Submódulo de detecção de falhas na energia) para monitorar interrupções, tensões e falhas, tendo a permissão de ativar geradores somente quando completam um ano de serviço. No cotidiano, operadores de energia podem monitorar interrupções, tensões e falhas, mas somente aqueles com tempo de serviço maior ou igual a um ano ativam os geradores conforme necessário, quando há falha de energia.',
        'Técnicos em comunicação têm acesso apenas aos submódulos da infraestrutura de redes de comunicação (Submódulo de envio de alertas) e têm permissão para enviar alertas somente quando completam um ano de serviço. No seu dia a dia, técnicos em comunicação com tempo de serviço maior ou igual a um ano rotineiramente enviam alertas.',
        'Administradores possuem acesso irrestrito (acessam todos os submódulos), mas apenas os que possuem tempo de serviço maior ou igual a um ano podem ativar geradores e enviar alertas. Administradores com menos de um ano de serviço podem, em suas atividades diárias, acessar todos os submódulos. Administradores com mais (ou igual) de um ano de serviço têm plenas funcionalidades no sistema, podendo inclusive, em suas rotinas, ativar geradores conforme necessário e enviar alertas gerados.',
        'Logins para o teste:',
        '- Operador de energia com menos de 1 ano de serviço - usuário: abc123; senha: 9989',
        '- Operador de energia com tempo de serviço maior ou igual a 1 ano - usuário: opkvb; senha: gh56',
        '- Técnico em comunicação com menos de 1 ano de serviço - usuário: lpo90; senha: sdfg',
        '- Técnico em comunicação com tempo de serviço maior ou igual a 1 ano - usuário: k53gh; senha: 0098',
        '- Administrador com menos de 1 ano de serviço - usuário: ffds3; senha: 124j',
        '- Administrador com tempo de serviço maior ou igual a 1 ano - usuário: vndfd; senha: tp67'
      ],
      missao: "8",
      fase: "3",
      currentLevel: 6,
      showModal: false,
      casosTeste: [],
      texto_mensagem: '',
      falha_encontrada: false,
      texto_alerta: '',
      isDivVisible: false,
      progressBarWidth: 100,
      abriuDica: false,
      dica: '',
      showModal2: false,
      showModal3: false,
      usouTodasDicas,
      retornoLogin: null,
      usuario: '',
      senha: '',
      tipo_usuario: 'default',
      logado: false,
      tipo_exibido_logado: '',
      menuAberto: false,
      nao_logado: true,
      monitora_interrup: false,
      monitora_tensao: false,
      interrupcoes: '',
      isDivVisible_Interrup: false,
      progressBarWidth_Interrup: 100,
      texto_alerta_interrup: '',
      codigo_interrup: '',
      texto_alerta_tensao: '',
      codigo_tensao: '',
      isDivVisibleTensao: false,
      progressBarWidthTensao: 100,
      tensao: '',
      detecta_falhas: false,
      alerta_detecta: '',
      showModalGeradores: true,
      envia_alertas: false,
      ID: '',
      msg: '',
      dep: 'default',
      isDivVisibleAlerta: false,
      progressBarWidthAlerta: 100,
      texto_mensagem_alerta: '',
      retorno_interrup: null,
      retorno_tensao: null,
      showModalGeradoresManuallyClosed: false,
      encontrou_falha_um_nivel_quatro,
      show_modalDados: false,
      retorno_alerta: null,
      flag_alerta_sem_falha_um: false,
      flag_alerta_com_falha_um: false,
      alerta_sem_falha_um_flag: false,
      alerta_com_falha_um_flag: false,
    };
  },
  computed: {
    alerta_detecta_com_falha_um() {
      if(this.interrupcoes !== '' && this.tensao !== '') {
        if(this.codigo_interrup === '0' && this.codigo_tensao === '0') {
          return '';
        }
        else if (this.codigo_interrup === '1' && this.codigo_tensao === '1') {
          return 'Alerta 12341: Falha de energia.';
        }
        else if (this.codigo_interrup === '0' && this.codigo_tensao === '2') {
          return 'Alerta 98012: Alta tensão - risco de problemas no sistema elétrico.';
        }
        else if ((this.codigo_interrup === '1' && this.codigo_tensao === '0') || (this.codigo_interrup === '0' && this.codigo_tensao === '1')) {
          return 'Alerta 65323: Instabilidade no fornecimento de energia devido a várias interrupções.';
        }
        else if (this.codigo_interrup === '1' && this.codigo_tensao === '2') {
          return 'Alerta 37892: Instabilidade no fornecimento de energia e alta tensão.';
        }
        else {
          return '';

        }
      }
      else {
        return '';
      }
    },
    alerta_detecta_sem_falha_um() {
      if(this.interrupcoes !== '' && this.tensao !== '') {
        if(this.codigo_interrup === '0' && this.codigo_tensao === '0') {
          return '';
        }
        else if ((this.codigo_interrup === '1' && this.codigo_tensao === '1') || (this.codigo_interrup === '0' && this.codigo_tensao === '1')) {
          return 'Alerta 12341: Falha de energia.';
        }
        else if (this.codigo_interrup === '0' && this.codigo_tensao === '2') {
          return 'Alerta 98012: Alta tensão - risco de problemas no sistema elétrico.';
        }
        else if (this.codigo_interrup === '1' && this.codigo_tensao === '0') {
          return 'Alerta 65323: Instabilidade no fornecimento de energia devido a várias interrupções.';
        }
        else if (this.codigo_interrup === '1' && this.codigo_tensao === '2') {
          return 'Alerta 37892: Instabilidade no fornecimento de energia e alta tensão.';
        }
        else {
          return '';

        }
      }
      else {
        return '';
      }
    },
    mensagem_detecta() {
      if(this.interrupcoes !== '' && this.tensao !== '') {
        if(this.codigo_interrup === '0' && this.codigo_tensao === '0') {
          return 'Sem falhas na energia elétrica.';
        }
        else if (this.codigo_interrup === '' && this.codigo_tensao !== '') {
          return 'Erro no submódulo de monitoramento de interrupções!';
        }
        else if (this.codigo_interrup !== '' && this.codigo_tensao === '') {
          return 'Erro no submódulo de monitoramento de tensão!';
        }
        else if (this.codigo_interrup === '' && this.codigo_tensao === '') {
          return 'Erro nos submódulos de monitoramento de interrupção e de tensão!';
        }
        else {
          return '';
        }
      }
      else {
        return '';
      }
    },
    canShowModalGeradores() {
      if (this.detecta_falhas && store.respostas_fase_tres.falhas_encontradas_missao_quatro[1] && (this.tipo_usuario === 'Administrador' || (this.usuario === 'opkvb' && this.senha === 'gh56' && this.tipo_usuario === 'Operador de energia') || (this.usuario === 'k53gh' && this.senha === '0098' && this.tipo_usuario === 'Operador de energia') || (this.usuario === 'vndfd' && this.senha === 'tp67' && this.tipo_usuario === 'Operador de energia')) && ((store.respostas_fase_tres.falhas_encontradas_missao_quatro[0] === false && this.alerta_detecta_com_falha_um === 'Alerta 12341: Falha de energia.') || (store.respostas_fase_tres.falhas_encontradas_missao_quatro[0] === true && this.alerta_detecta_sem_falha_um === 'Alerta 12341: Falha de energia.')) && (this.alerta_sem_falha_um_flag || this.alerta_com_falha_um_flag)) {
        return true;
      }
      else {
        return false;
      }
    },
    shouldShowModal() {
      return this.canShowModalGeradores && !this.showModalGeradoresManuallyClosed;
    },
    autorizado_enviar_alertas() {
      if ((this.usuario === 'opkvb' && this.senha === 'gh56' && this.tipo_usuario === 'Técnico em comunicação') || (this.usuario === 'k53gh' && this.senha === '0098' && this.tipo_usuario === 'Técnico em comunicação') || (this.usuario === 'vndfd' && this.senha === 'tp67' && this.tipo_usuario === 'Técnico em comunicação') || (this.usuario === 'opkvb' && this.senha === 'gh56' && this.tipo_usuario === 'Administrador') || (this.usuario === 'k53gh' && this.senha === '0098' && this.tipo_usuario === 'Administrador') || (this.usuario === 'vndfd' && this.senha === 'tp67' && this.tipo_usuario === 'Administrador')) {
        return true;
      } else {
        return false;
      }
    }
  },
   watch: {
    canShowModalGeradores(newValue) {
      if (newValue) {
        this.showModalGeradoresManuallyClosed = false;
      }
    },
    alerta_detecta_sem_falha_um(newValue) {
      if (newValue && this.encontrou_falha_um_nivel_quatro) {
        this.flag_alerta_sem_falha_um = true
        this.alerta_sem_falha_um_flag = true;
      }
    },
    alerta_detecta_com_falha_um(newValue) {
      if (newValue && !this.encontrou_falha_um_nivel_quatro) {
        this.flag_alerta_com_falha_um = true
        this.alerta_com_falha_um_flag = true;
      }
    },
    envia_alertas(newValue) {
      if(newValue === true && this.flag_alerta_sem_falha_um && this.encontrou_falha_um_nivel_quatro) {
        this.integracao_alerta('alerta_detecta_sem_falha_um');
      }
      if(newValue === true && this.flag_alerta_com_falha_um && !this.encontrou_falha_um_nivel_quatro) {
        this.integracao_alerta('alerta_detecta_com_falha_um');
      }
    }
  },
  mounted() {
    this.casosTeste = [...store.respostas_fase_dois.cts_missao_oito];

    if(store.respostas_fase_tres.falhas_encontradas_missao_sete[0] === true && store.respostas_fase_tres.falhas_encontradas_missao_sete[1] == false) {
      this.retornoLogin = this.retornoLogin_somente_falha_dois;
    }
    else if(store.respostas_fase_tres.falhas_encontradas_missao_sete[0] === false && store.respostas_fase_tres.falhas_encontradas_missao_sete[1] == true) {
      this.retornoLogin = this.retornoLogin_somente_falha_um;
    }
    else if(store.respostas_fase_tres.falhas_encontradas_missao_sete[0] === false && store.respostas_fase_tres.falhas_encontradas_missao_sete[1] == false) {
      this.retornoLogin = this.retornoLogin_duas_falhas;
    }
    else {
      this.retornoLogin = this.retornoLogin_nenhuma_falha;
    }

    if (store.pontuacaoJogador.pont_fases_niveis[1][2] != 0) {
        this.retorno_interrup = this.retorno_interrup_sem_falha;
    }
    else {
        this.retorno_interrup = this.retorno_interrup_com_falha;
    }

    if(store.respostas_fase_tres.falhas_encontradas_missao_tres[0] === true && store.respostas_fase_tres.falhas_encontradas_missao_tres[1] == false) {
      this.retorno_tensao = this.retorno_tensao_somente_segunda_falha;
    }
    else if(store.respostas_fase_tres.falhas_encontradas_missao_tres[0] === false && store.respostas_fase_tres.falhas_encontradas_missao_tres[1] == true) {
      this.retorno_tensao = this.retorno_tensao_somente_primeira_falha;
    }
    else if(store.respostas_fase_tres.falhas_encontradas_missao_tres[0] === false && store.respostas_fase_tres.falhas_encontradas_missao_tres[1] == false) {
      this.retorno_tensao = this.retorno_tensao_com_duas_falhas;
    }
    else {
      this.retorno_tensao = this.retorno_tensao_nenhuma_falha;
    }

    if(store.respostas_fase_tres.falhas_encontradas_missao_cinco[0] === false && store.respostas_fase_tres.falhas_encontradas_missao_cinco[1] === false && store.respostas_fase_tres.falhas_encontradas_missao_cinco[2] === false) {
        this.retorno_alerta = this.retorno_alerta_com_tres_falhas;
      }
      else if(store.respostas_fase_tres.falhas_encontradas_missao_cinco[0] === false && store.respostas_fase_tres.falhas_encontradas_missao_cinco[1] === false && store.respostas_fase_tres.falhas_encontradas_missao_cinco[2] === true) {
        this.retorno_alerta = this.retorno_alerta_somente_falhas_um_e_dois;
      }
      else if(store.respostas_fase_tres.falhas_encontradas_missao_cinco[0] === false && store.respostas_fase_tres.falhas_encontradas_missao_cinco[1] === true && store.respostas_fase_tres.falhas_encontradas_missao_cinco[2] === false) {
        this.retorno_alerta = this.retorno_alerta_somente_falhas_um_e_tres;
      }
      else if(store.respostas_fase_tres.falhas_encontradas_missao_cinco[0] === false && store.respostas_fase_tres.falhas_encontradas_missao_cinco[1] === true && store.respostas_fase_tres.falhas_encontradas_missao_cinco[2] === true) {
        this.retorno_alerta = this.retorno_alerta_somente_falha_um;
      }
      else if(store.respostas_fase_tres.falhas_encontradas_missao_cinco[0] === true && store.respostas_fase_tres.falhas_encontradas_missao_cinco[1] === false && store.respostas_fase_tres.falhas_encontradas_missao_cinco[2] === false) {
        this.retorno_alerta = this.retorno_alerta_somente_falhas_dois_e_tres;
      }
      else if(store.respostas_fase_tres.falhas_encontradas_missao_cinco[0] === true && store.respostas_fase_tres.falhas_encontradas_missao_cinco[1] === false && store.respostas_fase_tres.falhas_encontradas_missao_cinco[2] === true) {
        this.retorno_alerta = this.retorno_alerta_somente_falha_dois;
      }
      else if(store.respostas_fase_tres.falhas_encontradas_missao_cinco[0] === true && store.respostas_fase_tres.falhas_encontradas_missao_cinco[1] === true && store.respostas_fase_tres.falhas_encontradas_missao_cinco[2] === false) {
        this.retorno_alerta = this.retorno_alerta_somente_falha_tres;
      }
      else {
        this.retorno_alerta = this.retorno_alerta_com_nenhuma_falha;
      }
  },
  methods: {
    open_modal(event) {
      event.preventDefault();
      this.showModal = true;
    },
    openModalDados() {
      this.show_modalDados = true;
    },
    closeModalGeradores() {
      this.showModalGeradoresManuallyClosed = true;
      if (this.encontrou_falha_um_nivel_quatro) {
        this.alerta_sem_falha_um_flag = false;
      } else {
        this.alerta_com_falha_um_flag = false;
      }
    },
    validateInputID() {
      this.ID = this.ID.replace(/\D/g, '');
    },
     validateInputInterrup() {
      if (this.interrupcoes < -1000 || this.interrupcoes > 1000) {
        this.interrupcoes = '';
      }
    },
    validateInputTensao() {
      if (this.tensao < -100000 || this.tensao > 100000) {
        this.tensao = '';
      }
    },
     toggleMenu() {
      this.menuAberto = !this.menuAberto;
    },
    troca_tela(tela) {
      this.toggleMenu();
      if (tela === 'inicio') {
        this.logado = true;
        this.monitora_interrup = false;
        this.monitora_tensao = false;
        this.detecta_falhas = false;
        this.envia_alertas = false;
        return;
      }
      if (tela === 'interrupcoes') {
        this.monitora_interrup = true;
        this.logado = false;
        this.monitora_tensao = false;
        this.detecta_falhas = false;
        this.envia_alertas = false;
        return;
      }
      if (tela === 'tensao') {
        this.monitora_tensao = true;
        this.monitora_interrup = false;
        this.logado = false;
        this.detecta_falhas = false;
        this.envia_alertas = false;
        return;
      }
      if (tela === 'deteccao') {
        this.detecta_falhas = true;
        this.monitora_tensao = false;
        this.monitora_interrup = false;
        this.logado = false;
        this.envia_alertas = false;
        return;
      }
      if (tela === 'alertas') {
        this.envia_alertas = true;
        this.detecta_falhas = false;
        this.monitora_tensao = false;
        this.monitora_interrup = false;
        this.logado = false;
        return;
      }
    },
    showDiv() {
      this.isDivVisible = true;
      this.progressBarWidth = 100;
      this.startProgressBar();

      setTimeout(() => {
        this.isDivVisible = false;
      }, 5000);
    },
    startProgressBar() {
      let duration = 5000;
      let interval = 100;
      let decrement = 100 / (duration / interval);

      let progressInterval = setInterval(() => {
        if (this.progressBarWidth > 0) {
          this.progressBarWidth -= decrement;
        } else {
          clearInterval(progressInterval);
        }
      }, interval);
    },
    showDivInterrup() {
      this.isDivVisible_Interrup = true;
      this.progressBarWidth_Interrup = 100;
      this.startProgressBarInterrup();

      setTimeout(() => {
        this.isDivVisible_Interrup = false;
      }, 5000);
    },
    startProgressBarInterrup() {
      let duration = 5000;
      let interval = 100;
      let decrement = 100 / (duration / interval);

      let progressInterval = setInterval(() => {
        if (this.progressBarWidth_Interrup > 0) {
          this.progressBarWidth_Interrup -= decrement;
        } else {
          clearInterval(progressInterval);
        }
      }, interval);
    },
    showDivTensao() {
      this.isDivVisibleTensao = true;
      this.progressBarWidthTensao = 100;
      this.startProgressBarTensao();

      setTimeout(() => {
        this.isDivVisibleTensao = false;
      }, 5000);
    },
    startProgressBarTensao() {
      let duration = 5000;
      let interval = 100;
      let decrement = 100 / (duration / interval);

      let progressInterval = setInterval(() => {
        if (this.progressBarWidthTensao > 0) {
          this.progressBarWidthTensao -= decrement;
        } else {
          clearInterval(progressInterval);
        }
      }, interval);
    },
    showDivAlerta() {
      this.isDivVisibleAlerta = true;
      this.progressBarWidthAlerta = 100;
      this.startProgressBarAlerta();

      setTimeout(() => {
        this.isDivVisibleAlerta = false;
      }, 5000);
    },
    startProgressBarAlerta() {
      let duration = 5000;
      let interval = 100;
      let decrement = 100 / (duration / interval);

      let progressInterval = setInterval(() => {
        if (this.progressBarWidthAlerta > 0) {
          this.progressBarWidthAlerta -= decrement;
        } else {
          clearInterval(progressInterval);
        }
      }, interval);
    },
    open_modal2(event) {
      event.preventDefault();
      if (this.abriuDica === false) {
        this.showModal2 = true;
      }
      else {
        this.showModal3 = true;
      }
    },
    defineDica() {
      if (this.falha_encontrada === false) {
        this.dica = 'Será que algum usuário que não poderia ativar os geradores está com essa permissão?';
      }
      else {
        this.dica = 'Não há nada mais para procurar por aqui :)';
      }
    },
    abrirDica() {
      this.abriuDica = true;
      store.dicas.dicas -= 1;
      this.defineDica();
      this.showModal2 = false;
      this.showModal3 = true;
    },
    retorno_interrup_com_falha(event) {
      event.preventDefault();

      if(this.interrupcoes === null || this.interrupcoes === '') {
        alert('O sensor nunca retorna valores vazios!');
        return;
      } 

      if(!Number.isInteger(this.interrupcoes)) {
        alert('O sensor nunca retorna valores que não sejam números inteiros!');
        return;
      }
      
      if(this.interrupcoes < 0) {
        this.codigo_interrup = '';
        this.texto_alerta_interrup = "Sensor quebrado!";
        this.showDivInterrup();
      }

      else if(this.interrupcoes >= 0 && this.interrupcoes <= 4) {
        this.codigo_interrup = '0';
      }

      else {
        this.codigo_interrup = '1';
      }

    },
     retorno_interrup_sem_falha(event) {
      event.preventDefault();

      if(this.interrupcoes === null || this.interrupcoes === '') {
        alert('O sensor nunca retorna valores vazios!');
        return;
      } 

      if(!Number.isInteger(this.interrupcoes)) {
        alert('O sensor nunca retorna valores que não sejam números inteiros!');
        return;
      }
      
      if(this.interrupcoes < 0) {
        this.codigo_interrup = '';
        this.texto_alerta_interrup = "Sensor quebrado!";
        this.showDivInterrup();
      }

      else if(this.interrupcoes >= 0 && this.interrupcoes <= 3) {
        this.codigo_interrup = '0';
      }

      else {
        this.codigo_interrup = '1';
      }

    },
    retorno_tensao_com_duas_falhas(event) {
      event.preventDefault();

      if(this.tensao === null || this.tensao === '') {
        alert('O sensor nunca retorna valores vazios!');
        return;
      } 

      if(!Number.isInteger(this.tensao)) {
        alert('O sensor nunca retorna valores que não sejam números inteiros!');
        return;
      }
      
      if(this.tensao < 0 || this.tensao > 10001 ) {
        this.codigo_tensao = '';
        this.texto_alerta_tensao = "Sensor quebrado!";
        this.showDivTensao();
      }

      else if(this.tensao > 100 && this.tensao <= 240) {
        this.codigo_tensao = '0';
      }

      else if(this.tensao <= 100 && this.tensao >= 0) {
        this.codigo_tensao = '1';
      }

      else {
        this.codigo_tensao = '2';
      }

    },
    retorno_tensao_somente_segunda_falha(event) {
      event.preventDefault();

      if(this.tensao === null || this.tensao === '') {
        alert('O sensor nunca retorna valores vazios!');
        return;
      } 

      if(!Number.isInteger(this.tensao)) {
        alert('O sensor nunca retorna valores que não sejam números inteiros!');
        return;
      }
      
      if(this.tensao < 0 || this.tensao > 10001 ) {
        this.codigo_tensao = '';
        this.texto_alerta_tensao = "Sensor quebrado!";
        this.showDivTensao();
      }

      else if(this.tensao >= 100 && this.tensao <= 240) {
        this.codigo_tensao = '0';
      }

      else if(this.tensao < 100 && this.tensao >= 0) {
        this.codigo_tensao = '1';
      }

      else {
        this.codigo_tensao = '2';
      }

    },
     retorno_tensao_somente_primeira_falha(event) {
      event.preventDefault();

      if(this.tensao === null || this.tensao === '') {
        alert('O sensor nunca retorna valores vazios!');
        return;
      } 

      if(!Number.isInteger(this.tensao)) {
        alert('O sensor nunca retorna valores que não sejam números inteiros!');
        return;
      }
      
      if(this.tensao < 0 || this.tensao > 10000 ) {
        this.codigo_tensao = '';
        this.texto_alerta_tensao = "Sensor quebrado!";
        this.showDivTensao();
      }

      else if(this.tensao > 100 && this.tensao <= 240) {
        this.codigo_tensao = '0';
      }

      else if(this.tensao <= 100 && this.tensao >= 0) {
        this.codigo_tensao = '1';
      }

      else {
        this.codigo_tensao = '2';
      }

    },
    retorno_tensao_nenhuma_falha(event) {
      event.preventDefault();

      if(this.tensao === null || this.tensao === '') {
        alert('O sensor nunca retorna valores vazios!');
        return;
      } 

      if(!Number.isInteger(this.tensao)) {
        alert('O sensor nunca retorna valores que não sejam números inteiros!');
        return;
      }
      
      if(this.tensao < 0 || this.tensao > 10000 ) {
        this.codigo_tensao = '';
        this.texto_alerta_tensao = "Sensor quebrado!";
        this.showDivTensao();
      }

      else if(this.tensao >= 100 && this.tensao <= 240) {
        this.codigo_tensao = '0';
      }

      else if(this.tensao < 100 && this.tensao >= 0) {
        this.codigo_tensao = '1';
      }

      else {
        this.codigo_tensao = '2';
      }

    },
    validaFalha(event) {
      event.preventDefault();

      if(!(((this.usuario === 'abc123' && this.senha === '9989' && this.tipo_usuario === 'Administrador') || (this.usuario === 'lpo90' && this.senha === 'sdfg' && this.tipo_usuario === 'Administrador') || (this.usuario === 'ffds3' && this.senha === '124j' && this.tipo_usuario === 'Administrador')) && this.shouldShowModal)) {
        alert("Isto não é uma falha!");
        return;
      }

      if(((this.usuario === 'abc123' && this.senha === '9989' && this.tipo_usuario === 'Administrador') || (this.usuario === 'lpo90' && this.senha === 'sdfg' && this.tipo_usuario === 'Administrador') || (this.usuario === 'ffds3' && this.senha === '124j' && this.tipo_usuario === 'Administrador')) && this.shouldShowModal && this.falha_encontrada){
        alert("Falha já reportada!");
        return;
      }

      this.falha_encontrada = true;
      alert("Falha reportada com sucesso!");
    },
    validarRespostas(event) {
      event.preventDefault();
       if(this.falha_encontrada) {
        store.pontuacaoJogador.pont_fases_niveis[7][2] = 30;
      }

      store.pontuacaoJogador.atualizarPontuacao(7);
      this.$router.push("/nivel-oito-feedback");
    },
    retornoLogin_duas_falhas(event) {
      event.preventDefault();

      if(this.usuario.trim() === '') {
        this.texto_mensagem = 'Preencha o campo de usuário!';
        this.showDiv();
        return;
      }

      if(this.senha.trim() === '') {
        this.texto_mensagem = 'Preencha o campo de senha!';
        this.showDiv();
        return;
      }

      if(this.tipo_usuario === 'default') {
        this.texto_mensagem = 'Escolha um tipo de usuário!';
        this.showDiv();
        return;
      }

      if((this.usuario !== 'abc123' && this.senha === '9989') || (this.usuario !== 'opkvb' && this.senha === 'gh56') || (this.usuario !== 'lpo90' && this.senha === 'sdfg') || (this.usuario !== 'k53gh' && this.senha === '0098') || (this.usuario !== 'ffds3' && this.senha === '124j') || (this.usuario !== 'vndfd' && this.senha === 'tp67') || (this.usuario !== 'abc123' && this.usuario !== 'opkvb' && this.usuario !== 'lpo90' && this.usuario !== 'k53gh' && this.usuario !== 'ffds3' && this.usuario !== 'vndfd' && this.senha !== '9989' && this.senha !== 'gh56' && this.senha !== 'sdfg' && this.senha !== '0098' && this.senha !== '124j' && this.senha !== 'tp67')) {
        this.texto_mensagem = 'Usuário inválido!';
        this.showDiv();
        return;
      }

      if((this.usuario === 'abc123' && this.senha !== '9989') || (this.usuario === 'opkvb' && this.senha !== 'gh56') || (this.usuario === 'lpo90' && this.senha !== 'sdfg') || (this.usuario === 'k53gh' && this.senha !== '0098') || (this.usuario === 'ffds3' && this.senha !== '124j') || (this.usuario === 'vndfd' && this.senha !== 'tp67')) {
        this.texto_mensagem = 'Senha inválida!';
        this.showDiv();
        return;
      }

      if((this.usuario === 'lpo90' && this.senha === 'sdfg' && this.tipo_usuario === 'Técnico em comunicação') || (this.usuario === 'k53gh' && this.senha === '0098' && this.tipo_usuario === 'Técnico em comunicação')) {
        this.tipo_usuario = 'Administrador';
      }

      this.nao_logado = false;
      this.logado = true;
    },
     retornoLogin_nenhuma_falha(event) {
      event.preventDefault();

      if(this.usuario.trim() === '') {
        this.texto_mensagem = 'Preencha o campo de usuário!';
        this.showDiv();
        return;
      }

      if(this.senha.trim() === '') {
        this.texto_mensagem = 'Preencha o campo de senha!';
        this.showDiv();
        return;
      }

      if(this.tipo_usuario === 'default') {
        this.texto_mensagem = 'Escolha um tipo de usuário!';
        this.showDiv();
        return;
      }

      if((this.usuario !== 'abc123' && this.senha === '9989') || (this.usuario !== 'opkvb' && this.senha === 'gh56') || (this.usuario !== 'lpo90' && this.senha === 'sdfg') || (this.usuario !== 'k53gh' && this.senha === '0098') || (this.usuario !== 'ffds3' && this.senha === '124j') || (this.usuario !== 'vndfd' && this.senha === 'tp67') || (this.usuario !== 'abc123' && this.usuario !== 'opkvb' && this.usuario !== 'lpo90' && this.usuario !== 'k53gh' && this.usuario !== 'ffds3' && this.usuario !== 'vndfd' && this.senha !== '9989' && this.senha !== 'gh56' && this.senha !== 'sdfg' && this.senha !== '0098' && this.senha !== '124j' && this.senha !== 'tp67')) {
        this.texto_mensagem = 'Usuário inválido!';
        this.showDiv();
        return;
      }

      if((this.usuario === 'abc123' && this.senha !== '9989') || (this.usuario === 'opkvb' && this.senha !== 'gh56') || (this.usuario === 'lpo90' && this.senha !== 'sdfg') || (this.usuario === 'k53gh' && this.senha !== '0098') || (this.usuario === 'ffds3' && this.senha !== '124j') || (this.usuario === 'vndfd' && this.senha !== 'tp67')) {
        this.texto_mensagem = 'Senha inválida!';
        this.showDiv();
        return;
      }

      if((this.usuario === 'abc123' && this.senha === '9989' && this.tipo_usuario !== 'Operador de energia') || (this.usuario === 'opkvb' && this.senha === 'gh56' && this.tipo_usuario !== 'Operador de energia') || (this.usuario === 'lpo90' && this.senha === 'sdfg' && this.tipo_usuario !== 'Técnico em comunicação') || (this.usuario === 'k53gh' && this.senha === '0098' && this.tipo_usuario !== 'Técnico em comunicação') || (this.usuario === 'ffds3' && this.senha === '124j' && this.tipo_usuario !== 'Administrador') || (this.usuario === 'vndfd' && this.senha === 'tp67' && this.tipo_usuario !== 'Administrador')) {
        this.texto_mensagem = 'O tipo de usuário não corresponde ao usuário e senha inseridos!';
        this.showDiv();
        return;
      }

      this.nao_logado = false;
      this.logado = true;
    },
    retornoLogin_somente_falha_um(event) {
      event.preventDefault();

       if(this.usuario.trim() === '') {
        this.texto_mensagem = 'Preencha o campo de usuário!';
        this.showDiv();
        return;
      }

      if(this.senha.trim() === '') {
        this.texto_mensagem = 'Preencha o campo de senha!';
        this.showDiv();
        return;
      }

      if(this.tipo_usuario === 'default') {
        this.texto_mensagem = 'Escolha um tipo de usuário!';
        this.showDiv();
        return;
      }

      if((this.usuario !== 'abc123' && this.senha === '9989') || (this.usuario !== 'opkvb' && this.senha === 'gh56') || (this.usuario !== 'lpo90' && this.senha === 'sdfg') || (this.usuario !== 'k53gh' && this.senha === '0098') || (this.usuario !== 'ffds3' && this.senha === '124j') || (this.usuario !== 'vndfd' && this.senha === 'tp67') || (this.usuario !== 'abc123' && this.usuario !== 'opkvb' && this.usuario !== 'lpo90' && this.usuario !== 'k53gh' && this.usuario !== 'ffds3' && this.usuario !== 'vndfd' && this.senha !== '9989' && this.senha !== 'gh56' && this.senha !== 'sdfg' && this.senha !== '0098' && this.senha !== '124j' && this.senha !== 'tp67')) {
        this.texto_mensagem = 'Usuário inválido!';
        this.showDiv();
        return;
      }

      if((this.usuario === 'abc123' && this.senha !== '9989') || (this.usuario === 'opkvb' && this.senha !== 'gh56') || (this.usuario === 'lpo90' && this.senha !== 'sdfg') || (this.usuario === 'k53gh' && this.senha !== '0098') || (this.usuario === 'ffds3' && this.senha !== '124j') || (this.usuario === 'vndfd' && this.senha !== 'tp67')) {
        this.texto_mensagem = 'Senha inválida!';
        this.showDiv();
        return;
      }

      if((this.usuario === 'abc123' && this.senha === '9989' && this.tipo_usuario !== 'Operador de energia') || (this.usuario === 'opkvb' && this.senha === 'gh56' && this.tipo_usuario !== 'Operador de energia') || (this.usuario === 'lpo90' && this.senha === 'sdfg' && this.tipo_usuario !== 'Técnico em comunicação') || (this.usuario === 'k53gh' && this.senha === '0098' && this.tipo_usuario !== 'Técnico em comunicação') || (this.usuario === 'ffds3' && this.senha === '124j' && this.tipo_usuario !== 'Administrador') || (this.usuario === 'vndfd' && this.senha === 'tp67' && this.tipo_usuario !== 'Administrador')) {
        this.texto_mensagem = 'O tipo de usuário não corresponde ao usuário e senha inseridos!';
        this.showDiv();
        return;
      }

      if((this.usuario === 'lpo90' && this.senha === 'sdfg' && this.tipo_usuario === 'Técnico em comunicação') || (this.usuario === 'k53gh' && this.senha === '0098' && this.tipo_usuario === 'Técnico em comunicação')) {
        this.tipo_usuario = 'Administrador';
      }

      this.nao_logado = false;
      this.logado = true;
    },
     retornoLogin_somente_falha_dois(event) {
      event.preventDefault();

      if(this.usuario.trim() === '') {
        this.texto_mensagem = 'Preencha o campo de usuário!';
        this.showDiv();
        return;
      }

      if(this.senha.trim() === '') {
        this.texto_mensagem = 'Preencha o campo de senha!';
        this.showDiv();
        return;
      }

      if(this.tipo_usuario === 'default') {
        this.texto_mensagem = 'Escolha um tipo de usuário!';
        this.showDiv();
        return;
      }

      if((this.usuario !== 'abc123' && this.senha === '9989') || (this.usuario !== 'opkvb' && this.senha === 'gh56') || (this.usuario !== 'lpo90' && this.senha === 'sdfg') || (this.usuario !== 'k53gh' && this.senha === '0098') || (this.usuario !== 'ffds3' && this.senha === '124j') || (this.usuario !== 'vndfd' && this.senha === 'tp67') || (this.usuario !== 'abc123' && this.usuario !== 'opkvb' && this.usuario !== 'lpo90' && this.usuario !== 'k53gh' && this.usuario !== 'ffds3' && this.usuario !== 'vndfd' && this.senha !== '9989' && this.senha !== 'gh56' && this.senha !== 'sdfg' && this.senha !== '0098' && this.senha !== '124j' && this.senha !== 'tp67')) {
        this.texto_mensagem = 'Usuário inválido!';
        this.showDiv();
        return;
      }

      if((this.usuario === 'abc123' && this.senha !== '9989') || (this.usuario === 'opkvb' && this.senha !== 'gh56') || (this.usuario === 'lpo90' && this.senha !== 'sdfg') || (this.usuario === 'k53gh' && this.senha !== '0098') || (this.usuario === 'ffds3' && this.senha !== '124j') || (this.usuario === 'vndfd' && this.senha !== 'tp67')) {
        this.texto_mensagem = 'Senha inválida!';
        this.showDiv();
        return;
      }

      this.nao_logado = false;
      this.logado = true;
    },
    retorno_alerta_com_tres_falhas(event) {
      event.preventDefault();

      if(this.ID === '') {
        this.texto_mensagem_alerta = 'O campo de ID deve ser preenchido!';
        this.showDivAlerta();
        return;
      }

      if(this.ID.length !== 5) {
        this.texto_mensagem_alerta = 'O ID deve conter 5 dígitos!';
        this.showDivAlerta();
        return;
      }

      if(this.ID === '00000') {
        this.texto_mensagem_alerta = 'Falha no envio do alerta!';
        this.showDivAlerta();
        return;
      }

      if((this.msg.length > 0 && this.msg.length < 10) || this.msg.length > 69) {
        this.texto_mensagem_alerta = 'A mensagem deve conter entre 10 e 70 caracteres!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'default') {
        this.texto_mensagem_alerta = 'O departamento deve ser selecionado!';
        this.showDivAlerta();
        return;
      }

      if(this.dep === 'Energia Elétrica') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de energia elétrica!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Saúde') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de saúde!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Trânsito') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de trânsito!';
        this.showDivAlerta();
        return;
      }

    },
    retorno_alerta_com_nenhuma_falha(event) {
      event.preventDefault();
      let ultimoCaractere = this.ID.slice(-1);

      if(this.ID === '') {
        this.texto_mensagem_alerta = 'O campo de ID deve ser preenchido!';
        this.showDivAlerta();
        return;
      }

      if(this.ID.length !== 5) {
        this.texto_mensagem_alerta = 'O ID deve conter 5 dígitos!';
        this.showDivAlerta();
        return;
      }

      if(this.ID === '00000') {
        this.texto_mensagem_alerta = 'Falha no envio do alerta!';
        this.showDivAlerta();
        return;
      }

      if(this.ID.length === 5 && this.ID !== '00000' && ultimoCaractere !== '1' && ultimoCaractere !== '2' && ultimoCaractere !== '3') {
        this.texto_mensagem_alerta = 'O último dígito do ID pode ser somente 1, 2 ou 3!';
        this.showDivAlerta();
        return;
      }

      if(this.msg.trim() === "") {
        this.texto_mensagem_alerta = 'O campo de mensagem deve ser preenchido!';
        this.showDivAlerta();
        return;
      }

      if((this.msg.length > 0 && this.msg.length < 10) || this.msg.length > 70) {
        this.texto_mensagem_alerta = 'A mensagem deve conter entre 10 e 70 caracteres!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'default') {
        this.texto_mensagem_alerta = 'O departamento deve ser selecionado!';
        this.showDivAlerta();
        return;
      }

      if(this.dep === 'Energia Elétrica') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de energia elétrica!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Saúde') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de saúde!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Trânsito') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de trânsito!';
        this.showDivAlerta();
        return;
      }

    },
    retorno_alerta_somente_falha_um(event) {
      event.preventDefault();
      let ultimoCaractere = this.ID.slice(-1);

      if(this.ID === '') {
        this.texto_mensagem_alerta = 'O campo de ID deve ser preenchido!';
        this.showDivAlerta();
        return;
      }

      if(this.ID.length !== 5) {
        this.texto_mensagem_alerta = 'O ID deve conter 5 dígitos!';
        this.showDivAlerta();
        return;
      }

      if(this.ID === '00000') {
        this.texto_mensagem_alerta = 'Falha no envio do alerta!';
        this.showDivAlerta();
        return;
      }

      if(this.ID.length === 5 && this.ID !== '00000' && ultimoCaractere !== '1' && ultimoCaractere !== '2' && ultimoCaractere !== '3') {
        this.texto_mensagem_alerta = 'O último dígito do ID pode ser somente 1, 2 ou 3!';
        this.showDivAlerta();
        return;
      }

      if((this.msg.length > 0 && this.msg.length < 10) || this.msg.length > 70) {
        this.texto_mensagem_alerta = 'A mensagem deve conter entre 10 e 70 caracteres!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'default') {
        this.texto_mensagem_alerta = 'O departamento deve ser selecionado!';
        this.showDivAlerta();
        return;
      }

      if(this.dep === 'Energia Elétrica') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de energia elétrica!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Saúde') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de saúde!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Trânsito') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de trânsito!';
        this.showDivAlerta();
        return;
      }

    },
     retorno_alerta_somente_falha_dois(event) {
      event.preventDefault();
      let ultimoCaractere = this.ID.slice(-1);

      if(this.ID === '') {
        this.texto_mensagem_alerta = 'O campo de ID deve ser preenchido!';
        this.showDivAlerta();
        return;
      }

      if(this.ID.length !== 5) {
        this.texto_mensagem_alerta = 'O ID deve conter 5 dígitos!';
        this.showDivAlerta();
        return;
      }

      if(this.ID === '00000') {
        this.texto_mensagem_alerta = 'Falha no envio do alerta!';
        this.showDivAlerta();
        return;
      }

      if(this.ID.length === 5 && this.ID !== '00000' && ultimoCaractere !== '1' && ultimoCaractere !== '2' && ultimoCaractere !== '3') {
        this.texto_mensagem_alerta = 'O último dígito do ID pode ser somente 1, 2 ou 3!';
        this.showDivAlerta();
        return;
      }

      if(this.msg.trim() === "") {
        this.texto_mensagem_alerta = 'O campo de mensagem deve ser preenchido!';
        this.showDivAlerta();
        return;
      }

      if((this.msg.length > 0 && this.msg.length < 10) || this.msg.length > 69) {
        this.texto_mensagem_alerta = 'A mensagem deve conter entre 10 e 70 caracteres!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'default') {
        this.texto_mensagem_alerta = 'O departamento deve ser selecionado!';
        this.showDivAlerta();
        return;
      }

      if(this.dep === 'Energia Elétrica') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de energia elétrica!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Saúde') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de saúde!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Trânsito') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de trânsito!';
        this.showDivAlerta();
        return;
      }

    },
    retorno_alerta_somente_falha_tres(event) {
      event.preventDefault();

      if(this.ID === '') {
        this.texto_mensagem_alerta = 'O campo de ID deve ser preenchido!';
        this.showDivAlerta();
        return;
      }

      if(this.ID.length !== 5) {
        this.texto_mensagem_alerta = 'O ID deve conter 5 dígitos!';
        this.showDivAlerta();
        return;
      }

      if(this.ID === '00000') {
        this.texto_mensagem_alerta = 'Falha no envio do alerta!';
        this.showDivAlerta();
        return;
      }

      if(this.msg.trim() === "") {
        this.texto_mensagem_alerta = 'O campo de mensagem deve ser preenchido!';
        this.showDivAlerta();
        return;
      }

      if((this.msg.length > 0 && this.msg.length < 10) || this.msg.length > 70) {
        this.texto_mensagem_alerta = 'A mensagem deve conter entre 10 e 70 caracteres!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'default') {
        this.texto_mensagem_alerta = 'O departamento deve ser selecionado!';
        this.showDivAlerta();
        return;
      }

      if(this.dep === 'Energia Elétrica') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de energia elétrica!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Saúde') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de saúde!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Trânsito') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de trânsito!';
        this.showDivAlerta();
        return;
      }

    },
    retorno_alerta_somente_falhas_um_e_dois(event) {
      event.preventDefault();
      let ultimoCaractere = this.ID.slice(-1);

      if(this.ID === '') {
        this.texto_mensagem_alerta = 'O campo de ID deve ser preenchido!';
        this.showDivAlerta();
        return;
      }

      if(this.ID.length !== 5) {
        this.texto_mensagem_alerta = 'O ID deve conter 5 dígitos!';
        this.showDivAlerta();
        return;
      }

      if(this.ID === '00000') {
        this.texto_mensagem_alerta = 'Falha no envio do alerta!';
        this.showDivAlerta();
        return;
      }

      if(this.ID.length === 5 && this.ID !== '00000' && ultimoCaractere !== '1' && ultimoCaractere !== '2' && ultimoCaractere !== '3') {
        this.texto_mensagem_alerta = 'O último dígito do ID pode ser somente 1, 2 ou 3!';
        this.showDivAlerta();
        return;
      }

      if((this.msg.length > 0 && this.msg.length < 10) || this.msg.length > 69) {
        this.texto_mensagem_alerta = 'A mensagem deve conter entre 10 e 70 caracteres!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'default') {
        this.texto_mensagem_alerta = 'O departamento deve ser selecionado!';
        this.showDivAlerta();
        return;
      }

      if(this.dep === 'Energia Elétrica') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de energia elétrica!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Saúde') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de saúde!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Trânsito') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de trânsito!';
        this.showDivAlerta();
        return;
      }

    },
    retorno_alerta_somente_falhas_um_e_tres(event) {
      event.preventDefault();

      if(this.ID === '') {
        this.texto_mensagem_alerta = 'O campo de ID deve ser preenchido!';
        this.showDivAlerta();
        return;
      }

      if(this.ID.length !== 5) {
        this.texto_mensagem_alerta = 'O ID deve conter 5 dígitos!';
        this.showDivAlerta();
        return;
      }

      if(this.ID === '00000') {
        this.texto_mensagem_alerta = 'Falha no envio do alerta!';
        this.showDivAlerta();
        return;
      }

      if((this.msg.length > 0 && this.msg.length < 10) || this.msg.length > 70) {
        this.texto_mensagem_alerta = 'A mensagem deve conter entre 10 e 70 caracteres!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'default') {
        this.texto_mensagem_alerta = 'O departamento deve ser selecionado!';
        this.showDivAlerta();
        return;
      }

      if(this.dep === 'Energia Elétrica') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de energia elétrica!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Saúde') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de saúde!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Trânsito') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de trânsito!';
        this.showDivAlerta();
        return;
      }

    },
    retorno_alerta_somente_falhas_dois_e_tres(event) {
      event.preventDefault();

      if(this.ID === '') {
        this.texto_mensagem_alerta = 'O campo de ID deve ser preenchido!';
        this.showDivAlerta();
        return;
      }

      if(this.ID.length !== 5) {
        this.texto_mensagem_alerta = 'O ID deve conter 5 dígitos!';
        this.showDivAlerta();
        return;
      }

      if(this.ID === '00000') {
        this.texto_mensagem_alerta = 'Falha no envio do alerta!';
        this.showDivAlerta();
        return;
      }

      if(this.msg.trim() === "") {
        this.texto_mensagem_alerta = 'O campo de mensagem deve ser preenchido!';
        this.showDivAlerta();
        return;
      }

      if((this.msg.length > 0 && this.msg.length < 10) || this.msg.length > 69) {
        this.texto_mensagem_alerta = 'A mensagem deve conter entre 10 e 70 caracteres!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'default') {
        this.texto_mensagem_alerta = 'O departamento deve ser selecionado!';
        this.showDivAlerta();
        return;
      }

      if(this.dep === 'Energia Elétrica') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de energia elétrica!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Saúde') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de saúde!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Trânsito') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de trânsito!';
        this.showDivAlerta();
        return;
      }

    },
    sair() {
      if (this.menuAberto) {
        this.menuAberto = false;
      }
      this.interrupcoes = '';
      this.tensao = '';
      this.codigo_interrup = '';
      this.codigo_tensao = '';
      this.ID = '';
      this.msg = '';
      this.dep = 'default';
      this.usuario = '';
      this.senha = '';
      this.tipo_usuario = 'default';
      this.logado = false;
      this.nao_logado = true;
    },
    defineCamposAlerta_com_falha(alerta) {
      if(this[alerta] === 'Alerta 12341: Falha de energia.') {
        this.ID = '12341',
        this.msg = 'Falha de energia.',
        this.dep = 'Trânsito'
      }

      else if(this[alerta] === 'Alerta 98012: Alta tensão - risco de problemas no sistema elétrico.') {
        this.ID = '98012',
        this.msg = 'Alta tensão - risco de problemas no sistema elétrico.',
        this.dep = 'Trânsito'
      }

      else if(this[alerta] === 'Alerta 65323: Instabilidade no fornecimento de energia devido a várias interrupções.') {
        this.ID = '65323',
        this.msg = 'Instabilidade no fornecimento de energia devido a várias interrupções.',
        this.dep = 'Trânsito'
      }

      else if(this[alerta] === 'Alerta 37892: Instabilidade no fornecimento de energia e alta tensão.') {
        this.ID = '37892',
        this.msg = 'Instabilidade no fornecimento de energia e alta tensão.',
        this.dep = 'Trânsito'
      }

      else {
        this.ID = '',
        this.msg = '',
        this.dep = ''
      }
    },
    defineCamposAlerta_sem_falha(alerta) {
      if(this[alerta] === 'Alerta 12341: Falha de energia.') {
        this.ID = '12341',
        this.msg = 'Falha de energia.',
        this.dep = 'Energia Elétrica'
      }

      else if(this[alerta] === 'Alerta 98012: Alta tensão - risco de problemas no sistema elétrico.') {
        this.ID = '98012',
        this.msg = 'Alta tensão - risco de problemas no sistema elétrico.',
        this.dep = 'Energia Elétrica'
      }

      else if(this[alerta] === 'Alerta 65323: Instabilidade no fornecimento de energia devido a várias interrupções.') {
        this.ID = '65323',
        this.msg = 'Instabilidade no fornecimento de energia devido a várias interrupções.',
        this.dep = 'Energia Elétrica'
      }

      else if(this[alerta] === 'Alerta 37892: Instabilidade no fornecimento de energia e alta tensão.') {
        this.ID = '37892',
        this.msg = 'Instabilidade no fornecimento de energia e alta tensão.',
        this.dep = 'Energia Elétrica'
      }

      else {
        this.ID = '',
        this.msg = '',
        this.dep = ''
      }
    },
    defineMensagemRetorno_com_falha() {
      if (this.ID !== '' && this.msg !== '' && this.dep !== '') {

        if((this.msg.length > 0 && this.msg.length < 10) || this.msg.length > 69) {
        this.texto_mensagem_alerta = 'A mensagem deve conter entre 10 e 70 caracteres!';
        this.showDivAlerta();
        return;
      }

      if(this.dep === 'Energia Elétrica') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de energia elétrica!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Saúde') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de saúde!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Trânsito') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de trânsito!';
        this.showDivAlerta();
        return;
      }

      }
    },
    defineMensagemRetorno_sem_falha() {
      if (this.ID !== '' && this.msg !== '' && this.dep !== '') {

        if((this.msg.length > 0 && this.msg.length < 10) || this.msg.length > 70) {
        this.texto_mensagem_alerta = 'A mensagem deve conter entre 10 e 70 caracteres!';
        this.showDivAlerta();
        return;
      }

      if(this.dep === 'Energia Elétrica') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de energia elétrica!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Saúde') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de saúde!';
        this.showDivAlerta();
        return;
      }

       if(this.dep === 'Trânsito') {
        this.texto_mensagem_alerta = 'Alerta enviado com sucesso para o departamento de trânsito!';
        this.showDivAlerta();
        return;
      }

      }
    },
    integracao_alerta(alerta) {
      if (store.pontuacaoJogador.pont_fases_niveis[5][2] !== 0) {
        this.defineCamposAlerta_sem_falha(alerta);
      } else {
        this.defineCamposAlerta_com_falha(alerta);
      }

      if (store.respostas_fase_tres.falhas_encontradas_missao_cinco[1]) {
        this.defineMensagemRetorno_sem_falha();
      } else {
        this.defineMensagemRetorno_com_falha();
      }

      if(this.encontrou_falha_um_nivel_quatro) {
        this.flag_alerta_sem_falha_um = false;
      } else {
        this.flag_alerta_com_falha_um = false;
      }
    }
  },
};
</script>

<style scoped>
.main_container {
  width: 100vw;
  height: 100vh;
  background-color: #d4d9e5;
}

.level__content {
  height: 88%;
  display: flex;
}

.execucao-casos-teste {
  position: relative;
  width: 65%;
  padding: 12px;
}

.artefato {
  position: relative;
  width: 35%;
  border-right: 3px solid rgba(59, 93, 131, 0.57);
  padding: 12px;
}

.execucao-casos-teste h1 {
  font-family: "Iceland", sans-serif;
  color: #2e4778;
  text-align: center;
  font-size: 28px;
  margin-top: 8px;
}

.execucao-casos-teste p {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 16.5px;
  margin-top: 24px;
  margin-left: 18px;
  color: #375087;
  font-weight: 500;
  line-height: 25px;
}

#aviso{
  display: inline-block;
  margin-top: 10px;
  margin-left: 14px;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 13px;
  color: #18294f;
  font-weight: 500;
}

.CTs-gerados {
  margin-top: 20px;
  background-color: #c2cbdc;
  border-radius: 3px;
  width: 94%;
  height: 70%;
  margin-left: auto;
  margin-right: auto;
  overflow-y: auto;
  padding: 15px 20px;
}

.CTs-gerados::-webkit-scrollbar {
  width: 9px;
}

.CTs-gerados::-webkit-scrollbar-thumb {
  background-color: #4f6391e7;
  border-radius: 8px;
}

.CTs-gerados::-webkit-scrollbar-track {
  background: rgba(177, 182, 212, 0.861);
  border-radius: 3px;
}

.CTs-gerados::-webkit-scrollbar-thumb:hover {
  background: #4f6391;
}

.cabecalho {
  display: flex;
  justify-content: end;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 15px;
  color: #253052;
  font-weight: 500;
  margin-bottom: 18px;
}

.cabecalho span {
  width: 40%;
  margin-left: 6px;
}

.artefato h1 {
  font-family: "Iceland", sans-serif;
  color: #2e4778;
  text-align: center;
  font-size: 28px;
  margin-top: 8px;
}

.artefato h2,
.execucao-casos-teste h2 {
  font-family: "Bai Jamjuree", sans-serif;
  color: #2e4778;
  text-align: center;
  font-size: 19px;
  margin-top: 18px;
}

.avancar-botao {
  position: absolute;
  bottom: 2.7%;
  right: 2%;
  display: inline-flex;
  background-color: #1e215a;
  padding: 13px 18px;
  border-radius: 5px;
  gap: 12px;
  text-decoration: none;
  align-items: center;
  transition: 0.3s;
}

.avancar-botao img {
  width: 18px;
  height: 17px;
  margin-top: 0.125rem;
  transition: transform 0.8s ease;
}

.avancar-botao:hover img {
  animation-delay: 0.2s;
  animation: moveArrow 0.7s forwards;
}

.avancar-botao span {
  color: #dee5ed;
  font-family: "Chakra Petch", sans-serif;
  font-size: 17px;
}

.consultar_especificacao {
  position: absolute;
  bottom: 3%;
  right: 4%;
  display: inline-flex;
  background-color: #1e215a;
  padding: 15px;
  border-radius: 100%;
  text-decoration: none;
  align-items: center;
  transition: 0.3s;
}

.consultar_especificacao img {
  width: 22px;
}

.consultar_especificacao::before {
  content: "Consultar especificação";
  position: absolute;
  left: -168px;
  bottom: 50%;
  transform: translateY(50%);
  white-space: nowrap;
  background-color: #434f70;
  color: #e5e6f2;
  padding: 6px 10px;
  border-radius: 5px;
  font-size: 14px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 13px;
}

.consultar_especificacao:hover::before {
  opacity: 1;
  visibility: visible;
}

label{
  margin-top: 1px;
}

.CT {
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 14px;
}

.CTs-gerados .CTs .entrada-saida {
  display: flex;
  justify-content: end;
  width: 100%;
  color: #253052;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 15px;
  font-weight: 500;
}

.CTs-gerados .CTs .entrada-saida p {
  font-size: 14px;
  margin: 0;
  width: 42%;
  margin-left: 12px;
  word-wrap: break-word;
  line-height: 1.2;
  color: #375087;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 14px;
}

.avancar-botao:hover,
.consultar_especificacao:hover {
  background-color: #0f1444;
}

@keyframes moveArrow {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(7px);
  }
}

 .custom-checkbox {
    display: inline-block;
    position: relative;
    font-size: 16px;
    user-select: none;
    padding-left: 24px;
    line-height: 16px;
  }

  .custom-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fbfbfc;
    border: 1.4px solid rgb(109, 109, 122);
    border-radius: 3px;
  }

  .custom-checkbox:hover input ~ .checkmark {
    border: 1.4px solid rgb(3, 3, 33);
  }

  .custom-checkbox input:checked ~ .checkmark {
    background-color: #1e2359;
    border-color:#1e2359;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .custom-checkbox input:checked ~ .checkmark:after {
    display: block;
  }

  .custom-checkbox .checkmark:after {
    left: 4.3px;
    top: 2px;
    width: 2px;
    height: 6px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

.ambiente{
  position: relative;
  margin-top: 20px;
  background-color: #dce1eb;
  border-radius: 3px;
  width: 96%;
  height: 65%;
  margin-left: auto;
  margin-right: auto;
  /* padding: 6px 14px; */
  /* padding-top: 4px; */
  /* padding-left: 20px; */
}

.reportar-falha {
  margin-top: 12px;
  margin-left: 5px;
  display: inline-flex;
  background-color: #d6d8e7;
  border: 2px solid #1e215a;
  padding: 12px 16px;
  border-radius: 5px;
  gap: 10px;
  text-decoration: none;
  align-items: center;
  transition: 0.2s;
  transform: translateX(188%);
}

.reportar-falha img {
  width: 20px;
  height: 18px;
  margin-top: 0.125rem;
  transition: all 0.3s ease;
}

.reportar-falha span {
  color: #1e215a;
  font-family: "Chakra Petch", sans-serif;
  font-size: 16px;
  font-weight: 500;
}

@keyframes bugShake {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(15deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.reportar-falha:hover{
  background-color: #1e215a;
}

.reportar-falha:hover span{
  color: #dce5ef;
}

.reportar-falha:hover img{
  content: url('@/assets/img/bug.png');
  animation: bugShake 0.6s ease-in-out;
}

.alert-box{
  position: absolute;
  bottom: 12px;
  left: 16px;
  overflow: hidden;
  width: fit-content;
  height: 36px;
  margin-left: 35%;
  border-radius: 3px;
  background-color: #535c84;
  color:#d8d8ea;
  font-family: 'Roboto', 'sans-serif';
  font-size: 13px;
  padding: 7px 11px 7px 11px;
}

.progress-bar {
  height: 5px;
  background-color: #051324;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: width 0.1s linear;
}

.disabled {
  pointer-events: none;
  cursor: not-allowed;
  background-color: #97a1cb;
}

.disabled_input {
  pointer-events: none;
  cursor: not-allowed;
  background-color: #d8dbea;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.dica {
  position: absolute;
  bottom: 3%;
  left: 3%;
  display: inline-flex;
  background-color: #1e215a;
  padding: 15px;
  border-radius: 100%;
  text-decoration: none;
  align-items: center;
  transition: 0.3s;
}

.dica img {
  width: 24px;
}

.dica::before {
  content: "Dica";
  position: absolute;
  right: -50px;
  bottom: 50%;
  transform: translateY(50%);
  white-space: nowrap;
  background-color: #434f70;
  color: #e5e6f2;
  padding: 6px 10px;
  border-radius: 5px;
  font-size: 14px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 13px;
}

.dica:hover::before {
  opacity: 1;
  visibility: visible;
}

.dica:hover {
  background-color: #0f1444;
}

.link_modal {
  text-decoration: underline;
  cursor: pointer;
  color: #416ab3;
  font-weight: 600;
}

.obs2 {
  font-family: "Bai Jamjuree", sans-serif;
  display: inline-block;
  font-size: 13px;
  color: #112a53;
  margin-top: 3px;
  margin-left: 14px;
  font-weight: 500;
}

.ambiente span{
  font-family: 'Roboto', 'sans-serif';
  color: #1a2054;
  font-weight: 400;
}

.ambiente h1{
  font-family: 'Chakra Petch', 'sans-serif';
  font-size: 21px;
  color: #242a58;
  padding-bottom: 5px;
  border-bottom: 1.5px solid rgb(29, 30, 84);
  margin-top: 0;
  margin-bottom: 18px;
}

.container-user-senha, .container-tipo-user{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  gap:10px;
}

.input-user-senha{
  border-radius: 3px;
  outline: none;
  border: 1.2px solid rgb(16, 16, 61);
  padding: 3px;
  width: 100px;
  height: 26px;
  color: #060f18;
  font-weight: 500;
  background-color: #f5f8fa;
}

.select-tipo-user {
  padding: 2px;
  border-radius: 3px;
  outline: none;
  font-size: 13px;
  color: #060f18;
  background-color: #f5f8fa;
  font-family: "Bai Jamjuree", sans-serif;
  width: 184px;
  height: 26px;
  font-weight: 500;
  border: 1.3px solid rgb(13, 33, 65);
}

.ativa-btn{
  display: block;
  background-color: #1f325c;
  text-decoration: none;
  padding: 6px 10px;
  color: #cfd2e4;
  border-radius: 3px;
  font-family: 'Roboto', 'sans-serif';
  font-size: 15px;
  letter-spacing: 0.2px;
  margin-top: 22px;
  transition: 0.3s;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 70px;
}

.ativa-btn:hover{
  background-color: #101f41;
}

.logado, .monitora-interrup, .monitora-tensao, .detecta_falhas, .envia_alertas {
  height: 100%;
  /* display: flex;
  gap: 160px; */
  position: relative;
  overflow: hidden;
}

.detecta_falhas {
  position: relative;
}

.menu {
  border-right: 2px solid #101f41;
  width: 250px; /* Largura do menu */
  padding-right: 7px;
  background-color: #d3d9e7;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  transition: transform 0.5s ease;
}

.menu-icon {
  cursor: pointer;
  position: absolute;
  /* top: 30px;
  left: 100px; */
  /* z-index: 10; */
}

/* .conteudo {
  margin-left: 260px;
} */

/* Transição do menu */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-enter-to {
  transform: translateX(0); /* Aparece ao ser aberto */
}

.slide-leave {
  transform: translateX(0);
}

.slide-leave-to {
  transform: translateX(-100%); /* Desaparece ao fechar */
}

.menu p {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 13px;
  color: #0d2236;
  font-weight: 500;
  text-align: left;
  line-height: 21px;
}

.menu .inicio {
  cursor: pointer;
  margin-top: 10px;
  font-weight: 600;
}

.menu .title {
  margin-top: 18px;
  font-weight: 600;
}

.menu .opcao {
  cursor: pointer;
  margin-top: 6px;
  padding-left: 9px;
  position: relative;
}

.menu .opcao:hover, .menu .inicio:hover {
 color: #060f18
}

.logado h2 {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 18px;
  color: #060f18;
  font-weight: 500;
  margin-top: 20px;
}

.logado .logado_como {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 14px;
  color: #0e1f30;
  font-weight: 500;
  margin-top: 50px;
  text-align: center;
}

.logado .desloga {
  position: absolute;
  bottom: 8%;
  right: 5%;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  color: #1d344c;
  font-weight: 500;
  /* margin-top: 16%; */
  display: block;
  text-align: right;
}

.menu-aberto {
  cursor: pointer;
  position: absolute;
  width: 20px;
  top: 15px;
  left: 15px;
}

.menu-fechado {
  cursor: pointer;
  position: absolute;
  width: 19px;
  top: 6px;
  left: 210px;
}

.login {
  padding-top: 30px;
}

.alert-box-interrup{
  position: relative;
  overflow: hidden;
  /* margin-top: 10px; */
  width: fit-content;
  height: 38px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  background-color: #535c84;
  color:#d8d8ea;
  font-family: 'Roboto', 'sans-serif';
  font-size: 14px;
  padding: 8px 12px 8px 12px;
}

.disabled {
  pointer-events: none;
  cursor: not-allowed;
  background-color: #8a9fb9;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

#codigo-retornado-interrup{
  display: inline-block;
  margin-top: 20px;
  font-size: 15px;
  margin-left: 15px;
}

.interrupcoes{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap:10px;
}

.interrupcoes span{
  display: block;
  font-size: 15px;
  margin-top: 30px;
}

.input-interrupcoes{
  border-radius: 3px;
  outline: none;
  border: 1.2px solid rgb(16, 16, 61);
  padding: 2px;
  width: 100px;
  height: 30px;
  color: #060f18;
  text-align: center;
  font-weight: 500;
}

.ativa-btn-interrup{
  /* display: inline-block; */
  background-color: #1f325c;
  text-decoration: none;
  padding: 6px 10px;
  color: #cfd2e4;
  border-radius: 3px;
  font-family: 'Roboto', 'sans-serif';
  font-size: 15px;
  letter-spacing: 0.2px;
  margin-top: 10px;
  transition: 0.3s;
}

.ativa-btn-interrup:hover{
  background-color: #101f41;
}

.tensao{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap:10px;
}

.tensao span {
  font-family: 'Roboto', 'sans-serif';
  color: #1a2054;
  font-weight: 400;
  font-size: 15px;
}

.input-tensao{
  border-radius: 3px;
  outline: none;
  border: 1.2px solid rgb(16, 16, 61);
  padding: 2px;
  width: 100px;
  height: 30px;
  color: #060f18;
  text-align: center;
  font-weight: 500;
}

.ativa-btn-tensao{
  /* display: inline-block; */
  background-color: #1f325c;
  text-decoration: none;
  padding: 6px 10px;
  color: #cfd2e4;
  border-radius: 3px;
  font-family: 'Roboto', 'sans-serif';
  font-size: 15px;
  letter-spacing: 0.2px;
  margin-top: 10px;
  transition: 0.3s;
}

.ativa-btn-tensao:hover{
  background-color: #101f41;
}

.alert-box-tensao{
  position: relative;
  overflow: hidden;
  margin-top: 15px;
  width: fit-content;
  height: 38px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  background-color: #535c84;
  color:#d8d8ea;
  font-family: 'Roboto', 'sans-serif';
  font-size: 14px;
  padding: 8px 12px 8px 12px;
}

#codigo-retornado-tensao{
  display: inline-block;
  margin-top: 10px;
  font-size: 15px;
  margin-left: 16px;
}

.detecta_falhas .conteudo {
  margin-top: 60px;
  margin-left: 40px;
}

.envia_alertas .conteudo {
  margin-top: 38px;
}

.detecta_falhas .alerta_emitido{
  display: block;
  font-family: "Bai Jamjuree", sans-serif;
  color:#1e215a;
  font-size: 14px;
  font-weight: 500;
  
}

.mensagem_detecta {
  display: block;
  margin-top: 16px;
  font-family: "Bai Jamjuree", sans-serif;
  color:#1e215a;
  font-size: 14px;
  font-weight: 500;
}

.container_ID, .container_msg, .container_dep{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap:10px;
}

.container_ID {
  margin-top: 16px;
}

.input-ID{
  border-radius: 3px;
  outline: none;
  border: 1.2px solid rgb(16, 16, 61);
  padding: 2px;
  width: 100px;
  height: 26px;
  color: #060f18;
  text-align: center;
  font-weight: 500;
  background-color: #f5f8fa;
}

.input-msg {
  border-radius: 3px;
  outline: none;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 13px;
  padding: 3px;
  color: #060f18;
  background-color: #f5f8fa;
  border: 1.2px solid rgb(16, 16, 61);
  font-weight: 500;
}

.select-dep {
  padding: 2px;
  border-radius: 3px;
  outline: none;
  font-size: 13px;
  color: #060f18;
  background-color: #f5f8fa;
  font-family: "Bai Jamjuree", sans-serif;
  width: 140px;
  height: 26px;
  font-weight: 500;
  border: 1.3px solid rgb(13, 33, 65);
}

.ativa-btn-alerta{
  display: block;
  background-color: #1f325c;
  text-decoration: none;
  padding: 6px 10px;
  color: #cfd2e4;
  border-radius: 3px;
  font-family: 'Roboto', 'sans-serif';
  font-size: 15px;
  letter-spacing: 0.2px;
  margin-top: 18px;
  transition: 0.3s;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 70px;
}

.ativa-btn-alerta:hover{
  background-color: #101f41;
}

.alert-box-alerta{
  position: absolute;
  bottom: 10px;
  left: 27%;
  overflow: hidden;
  width: fit-content;
  height: 36px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  background-color: #535c84;
  color:#d8d8ea;
  font-family: 'Roboto', 'sans-serif';
  font-size: 13px;
  padding: 7px 11px 7px 11px;
}

.disabled_alerta {
  pointer-events: none;
  cursor: not-allowed;
  background-color: #8a9fb9;
}

.execucao-casos-teste .ambiente .current {
  font-weight: 600;
  color: #051324;
}
</style>
