<section id="servicios" class="values py-5 ">
    <div class="container">
        <header class="section-header">
            <h2>Servicios</h2>
            <p>LLevá tu negocio al proximo nivel</p>
        </header>

        <div class="row">
            <?php  
            $array = array(
                array(
                    "imagen" =>"assets/img/estrategia-3.png",
                    "titulo" =>"Estrategía digital",
                    "descripcion" =>"- Plan de ventas </br>
                                    - Consultoría </br>
                                    - Audiotoría digital"
                ),
                array(
                    "imagen" =>"assets/img/branding.png",
                    "titulo" =>"Identidad de Marca",
                    "descripcion" =>"- Diseño de Logo </br>
                                    - Paleta de colores </br>
                                    - Tipografía </br>
                    "
                ),
                array(
                    "imagen" =>"assets/img/redes.png",
                    "titulo" =>"Community Manager",
                    "descripcion" =>" 
                                     - Construcción de comunidad</br>
                                     - Aumento de visibilidad</br>
                                     - Creación de contenido </br>"
                ),
                array(
                    "imagen" =>"assets/img/publicidad.png",
                    "titulo" =>"Publicidad",
                    "descripcion" =>"- Creación de Campañas estrategicas en Google Ads y Facebook ads</br>"
                ),
                array(
                    "imagen" =>"assets/img/values-4.png",
                    "titulo" =>"Posicionamiento SEO",
                    "descripcion" =>"Optimización de páginas web para mejorar su visibilidad en buscadores, con estrategias de SEO."
                ),
                
                array(
                    "imagen" =>"assets/img/paginas-web.png",
                    "titulo" =>"Sitios Web",
                    "descripcion" =>"Diseño y Desarrollo de  web unicas, modernas y adaptativas a Pc / Celular. 
                    "
                ),
                array(
                    "imagen" =>"assets/img/ecommers.png",
                    "titulo" =>"E-commerce",
                    "descripcion" =>"Desarrollo y configuración de tiendas en línea, integración de pasarelas de pago."
                ),
                
                array(
                    "imagen" =>"assets/img/features-2.png",
                    "titulo" =>"Software a medida",
                    "descripcion" =>"Potenciamos empresas digitalizando y 
                    automatizando sus procesos desarrollando software a medida."
                )
                
                    );          
            foreach ($array as $key => $data) {
            renderCardsServicios($data);
            }
            ?>
        </div>
    </div>
</section>

<?php 

function renderCardsServicios($data){
    echo'   <div class="col-lg-4 col-xl-3 col-md-6 p-3" >
                <div class="box rounded d-flex flex-column align-items-center">
                    <img src="'.$data['imagen'].'" class="img-cards-servicios img-fluid p-2" alt="" />
                    <div class="d-flex justify-content-center align-content-between flex-wrap h-100">
                    <h3>'.$data["titulo"].'</h3>
                    <p class="w-100">
                        '.$data["descripcion"].'
                    </p>
                    <div class="btn btn-primary btn-servicios">
                        + Ver más
                    </div>
                    </div>
                </div>
            </div>';
}
 ?>