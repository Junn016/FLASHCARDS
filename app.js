    function criacartao (categoria, pregnta, resposta){
       const container = document.getElementById('conteiner') 
       const cartao =document.createElement('article')
       cartao.className='cartao'

   cartao.innerHTML= `<div class="cartao_conteudo">
                    <h3>${categoria}</h3>
                    <div class="pergunta">
                        ${pergunta}
                        O qui é javascript?
                    </div>
                    <div class="resposta">
                        ${resposta}
                        É uma linguagem de programação versatils
                    </div>
                </div>
                `

         container.appendChild(cartao) 

    }