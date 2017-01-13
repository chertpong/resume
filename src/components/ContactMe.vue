<template>
  <div class="contact-me">
    <el-row type="flex" justify="center">
      <el-col :lg="{span: 8, offset: 6}" :md="{span: 6, offset: 6}" :sm="{ span: 8, offset: 4 }" :xs="24">
        <img src="~assets/me.jpg" class="image contact-me__profile-img contact-me__profile-img--small contact-me__profile-img--medium">
        <div class="contact-me__description">
          <p>
            Should you contact me?
            Hmmmm... Yes!
          </p>
        </div>
        <div class="contact-me__icon-wrapper">
          <a href="https://www.facebook.com/invather" target="_blank">
            <i class="fa fa-facebook-official fa-3x contact-me__facebook-icon" aria-hidden="true"></i>
          </a>
          <a href="https://th.linkedin.com/in/chertpong-horprasertwong-11b578b2" target="_blank">
            <i class="fa fa-linkedin-square fa-3x contact-me__linkedin-icon" aria-hidden="true"></i>
          </a>
        </div>
        <el-form label-position="left" :model="contactForm" class="contactForm"  label-width="80px">
          <el-form-item label="Nickname">
            <el-input class="contact-me__input" v-model="contactForm.nickname" disabled></el-input>
          </el-form-item>
          <el-form-item label="First name">
            <el-input class="contact-me__input" v-model="contactForm.firstName" disabled></el-input>
          </el-form-item>
          <el-form-item label="Last name">
            <el-input class="contact-me__input" v-model="contactForm.lastName" disabled></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input class="contact-me__input" v-model="contactForm.email" disabled></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        contactForm: {
          firstName: 'Chertpong',
          lastName: 'Horprasertwong',
          nickname: 'Krit',
          email: 'kritcg@gmail.com'
        }
      }
    }
  }
</script>
<style scoped>
  .contact-me {
    margin-top: 80px;
  }
  .contact-me__input {
    max-width: 180px;
    float: left;
  }
  .contact-me__profile-img {
    width: 215px;
    height: 200px;
    border-radius: 15px;
    display: flex;
    align-self: flex-center;
    margin-bottom: 25px;
  }

  @media (min-width: 250px) {
    .contact-me__profile-img--small {
        margin-left: 15px;
    }
  }

  @media (min-width: 768px) {
    .contact-me__profile-img--medium {
        margin-left: 20px;
    }
  }
  .contact-me__description {
    text-align: left;
  }
  .contact-me__icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 25px;
  }
  .contact-me__facebook-icon {
    color: #3b5998;
    margin-left: 65px;
    cursor: pointer;
  }

  .contact-me__linkedin-icon {
    color: #287bbc;
    margin-left: 15px;
    cursor: pointer;
  }


</style>
