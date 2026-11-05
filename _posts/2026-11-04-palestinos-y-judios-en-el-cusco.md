---
title: "Palestinos y judíos en el Cusco"
author: "Ciudad Sur"
author_image: /assets/img/articulos/autores/ciudad-sur.png
date: 2026-11-04
category: "Actualidad"
portada: true
image: /assets/img/articulos/palestinos-y-judios-en-el-cusco.jpg
image_caption: "El Cristo Blanco en 1945, regalo de la comunidad palestina al Cusco."
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<style>
.cs-bajada { font-family: "Montserrat", sans-serif; font-size: 1.15rem; line-height: 1.45; color: #1f4e6b; font-weight: 600; text-align: left !important; margin-bottom: 2rem !important; }
.cs-bloque { background: #fff; border: 1px solid #e6dcd8; border-radius: 8px; padding: 1.4rem 1.3rem 1.1rem; margin: 2.2rem 0; font-family: "Montserrat", sans-serif; }
.cs-bloque h4 { font-family: "Montserrat", sans-serif; font-size: 1.05rem; font-weight: 700; color: #1d1b1b; margin: 0 0 .25rem; }
.cs-bloque .cs-sub { font-size: .85rem; color: #6b6262; margin: 0 0 1rem; text-align: left; line-height: 1.4; }
.cs-fuente { font-size: .72rem; color: #8a8080; margin: .9rem 0 0; line-height: 1.4; text-align: left !important; }
.cs-kicker { font: 700 .72rem "Montserrat", sans-serif; letter-spacing: .12em; text-transform: uppercase; color: var(--c, #671b27); margin: 0 0 .3rem; }

/* hitos de cada época */
.cs-hitos { display: grid; grid-template-columns: repeat(auto-fit, minmax(9.5rem, 1fr)); gap: 1rem; position: relative; padding-top: 1.1rem; }
.cs-hitos::before { content: ""; position: absolute; left: 0; right: 0; top: .35rem; height: 3px; background: var(--c); transform-origin: left; transform: scaleX(0); transition: transform 1s cubic-bezier(.2,.7,.2,1); }
.cs-hitos > div { position: relative; opacity: 0; transform: translateY(10px); transition: opacity .5s, transform .5s; font-size: .84rem; line-height: 1.4; color: #3b3434; }
.cs-hitos > div::before { content: ""; position: absolute; top: -1.05rem; left: 0; width: .8rem; height: .8rem; border-radius: 50%; background: var(--c); border: 2px solid #fff; }
.cs-hitos strong { display: block; font-size: 1.35rem; color: var(--c); line-height: 1.1; margin-bottom: .2rem; }
.visto .cs-hitos::before { transform: scaleX(1); }
.visto .cs-hitos > div { opacity: 1; transform: none; }
.visto .cs-hitos > div:nth-child(2) { transition-delay: .25s; }
.visto .cs-hitos > div:nth-child(3) { transition-delay: .5s; }
.visto .cs-hitos > div:nth-child(4) { transition-delay: .75s; }

/* pregunta al lector */
.cs-quiz input[type=range] { width: 100%; accent-color: #671b27; margin: .4rem 0 .2rem; }
.cs-quiz .cs-estim { font-size: 2rem; font-weight: 700; color: #671b27; line-height: 1.1; }
.cs-quiz .cs-regla { display: flex; justify-content: space-between; font-size: .72rem; color: #8a8080; }
.cs-quiz button.cs-ver { margin-top: .9rem; font: 600 .85rem "Montserrat", sans-serif; background: #671b27; color: #fff; border: 0; border-radius: 99px; padding: .5rem 1.2rem; cursor: pointer; }
.cs-res { display: none; margin-top: 1.1rem; }
.cs-res.abierto { display: block; }
.cs-fila { display: grid; grid-template-columns: 8.5rem 1fr; align-items: center; gap: .6rem; margin: .45rem 0; font-size: .84rem; }
.cs-fila .cs-et { text-align: right; line-height: 1.15; }
.cs-fila .cs-pista { position: relative; height: 1.6rem; }
.cs-fila .cs-barra { position: absolute; left: 0; top: 0; bottom: 0; width: 0; border-radius: 0 3px 3px 0; transition: width 1.1s cubic-bezier(.2,.7,.2,1); }
.cs-fila .cs-val { position: absolute; top: 50%; transform: translateY(-50%); white-space: nowrap; font-weight: 700; padding-left: .4rem; transition: left 1.1s cubic-bezier(.2,.7,.2,1); }
.cs-veredicto { font-size: .92rem; line-height: 1.45; margin: .9rem 0 0; color: #1d1b1b; text-align: left !important; }

/* mapa */
.cs-botones { display: flex; gap: .4rem; margin: 0 0 .9rem; flex-wrap: wrap; }
.cs-botones button { font: 600 .78rem "Montserrat", sans-serif; border: 1px solid var(--c, #671b27); background: #fff; color: var(--c, #671b27); border-radius: 99px; padding: .3rem .85rem; cursor: pointer; }
.cs-botones button.activo { background: var(--c, #671b27); color: #fff; }
#cs-mapa { height: 430px; border-radius: 6px; background: #ece6dc; }
.cs-mapa-nota { font-size: .75rem; color: #6b6262; margin: .5rem 0 0; text-align: left !important; }
.cs-pin { width: 16px; height: 16px; border-radius: 50%; border: 3px solid #fff; box-shadow: 0 1px 4px rgba(0,0,0,.45); background: var(--c); }
.leaflet-popup-content { font: .82rem/1.4 "Montserrat", sans-serif; margin: .7rem .9rem; }
.leaflet-popup-content b { display: block; color: #671b27; margin-bottom: .15rem; }

/* incidentes por año */
.cs-anios { display: flex; align-items: flex-end; gap: 4px; height: 150px; padding-top: 1.4rem; border-bottom: 1px solid #cfc5bf; }
.cs-anios div { flex: 1; position: relative; background: #b8202e; height: 0; transition: height .9s cubic-bezier(.2,.7,.2,1); border-radius: 2px 2px 0 0; }
.cs-anios div.cero { background: transparent; }
.cs-anios div span { position: absolute; top: -1.3rem; left: 0; right: 0; text-align: center; font-weight: 700; font-size: .8rem; color: #b8202e; }
.cs-anios-et { display: flex; gap: 4px; font-size: .66rem; color: #6b6262; margin-top: .3rem; }
.cs-anios-et span { flex: 1; text-align: center; }

/* cronología */
.cs-crono { list-style: none; padding: 0; margin: 0; border-left: 3px solid #e6dcd8; }
.cs-crono li { position: relative; padding: 0 0 1.1rem 1.2rem; font-size: .88rem; line-height: 1.45; color: #3b3434; }
.cs-crono li::before { content: ""; position: absolute; left: -.6rem; top: .25rem; width: .95rem; height: .95rem; border-radius: 50%; background: var(--c); border: 2px solid #fff; }
.cs-crono li b { display: block; font-size: .78rem; letter-spacing: .06em; text-transform: uppercase; color: var(--c); }
.cs-crono li.oculto { display: none; }
.cs-leyenda { display: flex; gap: 1rem; font-size: .76rem; color: #4b4242; margin: 0 0 1rem; flex-wrap: wrap; }
.cs-leyenda span::before { content: ""; display: inline-block; width: .75rem; height: .75rem; border-radius: 50%; margin-right: .35rem; vertical-align: -1px; background: var(--c); }

/* por qué en el Cusco */
.cs-porque { background: #3d3f42; color: #fff; border-radius: 8px; padding: 1.5rem 1.4rem; margin: 2.4rem 0; font-family: "Montserrat", sans-serif; }
.cs-porque h4 { color: #f0cf74; font-weight: 800; font-size: 1.3rem; margin: 0 0 1rem; font-family: "Montserrat", sans-serif; }
.cs-porque ul { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr)); gap: 1rem; }
.cs-porque li { font-size: .86rem; line-height: 1.45; padding-left: 1.1rem; position: relative; }
.cs-porque li::before { content: ""; position: absolute; left: 0; top: .35rem; width: .55rem; height: .55rem; background: #f0cf74; }

.cs-refs { font-size: .9rem; line-height: 1.5; }
.cs-refs p { text-align: left !important; }
@media (max-width: 576px) {
  .cs-bloque { padding: 1.1rem .85rem .9rem; }
  #cs-mapa { height: 360px; }
  .cs-fila { grid-template-columns: 6.5rem 1fr; font-size: .78rem; }
  .cs-hitos { grid-template-columns: 1fr; padding: 0 0 0 1.3rem; gap: .9rem; }
  .cs-hitos::before { left: .3rem; right: auto; top: 0; bottom: 0; width: 3px; height: auto; transform-origin: top; transform: scaleY(0); }
  .visto .cs-hitos::before { transform: scaleY(1); }
  .cs-hitos > div::before { top: .35rem; left: -1.3rem; }
}
@media (prefers-reduced-motion: reduce) {
  .cs-hitos::before, .cs-hitos > div, .cs-fila .cs-barra, .cs-fila .cs-val, .cs-anios div { transition: none; }
}
</style>

<p class="cs-bajada">La territorialización de conflictos globales en la ciudad</p>

Quizás el Cusco sea la ciudad más cosmopolita de este periférico y remoto país. Aumentaría la apuesta y diría que el Cusco es la urbe más geopolítica del Perú, pues aquí se territorializan conflictos globales. Los incidentes recientes entre israelíes y locales son una cuenta más de un largo rosario: concurrencia de capitales extranjeros generadores de gentrificación, inversiones de la economía ilegal que encarecen la vivienda, etc.

¿Por qué un conflicto lejano, como el israelí-gazatí, se despliega en el Cusco? ¿Por qué hoy los cusqueños notan una mayor presencia de israelíes, aun cuando los datos muestran un descenso de 17 000 antes de la pandemia a 12 000 hoy?

<div class="cs-bloque cs-quiz" id="cs-quiz">
  <h4>¿Cuántos israelíes crees que llegan al año a la región Cusco?</h4>
  <p class="cs-sub">Mueve la barra y compara tu cálculo con el dato.</p>
  <div class="cs-estim" id="cs-estim" aria-live="polite">0</div>
  <input type="range" id="cs-rango" min="0" max="40000" step="1000" value="0" aria-label="Tu cálculo de llegadas de israelíes al año">
  <div class="cs-regla"><span>0</span><span>20 000</span><span>40 000</span></div>
  <button class="cs-ver" id="cs-ver" type="button">Ver el dato</button>
  <div class="cs-res" id="cs-res">
    <div class="cs-filas"></div>
    <p class="cs-veredicto" id="cs-veredicto"></p>
    <p class="cs-fuente">Fuente: Cámara de Comercio de Cusco, vía Evidencia.pe (2026); Mincetur (2025). Cifras aproximadas de llegadas a la región.</p>
  </div>
</div>

Hay una percepción de incremento de turistas israelíes, pero los datos la desmienten. Es el efecto de una guerra impopular y genocida.

Pues, para la geopolítica urbana, la violencia y el conflicto se habitan en escalas interconectadas (global, territorial, estatal, urbana y humana). Es decir, lo que define el interés geopolítico de una ciudad no es su ubicación, sino su conexión con jerarquías más amplias de poder y dominación (Rokem y Boano, 2023). El Cusco encaja en esa lógica: no atraviesa una guerra, pero en su espacio se proyecta un conflicto lejano.

Ahora bien, Marco D'Eramo, en su texto «La geografía de la ignorancia», menciona que hoy muchas ciudades se articulan en escalas geopolíticas globales y frecuentemente se desvinculan de sus *hinterlands* regionales. La revolución de las comunicaciones ha tenido una consecuencia no querida: a medida que lo lejano se ha venido acercando, lo próximo se ha vuelto distante. Y en el Cusco de hoy hay mucha gente más enterada del conflicto israelí que de los conflictos mineros en las provincias altas.

## Sinagogas clandestinas

Sobre la relación del Cusco con comunidades judías y palestinas hay mucha tela. Algunos datos sueltos: según una investigación (Cano Callañaupa y Donayre Catacora, 2021), el Cusco colonial tuvo al menos dos sinagogas clandestinas: el Tambo de Montero, casa del mercader sefardí Pedro Montero de Espinosa, y otra en una pulpería de la calle Mantas. La Inquisición colonial las desarticuló hacia 1643 y los judíos del Cusco se fueron asimilando hasta no dejar rastro.

<div class="cs-bloque cs-anima" style="--c:#9a6b2f">
  <p class="cs-kicker">Siglo XVII</p>
  <h4>Comerciantes sefardíes en el Cusco colonial</h4>
  <div class="cs-hitos">
    <div><strong>1628</strong>Un censo notarial ubica la casa de Pedro Montero, hoy calle Saphi 635.</div>
    <div><strong>1636</strong>La Inquisición apresa al comerciante Manuel de Paz; muere en su cárcel de Lima.</div>
    <div><strong>1643</strong>Según la tradición, cae el Tambo de Montero y sus bienes pasan a la Corona.</div>
  </div>
  <p class="cs-fuente">Fuente: Cano Callañaupa y Donayre Catacora (2021), tesis UNSAAC.</p>
</div>

## La comunidad palestina y el Cristo Blanco

Los primeros palestinos llegaron al Cusco en las primeras décadas del siglo XX. Venían desde el sur: cruzaron Argentina y Bolivia, y desde allí extendieron su comercio hacia Arequipa, Sicuani, Abancay y el Cusco. En la ciudad vivieron sobre todo en la calle Maruri y algunos se mudaron después a la avenida Pardo. En 1929 ya tenían el Centro Unión Palestino. Su legado más visible, y olvidado, es el Cristo Blanco, donado en 1945 por la comunidad palestina.

<div class="cs-bloque cs-anima" style="--c:#1f5c7a">
  <p class="cs-kicker">Siglo XX</p>
  <h4>De la calle Maruri al Cristo Blanco</h4>
  <div class="cs-hitos">
    <div><strong>c. 1910</strong>Llegan familias palestinas desde el sur del continente.</div>
    <div><strong>1929</strong>Fundan el Centro Unión Palestino.</div>
    <div><strong>1945</strong>La comunidad dona el Cristo Blanco a la ciudad.</div>
    <div><strong>1950</strong>Once familias palestinas siguen en el Cusco; otras ya partieron a Lima.</div>
  </div>
  <p class="cs-fuente">Fuente: Ráez Suárez (2014), <i>Historia y Región</i>.</p>
</div>

Entonces, el Cusco tiene una tradición antigua de albergar comunidades extranjeras, y los incidentes que gatillan este artículo solo son recientes en apariencia.

<div class="cs-bloque" style="--c:#671b27">
  <p class="cs-kicker">Mapa</p>
  <h4>Cuatro siglos en las calles del Cusco</h4>
  <p class="cs-sub">Elige una época y toca cada punto para ver qué pasó allí.</p>
  <div class="cs-botones" id="cs-epocas">
    <button type="button" class="activo" data-e="todo">Todas</button>
    <button type="button" data-e="colonia">Siglo XVII</button>
    <button type="button" data-e="palestina">Siglo XX</button>
    <button type="button" data-e="hoy">Siglo XXI</button>
  </div>
  <div id="cs-mapa" role="region" aria-label="Mapa de lugares del Cusco y el Valle Sagrado"></div>
  <p class="cs-mapa-nota">Ubicaciones aproximadas.</p>
</div>

## Lo que pasa en nuestro siglo

A continuación, la cronología de lo ocurrido en el siglo XXI.

<div class="cs-bloque">
  <h4>Incidentes con israelíes registrados por año</h4>
  <p class="cs-sub">Agresiones, detenciones y confrontaciones halladas en prensa y comunicados.</p>
  <div class="cs-anios" id="cs-anios"></div>
  <div class="cs-anios-et" id="cs-anios-et"></div>
</div>

<div class="cs-bloque" id="cs-crono-caja">
  <h4>Cronología, 2006-2026</h4>
  <p class="cs-sub">Filtra por tipo de hecho.</p>
  <div class="cs-botones" id="cs-filtros">
    <button type="button" class="activo" data-t="todo" style="--c:#1d1b1b">Todo</button>
    <button type="button" data-t="inc" style="--c:#b8202e">Incidentes con israelíes</button>
    <button type="button" data-t="pal" style="--c:#1f5c7a">Actividad pro Palestina</button>
    <button type="button" data-t="aut" style="--c:#55585c">Respuesta de autoridades</button>
  </div>
  <ul class="cs-crono" id="cs-crono"></ul>
  <p class="cs-fuente">Fuentes: El Comercio, La República, El Búho, Correo, Peruvian Times, Ynet, Israel National News, Peoples Dispatch, Municipalidad Distrital de Pisac, Migraciones, comunicado del bar Puka Zorrita (5 de abril de 2026) y afiches de Cusco con Palestina. Elaboración propia.</p>
</div>

Sobre el matiz político actual del conflicto, era previsible que los cusqueños se inclinaran por la causa palestina, no solo por la histórica tendencia hacia la izquierda, sino también por el clivaje frente a Lima, donde ya se registraron ataques a mezquitas, presumiblemente por parte de la derecha limeña.

<div class="cs-porque">
  <h4>¿Por qué en el Cusco?</h4>
  <ul>
    <li>Es quizá la urbe más geopolítica del Perú: aquí se territorializan conflictos globales.</li>
    <li>Un conflicto lejano se habita en escalas conectadas: global, territorial, estatal, urbana y humana (Rokem y Boano, 2023).</li>
    <li>Lo lejano se acerca y lo próximo se aleja (D'Eramo): Gaza puede sentirse más cerca que los conflictos mineros de las provincias altas.</li>
    <li>Es una cuenta más de un largo rosario: capitales extranjeros, gentrificación y economías ilegales que encarecen la vivienda.</li>
  </ul>
</div>

Para cerrar, es tiempo de reconocer al Cusco como espacio de concurrencia de disputas globales, en una sociedad aún adormecida por agendas aldeanas. Aceptar esa tendencia irreversible es pensar esta región como un área diferenciada del Perú, con la necesidad de una legislación y recursos particulares. El Cusco, en muchos aspectos, ya es una ciudad global.

<div class="cs-refs" markdown="1">

## Referencias

Cano Callañaupa, B. y Donayre Catacora, E. M. (2021). *Los judíos en el Cusco: cultura, religión y aspectos judaizantes (1620-1650)* [Tesis de licenciatura, UNSAAC]. [repositorio.unsaac.edu.pe](https://repositorio.unsaac.edu.pe/bitstream/handle/20.500.12918/6270/253T20210387_TC.pdf)

Ráez Suárez, C. E. (2014). La comunidad árabe palestina en el Cusco durante la década de 1950. *Historia y Región*, 2(2), 157-172.

Rokem, J. y Boano, C. (2023). Towards a global urban geopolitics: Inhabiting violence. *Geopolitics*, 28(5), 1667-1680. [doi.org/10.1080/14650045.2023.2212249](https://doi.org/10.1080/14650045.2023.2212249)

</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
(function () {
  var fmt = function (n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " "); };
  var ROJO = "#b8202e", AZUL = "#1f5c7a", GRIS = "#55585c", OCRE = "#9a6b2f", VINO = "#671b27";

  // 1. pregunta al lector
  var rango = document.getElementById("cs-rango"), estim = document.getElementById("cs-estim");
  rango.addEventListener("input", function () { estim.textContent = fmt(+rango.value); });
  document.getElementById("cs-ver").addEventListener("click", function () {
    var g = +rango.value, res = document.getElementById("cs-res"), caja = res.querySelector(".cs-filas");
    var filas = [["Tu cálculo", g, VINO], ["Antes de la pandemia", 17000, GRIS], ["2025", 12000, ROJO]];
    var max = Math.max(g, 17000) * 1.6;
    caja.innerHTML = filas.map(function (f) {
      return '<div class="cs-fila"><div class="cs-et">' + f[0] + '</div><div class="cs-pista"><div class="cs-barra" style="background:' + f[2] +
        '" data-w="' + (f[1] / max * 100) + '"></div><div class="cs-val" style="left:0;color:' + f[2] + '">~' + fmt(f[1]) + '</div></div></div>';
    }).join("");
    var d = g - 12000;
    document.getElementById("cs-veredicto").innerHTML = d > 1000
      ? "Calculaste <b>" + fmt(d) + " más</b> de los que llegaron en 2025. No estás solo: la sensación de que hay más israelíes que nunca choca con las cifras, que bajaron frente a antes de la pandemia."
      : d < -1000
        ? "Calculaste <b>" + fmt(-d) + " menos</b> de los que llegaron en 2025. Aun así, hoy llegan menos que antes de la pandemia."
        : "Le atinaste: llegan unos 12 000 al año, menos que los 17 000 de antes de la pandemia.";
    res.classList.add("abierto");
    requestAnimationFrame(function () { requestAnimationFrame(function () {
      caja.querySelectorAll(".cs-barra").forEach(function (b) {
        b.style.width = b.dataset.w + "%";
        b.nextElementSibling.style.left = b.dataset.w + "%";
      });
    }); });
    this.textContent = "Volver a calcular";
  });

  // 2. mapa
  var LUGARES = [
    { e: "colonia", c: OCRE, p: [-13.5126, -71.9846], t: "Tambo de Montero, calle Saphi 635", d: "Casa del mercader sefardí Pedro Montero de Espinosa y la sinagoga clandestina más documentada del siglo XVII. Cae hacia 1643." },
    { e: "colonia", c: OCRE, p: [-13.5179, -71.9797], t: "Calle Mantas", d: "Según la tradición, una pulpería sirvió de segunda sinagoga clandestina." },
    { e: "palestina", c: AZUL, p: [-13.5186, -71.9768], t: "Calle Maruri", d: "Aquí vivió la mayor parte de las familias palestinas llegadas a inicios del siglo XX." },
    { e: "palestina", c: AZUL, p: [-13.5226, -71.9796], t: "Avenida Pardo", d: "Algunas familias palestinas se mudaron después a esta avenida." },
    { e: "palestina", c: AZUL, p: [-13.5096, -71.9774], t: "Cristo Blanco, 1945", d: "Monumento donado por la comunidad árabe-palestina a la ciudad." },
    { e: "hoy", c: ROJO, p: [-13.5085, -71.9820], t: "Sacsayhuamán, marzo de 2014", d: "Unos 60 turistas, la mayoría israelíes, detenidos en una fiesta con drogas; luego liberados sin cargos." },
    { e: "hoy", c: ROJO, p: [-13.5166, -71.9786], t: "Plaza de Armas, abril de 2024", d: "Cuatro turistas israelíes agreden una vigilia pro Palestina." },
    { e: "hoy", c: ROJO, p: [-13.5156, -71.9746], t: "San Blas, 4 de abril de 2026", d: "Tres israelíes agreden a clientes del bar Puka Zorrita." },
    { e: "hoy", c: ROJO, p: [-13.5172, -71.9770], t: "Centro histórico, fines de abril de 2026", d: "Vecinos rodean a turistas israelíes y les exigen irse. El video se viraliza; hay versiones enfrentadas." },
    { e: "hoy", c: ROJO, p: [-13.4219, -71.8497], t: "Pisac, mayo a julio de 2026", d: "Celebración religiosa de unas 80 personas sin permiso (4 de mayo), pasacalle de sikuris pro Palestina (16 de mayo) y operativo multisectorial con cerca de 100 personas intervenidas (10 de julio)." },
    { e: "hoy", c: AZUL, p: [-13.4286, -71.8705], t: "Taray, 20 de marzo de 2026", d: "Cine foro pro Palestina «La voz de Hind Rajab», convocado por Cusco con Palestina." }
  ];
  if (window.L) {
    var mapa = L.map("cs-mapa", { scrollWheelZoom: false, dragging: !L.Browser.mobile, tap: true });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapa);
    var capas = LUGARES.map(function (l) {
      var m = L.marker(l.p, { icon: L.divIcon({ className: "", html: '<div class="cs-pin" style="--c:' + l.c + '"></div>', iconSize: [16, 16], iconAnchor: [8, 8] }), title: l.t });
      m.bindPopup("<b>" + l.t + "</b>" + l.d);
      m.epoca = l.e;
      return m;
    });
    var mostrar = function (e) {
      var vis = [];
      capas.forEach(function (m) {
        if (e === "todo" || m.epoca === e) { m.addTo(mapa); vis.push(m.getLatLng()); } else { mapa.removeLayer(m); }
      });
      mapa.fitBounds(L.latLngBounds(vis), { padding: [30, 30], maxZoom: 16 });
    };
    mostrar("todo");
    document.querySelectorAll("#cs-epocas button").forEach(function (b) {
      b.addEventListener("click", function () {
        document.querySelectorAll("#cs-epocas button").forEach(function (x) { x.classList.remove("activo"); });
        b.classList.add("activo");
        mostrar(b.dataset.e);
      });
    });
  }

  // 3. incidentes por año
  var INC = { 2014: 1, 2018: 1, 2024: 2, 2026: 3 }, barras = "", etiq = "";
  for (var a = 2014; a <= 2026; a++) {
    var n = INC[a] || 0;
    barras += '<div class="' + (n ? "" : "cero") + '" data-h="' + (n / 3 * 100) + '">' + (n ? "<span>" + n + "</span>" : "") + "</div>";
    etiq += "<span>" + (a % 2 === 0 ? "’" + String(a).slice(2) : "") + "</span>";
  }
  var anios = document.getElementById("cs-anios");
  anios.innerHTML = barras;
  document.getElementById("cs-anios-et").innerHTML = etiq;

  // 4. cronología
  var CRONO = [
    ["ctx", "2006-2007", "Abren los primeros negocios israelíes; la Casa Jabad del Cusco ya funciona."],
    ["inc", "Marzo de 2014, Sacsayhuamán", "Unos 60 turistas, la mayoría israelíes, detenidos en una fiesta con drogas; luego liberados sin cargos."],
    ["inc", "Marzo de 2018, avenida Baja", "Diez israelíes detenidos por drogas en un hostal."],
    ["inc", "Marzo-abril de 2024, Cusco", "Detienen a un iraní, Majid Azizi, y a dos peruanos por planear el asesinato de dos israelíes residentes en el Cusco; el juez les dicta 18 meses de prisión preventiva."],
    ["inc", "Abril de 2024, Plaza de Armas", "Cuatro turistas israelíes agreden una vigilia pro Palestina."],
    ["ctx", "2025", "Llegan unos 12 000 israelíes a la región. Marcha pro Palestina en Pisac, donde ya funciona otra Casa Jabad."],
    ["pal", "20 de marzo de 2026, Taray", "Cine foro pro Palestina «La voz de Hind Rajab», convocado por Cusco con Palestina."],
    ["inc", "4 de abril de 2026, San Blas", "Tres israelíes agreden a clientes del bar Puka Zorrita, a las 10:35 p. m. El local condena el ataque en un comunicado."],
    ["inc", "Fines de abril de 2026, centro histórico", "Vecinos rodean a turistas israelíes y les exigen irse. El video se viraliza; hay versiones enfrentadas."],
    ["inc", "4 de mayo de 2026, Pisac", "Celebración religiosa de unas 80 personas sin permiso. Interviene la PNP y el caso pasa a la comisaría de Urubamba."],
    ["pal", "16 de mayo de 2026, Pisac", "Pasacalle de sikuris en solidaridad con Palestina y «por la soberanía de nuestro territorio»."],
    ["aut", "29 de mayo de 2026, Pisac", "El Comité Distrital de Seguridad Ciudadana trata los incidentes; la municipalidad revisa licencias de locales."],
    ["aut", "25 de junio de 2026, Cusco", "Megaoperativo de Migraciones en hospedajes del centro; 183 operativos en la región en lo que va del año."],
    ["aut", "10 de julio de 2026, Pisac", "Operativo multisectorial: cerca de 100 personas intervenidas; dos extranjeros trasladados por presunto ingreso irregular."]
  ];
  var COLOR = { inc: ROJO, pal: AZUL, aut: GRIS, ctx: OCRE };
  var lista = document.getElementById("cs-crono");
  lista.innerHTML = CRONO.map(function (r) {
    return '<li data-t="' + r[0] + '" style="--c:' + COLOR[r[0]] + '"><b>' + r[1] + "</b>" + r[2] + "</li>";
  }).join("");
  document.querySelectorAll("#cs-filtros button").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll("#cs-filtros button").forEach(function (x) { x.classList.remove("activo"); });
      b.classList.add("activo");
      lista.querySelectorAll("li").forEach(function (li) {
        li.classList.toggle("oculto", b.dataset.t !== "todo" && li.dataset.t !== b.dataset.t);
      });
    });
  });

  // animar al entrar en pantalla
  var animar = function (el) {
    el.classList.add("visto");
    if (el === anios.parentNode) anios.querySelectorAll("div").forEach(function (d) { d.style.height = d.dataset.h + "%"; });
  };
  var cajas = [].slice.call(document.querySelectorAll(".cs-anima")).concat([anios.parentNode]);
  if (!("IntersectionObserver" in window)) { cajas.forEach(animar); return; }
  var obs = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { animar(e.target); obs.unobserve(e.target); } });
  }, { threshold: 0.3 });
  cajas.forEach(function (c) { obs.observe(c); });
})();
</script>
