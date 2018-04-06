<template>
  <section class="newsletter">
    <form name="contact" method="POST" netlify>
    <div class="columns is-mobile is-centered">
      <div class="column is-three-fifths">
        <div class="card">
          <div class="card-content">
            <h2 class="title">
              Subscribe to my Newsletter
            </h2>
            <p class="subtitle">
              &amp; receive occasional updates
            </p>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="field">
                <label for="name" class="label">Title</label>
                <input class="input" type="text" name="title" placeholder="Title" v-model="form.title" />
              </div>
              <div class="field">
                <label for="email" class="label">Email</label>
                <input class="input" type="email" name="email" placeholder="Email" v-model="form.email" />
              </div>
            </div>
            <div class="field is-grouped">
              <button type="button" v-if="status === 1">Please wait.</button>
              <button class="button is-medium is-pink" type="button" v-else @click="send">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'signupNewletter'
}
</script>

<style scoped>
.newsletter {
  margin-bottom: 6vh;
}
.card {
	background-color: #fefcfb;
	box-shadow: none;
	max-width: 100%;
	position: relative;
}
.card-header {
	box-shadow: none;
}
.card-footer {
	border-top: none;
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