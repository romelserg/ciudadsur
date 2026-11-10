---
layout: pagina
title: 'Metodología: Lo lograron, Cusco sin cusqueños'
permalink: /metodologia/cusco-sin-cusquenos
---

Esta página explica cómo calculamos cada cifra de la nota [«Lo lograron: Cusco sin cusqueños»](/post/lo-lograron-cusco-sin-cusquenos) y permite descargar los datos. Si encuentras un error, escríbenos a [ciudadsur@gmail.com](mailto:ciudadsur@gmail.com): lo revisamos y, si corresponde, lo corregimos y lo anotamos al final de esta página.

## 1. Población

**Fuente.** INEI, Censos Nacionales de 1993, 2007, 2017 y 2025, consultados en el procesador en línea REDATAM del INEI (bases CPV1993, CPV2007, CPV2017DI y CPV2025DI), por distrito.

**Qué se compara.** El nivel más fino que publica el INEI en 2025 es el distrito. Por eso hablamos del **Cercado de Cusco** (distrito 080101), que contiene el Centro histórico pero también barrios residenciales y una zona rural al norte.

**El cambio de método.** El censo de 2017 contó a las personas presentes el día del censo (censo de hecho). El de 2025 contó a quienes viven habitualmente en cada lugar (censo de derecho). Para comparar lo mismo, rehicimos la cifra de 2017 con la pregunta de residencia habitual del propio censo de 2017: da 114 691 residentes, frente a 114 630 presentes ese día. La diferencia es mínima, así que la caída a 96 746 en 2025 no se explica por el cambio de método.

**Ranking de distritos.** Comparamos los 153 distritos urbanos del Perú con 20 000 habitantes o más y cuyos límites no cambiaron entre 2017 y 2025. El Cercado de Cusco tiene la tercera mayor caída (−15,6 %), después de Yanacancha (Pasco) e Iquitos (Loreto).

**Omisión.** Las cifras de 2025 son población censada; no incluyen la omisión censal que estima el INEI (4,25 % a escala nacional).

## 2. Viviendas y hogares

Usamos la pregunta de condición de ocupación de la vivienda (C2P2 en 2017; S1_P16 en 2025), solo para viviendas particulares. En 2017 el censo registró además 305 viviendas colectivas (hoteles, conventos, cuarteles) que en 2025 dejó de anotar como viviendas; las excluimos de ambos años.

«De uso ocasional» es la condición que anota el empadronador cuando nadie vive de forma habitual en la vivienda y esta se usa por temporadas. **No equivale a Airbnb**: también incluye segundas casas. El censo no registra el motivo del uso ocasional.

El censo de 2025 cuenta las viviendas de forma más fina: cada departamento o cuarto con entrada propia es una vivienda. Por eso las viviendas crecieron 36 % en todo el país mientras la población creció 11 %. Comparamos el Cusco con la mediana de los distritos urbanos para separar lo que es método de lo que es propio del Cusco.

## 3. Población por edad

Para ver quiénes se fueron, comparamos la población por edad simple de 2017 (pregunta C5P41) y 2025 (S5_P3) en los cinco distritos de la ciudad. La caída de niños de 0 a 4 años ocurre en todos los distritos, porque en todo el país nacen menos niños. Lo propio del Cercado es la caída de jóvenes de 15 a 29 años (−28 %) y de niños de 5 a 14 (−17 %), mientras en San Sebastián y San Jerónimo esos grupos crecen.

## 4. Airbnb

**Descarga.** Bajamos todos los anuncios de Airbnb de la región disponibles para las noches del 18 al 20 de noviembre de 2026 (descarga del 28 de octubre de 2026), dividiendo el mapa en recuadros hasta que cada uno devolviera menos anuncios que el máximo que muestra la plataforma. Obtuvimos 8 244 anuncios en la región y asignamos cada uno a su distrito con los límites del INEI.

**Limitaciones.** Airbnb solo muestra anuncios con disponibilidad en las fechas buscadas, así que las cifras son un mínimo. Airbnb desplaza la ubicación pública de cada anuncio entre 100 y 200 metros. No incluye otras plataformas como Booking.

**Fecha de cada anuncio.** Airbnb no publica la fecha de alta de un anuncio, pero su número de identificación crece con el tiempo. Calibramos esa relación con casi 100 000 anuncios de Santiago, Ciudad de México y Río de Janeiro cuya primera reseña conocemos (Inside Airbnb, septiembre de 2026); el error típico es de dos a cuatro semanas. Solo vemos los anuncios que siguen activos: para estimar cuántos había en cada fecha suponemos que cada año se retira entre el 10 y el 15 % de los anuncios, una tasa deducida del crecimiento que reporta Airbtics.

## 5. Colegios

