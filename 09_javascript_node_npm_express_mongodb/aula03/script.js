// npm (Node Package Manager) -> gerenciador de pacotes do node
// npm init -y
// npm [comand: install...] [pack: axios...]
// npm i express --save-dev // para instalar como pendência de desenvolvimento
// npm i express --save-prod // para instalar como pendência de build
// npm i express@x.x.x // para instalar uma versão especifíca de determinado pacote

// 2.1.0
// primeiro digito se chama major
// o segundo minor
// e o terceito patch

// patch se trata da correção de bugs
// minor aumenta quando é adicionado novos recursos, mas que ainda são compatíveis com o resto do sistema
// quando o major atualiza o sistema pode quebrar totalmente a compatibilidade com recursos anteriores

// ^2.0.1
// o circunflexo serve para dizer que apenas o minor e patch pode ser atualizado, assim o risco é zero de quebrar o sistema

// npm install e npm uninstall

// npm ls // para listar os principais pacotes instalados pelo comando npm
// npm ls --depth=1 // posso usar o depth para aumentar a profundidade da listagem
// npm outdated // para listar os pacotes desatualizados
// npm update // para atualizar os pacotes