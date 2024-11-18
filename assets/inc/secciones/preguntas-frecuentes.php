<section id="preguntas-frecuentes" class="values py-5 ">
    <div class="container">
        <header class="section-header">
            <h2>Preguntas frecuentes</h2>
            <p>¿Tienes Preguntas? Tenemos Respuestas</p>
        </header>
        <div class="accordion" data-bs-theme="dark" id="accordionPreguntasFrecuentes">

            <?php 
                  $arrayDataAccordion = array(
                    array('pregunta'=>'¿Qué es el marketing digital y cómo puede beneficiar a mi negocio?',                    
                          'respuesta' => 'El marketing digital abarca diversas estrategias en línea para aumentar la visibilidad y el alcance de tu marca, permitiéndote conectar con tu audiencia, generar más tráfico y aumentar tus ventas.'),
                    array('pregunta' => '¿Puedo contratar un solo servicio, o necesito un paquete completo?',
                          'respuesta' => 'Puedes contratar el servicio que mejor se adapte a tus necesidades. Ofrecemos tanto servicios individuales como paquetes personalizados.'),
                    array('pregunta' => '¿Cuánto tiempo toma ver resultados en las estrategias de marketing digital?',
                          'respuesta' => 'Depende del tipo de estrategia. Por ejemplo, el SEO puede tardar entre 3 y 6 meses en mostrar resultados significativos, mientras que los anuncios en redes sociales suelen generar resultados inmediatos.'),
                    array('pregunta' => '¿Ofrecen garantías de resultados?',
                        'respuesta' => 'Aunque no podemos garantizar resultados específicos debido a factores externos, trabajamos con métricas de rendimiento y ajustes continuos para asegurar el mejor desempeño de nuestras campañas.'),
                    array('pregunta' => '¿Cómo medirán el éxito de mi campaña?',
                        'respuesta' => 'Utilizamos herramientas de análisis y reportes personalizados para evaluar el rendimiento de cada campaña, analizando métricas como el tráfico, la conversión y el retorno de inversión (ROI).'),
                    array('pregunta' => '¿Cuál es el costo de sus servicios?',
                        'respuesta' => 'Nuestros costos varían según el tipo de servicio y la duración del proyecto. Para conocer más, te invitamos a contactar con nosotros y solicitar una cotización personalizada.'),
                    array('pregunta' => '¿Cuál es el proceso de trabajo al iniciar una colaboración?',
                        'respuesta' => 'Nuestros costos varían según el tipo de servicio y la duración del proyecto. Para conocer más, te invitamos a contactar con nosotros y solicitar una cotización personalizada.'),
                        array('pregunta' => '¿Cuál es el costo de sus servicios?',
                        'respuesta' => 'Nuestro proceso comienza con una consulta inicial para entender tus necesidades y objetivos. Luego, desarrollamos una estrategia personalizada, la ejecutamos y realizamos ajustes continuos para optimizar los resultados.'),
                        array('pregunta' => '¿Cuál es el costo de sus servicios?',
                        'respuesta' => 'Nuestros costos varían según el tipo de servicio y la duración del proyecto. Para conocer más, te invitamos a contactar con nosotros y solicitar una cotización personalizada.'),
                   
                    );
                  foreach ($arrayDataAccordion as $key => $data) {
                    renderItemAccordion($key,$data);
                    }
                 ?>

        </div>
    </div>
</section>

<?php 
function renderItemAccordion($key,$data){
    echo'<div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse-preguntas-'.$key.'" aria-expanded="true" aria-controls="collapse-preguntas-'.$key.'">
                   '. $data['pregunta'].'
                </button>
            </h2>
            <div id="collapse-preguntas-'.$key.'" class="accordion-collapse collapse " data-bs-parent="#accordionPreguntasFrecuentes">
                <div class="accordion-body">
                    '. $data['respuesta'].'
                </div>
            </div>
        </div>

        ';
}

?>