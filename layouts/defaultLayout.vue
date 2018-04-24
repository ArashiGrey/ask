<template>
  <div>
    <my-top/>
    <nuxt/>
    <my-bottom/>
  </div>
</template>
<script="type/javascript">
var config= {
    apiKey: '2bb6899d83636c41eb8437a22ec67b01232d1a18',
    product: 'COMMUNITY',
    optionalCookies: [
        {
            name: 'analytics',
            label: 'Analytics',
            description: '',
            cookies: [],
            onAccept : function(){},
            onRevoke: function(){}
        },
        {
            name: 'marketing',
            label: 'Marketing',
            description: '',
            cookies: [],
            onAccept : function(){},
            onRevoke: function(){}
        },
        {
            name: 'preferences',
            label: 'Preferences',
            description: '',
            cookies: [],
            onAccept : function(){},
            onRevoke: function(){}
        },
        {
            name: 'shop',
            label: 'Shop',
            description: '',
            cookies: [],
            onAccept : function(){},
            onRevoke: function(){}
        },
        {
            name: 'blog',
            label: 'Blog',
            description: '',
            cookies: [],
            onAccept : function(){},
            onRevoke: function(){}
        }
        ],
        position: 'LEFT',
        theme: 'DARK'
    }
    CookieControl.load( config )
</script>

<script>
import myTop from '../components/myTop.vue'
import myBottom from '~/components/myBottom.vue'

export default {
  components: {
    myTop,
    myBottom
  }
}
</script>