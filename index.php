<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />

    <title>Rocking My Nails</title>
    <meta name="description" content="">
    <meta name="keywords" content="">

    <!-- Favicons -->
    <link href="assets/img/logo.jpg" rel="icon" />
    <link href="assets/img/logo.jpg" rel="apple-touch-icon" />

    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet" />

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

    <link href="assets/calendar/build/vanilla-calendar.css" rel="stylesheet">
    <!-- Template Main CSS File -->
    <link href="assets/css/style.css" rel="stylesheet" />
    <link href="assets/css/animated-bg.css" rel="stylesheet" />
    <link href="assets/css/parallax.css" rel="stylesheet" />

</head>

<body>

    <?php include("./assets/utils/Conexion.php")?>
    <?php include("./assets/inc/secciones/navbar.php")?>
    <?php include("./assets/inc/secciones/banner.php")?>
    <main id="main">
        <?php include("./assets/inc/secciones/servicios.php")?>
        <?php include("./assets/inc/secciones/preguntas-frecuentes.php")?>
        <?php include("./assets/inc/secciones/contacto.php")?>
        <?php include("./assets/inc/secciones/footer.php")?>
        <!-- modals -->
        <?php include("./assets/inc/modal/prueba-gratis.php")?>

    </main>

    <!-- JS Files -->
    <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
    <script src="assets/vendor/aos/aos.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>
    <script src="assets/vendor/jquery.js"></script>
    <script src="assets/js/vendor/typed.js"></script>
    <script src="assets/js/vendor/mousetrap.js"></script>
    <script src="assets/calendar/build/vanilla-calendar.js"></script>
    <script>
    const options = {
        settings: {
            lang: 'define',
        },
        locale: {
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
                'Octubre', 'Noviembre',
                'Diciembre'
            ],
            weekday: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        },
    };

    document.addEventListener('DOMContentLoaded', () => {
        const calendar = new VanillaCalendar('#calendar', options);
        calendar.init();
    });
    </script>
    <!-- Template Main JS File 
    -->
    <script src="assets/js/main.js"></script>
</body>

</html>