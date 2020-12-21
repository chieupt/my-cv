<template>
    <div>
        <div class="background" style="background-image: url(assets/img/img_bg_main.jpg);">
    <div id="contact" class="container section">
      <div class="row">
        <div class="col-md-12">
          <p id="contacts_header" class="section__title">Get in touch_</p>
        </div>
      </div>
      <div class="row contacts">
        <div class="col-md-5 col-lg-4">
          <div class="contacts__list">
            <dl class="contact-list">
              <dt>Phone:</dt>
              <dd><a href="tel:82344563333">8 (234) 456-33-33</a></dd>
              <dt>Skype:</dt>
              <dd><a href="skype:iamivanovivan.html">iamivanovivan</a></dd>
              <dt>Email:</dt>
              <dd><a href="mailto:mail@mail.com">mail@mail.com</a></dd>
            </dl>
          </div>
          <div class="contacts__social">
            <ul>
              <li><a href="spirit.html">Facebook</a></li>
              <li><a href="spirit.html">Linkedin</a></li>
              <li><a href="spirit.html">GitHub</a></li>
              <li><a href="spirit.html">Bitbucket</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-7 col-lg-5">
          <div class="contacts__form">
            <p class="contacts__form-title">Or just write me a letter here_</p>
            <form class="js-form">
              <div class="form-group">
                <input class="form-field js-field-name" type="text" placeholder="Your name" required /><span
                  class="form-validation"></span>
                <span class="form-invalid-icon"><i class="mdi mdi-close" aria-hidden="true"></i></span>
              </div>
              <div class="form-group">
                <input class="form-field js-field-email" type="email" placeholder="Your e-mail" required /><span
                  class="form-validation"></span>
                <span class="form-invalid-icon"><i class="mdi mdi-close" aria-hidden="true"></i></span>
              </div>
              <div class="form-group">
                <textarea class="form-field js-field-message" placeholder="Type the message here"
                  required></textarea><span class="form-validation"></span>
                <span class="form-invalid-icon"><i class="mdi mdi-close" aria-hidden="true"></i></span>
              </div>
              <button class="site-btn site-btn--form" type="submit" value="Send">Send</button>
            </form>
          </div>
          <div class="footer">
            <p>&copy; 2016 Ivan Susanin. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Contact-->
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class ContactComponent extends Vue {
      @Prop() private msg!: string;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
