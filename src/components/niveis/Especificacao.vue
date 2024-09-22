<template>
   <div class="especificacao">
        <h1>Especificação</h1>
        <div class="descricao">
          <h2>{{titulo_especificacao}}</h2>
          <p v-for="(paragrafo, index) in paragrafos" :key="index">{{paragrafo}}</p>
        </div>
      </div>
</template>

<script>

export default {
  name: 'Especificacao',
   props: {
    titulo_especificacao: {
      type: String,
      required: true
    },
    paragrafos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
 .especificacao{
    width: 47%;
    border-right: 3px solid rgba(59, 93, 131, 0.57);
    padding: 12px;
    padding-right: 16px;
  }

  .especificacao h1{
    font-family: 'Iceland', sans-serif;
    color: #2e4778;
    text-align: center;
    font-size: 28px;
    margin-top: 8px;
  }

  .descricao{
    font-family: "Bai Jamjuree", sans-serif;
    margin-top: 20px;
    height: 86%;
    width: 98%;
    border-radius: 3px;
    margin-left: auto;
    margin-right: auto;
    background-color: #c9d2e3;
    overflow-y: auto;
    padding: 8px;
    padding-left: 18px;
    padding-right: 5px;
  }

  .descricao h2{
    color: #2e4778;
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
    letter-spacing: 0.5px;
  }

  .descricao p{
    font-size: 16px;
    margin-top: 14px;
    color: #375087;
    font-weight: 500;
    line-height: 25px;
  }

  .descricao::-webkit-scrollbar {
    width: 9px;
  }

  .descricao::-webkit-scrollbar-thumb {
    background-color: #4f6391e7;
    border-radius: 8px;
  }

  .descricao::-webkit-scrollbar-track {
    background: rgba(177, 182, 212, 0.861);
    border-radius: 3px;
  }

  .descricao::-webkit-scrollbar-thumb:hover {
    background: #4f6391;
  }
</style>