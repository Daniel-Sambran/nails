<div id="agendar-reunion" class="row w-100">
    <header class="py-3">
        <h2 class=" py-4 agencia-titulo mb-3" data-aos="fade-up">
            ¡Reservá tu cita hoy y deslumbra con unas uñas perfectas!
        </h2>
    </header>
    <div class="row w-100">
        <div class="col-12 col-lg-8 d-flex justify-content-center">
            <div id="calendar" class=" vanilla-calendar vanilla-calendar_default d-flex justify-content-center">
            </div>
        </div>
        <div id="" class="col ">
            <div id="container-horarios-" class="row">

                <?php                 
                    $conexion = new Conexion();
                    $conn = $conexion->conectar();
                
                    $sql= "SELECT * FROM horarios";
                    $response = $conn->query($sql);
                    $horarios = $response->fetch_all();
                    renderHorariosDeFecha($horarios);
                ?>

            </div>
        </div>
    </div>
</div>

<?php 
function renderHorariosDeFecha($horarios){
    foreach ($horarios as $key => $hora) {
        // var_dump($hora);
        echo"<div class='col-12 btn btn-primary my-1'>".$hora[1]."</div>";
    }
}