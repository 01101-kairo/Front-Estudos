# Front-Estudos-CodeBlue

AS TAGS H1 ATÉ H6 SÃO SEMPRE UTILIZADAS PARA TÍTULOS, ONDE H1 É O TÍTULO
MAIS IMPORTANTE DA PÁGINA, INDO ATÉ O H6, O TÍTULO MENOS IMPORTANTE.

CSS Inline - É VÁLIDO PARA AQUELA TAG ESPECÍFICA. INLINE ESTÁ MAIS PERTO DA TAG, ENTÃO ELE É MAIS FORTE HIERARQUICAMENTE NO EFEITO CASCATA. NUNCA VOU USAR ESSA PORCARIA.
<h1 tabindex="1"class="word" style="color:blue">Título de nível hierarquico 1</h1>

```html
        <h1 tabindex="1"class="word" style="color:blue">Título de nível hierarquico 1</h1>
```

NORMALMENTE SÓ SE USA UMA TAG H1 POR PÁGINA

```html
        <h2>Título de nível hierarquico 2</h2>
        <h3>Título de nível hierarquico 3</h3>
        <h4>Título de nível hierarquico 4</h4>
        <h5>Título de nível hierarquico 5</h5>
        <h6>Título de nível hierarquico 6</h6>
```

ESSA É A TAG P. ELA SERVE PARA ENVOLVER TEXTOS EM PARÁGRAFO
<p title="Soluções para agências">CodeBlue &Oslash; &#199;</p>

```html
<p title="Soluções para agências">CodeBlue &Oslash; &#198;</p>
```

<p>
    Paragrafo
    <strong>negrito</strong>
    <em>italico</em>
    <u>unline</u>
    <strong><em><u>negrito italico unline</u></em></strong>
    <span>tipo uma div so que pra texto corrido</span>
    <br>quebra de linha
</p>

```html
<p>
    Paragrafo
    <strong>negrito</strong>
    <em>italico</em>
    <u>unline</u>
    <strong><em><u>negrito italico unline</u></em></strong>
    <span>tipo uma div so que pra texto corrido</span>
    <br>quebra de linha
</p>
```

```html
<p class="text">
    oi Kairo...
    oi Kairo...
    oi Kairo...
    oi Kairo...
    oi Kairo...
    oi Kairo...
</p>
```
TAGS PARA LISTAS ORDENADAS

```html
<ol>
    <li>Caderno</li>
    <li>Caneta</li>
    <li>Borracha</li>
    <li>Lápis</li>
</ol>
```

<ol>
    <li>Caderno</li>
    <li>Caneta</li>
    <li>Borracha</li>
    <li>Lápis</li>
</ol>

TAGS PARA LISTAS NÃO ORDENADAS

```html
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
```


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

Linstas de descricao


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

TAG PARA CONTER SEMÂNTICAMENTE UM ENDEREÇO

<address>
    <p>Rua bhfalshdlfas, 7897897 - Bairro - tururu</p>
</address>

TAG PARA CONTER SEMÂNTICAMENTE UM PERÍODO DE TEMPO

<time>
    <p>Aberto das 09 às 18 horas</p>
</time>
