<template>
  <section class="message">
    <div class="columns is-mobile is-centered">
      <div class="column is-three-fifths">
        <div class="card">
          <div class="card-content">
            <h2 class="title">Quick Message</h2>
            <div class="card-content">
              <div class="content">
                <form name="message" form-name="message" ref="message" netlify-honeypot="bot-field" method="POST" action="successmessage" netlify>
                  <p class="is-hidden">
                    <label>Don’t fill this out:
                      <input name="bot-field">
                    </label>
                  </p>
                  <div class="field">
                    <label class="label">Name</label>
                    <p class="control">
                      <input name="name" v-model="name" :class="{'input': true}" type="text" placeholder="Name">
                    </p>
                  </div>
                  <div class="field">
                    <label class="label">Email</label>
                    <p class="control">
                      <input name="email" v-model="email" class='input' type="text" placeholder="Email">
                        If you would like a reply to your message.
                    </p>
                  </div>
                  <div class="field">
                    <label for="message" class="label">Message</label>
                    <textarea class="textarea" id="message" name="message" placeholder="Message" rows="6" v-model="message"></textarea>
                  </div>
                  <p>
                  <button class="button is-medium is-pink" type="submit" value="submit">
                    Send</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'quickMessage'
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