**Fuente.** Ministerio de Educación, Censo Educativo 2009-2025 (ESCALE): matrícula y ubicación de cada colegio de educación básica (inicial, primaria y secundaria) de la ciudad. 2021 no tiene una tabla de matrícula comparable.

**Exposición.** Para cada uno de los 772 colegios contamos las viviendas enteras de Airbnb a menos de 500 metros, y los agrupamos en 0 a 9, 10 a 49 y 50 o más.

**Prueba más exigente.** Comparamos cada colegio consigo mismo a lo largo del tiempo (615 colegios que ya existían en 2012-2014), descontando lo que cambió cada año en cada nivel y en colegios públicos y privados. Con todos los colegios, la matrícula queda −11,8 % en 2025 por cada desviación estándar de turismo cercano (intervalo de 95 %: −17,9 a −5,7 %). Solo con colegios a la misma distancia de la Plaza de Armas, el efecto es −8,3 % y deja de ser estadísticamente distinguible de cero (intervalo: −19,5 a +2,8 %). Airbnb y hoteles se concentran en las mismas cuadras, así que esta prueba no separa el efecto de uno y otro.

## 6. Migración

El censo de 2025 preguntó «Hace 5 años, en (mes) del 2020, ¿en qué distrito vivía?» (S5P5DI). Contamos a las personas de 5 años o más que en 2020 vivían en el Cercado y en 2025 vivían en otro lugar. El censo no pregunta el motivo de la mudanza.

## 7. Cuánto explica el turismo

**Con Airbnb.** Entre los dos censos se sumaron entre 891 y 952 viviendas enteras en Airbnb en el Cercado. Multiplicadas por el tamaño medio del hogar de 2025 (2,87 personas), equivalen a entre 2 559 y 2 734 personas: 14 a 15 % de la pérdida.

**Con el censo.** La proporción de viviendas de uso ocasional subió en todo el país, en parte por el cambio de método. Si en el Cercado hubiera subido como en el distrito urbano típico, habría 1 943 viviendas ocasionales menos, equivalentes a 5 581 personas: el 31 % de la pérdida.

Ambos cálculos suponen que cada vivienda que pasó al uso turístico habría albergado un hogar típico, lo que puede sobrestimar o subestimar el efecto.

## 8. Alquiler y Airbnb

En los portales Urbania y Adondevivir encontramos muy pocos avisos de alquiler residencial en el Cusco (23 avisos de todo tipo en la provincia, el 10 de noviembre de 2026), demasiado pocos para calcular un índice de precios. El mercado de alquiler cusqueño funciona sobre todo por avisos informales y redes sociales. Usamos esos avisos solo como ejemplos. Las estimaciones públicas de ingresos de Airbnb para el Cusco son de empresas privadas que modelan reservas, no coinciden entre sí y no permiten calcular la brecha de renta; de Airbtics usamos solo la ocupación media, la prima de precio del Centro histórico y la proporción de anuncios con licencia.

## 9. Datos descargables

Tablas agregadas en formato CSV (UTF-8, coma como separador):

- [Población del Cercado, 1993-2025](/datos/cusco-sin-cusquenos/1_poblacion_cercado_1993_2025.csv)
- [Distritos del Perú: población, viviendas, hogares y Airbnb, 2017-2025](/datos/cusco-sin-cusquenos/2_panel_distritos_2017_2025.csv)
- [Ocupación de las viviendas del Cercado](/datos/cusco-sin-cusquenos/3_ocupacion_viviendas_cercado.csv)
- [Stock estimado de viviendas enteras en Airbnb](/datos/cusco-sin-cusquenos/4_stock_airbnb_cercado.csv)
- [Matrícula según el Airbnb cercano](/datos/cusco-sin-cusquenos/5_matricula_por_exposicion_airbnb.csv)
- [Población por edad en los distritos de la ciudad](/datos/cusco-sin-cusquenos/6_poblacion_por_edad_ciudad.csv)
- [Destino de quienes vivían en el Cercado en 2020](/datos/cusco-sin-cusquenos/7_destino_de_quienes_vivian_en_el_cercado_en_2020.csv)
- [Suelo construido por distancia a la Plaza de Armas](/datos/cusco-sin-cusquenos/8_suelo_construido_por_distancia_a_la_plaza.csv)

No publicamos la lista de anuncios de Airbnb con su ubicación, por respeto a la privacidad de los anfitriones; solo los conteos agregados.

## Correcciones

- 10 de noviembre de 2026: retiramos de la nota la sección «Lo que habría pasado sin el cambio», que comparaba el Cusco con una mezcla de otras ciudades (control sintético). Con solo tres censos anteriores a 2017, el ejercicio no era lo bastante sólido y no medía el efecto del turismo por separado.
