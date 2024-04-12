# Front Estudos

SEO
- definir descricao de img no alt
- definir o tamanho real da imagem no width height
- compacta as imagens tifany https://tinypng.com/
- never escalonar img(usar o tamanho real da imagem)
- resolucao pra internet sempre 72

O html é dividido em duas tags principais head e body cabeça e corpo
o body tem 3 tags semanticas que quase toda pagina tem  header, main e footer
pense no html como um corpo a head é uma cabeça la contem informações que nao
sao vistas por todos
o body é o corpo é oque os outros vão ver, e na cabeçã header vai ter o topo da
pagina na main o principal vai ter as informações de conteudo da pagina e o footer
é as informaçoes de dados como indereçoe e essas coisas
# head

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Links, meta-tags e mais CSS</title>
    <link rel="stylesheet" href="css/03ClassID.css">
<!-- META-TAGS DE SEO -->
    <meta name="description" content="Aqui inserimos textos que tenham em média 150 caracteres para ficar bonitinho lá no Google.">
    <meta name="robots" content="index,follow">
<!-- META-TAGS DE CLASSIFICAÇÃO -->
    <meta name="rating" content="general">
    <meta name="author" content="Kairo">
  </head>
</html>
```

# boby
## Texto
As tags h1 até h6 são sempre utilizadas para titulos, onde h1 é o titulo mais
importante da pagina, indo até o h6 o título menos importante, normalmente só
se usa a tag h1 por página


```html
<h1>Título de nível hierarquico 1</h1>
<h2>Título de nível hierarquico 2</h2>
<h3>Título de nível hierarquico 3</h3>
<h4>Título de nível hierarquico 4</h4>
<h5>Título de nível hierarquico 5</h5>
<h6>Título de nível hierarquico 6</h6>
```
A tag p serve para determinar um paragrafo da pagina
<p title="Soluções para agências">CodeBlue &Oslash; &#199;</p>

```html
<p title="Soluções para agências">CodeBlue &Oslash; &#198;</p>
```

<p>
    Paragrafo
    <strong>negrito</strong>
    <b>negrito</b>
    <em>italico</em>
    <i>italico</i>
    <u>unline</u>
    <span>tipo uma div so que pra texto corrido</span>
    <br>quebra de linha
    <!-- Tag sub e sup -->
    <br> water: H<sub>2</sub>O  <br> 10<sup>2</sup> = 100
</p>

```html
<p>
    Paragrafo
    <strong>negrito</strong>
    <b>negrito</b>
    <em>italico</em>
    <i>italico</i>
    <u>unline</u>
    <span>tipo uma div so que pra texto corrido</span>
    <br>quebra de linha
    <!-- Tag sub e sup -->
    <br> water: H<sub>2</sub>O  <br> 10<sup>2</sup> = 100
</p>
```

# Tag de link
Tag de link é um elemento inline, deve ser semore inserido dentro de um 
elemento de bloco

```html
<!--tag <a></a> hiperlink -->
<!-- MARCADOR DE ÂNCORA -->
<a name="topo"></a>
<a href="#fim">Vá para o fim da página</a>
<!-- TAG DE LINK É UM ELEMENTO INLINE, DEVE SER SEMPRE INSERIDO DENTRO DE UM ELEMENTO DE BLOCO -->
<!-- LINK RELATIVO -->
<a href="aula5.html">Saiba mais</a>
<!-- LINK ABSOLUTO -->
<a href="http://www.google.com.br" target="_blank">Veja isso no Google</a>
<!-- LINK DE DOWNLOAD -->
<a href="TREICHEL.pptx">Baixe o arquivo</a>
<!-- LINK DE E-MAIL -->
<a href="mailto:diego@codeblue.com.br">Fala comigo</a>
<!-- LINK DE WHATSAPP -->
<a href="https://wa.me/55218979878978">Fala comigo no Whats</a>
<!-- LINK DE ÂNCORA -->
<a href="#topo">Voltar para o topo</a>
<a name="fim"></a>

```

## TAGS PARA LISTAS

Lista ordenada

```html
<ol>
    <li>Caderno</li>
    <li>Caneta</li>
    <li>Borracha</li>
    <li>Lápis</li>
</ol>
```

<nav>
<ol>
    <li>Caderno</li>
    <li>Caneta</li>
    <li>Borracha</li>
    <li>Lápis</li>
</ol>
</nav>

Lista não ordenada

```html
<nav>
<ul>
    <li>Arroz</li>
    <li>Feijão</li>
    <li>
        Macarrão
        <!-- ASSIM FAZEMOS UMA SUB-LISTA DESTE ITEM DA LISTA -->
        <ul>
            <li>Espaguete</li>
            <li>Penne</li>
            <li>Linguini</li>
        </ul>
    </li>
    <li>Bife</li>
    <li>Ovo Frito</li>
</ul>
</nav>
```


<nav>
<ul>
    <li>Arroz</li>
    <li>Feijão</li>
    <li>
        Macarrão
        <!-- ASSIM FAZEMOS UMA SUB-LISTA DESTE ITEM DA LISTA -->
        <ul>
            <li>Espaguete</li>
            <li>Penne</li>
            <li>Linguini</li>
        </ul>
    </li>
    <li>Bife</li>
    <li>Ovo Frito</li>
</ul>
</nav>

Linstas de descrição


```html
<dl>
    <dt>lista</dt>
    <dd>lista</dd>

    <dt>lista</dt>
    <dd>lista</dd>
    
    <dt>lista</dt>
    <dd>lista</dd>
    
    <dt>lista</dt>
    <dd>lista</dd>
    
    <dt>lista</dt>
    <dd>lista</dd>
