<template>
  <section class="message">
    <div class="columns is-mobile is-centered">
      <div class="column is-three-fifths">
        <div class="card">
          <div class="card-content">
            <h2 class="title">Quick Message</h2>
              <div class="success" v-if="status === 2">
                <div class="close" @click="status = 0">X
                </div>
                Message sent.
              </div>
              <div class="card-content">
                <div class="content">
                  <div class="field">
                    <label for="name" class="label">Name</label>
                    <input class="input" type="text" name="title" placeholder="Name" v-model="form.name" />
                  </div>
                <div class="field">
                  <label class="label">Email</label>
                  <p class="control">
                    <input name="email" v-model="form.email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }"
                      type="email" placeholder="Email">
                    <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                  </p>
                </div>
                  <div class="field">
                    <label for="message" class="label">Message</label>
                    <textarea class="textarea" id="message" name="message" placeholder="Message" rows="6" v-model="form.message"></textarea>
                  </div>
                  <div class="field is-grouped">
                    <button type="button" v-if="status === 1">Please wait.</button>
                    <button class="button is-medium is-pink" type="button" v-else @click="send">Submit</button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VeeValidate from 'vee-validate'
export default {
  name: 'quickMessage',
  data () {
    return {
      status: 0,
      form: { name: '', email: '', message: '' }
    }
  },
  methods: {
    send () {
      if (this.form.name.length && this.form.email.length && this.form.message.length) {
        this.status = 1
        this.$axios.post('http://formspree.io/hello@askcreative.space', this.form).then((res) => {
          this.status = 2
          this.form.name = ''
          this.form.email = ''
          this.form.message = ''
        })
      }
    }
  }
}
</script>

<style scoped>
.message {
  margin: 5vh;
  background-color: transparent;
}
.card {
	background-color: #fefcfb;
	box-shadow: none;
	max-width: 100%;
	position: relative;
}
.success {
  color: #fefcfb;
  background-color: #3e9523;
  border-radius: 5px;
  padding: 20px 15px;
  margin-bottom: 30px;
}
.close {
  cursor: pointer;
  color: #fefcfb;
  border: 1px solid #fefcfb;
  width: 24px;
  height: 24px;
  float: right;
  border-radius: 50%;
  text-align: center;
  font-weight: 300;
  line-height: 22px;
  background-color: transparent;
}
.textarea,
.input {
  border: 2px solid rgb(217, 213, 214);
  box-shadow: inset 0 1px 2px rgba(217, 213, 314, 0.1);
  background-color: #fefcfb;
}
.is-pink {
  background-color: #ac3b61;
  color: #fefcfb;
}
</style>
  