let veiculos = [];
console.log('sistema de veículos inciado!');

// De inicio o arquivo fica como Untracked. Executar 'git status' e isso será mostrado.
// git add teste.js -> git commit -m "texto" -> git push 
// git diff --staged : Consegue revisar o conteudo que foi adicionado, usar sempre depois do git add . pra sempre saber oq vai subir e não correr riscos 
// git log : mostra todo o histórico de commits do projeto de forma detalhada  (o git mostra em ordem cronológica inversa, o commit mais recente aparece primeiro)
// git log --oneline : mostra o histórico de commits mas de forma compacta.
// git log -2 --oneline : dessa forma mostra somente os 2 ultimos commits 
// git log --oneline --graph : mostra o histórico com gráfico de ramificaçoes
// git log --oneline --all : mostra o histórico de todos os branches
// git diff : permite comparar versões de arquivos e visualizar as diferenças entre elas.
// git diff --stat : Mostra quais arquivos foram alterados e quantas linhas foram adicionadas ou removidas 
// git restore nomeDoArquivo : O git recupera a versão do arquivo que está no último commit, descartando as modificações locais ainda não preparadas (Cuidado pois reseta tudo que não foi preparado com git add .)
// git restore --staged nomeDoArquivo : retira um arquivo da área de preparação (mas não perde o código modificado) e dessa forma permite usar o git restore novamente para recuperar o arquivo do ultimo commit
// git switch main : troca de branch
// git switch -c teste :  criar e trocar de branch
// git revert HASH_DO_COMMIT : Cria um novo commit que desfaz as alterações de um commit anterior, preservando o histórico
// git pull: puxa a versão mais atualizada do codigo do github para o seu computador atual
// git clone URL-REPOSITORIO: clona todo um codigo que estiver no github para o seu computador

// git branch feature/cadastro : Cria uma branch 
// (feature/: novas funcionalidades. fix/ : Correções de problemas. hotfix/ : correções urgentes. refactor/ : melhorias na estrutura do código)
// git branch : visualizar as branches
// git switch feature/cadastro : alterna entre as branches
// git switch -c feature/login : cria e altera para branch criada em um unico comando 

