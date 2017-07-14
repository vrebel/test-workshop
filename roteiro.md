# Roteiro

## Introdução
1. O que é webpack
2. O que é um módulo
3. Como implementar um módulo em js
    1. Module Pattern (Vanilla)
    2. CommonJs (node)
    3. ES6
    4. Outros modos (AMD, UMD)
4. Configuração inicial para apresentar módulos
    1. Instalação node.js npm
    2. Instalação do webpack
    3. Explicação do que é o package json
    4. Criação do arquivo de configuração webpack.config.js
    5. Execução do webpack e npm scripts
    6. Criação da estrutura do projeto
5. Módulos
    1. Exemplo de como é js sem módulo, mostrar escopo global
    2. Exemplo de como fazer um módulo vanilla
    3. Exemplo com commonjs
    4. Exemplo com es6
6. Gerando html
    1. Download do loader html-webpack-plugin
    2. Adicionar a variavel PATHS para facilitar os paths
    3. Instacia html-wepack-plugin e gera html a partir de um template
7. Usando ES6
    1. Babel, instalar babel-loader babel-core babel-preset-env
    2. Configurar rule para js    
8. CSS e SASS
    1. Instalar css-loader - lida com @import e url
    2. Instalar style-loader -  injeta css na tag style
    3. Importar css no js
    4. Instalar node-sass e sass-loader (ou fast-sass-loader)
    5. Mudar nomes dos arquivos e configuração para scss
9. Extraindo o css da tag style
    1. Instalar ExtractTextPlugin (extract-text-webpack-plugin)
    2. Adicionar plugin e configurações
10. Carregando Assets
    1. url-loader faz inline de imagens até um limite especificado
    2. file-loader gera arquivos separados
    3. Instalar url-loader e file-loader
    4. Usar imagem de exemplo em background image no scss
    5. Carregar imagem através do js
    6. Mostrar diferença entre url-loader e file-loader
11. Organizando o projeto
    1. Build de desenvolvimento e produção
    2. Criar arquivo de dev e prod
    3. Modificar arquivo webpack.config para aceitar a variavel env
    4. Modificar package json para os novos scripts
    5. Configurando webpack para desenvolvimento
        1. Instalar webpack-dev-server
        2. Modificar package.json para rodar o dev-server
        3. Remover extract text plugin
        4. Configurar o dev-server
            1. Adicionar propriedade devServer
            2. Incluir hot: true
        5. Adicionar  devtool: "inline-source-map" para source maps
    6. Configurando webpack para produção
        1. adicionar a flag -p no package json
        2. instalar loader image-webpack-loader
        3. Adicionar opções de otimização para imagens
        4. Instalar laoder postcss loader
        5. Criar arquivo de configuração postcss
        6. Adicionar loader no fluxo do css