</dl>
```

<dl>
    <dt>lista</dt>
    <dd>lista</dd>
    <dt>lista</dt>
    <dd>lista</dd>
    <dt>lista</dt>
    <dd>lista</dd>
    <dt>lista</dt>
    <dd>lista</dd>
    <dt>lista</dt>
    <dd>lista</dd>
</dl>

# Tabelas
Tabela é tipo um Execl no html, não sei se um dia vou usar isso, pq antigamente
isso era usado para contruir layout
```html
<table>
  <thead>
    <tr>
      <th scope="col">Carro </th>
      <th scope="col">Ano </th>
      <th scope="col">Valor </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      </td>
      <td>Gol </td>
      <td>1997 </td>
      <td>R$ 8.000 </td>
    </tr>
    <tr>
      </td>
      <td>Gol </td>
      <td>1997 </td>
      <td>R$ 8.000 </td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="2">Total:</td>
      <td>R$ 16.00,00</td>
    </tr>
  </tfoot>
</table>
```
<table>
  <thead>
    <tr>
      <th scope="col">Carro </th>
      <th scope="col">Ano </th>
      <th scope="col">Valor </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      </td>
      <td>Gol </td>
      <td>1997 </td>
      <td>R$ 8.000 </td>
    </tr>
    <tr>
      </td>
      <td>Gol </td>
      <td>1997 </td>
      <td>R$ 8.000 </td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="2">Total:</td>
      <td>R$ 16.00,00</td>
    </tr>
  </tfoot>
</table>

```html
<hr />
```

<hr />

# Divs
O site é formado por container caixas com conteudo

# Elementos semânticos

``` html
<header>
<main>
<footer>

<nav>
<article>
<aside>
<details>
<mark>
<section>
<summary>
<time>
<figure>
<figcaption>
```

## picture figure figcaption img
img e o elemento padrão para carregamento de imagens
### pincture image sources
disainer responsivo add img pra celular tablete e pc

```html
<picture>
    <source srcset="smaller_landscape.jpg" media="(max-width: 40em) and (orientation: landscape)">
    <source srcset="smaller_portrait.jpg" media="(max-width: 40em) and (orientation: portrait)">
    <source srcset="default_landscape.jpg" media="(min-width: 40em) and (orientation: landscape)">
    <source srcset="default_portrait.jpg" media="(min-width: 40em) and (orientation: portrait)">
    <img srcset="./img/Fotos/conheca-3.png" alt="My default image">
</picture>
```
<picture>
    <source srcset="smaller_landscape.jpg" media="(max-width: 40em) and (orientation: landscape)">
    <source srcset="smaller_portrait.jpg" media="(max-width: 40em) and (orientation: portrait)">
    <source srcset="default_landscape.jpg" media="(min-width: 40em) and (orientation: landscape)">
    <source srcset="default_portrait.jpg" media="(min-width: 40em) and (orientation: portrait)">
    <img srcset="./img/Fotos/conheca-3.png" alt="My default image">
</picture>

### figure figcaption

figure para marcar uma foto em um documento e um elemento
figcaption para definir uma legenda para a foto

```html
<figure>
  <img class="imagem" 
  src="./img/Fotos/conheca-3.png" 
  alt="pezinhos de nenem fazendo um coracao"
  loading="lazy" width="256" height="168">

  <figcaption>
    descrição da imagem
  </figcaption>
</figure>
```
<figure>
  <img class="imagem" src="./img/Fotos/conheca-3.png" 
  alt="pezinhos de nenem fazendo um coracao"
  loading="lazy" width="256" height="168">
  <figcaption>
    descrição da imagem
  </figcaption>
</figure>



## Tag's de midia

### Tag de audio

``` html
<audio src="Enough - NEFFEX.mp3" autoplay controls loop preload></audio>

<audio autoplay controla>
  <source src=som.mp3" type="audio/mpeg" >
  <source src="som.wav" type="audio/wave">
  <source src="som.ogg" type="audio/mogg">
</audio>
```

### Tag de video

``` html
<video src="Design sem nome.mp4" autoplay controls loop preload></video>

<video autoplay controla>
  <source src=som.mp3" type="audio/mpeg" >
  <source src="som.wav" type="audio/wave">
  <source src="som.ogg" type="audio/mogg">
</video>
```

### Iframes

normalmente pega essa teg no site que você quer 
(youtube google maps entre outros)

``` html
<iframe src="http://www.codeblue.com.br" width="500" loading="lazy" height="800"></iframe>
```
## Formulario


## Tag para conter semânticamente um endereço
```html
<address>
    <p>Rua bhfalshdlfas, 7897897 - Bairro - tururu</p>
</address>

TAG PARA CONTER SEMÂNTICAMENTE UM PERÍODO DE TEMPO

<time>
    <p>Aberto das 09 às 18 horas</p>
</time>
```
<address>
    <p>Rua bhfalshdlfas, 7897897 - Bairro - tururu</p>
</address>

TAG PARA CONTER SEMÂNTICAMENTE UM PERÍODO DE TEMPO

<time>
    <p>Aberto das 09 às 18 horas</p>
</time>


# CSS
## texto
## box style
## colunas
## tabeles
## animação css3
