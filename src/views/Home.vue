<template>
    <div class="home">
        <MenuComponent/>
        <!--Header-->
        <header class="main-header" style="background-image: url(assets/img/img_bg_header.jpg);">
            <div class="container">
                <div class="row personal-profile">
                    <div class="col-md-4 personal-profile__avatar">
                        <img class="" src="images/avatar.jpg" alt="avatar" />
                    </div>
                    <div class="col-md-8">
                        <p class="personal-profile__name">Pham Thai Chieu_</p>
                        <p class="personal-profile__work">web developer (fullstack)</p>
                        <div class="personal-profile__contacts">
                            <dl class="contact-list contact-list__opacity-titles">
                                <dt>Age:</dt>
                                <dd>23</dd>
                                <dt>Phone:</dt>
                                <dd><a href="tel:0364661495">(+84) 0364661495</a></dd>
                                <dt>Email:</dt>
                                <dd><a href="mailto:ptchieu1998@mail.com">ptchieu1998@mail.com</a></dd>
                                <dt>Address:</dt>
                                <dd>19, Street 23, Phong Phu Commune, Binh Chanh District</dd>
                            </dl>
                        </div>
                        <p class="personal-profile__social">
                            <a href="https://github.com/chieupt" target="_blank"><i class="fa fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/ptchieu/" target="_blank"><i class="fa fa-linkedin-square"></i></a>
                            <a href="https://www.facebook.com/ptchieu.hcmus/" target="_blank"><i class="fa fa-facebook-square"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
        <!--Header--><!--Hello-->
        <section id="hello" class="container section">
            <div class="row">
                <div class="col-md-10">
                    <h2 id="hello_header" class="section__title">Hi_</h2>
                    <p class="section__description">
                        I am Junior Web developer with 1 year of experience. Now, I'm working on the Vuejs framework combined with Laravel and My SQL. I am a careful and hardworking person. I am eager to learn new things and willing to work in a team. I am rather serious at work and can work under high pressure. 
                    </p>
                    <a  class="section_btn site-btn"><img src="images/img-img_btn_icon.png" alt="" />Download CV</a>
                </div>
            </div>
        </section>
        <!--Hello-->
        <hr />
        <ResumeComponent/>
        <PortfolioComponent/>
        <ContactComponent/>

        <!-- Portfolio Modal -->
        <div class="modal fade portfolio-modal" id="portfolioModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body col-md-11 col-lg-9 ml-auto mr-auto">
                        <p class="portfolio-modal__title">Mobile and desktop app for London hostel store</p>
                        <img class="portfolio-modal__img" src="images/img-img_project_1_mono.png" alt="modal_img" />
                        <p class="portfolio-modal__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum. Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse.
                        </p>
                      
                        <div class="portfolio-modal__stack">
                            <p class="portfolio-modal__stack-title">Using stack:</p>
                            <ul class="tags">
                                <li>html5</li>
                                <li>css3</li>
                                <li>JavaScript</li>
                                <li>bower</li>
                                <li>grunt</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import HomeComponent from "@/components/HomeComponent.vue";
    import BlogComponent from "@/components/BlogComponent.vue";
    import ContactComponent from "@/components/ContactComponent.vue";
    import MenuComponent from "@/components/MenuComponent.vue";
    import PortfolioComponent from "@/components/PortfolioComponent.vue";
    import ResumeComponent from "@/components/ResumeComponent.vue";

    @Component({
      components: {
        HomeComponent,
        ContactComponent,
        PortfolioComponent,
        BlogComponent,
        ResumeComponent,
        MenuComponent
      }
    })
    export default class Home extends Vue {
        mounted(){
            window.core.ui.loadJs();
        }
    }
</script>
<style lang="scss">
    @import "@/assets/sass/style.scss";
</style>

