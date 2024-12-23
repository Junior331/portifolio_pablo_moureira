# Portifolio Pablo Moureira

## App

- https://portifolio-pablo-moureira.vercel.app/

#### O Produto
![alt text](image.png)
![alt text](image-1.png)
![alt text](image-4.png)
![alt text](image-3.png)

## Principais Tecnologias utilizadas

- Next
- Jest
- Tailwind
- Typescript

## Instalação

- Clone o repositório com
  ```
  git clone https://github.com/Junior331/portifolio_pablo_moureira.git
  ```
- É necessario ter o Node 20x ou superior instalado
- Para iniciar o servidor de desenvolvimento rode os comandos abaixo

```
yarn
yarn dev
```

### To do

- [x] Criar estrutura inicial do projeto
- [x] Implementação de Theme e Style
- [x] Criar componentes
- [x] Criar telas

  ### Pages

     - [x] Home
     - [x] Abount
     - [x] Projects
     - [x] Project Details

  ### Components

  ## Elements

     - [x] Text  
     - [x] Load  
     - [x] Input 
     - [x] Title 
     - [x] Button
     - [x] RenderIcon
     - [x] CloudContainer

  ## Organism

  - [x] Card
  - [x] Layout
  - [x] Timeline
  - [x] Carousel
  - [x] CloudStack
  - [x] BackgroundBeamsWithCollision

  ## Modules

     - [x] Menu
     - [x] Header
     - [x] BlurIn
     - [x] Skeleton
     - [x] BoxReveal
     - [x] NumberTicker

### Descrição da estrutura do projeto

- `Átomo (elements)`: Os átomos são componentes básicos e individuais, como botões, inputs, selects, etc. Um menu lateral geralmente é composto por diversos elementos, como ícones, textos, talvez até mesmo botões para navegação, e cada um desses elementos pode ser considerado um átomo. No entanto, o menu lateral como um todo é mais complexo do que apenas um único átomo.

- `Molécula (modules)`: As moléculas são compostas por átomos e têm uma funcionalidade mais complexa. Um menu lateral poderia ser considerado uma molécula se fosse composto por vários átomos (como botões, ícones, etc.) agrupados de uma maneira específica para uma função específica. No entanto, um menu lateral geralmente representa uma parte maior e mais significativa da interface do usuário.

- `Organismo (organism)`: Os organismos são componentes mais complexos que combinam vários átomos e/ou moléculas para formar uma parte significativa de uma interface. Um menu lateral se encaixa nessa definição, pois geralmente consiste em uma combinação de vários elementos (como itens de menu, ícones, títulos, etc.) agrupados para formar uma parte distinta e funcional da interface do usuário.

- `Hooks`: Os hooks são funções especiais que permitem que você use o estado e outros recursos do React dentro de componentes de função. Eles foram introduzidos no React 16.8 para permitir o uso de estado e outras funcionalidades anteriormente disponíveis apenas em componentes de classe em componentes de função.

- `Context`: A Context API é uma funcionalidade do React que permite compartilhar dados entre componentes sem a necessidade de passá-los explicitamente por meio de props. Ela é especialmente útil quando você tem dados que precisam ser acessados por muitos componentes em diferentes níveis da árvore de componentes. A Context API consiste em três partes principais: o provedor de contexto, o consumidor de contexto e o contexto em si.

- `Pages`: As páginas geralmente representam as diferentes rotas da aplicação, cada uma correspondendo a uma URL específica. As páginas são componentes que são renderizados quando o usuário navega para uma determinada rota. Elas são responsáveis por exibir o conteúdo relevante para essa rota específica e podem conter outros componentes, como formulários, listas, gráficos, etc. As páginas geralmente são compostas por uma combinação de componentes de apresentação e lógica, e podem ser estruturadas de acordo com as necessidades da aplicação.

- `Utils`: desempenha um papel crucial na organização e eficiência do código da aplicação. Ela abriga uma variedade de utilitários que são essenciais para diferentes partes da aplicação, ex: funções e arquivos auxiliares, como emptys, endpoints, types e funções auxiliares.

- `Styles (Theme)`: O tema do projeto é uma parte fundamental da estilização da aplicação, definindo as cores, estilos tipográficos e outros aspectos visuais que são aplicados em toda a interface do usuário. Abaixo, descrevo os principais elementos do tema:

### Estrutura do projeto

    ├── src/
    │   ├── app/
    │   │   ├── assets/
    │   │   │   ├── fonts/
    │   │   │   │   └── index.ts
    │   │   │   ├── icons/
    │   │   │   │   ├── aws.svg
    │   │   │   │   ├── react.svg
    │   │   │   │   ├── figma.svg
    │   │   │   │   ├── metamask.svg
    │   │   │   │   ├── typescript.svg
    │   │   │   │   └── index.ts
    │   │   │   ├── images/
    │   │   │   │   ├── import-png.d.ts
    │   │   │   │   ├── import-svg.d.ts
    │   │   │   │   ├── placeholder.png
    │   │   │   │   ├── image_not_found.png.png
    │   │   │   │   └── index.ts
    │   │   ├── components/
    │   │   │   ├── elements/
    │   │   │   │   ├── Text
    │   │   │   │   ├── Load
    │   │   │   │   ├── Input
    │   │   │   │   ├── Title
    │   │   │   │   ├── Button
    │   │   │   │   ├── RenderIcon
    │   │   │   │   ├── CloudContainer
    │   │   │   │   └── index.ts
    │   │   │   ├── modules/
    │   │   │   │   ├── Menu/
    │   │   │   │   ├── BlurIn/
    │   │   │   │   ├── Header/
    │   │   │   │   ├── Skeleton/
    │   │   │   │   ├── BoxReveal/
    │   │   │   │   ├── NumberTicker/
    │   │   │   │   └── index.ts
    │   │   │   ├── organism/
    │   │   │   │   ├── Card/
    │   │   │   │   ├── Layout/
    │   │   │   │   ├── Timeline/
    │   │   │   │   ├── Carousel/
    │   │   │   │   ├── CloudStack/
    │   │   │   │   ├── BackgroundBeamsWithCollision/
    │   │   │   │   └── index.ts
    │   │   ├── hooks/
    │   │   │   └── axiosAdapter.ts
    │   │   ├── services/
    │   │   │   ├── mocks/
    │   │   │   └── services.ts
    │   │   ├── pages/
    │   │   │   ├── (Home)/
    │   │   │   ├── abount/
    │   │   │   ├── projects/
    │   │   │   │   └── [id]/
    │   │   │   └── layout.tsx
    │   │   ├── utils/
    │   │   │   ├── utils.ts
    │   │   │   ├── types.ts
    │   │   │   ├── emptys.ts
    │   │   │   └── endpoints.ts

- O diretório `src/app/` contém todos os componentes do projeto, organizados de acordo com o padrão atomic.
  Cada componente é classificado como `átomo (atom)`, `molécula (molecule)` ou `organismo (organism)`, conforme
  sua complexidade e reutilização.

