<template>
    <div>
       <section id="portfolio" class="container section">
            <div class="row">
                <div class="col-md-12">
                    <h2 id="portfolio_header" class="section__title">My projects_</h2>
                </div>
            </div>
            <div class="row portfolio-menu">
                <div class="col-md-12">
                    <nav>
                        <ul>
                            <li><a href="spirit.html" @click="filter($event)" data-portfolio-target-tag="all">all</a></li>
                            <li><a href="spirit.html" @click="filter($event)" data-portfolio-target-tag="mobile apps">mobile apps</a></li>
                            <li><a href="spirit.html" @click="filter($event)" data-portfolio-target-tag="web-sites">web-sites</a></li>
                            <li><a href="spirit.html" @click="filter($event)" data-portfolio-target-tag="landing-pages">landing pages</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="portfolio-cards">
                <div class="row project-card" data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="web-sites">
                    <div class="col-md-6 col-lg-5 project-card__img">
                        <img class="" src="images/img-img_project_1_mono.png" alt="project-img" />
                    </div>

                    <div class="col-md-6 col-lg-7 project-card__info">
                        <h3 class="project-card__title">Mobile and desktop app for London hostel store</h3>
                        <p class="project-card__description">
                            Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.
                        </p>
                        <p class="project-card__stack">Used stack:</p>
                        <ul class="tags">
                            <li>html5</li>
                            <li>css3</li>
                            <li>JavaScript</li>
                            <li>bower</li>
                            <li>grunt</li>
                        </ul>
                        <a href="spirit.html" class="project-card__link">www.superapp.com</a>
                    </div>
                </div>
                <div class="row project-card" data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="mobile apps">
                    <div class="col-md-6 col-lg-5 project-card__img">
                        <img class="" src="images/img-img_project_2_mono.png" alt="project-img" />
                    </div>

                    <div class="col-md-6 col-lg-7 project-card__info">
                        <h3 class="project-card__title">Web app page for trevel company</h3>
                        <p class="project-card__description">
                            Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr.
                        </p>
                        <p class="project-card__stack">Used stack:</p>
                        <ul class="tags">
                            <li>html5</li>
                            <li>css3</li>
                            <li>JavaScript</li>
                            <li>BEM</li>
                            <li>bower</li>
                            <li>grunt</li>
                        </ul>
                        <a href="spirit.html" class="project-card__link">www.travellend.com</a>
                    </div>
                </div>
                <div class="row project-card" data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="landing-pages">
                    <div class="col-md-6 col-lg-5 project-card__img">
                        <img class="" src="images/img-img_project_3_mono.png" alt="project-img" />
                    </div>

                    <div class="col-md-6 col-lg-7 project-card__info">
                        <h3 class="project-card__title">Admin template for Photo Service</h3>
                        <p class="project-card__description">
                            Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.
                        </p>
                        <p class="project-card__stack">Used stack:</p>
                        <ul class="tags">
                            <li>html5</li>
                            <li>css3</li>
                            <li>JavaScript</li>
                            <li>BEM</li>
                            <li>bower</li>
                            <li>grunt</li>
                        </ul>
                        <a href="spirit.html" class="project-card__link">www.coolphoto.com</a>
                    </div>
                </div>
            </div>
        </section>
        <!--Portfolio--><!--Testimonials-->
        <div id="testimonials" class="section">
            <div class="background slider-carousel" style="background-image: url(assets/img/img_bg_main.jpg);">
                <div class="container">
                    <div id="carouselTestimonials" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselTestimonials" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselTestimonials" data-slide-to="1"></li>
                            <li data-target="#carouselTestimonials" data-slide-to="2"></li>
                            <li data-target="#carouselTestimonials" data-slide-to="3"></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                                        <p class="slider-carousel__title">Antonio Anderson</p>
                                        <p class="slider-carousel__caption">Project: Landin page for travel company</p>
                                        <hr />
                                        <p class="slider-carousel__description">
                                            Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as.
                                            Sending do brought winding compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has cease too the decay.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                                        <p class="slider-carousel__title">Antonio Anderson</p>
                                        <p class="slider-carousel__caption">Project: Landin page for travel company</p>
                                        <hr />
                                        <p class="slider-carousel__description">
                                            Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as.
                                            Sending do brought winding compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has cease too the decay.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                                        <p class="slider-carousel__title">Antonio Anderson</p>
                                        <p class="slider-carousel__caption">Project: Landin page for travel company</p>
                                        <hr />
                                        <p class="slider-carousel__description">
                                            Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as.
                                            Sending do brought winding compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has cease too the decay.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                                        <p class="slider-carousel__title">Antonio Anderson</p>
                                        <p class="slider-carousel__caption">Project: Landin page for travel company</p>
                                        <hr />
                                        <p class="slider-carousel__description">
                                            Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as.
                                            Sending do brought winding compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has cease too the decay.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#testimonials" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#testimonials" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                        <div class="slider-carousel__circle">
                            <p><i class="fa fa-quote-right" aria-hidden="true"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class PortfolioComponent extends Vue {
       public filter(event :any) : void{
           window.core.ui.filter(event);
       }
    }
</script>
