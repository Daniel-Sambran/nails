<section id="contacto" class="contact pt-5">
    <div class="container" data-aos="fade-up">
        <header class="section-header text-light">
            <h2 class="text-light">Contacto</h2>
            <p class="text-light">Estamos a un Mensaje de Distancia</p>
        </header>

        <div class="row gy-4 d-flex align-items-center justify-content-center rounded">
            <div class="col-lg-6">
                <form action="forms/contact.php" method="post" class="php-email-form rounded">
                    <div class="row gy-4">
                        <div class="col-md-6">
                            <input type="text" name="nombre" class="form-control" placeholder="Nombre" required />
                        </div>

                        <div class="col-md-6">
                            <input type="text" class="form-control" name="celular" placeholder="Celular" required />
                        </div>

                        <div class="col-md-12">
                            <input type="email" class="form-control" name="email" placeholder="Email" required />
                        </div>

                        <div class="col-md-12">
                            <textarea class="form-control" name="mensaje" rows="6" placeholder="Mensaje"
                                required></textarea>
                        </div>

                        <div class="col-md-12 text-center">
                            <div class="loading">Cargando</div>
                            <div class="error-message"></div>
                            <div class="sent-message">
                                Recibimos tu mensaje, nos pondremos en contacto. Gracias!
                            </div>

                            <button type="submit">Enviar Mensaje</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- <a class="btn-wp-gt p-0 display-in-movile"
        href="https://wa.me/541155874259?text=Hola MYN Soluciones Digitales.Mi nombre es                   . El motivo de mi consulta es:">
        <img class="fixed-bottom fixed-btn btn-contacto-flotante img-fluid btn-wp-gt" src="assets/img/whatsapp.png"
            style="
              left: auto !important;
              right: 10px !important;
              bottom: 10px !important;
              width: 13vh !important;
              height: 13vh !important;
            " alt="Whatsapp" />
    </a>
    <a class="btn-wp-gt p-0 display-in-pc"
        href="https://web.whatsapp.com/send/?phone=541155874259&text=Hola MYN Soluciones Digitales.Mi nombre es                   . El motivo de mi consulta es:">
        <img class="fixed-bottom fixed-btn btn-contacto-flotante img-fluid btn-wp-gt" src="assets/img/whatsapp.png"
            style="
              left: auto !important;
              right: 10px !important;
              bottom: 10px !important;
              width: 13vh !important;
              height: 13vh !important;
            " alt="Whatsapp" />
    </a> -->
</section>