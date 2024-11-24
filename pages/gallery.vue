<template>
<main class="main">

<!-- breadcrumb -->
<div class="site-breadcrumb" style="background: url(assets/img/breadcrumb/01.jpg)">
    <div class="container">
        <h2 class="breadcrumb-title">Gallery</h2>
        <ul class="breadcrumb-menu">
            <li><a href="index.html">Home</a></li>
            <li class="active">Gallery</li>
        </ul>
    </div>
</div>
<!-- breadcrumb end -->


<!-- gallery-area -->
<div class="gallery-area py-120">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mx-auto">
                <div class="site-heading text-center">
                    <span class="site-title-tagline"><i class="far fa-images"></i> Galeri Kami</span>
                    <h2 class="site-title"><span>Galeri</span> Kegiatan</h2>
                    <p>Temukan momen-momen terbaik yang kami abadikan melalui berbagai kegiatan yang penuh inspirasi dan keseruan.</p>
                </div>
            </div>
        </div>
        <div class="row popup-gallery">
            <div class="col-md-4 wow fadeInUp" data-wow-delay=".25s">
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="assets/img/gallery/01.jpg" alt="">
                    </div>
                    <div class="gallery-content">
                        <a class="popup-img gallery-link" href="assets/img/gallery/01.jpg"><i
                                class="fal fa-plus"></i></a>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="assets/img/gallery/02.jpg" alt="">
                    </div>
                    <div class="gallery-content">
                        <a class="popup-img gallery-link" href="assets/img/gallery/02.jpg"><i
                                class="fal fa-plus"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 wow fadeInUp" data-wow-delay=".50s">
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="assets/img/gallery/03.jpg" alt="">
                    </div>
                    <div class="gallery-content">
                        <a class="popup-img gallery-link" href="assets/img/gallery/03.jpg"><i
                                class="fal fa-plus"></i></a>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="assets/img/gallery/04.jpg" alt="">
                    </div>
                    <div class="gallery-content">
                        <a class="popup-img gallery-link" href="assets/img/gallery/04.jpg"><i
                                class="fal fa-plus"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 wow fadeInUp" data-wow-delay=".75s">
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="assets/img/gallery/05.jpg" alt="">
                    </div>
                    <div class="gallery-content">
                        <a class="popup-img gallery-link" href="assets/img/gallery/05.jpg"><i
                                class="fal fa-plus"></i></a>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="assets/img/gallery/06.jpg" alt="">
                    </div>
                    <div class="gallery-content">
                        <a class="popup-img gallery-link" href="assets/img/gallery/06.jpg"><i
                                class="fal fa-plus"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- gallery-area end -->

</main>
</template>

<script>
export default {
  name: 'Gallery',
}
</script>