<template>
    <div>
       <section id="resume" class="container section">
            <div class="row">
                <div class="col-md-10">
                    <h2 id="resume_header" class="section__title">Resume_</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 section__resume resume-list">
                    <h3 class="resume-list_title">education</h3>
                    <div class="resume-list__block">
                        <p class="resume-list__block-title">University of Science</p>
                        <p class="resume-list__block-date">2016 - 2020</p>
                        <p>
                            Bachelor Degree
                        </p>
                    </div>
                    <div class="resume-list__block">
                        <p class="resume-list__block-title">Vinh Binh High School</p>
                        <p class="resume-list__block-date">2013 - 2016</p>
                        <p>
                            Student
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 section__resume resume-list">
                    <h3 class="resume-list_title">employment</h3>
                    <div class="resume-list__block">
                        <p class="resume-list__block-title">Allexceed VietNam</p>
                        <p class="resume-list__block-date">July 2019 - February 2021</p>
                        <p>
                            Software engineer (Junior)
                        </p>
                    </div>
                </div>
            </div>
            <div class="row section__resume progress-list js-progress-list">
                <div class="col-md-12">
                    <h3 class="progress-list__title">general skills</h3>
                </div>
                <div class="col-md-5 mr-auto">
                    <div class="progress-list__skill">
                        <p>
                            <span class="progress-list__skill-title">php (laravel framework)</span>
                            <span class="progress-list__skill-value">70%</span>
                        </p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="progress-list__skill">
                        <p>
                            <span class="progress-list__skill-title">vuejs</span>
                            <span class="progress-list__skill-value">70%</span>
                        </p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="progress-list__skill">
                        <p>
                            <span class="progress-list__skill-title">java script</span>
                            <span class="progress-list__skill-value">60%</span>
                        </p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 mr-auto">
                    <div class="progress-list__skill">
                        <p>
                            <span class="progress-list__skill-title">jquery</span>
                            <span class="progress-list__skill-value">50%</span>
                        </p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    
                    <div class="progress-list__skill">
                        <p>
                            <span class="progress-list__skill-title">git</span>
                            <span class="progress-list__skill-value">70%</span>
                        </p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="progress-list__skill">
                        <p>
                            <span class="progress-list__skill-title">mysql</span>
                            <span class="progress-list__skill-value">70%</span>
                        </p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class ResumeComponent extends Vue {
      @Prop() private msg!: string;
    }
</script>
