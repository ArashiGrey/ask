<template>
  <section class="section is-large">
    <div class="columns is-desktop">
      <div class="column slimmed">
        <div class="outer">
          <div class="inner">
            <img class="upper" src="https://res.cloudinary.com/askcreative-space/image/upload/c_scale,f_auto,w_212/v1516458719/AmyCVpic_cefmu7.jpg">
          </div>
        </div>
      </div>
      <div class="column shorten">
 
          <div class="card">
            <blockquote>
            <p class="title serif">
              "Reduce, Reuse, Recycle, Research, Repurpose, Repair &amp; Rent;
              <br>I can help you with a few of those
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
                <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z"
                  fill="#000000"></path>
                <path d="M6.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM6.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
                  fill="#000000"></path>
                <path d="M12.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM12.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
                  fill="#000000"></path>
                <path d="M9.5 17c-3.584 0-6.5-2.916-6.5-6.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 3.584-2.916 6.5-6.5 6.5z"
                  fill="#000000"></path>
              </svg>."
            </p>
            </blockquote>
            <br>
            <p class="subtitle">
              The 7 R's of Fashion
            </p>
        
        </div>
      </div>
      <div class="column">
        <p class="title is-size-2 serif">Amy in brief.</p>
        <p>
          I am the founder, owner, operator of Amy Storm Kosman creative.
          <br> I'm from California and currently living in the Netherlands.
          <br>I am inspired by the things I miss,
          <br>family, warm weather, and mountains.
          <br>I am inspired by the things around me;
          <br>nothing compares to the Dutch sky.
        </p>
        <br>
        <p class="title is-size-3 serif">The business in brief.</p>
        <p>
          Amy Storm Kosman creative is an upcyle brand.
          <br>All fabrics are vintage.
          <br>All items are made from remnants, leftover, offcut, end of line, and dead fabrics.
          <br>Items from used fabrics are clearly marked.
        </p>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'briefAbout'
}
</script>
<style scoped>
.outer {
  float: right;
  background-image: repeating-linear-gradient(190deg, rgba(172, 59, 97, .4) 40px,
   rgba(106, 130, 251, .2) 80px,
    rgba(254, 172, 94, .2) 120px,
     rgba(199, 121, 208, .2)160px,
      rgba(75, 192, 200, .2) 200px),
       repeating-linear-gradient(-190deg, rgba(172, 59, 97, .4) 30px,
        rgba(106, 130, 251, .3) 60px, rgba(254, 172, 94, .2) 90px,
         rgba(199, 121, 208, .2) 120px, rgba(75, 192, 200, .2) 150px),
          repeating-linear-gradient(23deg, rgba(172, 59, 97, .4) 50px,
           rgba(106, 130, 251, .3) 100px, rgba(254, 172, 94, 3) 150px,
            rgba(199, 121, 208, .3) 200px, rgba(75, 192, 200,.3) 250px);
  height: 400px;
  width: 400px;
  border: 1px #171412 solid;
}
.inner {
  height: 300px;
  width: 300px;
  background: #171412;
  -moz-border-radius: 300px;
  -webkit-border-radius: 300px;
  border-radius: 300px;
  margin-left: 20%;
  margin-top: 20%;
}
.upper {
  margin-top: -25px;
  margin-left: -25px;
}
.lower {
    margin-top: 50px;
    max-width: 500px;
}
.serif {
    font-family: 'Fertigo', Georgia, Times, serif;
}
.card {
	background-color: #f6f6f6;
	box-shadow: 0 3px 4px rgba(106, 130, 251, .2), 0 0 0 2px rgba(106, 130, 251, .2);
}

.column.shorten {
  max-width: 500px;
  margin-top: 50px;
}
.column {
  margin: 1rem;
}
@media (max-width: 799px){
  .outer {
    float: none;
  }
  .column {
    margin: 0 0 10vw 0;
  }
  .column.slimmed {
    padding: 0;
    margin: 0;
  }
  .card {
	max-width: 75vw;
}
}
@media (max-width: 1199px){
  .columns {
    display: block;
    margin-left: 10vw;
  }
  .outer {
    float: none;
  }
  .column.slimmed {
    padding: 0;
    margin: 0;
  }
}

</style>