<template>
    <div>
        <!--Header-->
        <header class="main-header" style="background-image: url(assets/img/img_bg_header.jpg);">
            <div class="container">
                <div class="row personal-profile">
                    <div class="col-md-4 personal-profile__avatar">
                        <img class="" src="images/img-img_avatar.png" alt="avatar" />
                    </div>
                    <div class="col-md-8">
                        <p class="personal-profile__name">John Anderson_</p>
                        <p class="personal-profile__work">frontend developer, QA-engineer</p>
                        <div class="personal-profile__contacts">
                            <dl class="contact-list contact-list__opacity-titles">
                                <dt>Age:</dt>
                                <dd>23</dd>
                                <dt>Phone:</dt>
                                <dd><a href="tel:82344563333">8 (234) 456-33-33</a></dd>
                                <dt>Email:</dt>
                                <dd><a href="mailto:mail@mail.com">mail@mail.com</a></dd>
                                <dt>Address:</dt>
                                <dd>Melbourne Victoria 3000 Australia</dd>
                            </dl>
                        </div>
                        <p class="personal-profile__social">
                            <a href="spirit.html" target="_blank"><i class="fa fa-github"></i></a>
                            <a href="spirit.html" target="_blank"><i class="fa fa-linkedin-square"></i></a>
                            <a href="spirit.html" target="_blank"><i class="fa fa-facebook-square"></i></a>
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
                        I am Junior Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using current
                        best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.
                    </p>
                    <a @click="alert("Oops! Coming soon :(")" class="section_btn site-btn"><img src="images/img-img_btn_icon.png" alt="" />Download CV</a>
                </div>
            </div>
        </section>
        <!--Hello-->
        <hr />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    @Component({

    })
    export default class HomeComponent extends Vue {
      @Prop() private msg!: string;

        downloadCv(): any {
          alert("Oops! Coming soon :(");
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
