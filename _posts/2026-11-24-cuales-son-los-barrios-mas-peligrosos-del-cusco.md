---
title: "¿Cuáles son los barrios más peligrosos del Cusco?"
subtitle: "Geografía de la violencia"
author: "Ciudad Sur"
author_image: /assets/img/articulos/autores/ciudad-sur.png
date: 2026-11-24
category: "Actualidad"
image: /assets/img/articulos/barrios-mas-peligrosos-del-cusco.jpg
image_caption: "Delitos en la ciudad del Cusco: cada punto es una denuncia con ubicación precisa, de enero a setiembre de 2025. Fuente: DGIS-Ministerio del Interior. Elaboración: Ciudad Sur."
---

<style>
.cs-firma { font-family: "Montserrat", sans-serif; font-size: .9rem; color: #6b6262; text-align: left !important; line-height: 1.5; border-left: 3px solid #671b27; padding-left: .9rem; }
.cs-lamina { margin: 2.2rem auto; max-width: 560px; }
.cs-lamina img { width: 100%; height: auto; display: block; border-radius: 6px; box-shadow: 0 1px 6px rgba(0,0,0,.12); }
.cs-tabla-caja { overflow-x: auto; margin: 1.6rem 0 .4rem; }
.cs-tabla { width: 100%; border-collapse: collapse; font-family: "Montserrat", sans-serif; font-size: .88rem; margin: 0; }
.cs-tabla th { text-align: left; font-weight: 700; color: #671b27; border-bottom: 2px solid #671b27; padding: .5rem .4rem; }
.cs-tabla td { border-bottom: 1px solid #e6dcd8; padding: .5rem .4rem; vertical-align: middle; }
.cs-tabla .num { text-align: right; white-space: nowrap; }
.cs-barra { display: inline-block; height: .7rem; border-radius: 0 2px 2px 0; background: #671b27; vertical-align: middle; margin-right: .4rem; }
.cs-nota-tabla { font-family: "Montserrat", sans-serif; font-size: .72rem; color: #8a8080; text-align: left !important; margin: 0 0 2rem; }
@media (max-width: 576px) { .cs-tabla { font-size: .78rem; } .cs-tabla .ocultable { display: none; } }
</style>

<p class="cs-firma">Por el Laboratorio Urbano del Cusco - Ciudad Sur<br>Fuente: base de denuncias policiales DGIS-Ministerio del Interior, enero a setiembre de 2025 (14 953 casos). Procesamiento y mapas: Ciudad Sur, con QGIS y la capa de manzanas del INEI.</p>

Según diversas encuestas publicadas en la época electoral del presente año, una de las principales preocupaciones del ciudadano cusqueño era la inseguridad. Y a pesar de que la ciudad del Cusco no lidera los rankings de inseguridad en el país, lo cierto es que sí existe una percepción de inseguridad. El objetivo de este trabajo fue verificar si esa inseguridad se plasma en el territorio.

## Sobre la fuente: más de 14 000 denuncias

Trabajamos con la base de denuncias policiales de la provincia de Cusco de la Dirección General de Información para la Seguridad (DGIS) del Ministerio del Interior. Son 14 953 casos registrados entre enero y setiembre de 2025. Cada caso tiene fecha, distrito, dirección y clasificación penal (tipo, subtipo y modalidad).

Hay que precisar algo desde el inicio: son denuncias, no todos los delitos que ocurren. Muchos hechos nunca se denuncian, sobre todo los robos menores y la violencia dentro del hogar. Las cifras muestran lo que llega a la comisaría y, aun así, permiten ver patrones claros.

## Limitaciones: el problema de la ubicación

No todas las denuncias sirven para hacer un mapa fino. Solo el 40 % (5 973 casos) tiene una ubicación precisa. El otro 60 % está registrado en un punto por defecto de su distrito, que suele ser un punto central y genérico. Si los usáramos, aparecerían "focos de delito" que en realidad son solo el lugar donde el sistema guarda los casos sin dirección exacta.

Por eso el análisis por barrios usa únicamente los casos con ubicación precisa. Así perdemos cantidad, pero ganamos exactitud: cada punto del mapa está donde ocurrió el hecho.

## ¿Por qué barrios y no distritos?

Los distritos de la ciudad (Cusco, Wanchaq, Santiago, San Sebastián y San Jerónimo) son demasiado grandes y diversos por dentro. Wanchaq, por ejemplo, incluye zonas residenciales tranquilas y también el entorno del terminal terrestre, pegado al distrito de Santiago y con una dinámica muy distinta. Dar un solo número por distrito esconde esas diferencias.

Por eso dividimos la ciudad en 12 barrios o sectores, delimitados con la capa de manzanas del INEI. Cada sector agrupa manzanas con una identidad urbana reconocible, como el Centro Histórico, la Av. de la Cultura o el entorno del Terminal. Luego contamos cuántas denuncias de cada tipo caen dentro de cada uno. Así el resultado se lee como la gente vive la ciudad: por zonas, no por límites administrativos.

## Qué delitos contamos, y por qué

La base de la DGIS clasifica las denuncias en 32 tipos. Los usamos de dos formas.

**En el mapa general** (el de la portada de esta nota) aparecen los 32 tipos de delito. Cada denuncia con ubicación precisa es un punto, con un color según su tipo. Es la foto completa de lo denunciado en la ciudad.

**En el ranking por barrios** nos quedamos con 12 categorías, que son las que expresan violencia o ataques directos contra las personas y su patrimonio en el espacio urbano:

- Violencia contra la mujer y la familia (VMF)
- Hurto
- Robo
- Daños
- Extorsión
- Lesiones
- Homicidio
- Feminicidio
- Delitos sexuales
- Acoso
- Secuestro
- Violación de domicilio

Dejamos fuera cuatro grupos:

- **Faltas:** son infracciones menores y no delitos propiamente dichos. Inflarían los conteos sin decir mucho sobre peligrosidad.
- **Delitos contra la seguridad pública:** por ejemplo, conducir en estado de ebriedad o tener armas sin licencia. Son importantes, pero no tienen una víctima directa en el lugar.
- **Delitos informáticos:** ocurren en el espacio digital. La dirección registrada suele ser el domicilio de la víctima, no el "lugar del delito".
- **Delitos culposos:** son hechos sin intención, como muchos accidentes de tránsito. No miden violencia deliberada.

## Resultados: qué se denuncia más en la ciudad

Entre enero y setiembre de 2025, los cinco delitos más denunciados en la ciudad del Cusco fueron:

1. Violencia contra la mujer y la familia (VMF)
2. Hurto (sin violencia)
3. Estafas y fraudes
4. Robo (con violencia)
5. Lesiones

<figure class="cs-lamina"><img src="/assets/img/articulos/barrios-cusco-delitos-mas-usuales.jpg" alt="Delitos más usuales en Cusco ciudad, enero a setiembre de 2025: 1. violencia contra la mujer y la familia, 2. hurto, 3. estafas y fraudes, 4. robo, 5. lesiones. Feminicidio: 9 casos entre consumados y tentativas." loading="lazy"></figure>

El primer lugar es el dato más fuerte del análisis. **El delito más denunciado en el Cusco no ocurre en la calle, sino sobre todo dentro de las casas.** La violencia contra la mujer y la familia supera al hurto y al robo, que suelen dominar la conversación pública sobre inseguridad.

A eso se suman 9 feminicidios, entre consumados y tentativas, en solo nueve meses.

## Resultados: dónde se concentra

- **El barrio con más hurtos es Mariscal Gamarra y Av. de la Cultura.** Es un eje de mucho movimiento: comercio, universidades, oficinas y transporte. Allí hay mucha gente, pertenencias a la vista y la facilidad de perderse entre la multitud. Es el escenario típico del hurto.
- **El barrio con más violencia contra la mujer y la familia es Alameda Pachacuteq y Terminal.** Esto indica que la violencia doméstica también tiene una geografía, y que ciertas zonas necesitan atención específica en prevención y protección, no solo patrullaje.

<figure class="cs-lamina"><img src="/assets/img/articulos/barrios-cusco-santiago-y-centro.jpg" alt="Barrios más peligrosos de Santiago y el Centro: Av. Antonio Lorena y calle Belén, 192 denuncias; Plaza Mayor y Av. El Sol, 170; Huancaro y Erapata, 40; A.H. Ayuda Mutua, 11." loading="lazy"></figure>

<figure class="cs-lamina"><img src="/assets/img/articulos/barrios-cusco-cultura-y-wanchaq.jpg" alt="Barrios más peligrosos de la Av. de la Cultura y Wanchaq: Mariscal Gamarra y Av. de la Cultura, 259 denuncias; Av. Collasuyo y Av. Los Incas, 245; Alameda Pachacuteq y Terminal, 219; Velasco Astete, Micaela Bastidas y Viva el Perú, 44." loading="lazy"></figure>

<figure class="cs-lamina"><img src="/assets/img/articulos/barrios-cusco-san-sebastian-y-san-jeronimo.jpg" alt="Barrios más peligrosos de San Sebastián y San Jerónimo: Av. Cusco y primer paradero, 32 denuncias; San Jerónimo centro, 17; Av. de la Cultura y Sol de Oro, 10." loading="lazy"></figure>

## Lo que el mapa nos dice

La inseguridad en el Cusco tiene dos caras. Una es visible: el hurto y el robo en los ejes comerciales y de tránsito. La otra es menos visible y más frecuente: la violencia contra la mujer y la familia. Las políticas de seguridad que solo piensan en cámaras y serenazgo atienden la primera y dejan de lado la segunda.

Conocer dónde ocurre cada tipo de delito permite diseñar respuestas distintas para cada barrio. Ese es el sentido de mirar la ciudad por sectores.

## ¿Qué pasó con Zarzuela o Picchu?

Ambos son sectores tradicionalmente conocidos como peligrosos; sin embargo, no figuran en nuestro mapa. Hay diferentes razones, algunas objetivas y otras metodológicas.

Primero, las objetivas, en particular en el caso de Zarzuela: esa percepción viene de años atrás, pero en años más recientes la consolidación urbana, la llegada de servicios y una mejor infraestructura vial y equipamiento urbano han hecho que disminuyan los casos de inseguridad ciudadana. Sin embargo, en la memoria colectiva del cusqueño aún continúa.

<div class="cs-tabla-caja"><table class="cs-tabla">
  <thead><tr><th>Barrio</th><th class="num">Denuncias</th><th class="num">Con ubicación precisa</th><th class="num ocultable">En punto por defecto</th></tr></thead>
  <tbody>
    <tr><td>Zarzuela (Alta y Baja, Santiago)</td><td class="num">99</td><td class="num">16 (16 %)</td><td class="num ocultable">83</td></tr>
    <tr><td>Picchu (Alto, La Rinconada, San Isidro)</td><td class="num">92</td><td class="num">2 (2 %)</td><td class="num ocultable">90</td></tr>
    <tr><td>Promedio de la base</td><td class="num">-</td><td class="num">40 %</td><td class="num ocultable">60 %</td></tr>
  </tbody>
</table></div>
<p class="cs-nota-tabla">Fuente: DGIS-Mininterior, enero a setiembre de 2025. Elaboración: Ciudad Sur.</p>

Las pocas denuncias que sí tienen ubicación (16 de Zarzuela y 2 de Picchu) caen fuera de los 12 barrios. Ninguno de los dos quedó dentro de un sector delimitado.

El 84 % de los casos de Zarzuela y el 98 % de los de Picchu terminaron en el punto por defecto del distrito y no en una ubicación precisa. Para el mapa, estos barrios son casi invisibles.

## Ranking por distritos

Finalmente, si hacemos un ranking de los distritos más peligrosos considerando todas las denuncias, las que tienen ubicación precisa y las que no, el resultado es el siguiente:

<div class="cs-tabla-caja"><table class="cs-tabla">
  <thead><tr><th>#</th><th>Distrito</th><th>Denuncias</th><th class="num">VMF</th><th class="num">Hurto y robo</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Cusco</td><td><span class="cs-barra" style="width:5.5rem"></span>3 904</td><td class="num">1 221</td><td class="num">1 156</td></tr>
    <tr><td>2</td><td>Santiago</td><td><span class="cs-barra" style="width:4.6rem"></span>3 271</td><td class="num">1 260</td><td class="num">697</td></tr>
    <tr><td>3</td><td>San Sebastián</td><td><span class="cs-barra" style="width:3.97rem"></span>2 815</td><td class="num">1 191</td><td class="num">501</td></tr>
    <tr><td>4</td><td>Wanchaq</td><td><span class="cs-barra" style="width:3.78rem"></span>2 684</td><td class="num">507</td><td class="num">878</td></tr>
    <tr><td>5</td><td>San Jerónimo</td><td><span class="cs-barra" style="width:2.34rem"></span>1 663</td><td class="num">679</td><td class="num">323</td></tr>
    <tr><td>6</td><td>Saylla</td><td><span class="cs-barra" style="width:.42rem"></span>298</td><td class="num">128</td><td class="num">52</td></tr>
    <tr><td>7</td><td>Poroy</td><td><span class="cs-barra" style="width:.42rem"></span>295</td><td class="num">129</td><td class="num">55</td></tr>
    <tr><td>8</td><td>Ccorca</td><td><span class="cs-barra" style="width:.1rem"></span>23</td><td class="num">9</td><td class="num">5</td></tr>
  </tbody>
</table></div>
<p class="cs-nota-tabla">Fuente: DGIS-Mininterior, enero a setiembre de 2025 (14 953 denuncias). Elaboración: Ciudad Sur.</p>

## Nota metodológica

Base de denuncias policiales de la provincia de Cusco, DGIS-Ministerio del Interior, enero a setiembre de 2025 (14 953 casos). El análisis por barrios usa solo los 5 973 casos con ubicación precisa (40 %). Los barrios se delimitaron con la capa de manzanas del INEI. Para la elaboración de los mapas se usó el software QGIS.

<p class="cs-firma">Un trabajo del Laboratorio Urbano del Cusco de Ciudad Sur.<br>Cómo citar: Ciudad Sur (2026). <i>¿Cuáles son los barrios más peligrosos del Cusco? Geografía de la violencia</i>. Laboratorio Urbano del Cusco. Se permite reproducir citando la fuente.</p>
