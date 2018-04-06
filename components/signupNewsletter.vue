<template>
  <section class="newsletter">
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
              <form name="contact" method="POST" netlify>

                <div class="field">
                  <label class="label">Your Name:
                    <input class="input" type="text" name="name">
                  </label>
                </div>

                <div class="field">
                  <label class="label">Your Email:
                    <input class="input" type="email" name="email">
                  </label>
                </div>
                <div class="field">
                  <div class="control">
                    <label class="checkbox">
                      <input type="checkbox"> I would like to recieve updates from Amy Storm Kosman creative &amp; subscribe to the Amy Storm Kosman
                      creative newsletter.
                    </label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <label class="checkbox">
                      <input type="checkbox"> I have read the
                      <a href="/info/privacy">Privacy Policy</a>. I agree to the terms and understand my rights.
                    </label>
                  </div>
                </div>
                <p>
                  <button class="button is-medium is-pink" type="submit">Send</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
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
a {
  color: #171412;
  text-decoration-line: underline;
  text-decoration-color: #ac3b61;
  font-style: italic;
}
</style>