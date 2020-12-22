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
              <dd><a href="tel:82344563333">(+84) 0364661495</a></dd>
              <dt>Email:</dt>
              <dd><a href="mailto:mail@mail.com">ptchieu1998@mail.com</a></dd>
            </dl>
          </div>
          <div class="contacts__social">
            <ul>
              <li><a href="https://www.facebook.com/ptchieu.hcmus/">Facebook</a></li>
              <li><a href="https://www.linkedin.com/in/ptchieu/">Linkedin</a></li>
              <li><a href="https://github.com/chieupt">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-7 col-lg-5">
          <div class="contacts__form">
            <p class="contacts__form-title">Or just write me a letter here_</p>
            <form class="js-form contact-form" v-on:submit.prevent="sendEmail($event)">
              <div class="form-group">
                <input class="form-field js-field-name" name="user_name" type="text" placeholder="Your name" required /><span
                  class="form-validation"></span>
                <span class="form-invalid-icon"><i class="mdi mdi-close" aria-hidden="true"></i></span>
              </div>
              <div class="form-group">
                <input class="form-field js-field-email" name="from_name" type="email" placeholder="Your e-mail" required /><span
                  class="form-validation"></span>
                <span class="form-invalid-icon"><i class="mdi mdi-close" aria-hidden="true"></i></span>
              </div>
              <div class="form-group">
                <textarea class="form-field js-field-message" name="message" placeholder="Type the message here"
                  required></textarea><span class="form-validation"></span>
                <span class="form-invalid-icon"><i class="mdi mdi-close" aria-hidden="true"></i></span>
              </div>
              <button class="site-btn site-btn--form" type="submit" value="Send">Send</button>
            </form>
          </div>
          <div class="footer">
            <p>&copy; 2021 Thai Chieu. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import emailjs from 'emailjs-com';

    @Component
    export default class ContactComponent extends Vue {
      public sendEmail(event: HTMLFormElement){
          event.preventDefault();
         emailjs.sendForm('service_k4pj4bj', 'template_2mjc5n8', event.target, 'user_c3B9BY5S3CL0APbNwTs6h')
         .then((result) => {
             console.log('SUCCESS!', result.status, result.text);
         }, (error) => {
             console.log('FAILED...', error);
         });
      }
    }
</script>