<div id="modal-prueba-gratis" class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content bg-dark text-white">
            <div class="modal-header">
                <h5 class="modal-title">Demo Gratis</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body contact">
                <form id="modal-prueba-gratis" action="forms/contact.php" method="post" class="php-email-form rounded">
                    <div class="row gy-4">
                        <div class="col-md-12">
                            <input type="text" name="nombre" class="form-control" placeholder="Nombre" required />
                        </div>

                        <div class="col-md-12">
                            <input type="text" class="form-control" name="celular" placeholder="Celular" required />
                        </div>

                        <div class="col-md-12">
                            <input type="email" class="form-control" name="email" placeholder="Email" required />
                        </div>
                        <div class="col-md-12 d-none">
                            <input type="text" class="form-control" name="mensaje" placeholder="mensaje" />
                        </div>

                        <div class="col-md-12 text-center">
                            <div class="loading">Cargando</div>
                            <div class="error-message"></div>
                            <div class="sent-message">
                                Te enviamos los datos de acceso a tu correo. No olvides
                                revisar SPAM. Gracias!
                            </div>

                            <button id="btn-enviar-mail" type="submit" class="btn btn-success">
                                Quiero Demo Gratis
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>