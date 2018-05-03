<template>
  <one-article>
    <section class="hero is-bold is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
            {{ post.title }}
          </h1>
        </div>
      </div>
    </section>
      <div class="columns is-mobile">
        <div class="column auto">

        </div>
        <div class="column is-four-fifths-mobile is-three-fifths-tablet content">

            <div v-html="post.body" />
          </div>
         <div class="column auto">
        </div>
       </div>
             <div class="columns is-mobile">
        <div class="column auto">
        </div>
        <div class="column is-four-fifths-mobile is-three-fifths-tablet just-comments" data-allowguests="true" data-recaptcha="true" data-apikey="a0ed5c59-7970-4b05-aa80-3c6eb7ed198f">
      </div>
      <script async src="https://just-comments.com/w.js"></script>
      <script src='https://www.google.com/recaptcha/api.js?onload=jcOnRecaptchaLoad&render=explicit' async defer>
      </script>
         <div class="column auto">
        </div>
      </div>
  </one-article>
</template>

<script>
import oneArticle from '~/components/blog/oneArticle.vue'

export default {
    scrollToTop: true,
    components: {
    oneArticle,
    },
  async asyncData ({ app, route }) {
    return {
      post: await app.$content('/posts').get(route.path)
    }
  },
  transition (to, from) {
    if (!from || to.path === '/blog') return 'slide-left'
    return 'slide-right'
  },
    head () {
    return {
      title: `A.S.K.c - ${this.post.title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.post.description}` }
      ]
    }
  }
}
</script>
<style>
.content {
  font-size: 1.25rem;
  line-height: 2rem;
}
.content a {
  color: #ac3b61;
  text-decoration: underline;
}
.just-comments {
  margin-top: 5vh;
}
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*="language-"],
pre[class*="language-"] {
	color: black;
	background: none;
	text-shadow: 0 1px white;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
	text-shadow: none;
	background: #b3d4fc;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
	text-shadow: none;
	background: #b3d4fc;
}

@media print {
	code[class*="language-"],
	pre[class*="language-"] {
		text-shadow: none;
	}
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: slategray;
}

.token.punctuation {
	color: #999;
}

.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
	color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
	color: #9a6e3a;
	background: hsla(0, 0%, 100%, .5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: #07a;
}

.token.function,
.token.class-name {
	color: #DD4A68;
}

.token.regex,
.token.important,
.token.variable {
	color: #e90;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
</style>
