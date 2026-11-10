---
title: 'Lo lograron: Cusco sin cusqueños'
author: Ciudad Sur
author_image: /assets/img/articulos/autores/ciudad-sur.png
date: 2026-11-10
category: Actualidad
portada: true
image: /assets/img/articulos/lo-lograron-cusco-sin-cusquenos.jpg
image_caption: 'La Catedral del Cusco en pixel art. Ilustración: Ciudad Sur, Laboratorio urbano del Cusco.'
numero: null
---

<style>
.cs-bajada { font-family: "Montserrat", sans-serif; font-size: 1.12rem; line-height: 1.5; color: #4b2a30; font-weight: 600; text-align: left !important; margin-bottom: 2rem !important; }
.cs-graf { background: #fff; border: 1px solid #e6dcd8; border-radius: 8px; padding: 1.4rem 1.3rem 1rem; margin: 2.2rem 0; font-family: "Montserrat", sans-serif; }
.cs-graf h4 { font-family: "Montserrat", sans-serif; font-size: 1.05rem; font-weight: 700; color: #1d1b1b; margin: 0 0 .25rem; }
.cs-graf .cs-sub { font-size: .85rem; color: #6b6262; margin: 0 0 1rem; text-align: left; line-height: 1.4; }
.cs-fila { display: grid; grid-template-columns: 10.5rem 1fr; align-items: center; gap: .6rem; margin: .38rem 0; font-size: .85rem; }
.cs-fila .cs-et { text-align: right; line-height: 1.15; color: #1d1b1b; }
.cs-fila .cs-pista { position: relative; height: 1.45rem; }
.cs-fila .cs-barra { position: absolute; left: 0; top: 0; bottom: 0; width: 0; border-radius: 0 3px 3px 0; transition: width 1.1s cubic-bezier(.2,.7,.2,1); }
.cs-fila .cs-rango { position: absolute; top: 0; bottom: 0; width: 0; opacity: .35; border-radius: 0 3px 3px 0; transition: width 1.1s cubic-bezier(.2,.7,.2,1), left 1.1s cubic-bezier(.2,.7,.2,1); }
.cs-fila .cs-val { position: absolute; top: 50%; transform: translateY(-50%); left: 0; white-space: nowrap; font-weight: 700; font-size: .85rem; opacity: 0; transition: left 1.1s cubic-bezier(.2,.7,.2,1), opacity .4s .7s; padding-left: .4rem; }
.cs-graf.visto .cs-val { opacity: 1; }
.cs-fila.cs-destacada .cs-et { font-weight: 700; color: #671b27; }
.cs-fila.cs-sep { margin-top: .9rem; }
/* barras divergentes: el cero al centro */
.cs-div .cs-pista { background: linear-gradient(#cfc5bf, #cfc5bf) no-repeat 50% 0 / 1px 100%; }
.cs-div .cs-barra { left: 50%; border-radius: 0; }
.cs-div .cs-barra.neg { left: auto; right: 50%; }
.cs-fuente { font-size: .72rem; color: #8a8080; margin: .9rem 0 0; line-height: 1.45; text-align: left !important; }
.cs-leyenda { display: flex; gap: 1rem; font-size: .78rem; color: #4b4242; margin: -.4rem 0 .8rem; flex-wrap: wrap; }
.cs-leyenda span::before { content: ""; display: inline-block; width: .8rem; height: .8rem; border-radius: 2px; margin-right: .35rem; vertical-align: -1px; background: var(--c); }
.cs-leyenda span.linea::before { height: 3px; vertical-align: 3px; width: 1.1rem; }
.cs-cifras { display: grid; grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); gap: 1rem; margin: 2rem 0; font-family: "Montserrat", sans-serif; }
.cs-cifras div { border-top: 3px solid var(--c, #671b27); padding-top: .5rem; }
.cs-cifras strong { display: block; font-size: 2rem; line-height: 1.1; color: var(--c, #671b27); }
.cs-cifras span { font-size: .82rem; color: #4b4242; line-height: 1.35; display: block; }
.cs-svg { width: 100%; height: auto; display: block; overflow: visible; }
.cs-svg text { font-family: "Montserrat", sans-serif; }
.cs-svg .cs-trazo { stroke-dasharray: var(--l); stroke-dashoffset: var(--l); transition: stroke-dashoffset 1.6s cubic-bezier(.3,.6,.3,1); }
.cs-graf.visto .cs-svg .cs-trazo { stroke-dashoffset: 0; }
.cs-svg .cs-tarde { opacity: 0; transition: opacity .5s 1.3s; }
.cs-graf.visto .cs-svg .cs-tarde { opacity: 1; }
.cs-tabla { width: 100%; border-collapse: collapse; font-size: .8rem; }
.cs-tabla th { text-align: right; font-weight: 600; color: #6b6262; border-bottom: 1px solid #cfc5bf; padding: .35rem .4rem; }
.cs-tabla td { text-align: right; padding: .35rem .4rem; border-bottom: 1px solid #f0e9e6; font-variant-numeric: tabular-nums; }
.cs-tabla th:first-child, .cs-tabla td:first-child { text-align: left; }
.cs-tabla tr.cs-dest td { color: #671b27; font-weight: 700; }
.cs-scroll { overflow-x: auto; }
.cs-limites li { margin-bottom: .45rem; }
.cs-casas-fila { display: grid; grid-template-columns: repeat(10, minmax(0, 1fr)); gap: 6px; margin: .8rem 0 .6rem; }
.cs-casas-fila svg { width: 100%; height: auto; image-rendering: pixelated; opacity: 0; transform: translateY(6px); transition: opacity .35s, transform .35s; }
.cs-graf.visto .cs-casas-fila svg { opacity: 1; transform: none; }
.cs-casas-pie { display: flex; justify-content: space-between; gap: 1rem; font-size: .85rem; margin: 0; text-align: left !important; }
.cs-casas-pie .luz { color: #8a5a12; font-weight: 700; }
.cs-casas-pie .osc { color: #4b2a30; font-weight: 700; text-align: right; }
@media (max-width: 576px) { .cs-casas-fila { grid-template-columns: repeat(5, minmax(0, 1fr)); } }
@media (max-width: 576px) { .cs-fila { grid-template-columns: 7.2rem 1fr; font-size: .78rem; } .cs-graf { padding: 1.1rem .8rem .8rem; } }
@media (prefers-reduced-motion: reduce) { .cs-fila .cs-barra, .cs-fila .cs-rango, .cs-fila .cs-val, .cs-svg .cs-trazo, .cs-svg .cs-tarde { transition: none; } }
</style>

<p class="cs-bajada">El Cercado de Cusco, el distrito del Centro histórico, perdió 17 945 habitantes entre 2017 y 2025. Cruzamos cuatro censos, la migración declarada, la matrícula de cada colegio desde 2009 y miles de anuncios de Airbnb para entender qué pasó. El alquiler turístico no lo explica todo, pero sí una parte que ya no se puede ignorar.</p>

Durante 24 años, el Cercado de Cusco creció. Pasó de 93 187 habitantes en 1993 a 108 950 en 2007 y a 114 691 en 2017. Luego, en solo ocho años, se vació: el censo de 2025 encontró 96 746 personas. **Es una caída de 15,6 %, la tercera más fuerte entre los 153 distritos urbanos grandes del Perú.**

En el mismo periodo, el distrito sumó 12 500 viviendas. Hay más casas y menos gente. Esta nota intenta explicar esa contradicción con datos públicos, y también dice hasta dónde llegan esos datos.

<div class="cs-cifras">
  <div><strong>−17 945</strong><span>habitantes en el Cercado de Cusco entre 2017 y 2025 (−15,6 %)</span></div>
  <div style="--c:#8a5a12"><strong>1 de cada 2</strong><span>viviendas nuevas no tiene a nadie viviendo de forma permanente</span></div>
  <div style="--c:#1f6fa3"><strong>3 150</strong><span>anuncios de Airbnb en el distrito; 1 499 son casas o departamentos enteros</span></div>
  <div style="--c:#5b4a3f"><strong>−21 %</strong><span>niños y adolescentes de 3 a 16 años en el Cercado</span></div>
</div>

## Una caída que no es del método

La primera sospecha razonable es que la caída sea un efecto del cambio de método. El censo de 2017 contó a todas las personas que estaban en el distrito el día del censo, el 22 de octubre, turistas incluidos. El de 2025 contó solo a quienes viven ahí de forma habitual. Comparar las dos cifras directamente sería comparar cosas distintas.

Para corregirlo usamos una pregunta que el censo de 2017 hizo a todas las personas del país: en qué distrito viven de forma permanente. Así se puede contar a los vecinos del Cercado estuvieran donde estuvieran ese día:

- Ese 22 de octubre había **114 630 personas** en el Cercado. De ellas, 104 815 vivían ahí y **9 815 eran de paso**: turistas, visitantes o gente de otros distritos.
- En otros distritos del país se censó a **9 876 vecinos del Cercado** que ese día no estaban en casa.
- Sumando quienes vivían en el Cercado y estaban ahí (104 815) y quienes vivían ahí pero estaban fuera (9 876), los residentes del Cercado en 2017 eran **114 691**.

Los visitantes y los vecinos ausentes casi se cancelaron, así que la cifra de residentes de 2017 es casi la misma que la del día del censo. Comparada con los 96 746 residentes de 2025, la pérdida es real y no un efecto del método.

<div class="cs-graf" id="graf-pob">
  <h4>Treinta años de población del Cercado de Cusco</h4>
  <p class="cs-sub">Habitantes según los cuatro últimos censos.</p>
  <div class="cs-graf-svg"></div>
  <p class="cs-fuente">Fuente: INEI, censos 1993, 2007, 2017 y 2025 (REDATAM). 1993: población de hecho; 2007 y 2017: residentes habituales; 2025: población censada, sin la omisión censal estimada por el INEI. Elaboración propia.</p>
</div>

El Cercado no es el único centro urbano que pierde gente: varios cercados de capitales regionales, algunos con poco turismo, también caen. Por eso no basta con mirar a Cusco solo.

<div class="cs-graf" id="graf-ranking">
  <h4>Los distritos urbanos que más población perdieron</h4>
  <p class="cs-sub">Cambio de población 2017-2025. Distritos urbanos del Perú con 20 000 habitantes o más y límites sin cambios.</p>
  <div class="cs-filas"></div>
  <p class="cs-fuente">Fuente: INEI, censos 2017 y 2025. Población 2017 de residentes habituales; 2025, población censada. Elaboración propia.</p>
</div>

## Más viviendas, menos vecinos

Las viviendas particulares del Cercado pasaron de 29 851 a 42 355 (+42 %). Ese aumento, por sí solo, no es raro: en todo el país las viviendas crecieron 36 % entre los dos censos, en parte porque el censo de 2025 las contó de forma más fina. Una casona dividida en varios departamentos con entrada propia suma varias viviendas sin que se haya construido nada.

Lo que distingue al Cusco está en otra parte. Los hogares crecieron apenas 8 % (frente a una mediana urbana de 24 %; solo siete distritos sumaron menos), y en cada hogar vive menos gente: de 3,7 a 2,9 personas. Y, sobre todo, **la mitad de las viviendas nuevas no tiene residentes permanentes**.

<div class="cs-graf cs-casas">
  <h4>De cada 10 viviendas nuevas del Cercado…</h4>
  <div class="cs-casas-fila" aria-label="Cinco casas con las ventanas iluminadas y cinco a oscuras"></div>
  <p class="cs-casas-pie"><span class="luz">5 tienen a alguien viviendo</span> <span class="osc">5 no tienen residentes permanentes</span></p>
  <p class="cs-fuente">Entre 2017 y 2025 el Cercado sumó unas 12 500 viviendas; 5 977 más tienen residentes y el resto son de uso ocasional (3 640), están cerradas o en obra (1 716) o en alquiler o venta (1 167). Fuente: INEI, censos 2017 y 2025. Ilustración: Ciudad Sur.</p>
</div>

<div class="cs-graf" id="graf-viv">
  <h4>¿Qué pasó con las 12 500 viviendas nuevas?</h4>
  <p class="cs-sub">Viviendas particulares del Cercado de Cusco según su condición de ocupación.</p>
  <div class="cs-leyenda"><span style="--c:#c9b8b2">2017</span><span style="--c:#671b27">2025</span></div>
  <div class="cs-filas"></div>
  <p class="cs-fuente">Fuente: INEI, censos 2017 (pregunta C2P2) y 2025 (S1_P16). Solo viviendas particulares: en 2017 el censo registró además 305 viviendas colectivas, como hoteles y conventos, que en 2025 dejó de anotar como viviendas. Elaboración propia.</p>
</div>

Las viviendas de uso ocasional se multiplicaron por ocho: de 523 a 4 163. El censo no pregunta para qué se usan; el INEI las define como viviendas que se ocupan solo por temporadas y donde nadie vive de forma habitual. En el centro del Cusco, la explicación más probable es el alquiler turístico, aunque la categoría también incluye segundas casas.

## Llega el Airbnb

Descargamos los anuncios de Airbnb de toda la región disponibles para las noches del 18 al 20 de noviembre de 2026 y asignamos cada uno a su distrito. En la ciudad, el orden es nítido: **donde hay más alquiler turístico por vivienda, más población se perdió**.

<div class="cs-graf" id="graf-dist">
  <h4>Airbnb y población en los distritos de la ciudad</h4>
  <p class="cs-sub">A la izquierda, anuncios de Airbnb por cada 1 000 viviendas. A la derecha, cambio de población 2017-2025.</p>
  <div class="cs-scroll">
  <table class="cs-tabla">
    <thead><tr><th>Distrito</th><th>Anuncios</th><th>Viviendas enteras</th><th>Por 1 000 viviendas</th><th>Población 2017</th><th>Población 2025</th><th>Cambio</th></tr></thead>
    <tbody>
      <tr class="cs-dest"><td>Cercado de Cusco</td><td>3 150</td><td>1 499</td><td>74,4</td><td>114 691</td><td>96 746</td><td>−15,6 %</td></tr>
      <tr><td>Wanchaq</td><td>1 313</td><td>826</td><td>54,1</td><td>58 271</td><td>52 803</td><td>−9,4 %</td></tr>
      <tr><td>Santiago</td><td>440</td><td>273</td><td>11,4</td><td>95 551</td><td>91 039</td><td>−4,7 %</td></tr>
      <tr><td>San Sebastián</td><td>257</td><td>168</td><td>4,5</td><td>112 036</td><td>124 106</td><td>+10,8 %</td></tr>
      <tr><td>San Jerónimo</td><td>75</td><td>52</td><td>2,6</td><td>56 391</td><td>67 907</td><td>+20,4 %</td></tr>
    </tbody>
  </table>
  </div>
  <p class="cs-fuente">Fuente: anuncios de Airbnb descargados el 28 de octubre de 2026 para las noches del 18 al 20 de noviembre; INEI, censos 2017 y 2025. Las cifras de Airbnb son un mínimo: los anuncios ocupados esas noches no aparecen. Elaboración propia.</p>
</div>

La pregunta siguiente es cuándo llegó. Airbnb no muestra la fecha de alta de un anuncio, pero su número de identificación crece con el tiempo. Lo calibramos con casi 100 000 anuncios de Santiago, Ciudad de México y Río de Janeiro cuya primera reseña conocemos; fechados así, el error es de dos a cuatro semanas.

<div class="cs-graf" id="graf-airbnb">
  <h4>Viviendas enteras de Airbnb en el Cercado de Cusco</h4>
  <p class="cs-sub">Stock estimado al 1 de enero de cada año. La banda muestra el rango según cuántos anuncios se retiran cada año (10 a 15 %).</p>
  <div class="cs-graf-svg"></div>
  <p class="cs-fuente">Fecha de creación estimada a partir del número de cada anuncio, calibrada con Inside Airbnb (septiembre de 2026). La tasa de bajas se deduce del crecimiento de anuncios activos que reporta Airbtics. Elaboración propia.</p>
</div>

En el censo de 2017 había entre 208 y 350 viviendas enteras ofrecidas en Airbnb en el Cercado; en el de 2025, entre 1 160 y 1 241. **El auge cae justo entre los dos censos.** Hoy son 1 499.

Fuera de la ciudad la regla no se cumple. Urubamba, Ollantaytambo y Pisac tienen mucho alquiler turístico y aun así ganaron habitantes: el Valle Sagrado atrae turistas y también gente que llega a vivir. El efecto que describimos es propio del centro urbano del Cusco, no una ley general.

## La escuela del barrio

El censo solo llega al nivel de distrito. Para bajar al barrio usamos la matrícula de cada colegio, que el Ministerio de Educación registra todos los años. Primero miramos la población en edad escolar: entre 2017 y 2025, los niños y adolescentes de 3 a 16 años del Cercado cayeron 21 %, más que la población total. En los distritos con poco Airbnb, en cambio, crecieron.

<div class="cs-graf" id="graf-ninos">
  <h4>Niños y adolescentes de 3 a 16 años</h4>
  <p class="cs-sub">Cambio entre 2017 y 2025, por distrito de la ciudad.</p>
  <div class="cs-filas cs-div"></div>
  <p class="cs-fuente">Fuente: INEI, censos 2017 (C5P41) y 2025 (S5_P3), población por edad simple. Elaboración propia.</p>
</div>

Luego contamos las viviendas enteras de Airbnb a menos de 500 metros de cada uno de los 772 colegios de educación básica de la ciudad y seguimos su matrícula desde 2009. Hasta 2014, los tres grupos crecían al mismo ritmo. Desde 2015, los colegios rodeados de alquiler turístico se estancaron mientras el resto seguía creciendo.

<div class="cs-graf" id="graf-cole">
  <h4>Matrícula según el Airbnb cercano</h4>
  <p class="cs-sub">Alumnos de inicial, primaria y secundaria, con 2012 = 100, según las viviendas enteras de Airbnb a 500 metros del colegio.</p>
  <div class="cs-leyenda"><span class="linea" style="--c:#1f6fa3">0 a 9 anuncios cerca</span><span class="linea" style="--c:#b07a1f">10 a 49</span><span class="linea" style="--c:#671b27">50 o más</span></div>
  <div class="cs-graf-svg"></div>
  <p class="cs-fuente">Fuente: MINEDU, Censo Educativo 2009-2025 (ESCALE); 2021 sin tabla de matrícula comparable. Anuncios de Airbnb de noviembre de 2026. Elaboración propia.</p>
</div>

En inicial, el nivel más ligado al barrio porque los niños pequeños estudian cerca de casa, la matrícula se duplicó donde casi no hay Airbnb (+105 %) y apenas se movió donde hay más (+7 %). De los colegios que tenían al menos 20 alumnos en 2012 y hoy ya no tienen matrícula, **20 están en la zona con más Airbnb y uno en la de menos**.

Aquí hay que ser cuidadosos. En 2015, cuando los colegios del centro empezaron a quedarse atrás, en el Cercado casi no había Airbnb (entre 7 y 14 viviendas enteras). Lo que sí crecía era el turismo en general, y donde hoy hay Airbnb también están los hoteles. Cuando comparamos cada colegio consigo mismo y solo con colegios a la misma distancia de la Plaza de Armas, la caída de matrícula se mantiene (−8 % en 2025 por cada desviación estándar de turismo cercano), pero deja de ser estadísticamente distinguible de cero. Lo que sí se repite en todas las pruebas es el momento: la pérdida se acelera desde 2020, cuando crece el Airbnb. La matrícula mide la turistificación del centro en su conjunto, no al Airbnb por sí solo.

## A dónde se fue la gente

El censo de 2025 preguntó dónde vivía cada persona cinco años antes. De quienes vivían en el Cercado en 2020, 76 611 siguen ahí y **35 473 hoy viven en otro distrito**. En el mismo periodo llegaron 15 270, así que el saldo es de 20 203 personas menos.

<div class="cs-graf" id="graf-dest">
  <h4>¿Dónde viven hoy los que vivían en el Cercado en 2020?</h4>
  <p class="cs-sub">Personas de 5 años o más que en 2020 vivían en el Cercado de Cusco y en 2025 vivían en otro lugar.</p>
  <div class="cs-filas"></div>
  <p class="cs-fuente">Fuente: INEI, Censo 2025, pregunta «Hace 5 años, en (mes) del 2020, ¿en qué distrito vivía?» (S5P5DI). Elaboración propia.</p>
</div>

Una parte se mudó a la periferia de la misma ciudad: San Sebastián (3 149), Wanchaq (2 131), Santiago (1 889), San Jerónimo (1 450) y Poroy (1 222). Pero la mayoría salió de la provincia, sobre todo hacia Lima, Arequipa y Madre de Dios. El censo dice dónde vive la gente, no por qué se mudó: entre quienes se fueron hay también estudiantes, trabajadores y personas que volvieron a su tierra.

## ¿Quiénes se fueron?

Si se mira la población por edad, la pérdida tiene un rostro claro: **jóvenes y niños**. Entre 2017 y 2025, el Cercado perdió 9 292 personas de 15 a 29 años (−28 %) y 2 974 niños de 5 a 14 (−17 %). Las personas de 60 años o más, en cambio, aumentaron 16 %. En San Sebastián y San Jerónimo, los distritos que reciben a quienes se van, los jóvenes se mantienen y los niños en edad escolar crecen.

<div class="cs-graf" id="graf-edad">
  <h4>¿Quiénes se fueron del Cercado?</h4>
  <p class="cs-sub">Cambio de población por grupo de edad entre 2017 y 2025.</p>
  <div class="cs-leyenda"><span style="--c:#671b27">Cercado de Cusco</span><span style="--c:#1f6fa3">San Sebastián y San Jerónimo</span></div>
  <div class="cs-filas cs-div"></div>
  <p class="cs-fuente">Fuente: INEI, censos 2017 (C5P41) y 2025 (S5_P3), población por edad simple. Elaboración propia.</p>
</div>

La caída de niños de 0 a 4 años ocurre en toda la ciudad (y en todo el país), porque nacen menos niños; no es propia del centro. Lo propio del Cercado es la salida de jóvenes en edad de formar un hogar y de familias con hijos en edad escolar. Una parte de esos jóvenes pueden ser estudiantes universitarios que en 2017 vivían cerca de sus universidades y en 2025 ya no; el censo no permite distinguirlos.

## Otras explicaciones posibles

Un análisis serio no solo muestra lo que encaja. Estas son las explicaciones alternativas que revisamos:

- **La ciudad crece hacia afuera.** Con imágenes satelitales (cobertura del suelo de Esri e Impact Observatory, 10 metros por píxel) medimos el suelo construido dentro del Cercado. Entre 2017 y 2025 se sumaron unas 367 hectáreas construidas, pero solo 4 están a menos de un kilómetro de la Plaza de Armas: el 64 % está a más de tres kilómetros. La vivienda nueva, y más barata, está en la periferia. Esto puede explicar parte de la mudanza con o sin turismo, y probablemente ambas cosas se refuerzan.
- **Menos nacimientos y hogares más pequeños.** Pasa en todo el país. Por eso comparamos el Cercado con los demás distritos urbanos: los hogares del Cusco crecieron mucho menos que la mediana (8 % frente a 24 %).
- **La pandemia.** Entre 2020 y 2021 el turismo se detuvo y muchas familias que vivían de él pudieron mudarse o volver a sus provincias. El censo de 2025 no permite separar este golpe del resto.
- **El cambio de método del censo.** Lo descartamos para la población (ver arriba), pero puede inflar el aumento de viviendas vacías, porque el censo de 2025 duró casi tres meses y el de 2017 un solo día.

## ¿Conviene más alquilar a turistas?

La literatura sobre gentrificación turística sostiene que el alquiler temporal desplaza a los vecinos porque un inmueble rinde más alquilado por noches que a una familia: lo que se llama «brecha de renta» (Wachsmuth y Weisler, 2018). Quisimos medirla para el Cusco y encontramos menos datos de los que esperábamos.

- **Alquiler a familias.** En los dos portales inmobiliarios más grandes del país, Urbania y Adondevivir, había solo 23 avisos de alquiler de cualquier tipo en la provincia del Cusco el 10 de noviembre de 2026. Un departamento amoblado de dos dormitorios y 80 m² se ofrece en S/ 1 700 a 2 500 al mes en Wanchaq y el Cercado; uno sin amoblar de tres dormitorios, en S/ 1 100 a 1 200 en San Sebastián. Son muy pocos avisos para calcular un precio típico: el alquiler cusqueño se mueve sobre todo en redes sociales y de boca en boca.
- **Ingreso en Airbnb.** Las estimaciones públicas de ingresos de Airbnb para el Cusco vienen de empresas privadas que modelan reservas, y no coinciden entre sí; no permiten calcular cuánto gana un departamento típico. Sí dan tres datos útiles: la ocupación media ronda el 48 %, los anuncios cerca del Centro histórico cobran alrededor de 49 % más por noche que el promedio de la ciudad, y **menos del 1 % de los anuncios muestra una licencia** de alquiler de corta estancia (Airbtics, octubre de 2026).

Con datos públicos, entonces, no podemos medir la brecha de renta en el Cusco. Pero hay una señal llamativa: dos avisos de San Blas ofrecen departamentos amoblados en S/ 2 000 al mes **«exclusivo para personas interesadas en trabajar la propiedad como Airbnb»**. Es decir, hay quien alquila a largo plazo para subarrendar a turistas, porque espera ganar más que eso.

## Cuánto explica el turismo

Dos cálculos independientes acotan el efecto del alquiler turístico:

- **Con Airbnb.** Entre los dos censos se sumaron entre 891 y 952 viviendas enteras en Airbnb. Con un hogar típico de hoy (2,87 personas), ahí vivirían entre 2 559 y 2 734 personas: entre 14 y 15 % de la pérdida.
- **Con el censo.** La proporción de viviendas de uso ocasional subió en todo el país, en parte por el cambio de método. Si en el Cusco hubiera subido como en el distrito urbano típico, habría 1 943 viviendas ocasionales menos, equivalentes a 5 581 personas: el 31 % de la pérdida.

<div class="cs-graf" id="graf-explica">
  <h4>¿Qué parte de la pérdida explica el alquiler turístico?</h4>
  <p class="cs-sub">Personas que vivirían en las viviendas que pasaron al uso turístico, frente a los 17 945 habitantes perdidos.</p>
  <div class="cs-filas"></div>
  <p class="cs-fuente">Cálculos propios con INEI (censos 2017 y 2025) y anuncios de Airbnb. La parte clara de la barra indica el rango de cada estimación.</p>
</div>

**El alquiler turístico explica entre un sexto y un tercio de la caída.** El resto viene de hogares cada vez más pequeños, de familias que se mudan a la periferia o a otras regiones, de viviendas que quedaron en venta, en obras o cerradas, y de golpes que solo sufrió el Cusco, como la pandemia en una economía que vive del turismo.

## Qué dicen las normas

- **El Plan Maestro del Centro Histórico** (Ordenanzas Municipales 24 y 25 de 2018 de la Municipalidad Provincial del Cusco) regula alturas, volúmenes y usos en el centro. Toda obra nueva o remodelación necesita, para su licencia, la opinión favorable del delegado del Ministerio de Cultura. Construir vivienda nueva en el centro es, por eso, más difícil y lento; convertir una existente en alojamiento turístico, en cambio, no requiere obras.
- **No hay una norma nacional sobre el alquiler temporal de viviendas.** Un dictamen que acumula los proyectos de ley 5467/2022, 9084/2024 y 9362/2024 propone crear un Registro Digital del Arrendamiento Turístico a cargo del MINCETUR; fue aprobado en las comisiones de Defensa del Consumidor (diciembre de 2024) y de Comercio Exterior y Turismo. Hasta donde pudimos verificar, no ha sido aprobado por el Pleno. La Nueva Ley General de Turismo (Ley 32392) y su reglamento de enero de 2026 tampoco lo regulan de forma específica.
- **No encontramos una ordenanza del Cusco** sobre alquiler temporal de viviendas. Una vivienda del centro puede pasar a recibir turistas sin un registro propio, aunque en principio debería contar con licencia de funcionamiento como hospedaje. Es información que corresponde pedir a la Municipalidad Provincial del Cusco.

## Lo que está en juego

Las piezas encajan en el tiempo y en el espacio. El Cusco crecía; cayó después de 2017 más que casi cualquier otro distrito urbano del país; el Airbnb del Cercado se multiplicó justo en ese periodo; y los distritos con más alquiler turístico y más hoteles son los que más habitantes perdieron. Los colegios del centro empezaron a vaciarse antes, desde 2015, cuando lo que crecía era el turismo en general.

Los estudios urbanos llaman **gentrificación turística** a la transformación de un barrio cuando el turismo reemplaza a la vida residencial: suben los usos para visitantes y bajan los vecinos (Gotham, 2005). En los centros históricos europeos, el alquiler vacacional se volvió el principal frente de ese proceso (Cócola-Gant, 2016). Y el desplazamiento no siempre es un desalojo: también es «excluyente», cuando las familias nuevas ya no pueden llegar, o es una «presión» que hace cada vez más difícil quedarse (Marcuse, 1985).

Lo que vemos en el Cercado se parece más a esas dos últimas formas: los que más se van son los jóvenes en edad de formar un hogar y las familias con niños, mientras crece la población mayor. Es la primera señal de un proceso de gentrificación turística, no su prueba final.

<div class="cs-graf">
  <h4>Lo que todavía no sabemos</h4>
  <ul class="cs-limites" style="font-size:.88rem;margin:.6rem 0 0;padding-left:1.1rem">
    <li>Si los alquileres residenciales del centro subieron, y cuánto. No hay datos públicos suficientes.</li>
    <li>Quién convierte las viviendas en alojamiento turístico: inversionistas de fuera o los propios dueños cusqueños que se mudan a la periferia.</li>
    <li>Por qué se mudó cada familia. El censo dice dónde vive la gente, no por qué se fue.</li>
    <li>Cuántos de los jóvenes que se fueron eran estudiantes universitarios.</li>
    <li>Qué pasa dentro del Centro histórico, porque el censo solo llega al distrito.</li>
  </ul>
</div>

Responderlas requiere información que solo tienen la Municipalidad Provincial del Cusco y el INEI, y trabajo de campo. Son las siguientes preguntas de este laboratorio. Los datos y el método de esta nota están en el [anexo metodológico](/metodologia/cusco-sin-cusquenos), con tablas descargables.

***

**Límites de este análisis.**

<ul class="cs-limites">
<li>El censo se publica solo por distrito. No es posible aislar el Centro histórico del resto del Cercado de Cusco, que incluye barrios residenciales y una zona rural al norte.</li>
<li>«Uso ocasional» es la condición que anotó el empadronador. No equivale a Airbnb: incluye segundas viviendas.</li>
<li>Airbnb solo muestra anuncios con disponibilidad en las fechas buscadas, así que las cifras son un mínimo. No incluye otras plataformas como Booking.</li>
<li>El censo de 2017 se hizo en un día y el de 2025 duró casi tres meses. Si el segundo encontró mejor las viviendas vacías, parte del aumento sería de método.</li>
<li>Los colegios del centro reciben alumnos de toda la ciudad, así que su matrícula no mide solo a los vecinos. Airbnb y hoteles se concentran en las mismas cuadras, y con los colegios no se puede separar el efecto de uno y otro.</li>
<li>La fecha de cada anuncio se estima a partir de su número; los anuncios dados de baja ya no se ven.</li>
<li>Los indicadores del mercado de Airbnb son estimaciones de una empresa privada, no reservas reales, y hay muy pocos avisos públicos de alquiler residencial en el Cusco.</li>
</ul>

**Fuentes.** INEI, Censos Nacionales 1993, 2007, 2017 y 2025 (REDATAM), procesados por distrito. MINEDU, Censo Educativo 2009-2025 (ESCALE). Anuncios de Airbnb descargados el 28 de octubre de 2026. Inside Airbnb (Santiago, Ciudad de México y Río de Janeiro, septiembre de 2026). [Airbtics](https://airbtics.com/annual-airbnb-revenue-in-cusco-peru-es), indicadores del mercado de Airbnb en el Cusco (actualizados al 16 de octubre de 2026). Avisos de alquiler de [Urbania](https://urbania.pe/buscar/alquiler-de-propiedades-en-cusco--cusco) y [Adondevivir](https://www.adondevivir.com/departamentos-en-alquiler-en-cusco.html) (10 de noviembre de 2026). Esri e Impact Observatory, cobertura del suelo anual de 10 metros. MINCETUR, Directorio Nacional de Prestadores de Servicios Turísticos. Congreso de la República, [dictamen sobre arrendamiento turístico](https://comunicaciones.congreso.gob.pe/?p=374328). Límites distritales del INEI. Método completo y datos: [anexo metodológico](/metodologia/cusco-sin-cusquenos).

**Referencias.** Cócola-Gant, A. (2016). Holiday rentals: The new gentrification battlefront. *Sociological Research Online*, 21(3). Gotham, K. F. (2005). Tourism gentrification: The case of New Orleans' Vieux Carré. *Urban Studies*, 42(7), 1099-1121. Marcuse, P. (1985). Gentrification, abandonment, and displacement. *Journal of Urban and Contemporary Law*, 28, 195-240. Wachsmuth, D. y Weisler, A. (2018). Airbnb and the rent gap: Gentrification through the sharing economy. *Environment and Planning A*, 50(6), 1147-1170.

*Esta nota acompaña el video y el carrusel «Lo lograron: Cusco sin cusqueños», publicados en las redes de* [_@ciudad.sur_](https://www.instagram.com/ciudad.sur/). *Ciudad Sur, Laboratorio urbano del Cusco.*

<script>
(function () {
  var fmt = function (n) { return Math.round(n).toLocaleString("es-PE").replace(/[,.]/g, " "); };
  var dec = function (x) { return x.toFixed(1).replace(".", ","); };
  var BORD = "#671b27", AZUL = "#1f6fa3", OCRE = "#b07a1f", GRIS = "#9a8f88", CLARO = "#c9b8b2", TINTA = "#1d1b1b";

  // ---------- barras horizontales ----------
  function pintar(caja, filas, max, opc) {
    opc = opc || {};
    var cont = caja.querySelector(".cs-filas");
    cont.innerHTML = "";
    filas.forEach(function (f) {
      var d = document.createElement("div");
      d.className = "cs-fila" + (f.dest ? " cs-destacada" : "") + (f.sep ? " cs-sep" : "");
      var neg = opc.div && f.v < 0;
      d.innerHTML = '<div class="cs-et">' + f.et + '</div><div class="cs-pista"><div class="cs-barra' + (neg ? " neg" : "") + '" style="background:' + f.c + '"></div>' +
        (f.hi ? '<div class="cs-rango" style="background:' + f.c + '"></div>' : "") + '<div class="cs-val" style="color:' + f.c + '">' + f.txt + "</div></div>";
      d._f = f; cont.appendChild(d);
    });
    caja._max = max; caja._div = !!opc.div;
  }
  function animarBarras(caja) {
    var max = caja._max;
    caja.querySelectorAll(".cs-fila").forEach(function (d) {
      var f = d._f, b = d.querySelector(".cs-barra"), r = d.querySelector(".cs-rango"), val = d.querySelector(".cs-val");
      if (caja._div) {                       // escala divergente: la mitad del ancho para cada lado
        var w = 40 * Math.abs(f.v) / max;
        b.style.width = w + "%";
        val.style.left = f.v < 0 ? "calc(50% + 4px)" : "calc(" + (50 + w) + "% + 2px)";   // los negativos rotulan al otro lado del cero
        return;
      }
      var k = window.innerWidth < 576 ? 58 : 76, lo = k * f.v / max, hi = f.hi ? k * f.hi / max : lo;
      b.style.width = Math.max(lo, f.v > 0 ? 0.4 : 0) + "%";
      if (r) { r.style.left = lo + "%"; r.style.width = (hi - lo) + "%"; }
      val.style.left = "calc(" + Math.max(hi, 0.4) + "% + 2px)";
    });
  }

  // ---------- líneas en SVG ----------
  var NS = "http://www.w3.org/2000/svg";
  function el(tag, at, padre) { var e = document.createElementNS(NS, tag); for (var k in at) e.setAttribute(k, at[k]); if (padre) padre.appendChild(e); return e; }
  function lineas(caja, o) {
    var Wd = 640, Hd = o.alto || 300, ml = 46, mr = o.mr || 110, mt = 14, mb = 30;
    var svg = el("svg", { viewBox: "0 0 " + Wd + " " + Hd, class: "cs-svg", role: "img", "aria-label": o.aria });
    var x = function (v) { return ml + (v - o.x0) / (o.x1 - o.x0) * (Wd - ml - mr); };
    var y = function (v) { return mt + (o.y1 - v) / (o.y1 - o.y0) * (Hd - mt - mb); };
    o.yt.forEach(function (t) {
      el("line", { x1: ml, x2: Wd - mr, y1: y(t), y2: y(t), stroke: "#eee6e2" }, svg);
      el("text", { x: ml - 6, y: y(t) + 4, "text-anchor": "end", "font-size": 11, fill: "#8a8080" }, svg).textContent = o.ft ? o.ft(t) : t;
    });
    o.xt.forEach(function (t) { el("text", { x: x(t), y: Hd - 8, "text-anchor": "middle", "font-size": 11, fill: "#6b6262" }, svg).textContent = t; });
    if (o.vlinea) {
      el("line", { x1: x(o.vlinea), x2: x(o.vlinea), y1: mt, y2: Hd - mb, stroke: "#cfc5bf", "stroke-dasharray": "0" }, svg);
      el("text", { x: x(o.vlinea) + 4, y: mt + 10, "font-size": 10.5, fill: "#8a8080" }, svg).textContent = o.vtexto || "";
    }
    (o.bandas || []).forEach(function (b) {
      var d = "M" + b.pts.map(function (p) { return x(p[0]) + "," + y(p[2]); }).join("L") +
              "L" + b.pts.slice().reverse().map(function (p) { return x(p[0]) + "," + y(p[1]); }).join("L") + "Z";
      el("path", { d: d, fill: b.c, "fill-opacity": .18, class: "cs-tarde" }, svg);
    });
    o.series.forEach(function (s) {
      var d = "M" + s.pts.map(function (p) { return x(p[0]).toFixed(1) + "," + y(p[1]).toFixed(1); }).join("L");
      var p = el("path", { d: d, fill: "none", stroke: s.c, "stroke-width": s.w || 3, "stroke-linejoin": "round", "stroke-linecap": "round", class: "cs-trazo" }, svg);
      s.pts.forEach(function (q, i) {
        if (s.puntos) el("circle", { cx: x(q[0]), cy: y(q[1]), r: 4.5, fill: s.c, stroke: "#fff", "stroke-width": 1.5, class: "cs-tarde" }, svg);
        if (s.etiq && s.etiq[i]) el("text", { x: x(q[0]), y: y(q[1]) + (s.etiq[i].dy || -10), "text-anchor": "middle", "font-size": 12, "font-weight": 700, fill: TINTA, class: "cs-tarde" }, svg).textContent = s.etiq[i].t;
      });
      var u = s.pts[s.pts.length - 1];
      if (s.fin) {
        var t = el("text", { x: x(u[0]) + 8, y: y(u[1]) + 4 + (s.dyfin || 0), "font-size": 12, "font-weight": 700, fill: s.c, class: "cs-tarde" }, svg);
        t.textContent = s.fin;
      }
      requestAnimationFrame(function () { p.style.setProperty("--l", p.getTotalLength()); });
    });
    caja.querySelector(".cs-graf-svg").appendChild(svg);
  }

  // 1. población del Cercado
  lineas(document.getElementById("graf-pob"), {
    aria: "Población del Cercado de Cusco: 93 187 en 1993, 108 950 en 2007, 114 691 en 2017 y 96 746 en 2025.",
    x0: 1993, x1: 2025, y0: 85000, y1: 120000, mr: 30, xt: [1993, 2007, 2017, 2025], yt: [90000, 100000, 110000, 120000], ft: fmt,
    series: [{ c: BORD, w: 3.5, puntos: true, pts: [[1993, 93187], [2007, 108950], [2017, 114691], [2025, 96746]],
               etiq: [{ t: "93 187", dy: 20 }, { t: "108 950" }, { t: "114 691" }, { t: "96 746", dy: 20 }] }]
  });

  // 2. ranking de distritos urbanos
  var R = [["Yanacancha (Pasco)", -21.8], ["Iquitos (Loreto)", -20.0], ["Cercado de Cusco", -15.6], ["Puno", -14.0], ["Alto de la Alianza (Tacna)", -13.9],
           ["Arequipa (Cercado)", -10.3], ["Juliaca", -9.7], ["Wanchaq (Cusco)", -9.4], ["Chaupimarca (Pasco)", -8.3], ["Piura", -8.2]];
  pintar(document.getElementById("graf-ranking"), R.map(function (r) {
    var cus = r[0] === "Cercado de Cusco";
    return { et: r[0], v: -r[1], txt: "−" + dec(-r[1]) + " %", c: cus ? BORD : GRIS, dest: cus };
  }), 21.8);

  // 4. condición de ocupación
  var V = [["Con residentes presentes", 26172, 32716], ["Con residentes ausentes", 1603, 1036], ["De uso ocasional", 523, 4163],
           ["En alquiler o venta", 230, 1397], ["En construcción o reparación", 406, 852], ["Cerrada o abandonada", 917, 2187]];
  var fv = [];
  V.forEach(function (r, i) {
    fv.push({ et: r[0], v: r[1], txt: fmt(r[1]), c: CLARO, sep: i > 0 });
    fv.push({ et: "", v: r[2], txt: fmt(r[2]), c: r[0] === "De uso ocasional" ? BORD : "#8f5560", dest: r[0] === "De uso ocasional" });
  });
  pintar(document.getElementById("graf-viv"), fv, 32716);

  // 5. stock de Airbnb
  var A = [[2015, 7, 14], [2016, 41, 76], [2017, 113, 199], [2018, 214, 356], [2019, 305, 479], [2020, 450, 667], [2021, 446, 624],
           [2022, 530, 701], [2023, 631, 787], [2024, 779, 918], [2025, 979, 1090], [2026, 1217, 1279], [2026.88, 1499, 1499]];
  lineas(document.getElementById("graf-airbnb"), {
    aria: "Viviendas enteras de Airbnb en el Cercado de Cusco: de menos de 20 en 2015 a 1 499 en noviembre de 2026.",
    x0: 2015, x1: 2027, y0: 0, y1: 1600, xt: [2015, 2017, 2019, 2021, 2023, 2025, 2027], yt: [0, 400, 800, 1200, 1600], ft: fmt, mr: 70,
    vlinea: 2017.8, vtexto: "Censo 2017",
    bandas: [{ c: BORD, pts: A }],
    series: [{ c: BORD, w: 3.5, pts: A.map(function (p) { return [p[0], (p[1] + p[2]) / 2]; }), fin: "1 499" }]
  });

  // 6. niños 3 a 16 años
  var N = [["Cercado de Cusco", -21.2], ["Wanchaq", -19.2], ["Santiago", -9.2], ["San Sebastián", 1.2], ["San Jerónimo", 9.3]];
  pintar(document.getElementById("graf-ninos"), N.map(function (r) {
    return { et: r[0], v: r[1], txt: (r[1] < 0 ? "−" : "+") + dec(Math.abs(r[1])) + " %", c: r[1] < 0 ? BORD : AZUL, dest: r[0] === "Cercado de Cusco" };
  }), 21.2, { div: true });

  // 7. matrícula por exposición
  var AN = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2022, 2024, 2025];
  var baja = [103.1, 102.2, 100, 100, 101.6, 105, 110.2, 115.3, 118.5, 122.4, 128.6, 136.1, 141.4, 143.5, 148.6];
  var media = [95.3, 95.5, 93.1, 100, 102.8, 104, 112.4, 116.4, 120.2, 124.1, 129.2, 137.4, 138, 136.4, 141.7];
  var alta = [105.5, 105.2, 104, 100, 104.6, 104.2, 106.1, 109.4, 108.6, 108.2, 110.1, 111.3, 109.8, 112.9, 113.6];
  var zip = function (v) { return AN.map(function (a, i) { return [a, v[i]]; }); };
  lineas(document.getElementById("graf-cole"), {
    aria: "Desde 2012, la matrícula creció 49 % en colegios con poco Airbnb cerca y 14 % en los que tienen 50 o más anuncios cerca.",
    x0: 2009, x1: 2025, y0: 90, y1: 150, xt: [2009, 2012, 2015, 2018, 2021, 2025], yt: [90, 100, 110, 120, 130, 140, 150],
    series: [{ c: AZUL, pts: zip(baja), fin: "+49 %", dyfin: -4 }, { c: OCRE, pts: zip(media), fin: "+42 %", dyfin: 8 }, { c: BORD, w: 3.5, pts: zip(alta), fin: "+14 %" }]
  });

  // 7b. población por edad
  var E = [["0 a 4 años", -43.3, -25.7], ["5 a 14", -16.9, 8.6], ["15 a 29", -28.3, -0.3], ["30 a 44", -13.0, 19.9], ["45 a 59", -3.4, 35.5], ["60 o más", 16.3, 58.7]];
  var fe = [];
  E.forEach(function (r, i) {
    var t = function (v) { return (v < 0 ? "−" : "+") + dec(Math.abs(v)) + " %"; };
    fe.push({ et: r[0], v: r[1], txt: t(r[1]), c: BORD, sep: i > 0 });
    fe.push({ et: "", v: r[2], txt: t(r[2]), c: AZUL });
  });
  pintar(document.getElementById("graf-edad"), fe, 58.7, { div: true });

  // casas en pixel art: 5 iluminadas y 5 a oscuras (el mismo dibujo del reel)
  var CASA = ["......OOOO......", "....OOTTTTOO....", "..OOTTtTTtTTOO..", "OOTTtTTtTTtTTtOO", "OTTTTTTTTTTTTTTO", "OOOOOOOOOOOOOOOO",
              ".OWWWWWWWWWWWWO.", ".OWXXWWWWWWXXWO.", ".OWXXWWWWWWXXWO.", ".OWwwWWWWWWwwWO.", ".OWWWWWBBWWWWWO.", ".OWXXWOBbOWXXWO.",
              ".OWXXWOBbOWXXWO.", ".OWwwWOBbOWwwWO.", ".OWWWWOBbOWWWWO.", "OOOOOOOOOOOOOOOO"];
  function casa(luz) {
    var P = { O: "#2d0c12", T: "#c4543a", t: "#963a28", W: "#f6eee2", w: "#d6c8ba", B: "#3462aa", b: "#24467f", X: luz ? "#f0cf74" : "#46181f" };
    var r = '<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">';
    CASA.forEach(function (f, y) { for (var x = 0; x < f.length; x++) { var c = f[x]; if (c !== ".") r += '<rect x="' + x + '" y="' + y + '" width="1" height="1" fill="' + P[c] + '"/>'; } });
    return r + "</svg>";
  }
  document.querySelectorAll(".cs-casas-fila").forEach(function (fila) {
    var h = ""; for (var i = 0; i < 10; i++) h += casa(i < 5); fila.innerHTML = h;
    fila.querySelectorAll("svg").forEach(function (s, i) { s.style.transitionDelay = (i * 0.12) + "s"; });
  });

  // 8. destinos
  var D = [["Resto de la provincia de Cusco", 10008], ["Resto de la región Cusco", 6497], ["Lima y Callao", 6177], ["Arequipa", 4718], ["Madre de Dios", 2250], ["Otras regiones", 5823]];
  pintar(document.getElementById("graf-dest"), D.map(function (r, i) { return { et: r[0], v: r[1], txt: fmt(r[1]), c: i < 2 ? BORD : GRIS }; }), 10008);

  // 9. cuánto explica
  pintar(document.getElementById("graf-explica"), [
    { et: "Pérdida total", v: 17945, txt: "17 945", c: TINTA },
    { et: "Estimación con Airbnb", v: 2559, hi: 2734, txt: "2 559 a 2 734 (14-15 %)", c: BORD, dest: true },
    { et: "Estimación con el censo", v: 5581, txt: "5 581 (31 %)", c: BORD, dest: true }], 17945);

  // animar al entrar en pantalla
  var cajas = document.querySelectorAll(".cs-graf");
  var ver = function (c) { c.classList.add("visto"); if (c.querySelector(".cs-filas")) animarBarras(c); };
  if (!("IntersectionObserver" in window)) { cajas.forEach(ver); return; }
  var obs = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { ver(e.target); obs.unobserve(e.target); } });
  }, { threshold: 0.3 });
  cajas.forEach(function (c) { obs.observe(c); });
  window.addEventListener("resize", function () { cajas.forEach(function (c) { if (c.classList.contains("visto") && c.querySelector(".cs-filas")) animarBarras(c); }); });
})();
</script>
