---
title: "Fraude en mesa: Elecciones, estadística y límites de la estrategia fujimorista"
author: "Manuel Béjar Díaz"
date: 2021-06-13
category: "Actualidad"
numero: 520
image: /assets/img/articulos/fraude-en-mesa-elecciones-estadistica-y-limites-de-la-estrategia-fujimorista.jpg
---

La semana pasada tuvimos otro episodio de crisis política, esta vez muy cerca de ser un terremoto por cuanto las consecuencias podrían haber comprometido nuestra democracia. El lunes por la noche, cuando el conteo de la Organismo Nacional de Procesos Electorales (ONPE) ya revelaban una tendencia favorable para Perú Libre (PL), la plancha completa de Fuerza Popular (FP) que aspiraba llegar a la presidencia dio una conferencia de prensa en la que denunciaba ‘fraude en mesas sistemático’, armado por el partido adversario.

En los siguientes días, voceros del fujimorismo anunciaban con orgullo que aproximadamente 500 abogados de estudios jurídicos limeños se habían sumado a su causa con el objetivo de hacer respetar la voluntad popular y defender la democracia. Como resultado de este esfuerzo, [Ojo-Público reporta que hasta el sábado 12 Fuerza Popular había presentado 904 solicitudes de nulidad](https://ojo-publico.com/2811/casi-el-50-de-nulidades-legales-de-fuerza-popular-fueron-rechazadas), sobre actas provenientes predominantemente del sur, de la sierra y de áreas rurales. Descontar mesas en esos territorios, donde la preferencia por PL es apabullante, podría significar voltear los resultados en favor de FP.

Enfrentados contra el tiempo, FP y su ejército de juristas concentraron sus energías principalmente en tres potenciales causales de anulación: falsificación de firmas de miembros de mesa, cuando la firma de algún miembro no coincidía la rúbrica que había registrado en el Registro Nacional de Identificación y Estado Civil  (RENIEC); falsificación de resultados en mesa, especialmente para mesas en las que FP obtuvo cero votos; y miembros de mesa con los mismo apellidos porque parientes dentro del segundo grado de consanguinidad no pueden ser miembros de una misma mesa, según la normativa vigente.

Lamentablemente, el sacrificado esfuerzo de FP se vio mal recompensado cuando el Jurado Nacional de Elecciones (JNE) decidió no prorrogar el plazo para ingresar solicitudes de anulación. El grueso de pedidos fue presentado después de las 8 de la noche del miércoles 9 de junio, plazo límite para tal recurso según las reglas de juego de este proceso. No obstante, para asegurar la legitimidad del proceso ningún esfuerzo por explorar la posibilidad de fraude está de más.

## **Fraude en mesa**

La Ley Orgánica de Elecciones (LOE), Ley N° 2685, reconoce la posibilidad de declarar la nulidad de una mesa de sufragio en su Artículo 363°. Concretamente, de sus cuatro incisos hay uno solo, el b, que podía servir a la causa fujimorista, y dice “cuando haya mediado fraude, cohecho, soborno, intimidación o violencia para inclinar la votación en favor de una lista de candidatos o de determinado candidato”. La lectura de este inciso revela que cada solicitud de nulidad tendría que cumplir con dos puntos: demostrar el mecanismo del fraude y evidenciar que hay una inclinación anómala en los votos.

La prensa y los partidos políticos se han concentrado en las causales de fraude que FP planteó, mencionadas más arriba. Sin embargo, con las audiencia de los Jurados Especiales Electorales (JEE) va quedando claro que las solicitudes de Fuerza Popular se quedan cortas en acreditar la [relación entre el supuesto mecanismo de fraude y la subsecuente inclinación de votos](https://youtu.be/kIO7tV8Fu4g?t=6360). De esa forma, se prioriza la presunción de la validez del voto que la LOE advierte en su Artículo número 4.

Rodrigo Torres habilitó un [repositorio en github](https://github.com/RoTorresT/segunda_vuelta_peru_2021) con la información de todas las mesas. Entre los datos incluye los mismos que la ONPE despliega cuando se consulta un acta en su página web. Torres realizó el *web scrapping* (recopilación automática de información en internet) para obtener la información de las mesas el viernes 11 de junio, momento en que que las actas contabilizadas alcanzaban el 99,616%. Habiendo accedido a la información en detalle de mesas, la distribución de votos en ellas y los locales donde se encuentran ubicadas; en este artículo exploro la pieza faltante en las solicitudes de anulación presentadas por FP: la inclinación atípica de votos. Advierto que lo presentado en adelante toma únicamente a las mesas en territorio peruano.

En estadística se conoce como ‘outlier’ o ‘dato atípico’ a aquella observación que escapa a la distribución esperada de su conjunto. Este concepto, en materia de mesas de sufragio, enfrenta a la pregunta: ¿a qué ‘conjunto’ pertenece una mesa? O, en otras palabras, ¿qué otras mesas deberían tener un comportamiento parecido? Para efectos de este informe se asume que el conjunto de una mesa de sufragio es su local de votación; es decir, sería una mesa atípica si tiene una distribución de votos muy diferente a la del resto de mesas de su local.

Ahora bien, el local no debería ser muy pequeño en cantidad de mesas para aplicar alguna técnica estadística que nos ayude a encontrar mesas atípicas. Este es un gran inconveniente porque solo el 50,7% de mesas de sufragio se encuentran en locales de votación que cuentan con 9 o más mesas (ver Tabla 1), y por mantener objetividad prefiero no comparar una mesa con su local si este no tiene al menos ese tamaño. Por ese bajo porcentaje y para aumentar el número de mesas evaluadas, también he optado por comparar las mesas restantes contra un conjunto más grande, que sería el distrito o la provincia de cada una, siempre que sean lo suficientemente pequeños para asumir que sus preferencias electorales son homogéneas. De esta forma puedo evaluar el comportamiento del 72.9% de mesas en territorio nacional, el resto no entran en mi análisis.

### **Tabla 1. Mesas y grupos de comparación**

<div class="tabla"><table><tbody><tr><td rowspan="2">
Grupo de comparación
</td><td colspan="2">
Mesas
</td><td rowspan="2">
Votos emitidos
</td><td colspan="3">
Distribución de votos emitidos (%)
</td></tr><tr><td>
Cantidad
</td><td>
(%)
</td><td>
Perú Libre
</td><td>
Fuerza Popular
</td><td>
No válidos
</td></tr><tr><td>
Local de votación
</td><td>
16.461
</td><td>
19,9
</td><td>
3.388.801
</td><td>
58,0
</td><td>
35,7
</td><td>
6,3
</td></tr><tr><td>
Distrito
</td><td>
41.914
</td><td>
50,7
</td><td>
9.597.431
</td><td>
44,3
</td><td>
49,5
</td><td>
6,2
</td></tr><tr><td>
Provincia
</td><td>
1.932
</td><td>
2,3
</td><td>
326.714
</td><td>
69,0
</td><td>
25,5
</td><td>
5,5
</td></tr><tr><td>
Sub total
</td><td>
60.307
</td><td>
72,9
</td><td>
13.312.946
</td><td>
48,4
</td><td>
45,4
</td><td>
6,2
</td></tr><tr><td>
Sin grupo
</td><td>
22.420
</td><td>
27,1
</td><td>
5.109.188
</td><td>
44,4
</td><td>
49,0
</td><td>
6,6
</td></tr><tr><td>
Total
</td><td>
82.727
</td><td>
100,0
</td><td>
18.422.134
</td><td>
47,3
</td><td>
46,4
</td><td>
6,3
</td></tr></tbody></table></div>

Elaboración propia. Se puede replicar la tabla a partir del [libro de trabajo](https://docs.google.com/spreadsheets/d/1q00MOD0u43Aap7dFMHGX_UupplWXDsw5FtQt178xJNQ/edit#gid=0).

\1 Mesa se encuentra en un local con 9 o más mesas.

\2 Mesa se encuentra en un local con menos de 9 mesas, pero su distrito o provincia es lo suficientemente pequeño para asumir preferencias electorales homogéneas (menos de 120 mesas).

\3 Mesa se encuentra en un local con menos de 9 meses, y su distrito o provincia es tan grande que no podría asumirse preferencias electorales homogéneas.

Establecidos los grupos de comparación, en cada mesa he calculado el z-score modificado -indicador propuesto por [Iglewicz y Hoaglin (1993)](https://hwbdocuments.env.nm.gov/Los%20Alamos%20National%20Labs/TA%2054/11587.pdf) para medir la desviación de una observación respecto a su conjunto- para los porcentajes de votos recibidos por cada partido. Iglewicz y Hoaglin sugieren que si el valor absoluto del indicador es mayor a 3.5 para una observación, esta es atípico.  Si el porcentaje de votación para Fuerza Popular o Perú Libre resultan atípicos para su conjunto (si uno resulta atípico es muy probable que el otro también) marcamos esa mesa como atípica, es decir, que tiene una inclinación estadísticamente irregular de votos. En el [libro de trabajo](https://docs.google.com/spreadsheets/d/1q00MOD0u43Aap7dFMHGX_UupplWXDsw5FtQt178xJNQ/edit#gid=0) que preparé para este artículo se puede consultar los resultados, y en [este repositorio](https://github.com/Manuel56BD/Peru2021_2daVuelta) el código para replicar todos los cálculos.

Aplicando esta metodología sencilla, se encuentra un total de 1.609 mesas con votación atípica. Cabe mencionar que acá no se sugiere que todas estas deban ser sujeto de anulación, más aún cuando solo nos ceñimos a la información estadística de los votos y no a otros aspectos formales propios de la mesa como presencia de personeros o la capacitación de sus miembros de mesa. Hay que recalcar, para toda anulación debe completarse la fórmula conjunta de mecanismo de fraude e inclinación de votos, acá solo se explora el segundo punto.

Señalada la aclaración, vale presentar algunos casos detectados por este ejercicio estadístico. Un primer ejemplo, en el IEIPSM Nº 16194 de Bagua (25 mesas) la mediana del porcentaje de votos emitidos por PL es 58%, pero hay una mesa atípica (000263) en la que solo recibe 42%. La siguiente mesa con menor votación para ese partido es 50%, bastante lejos. Lo curioso de esa mesa, es que la caída en la votación para PL coincide con un alza irregular de los votos nulos/viciados, segmento que alcanza un 29% de los votos emitidos mientras que en el resto de las mesas del local ese mismo indicador oscila entre 2% y 10%. Un caso análogo, pero adverso al otro partido, se encuentra en el Estadio Campolo Alcalde de La Perla (49 mesas). La mediana de votos para FP en este local es de 73%, habiendo una mesa (077610) en la que alcanza sólo 47% de los votos emitidos. La siguiente mesa con menor votación tiene 64%, bastante lejos también. Como ocurre en la mesa de Bagua, en esta mesa hay un porcentaje totalmente irregular de votos nulos/viciados, 43%, mientras que en el resto de las mesas del local este segmento oscila entre 2% y 18%.

Reitero, los casos descritos, y todos los demás detectados, se pueden encontrar en el [libro de trabajo](https://docs.google.com/spreadsheets/d/1q00MOD0u43Aap7dFMHGX_UupplWXDsw5FtQt178xJNQ/edit#gid=0). Además, la versatilidad de esta plantilla permite determinar cómo se distribuyen estas mesas, según el partido al que favorecen.

### Figura 1. Distribución de 1.609 mesas estadísticamente atípicas, según partido al que favorece la inclinación de votos

Elaboración propia. Se puede revisar el procedimiento de cálculo en [repositorio github](https://github.com/Manuel56BD/Peru2021_2daVuelta).

En la Figura 1 se muestra esta clasificación, la inclinación estadísticamente atípica de votos favorece casi en la misma medida a FP como a PL, apenas unas 55 mesas de diferencia. Este resultado es muy importante para desbaratar, desde cualquier posición, que alguno de los partidos haya ejecutado un plan astuto y sistemático de fraude en mesa, pues en tal caso ese partido tendría una participación más prominente en el anillo de la Figura 1.

En el escenario de qué sucedería si se anularan todas las mesas estadísticamente atípicas (que de ninguna manera lo sugiero, es meramente un ejercicio aritmético), la brecha se reduciría a favor de Fuerza Popular en 6,5 mil votos. La última actualización de la ONPE revisada durante la redacción de este artículo concedía a Perú Libre una ventaja de 50 mil votos y 0,065% de actas por contabilizar. Quizá con un resultado mucho más cerrado habría habido motivos suficientes para cuestionar el proceso, pero la brecha entre Castillo y Fujimori es lo suficientemente amplia para reconocer que se ha respetado la voluntad popular.

### Tabla 2. Contabilidad de votos (en miles) sin mesas atípicas estadísticamente

<div class="tabla"><table><tbody><tr><td>
Votos contabilizados
</td><td>
Perú Libre
</td><td>
Fuerza Popular
</td><td>
Diferencia
</td></tr><tr><td>
Total Perú al 99.616% del conteo (a)
</td><td>
8.712,1
</td><td>
8.549,0
</td><td>
163,1
</td></tr><tr><td>
En mesas atípicas estadísticamente (b)
</td><td>
155,9
</td><td>
149,4
</td><td>
6,5
</td></tr><tr><td>
Total Perú sin mesas atípicas (a) - (b)
</td><td>
8.556,2
</td><td>
8.399,6
</td><td>
156,6
</td></tr></tbody></table></div>

Elaboración propia. Se puede replicar la tabla a partir del [libro de trabajo](https://docs.google.com/spreadsheets/d/1q00MOD0u43Aap7dFMHGX_UupplWXDsw5FtQt178xJNQ/edit#gid=0).

Se excluyen votos en el extranjero.

## **Las mesas objetivo de FP**

Si FP hubiera logrado ingresar las solicitudes de anulación, sin poder revelar inclinación irregular de votos sus pedidos no hubiesen llegado a buen puerto. Alternativamente, de haber orientado la búsqueda de fraude en mesas con resultados atípicos, habrían previsto que los votos serranos, rurales, indígenas y sureños eran los que menos favorecían a FP. Todo el partido político, así como los estudios de abogados de Lima el batallón de abogados voluntarios debieron pensar que lo lógico era buscar anular mesas en áreas de alta votación de Perú Libre. No vieron la ecuación completa, ¿cómo podrían demostrar la inclinación irregular de votos que exige el Artículo 363°?

Ciertamente, era más factible buscar mesas de Lima en las que PL tuviese, atípicamente, una cantidad muy alta de votos. Los datos corroboran esta observación. Como se muestra en la Figura 2, si separamos por macroregión las 1.619 mesas estadísticamente atípicas, en el sur hay más mesas con un resultado extraordinario en favor de Fujimori que las que producen una inclinación anómala para el profesor. Mientras que en Lima y en el norte hay más mesas atípicas en contra de FP.

El fujimorismo habría tenido más oportunidades de completar la ecuación, causal de fraude e inclinación irregular de votos, para anular mesas de haber buscado frente a sus narices.

### Figura 2. Distribución por región de mesas estadísticamente atípicas, según partido al que se favorece

Elaboración propia. Revisar metodología en [repositorio github](https://github.com/Manuel56BD/Peru2021_2daVuelta).

Cantidad de mesas en paréntesis.

## **Corolario**

Estadísticamente sí se puede hablar de la existencia de mesas con votación atípica. Sin embargo, estos casos son tan frecuentes para FP como para PL. Las irregularidades están presente en el proceso electoral, pero a una escala menor y aislada. No ha habido ninguna manipulación sistemática de mesas, y si lo hubo fue de ambos partidos, en la misma magnitud.

Adicionalmente, no puedo evitar volver a mencionar que lo presentado en este artículo es solo la mitad de la ecuación. En ninguna de las mesas que aparecen marcadas como estadísticamente irregulares en el libro de trabajo debe deducirse automáticamente fraude, pues falta determinar cuál es el mecanismo con el que los resultados se vieron distorsionados.

Además, para un próximo intento de solicitar anulación de mesas, FP debiera llevarse la lección que condenar las mesas en áreas donde los resultados le eran adversos (en lugar de concentrarse en las áreas con resultados atípicos para ellos) no los llevaba a ningún lado.

---

Escribe Manuel Bejar Díaz, economista por la UNMSM, maestrante de antropología por la PUCP, trabaja como científico de datos.
