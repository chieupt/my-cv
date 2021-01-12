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
                            <li><a  @click="filter($event)" data-portfolio-target-tag="all">all</a></li>
                            <!-- <li><a  @click="filter($event)" data-portfolio-target-tag="mobile apps">mobile apps</a></li> -->
                            <li><a  @click="filter($event)" data-portfolio-target-tag="web-sites">web-sites</a></li>
                            <!-- <li><a  @click="filter($event)" data-portfolio-target-tag="landing-pages">landing pages</a></li> -->
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="portfolio-cards">
                <div class="row project-card" data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="web-sites">
                    <div class="col-md-6 col-lg-5 project-card__img">
                        <img class="" src="images/img-img_project_2_mono.png" alt="project-img" />
                    </div>

                    <div class="col-md-6 col-lg-7 project-card__info">
                        <h3 class="project-card__title">KYUDO SYSTEM</h3>
                        <p class="project-card__description">
                            Management and maintenance system
                        </p>
                        <p class="project-card__stack">Used stack:</p>
                        <ul class="tags">
                            <li>html5</li>
                            <li>css3</li>
                            <li>JavaScript</li>
                            <li>Laravel</li>
                            <li>Vuejs</li>
                        </ul>
                    </div>
                </div>
                <!-- <div class="row project-card" data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="mobile apps">
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
                </div> -->
                <div class="row project-card" data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="landing-pages">
                    <div class="col-md-6 col-lg-5 project-card__img">
                        <img class="" src="images/img-img_project_1_mono.png" alt="project-img" />
                    </div>

                    <div class="col-md-6 col-lg-7 project-card__info">
                        <h3 class="project-card__title">Enercom system</h3>
                        <p class="project-card__description">
                            User management system, electrical system maintenance for Japanese enterprises
                        </p>
                        <p class="project-card__stack">Used stack:</p>
                        <ul class="tags">
                            <li>html5</li>
                            <li>css3</li>
                            <li>JavaScript</li>
                            <li>CakePHP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
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
