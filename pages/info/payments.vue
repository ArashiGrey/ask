<template>
  <piecePaper>
    <section class="hero is-bold is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
            Payment Policy
          </h1>
        </div>
      </div>
    </section>
      <div class="columns">
        <div class="column auto">
        </div>
        <div class="column is-three-fifths">
        <p>
          The agreement for buying and selling is realized at the moment that you accept and comply with the general terms 
          & conditions of Amy Storm Kosman creative. As long as the agreement is not confirmed by mail the customer has the right 
          to cancel the agreement.
        </p>
        <br>
        <p>
          The due payment can be made by IDEAL, Visa, MasterCard, Paypal, V-Pay or Maestro. When paying with creditcard, 
          Amy Storm Kosman creative has the right to confirm if the card is valid, if there is enough payment limit to pay 
          the product and if the address information is correct.
        </p>
        <br>
        <p>
        Payments are handled by Rabo Omnikassa.
        </p>
        <br>
        <p>
          If you choose a direct payment gateway to complete your purchase it is encrypted through the Payment Card Industry 
          Data Security Standard (PCI-DSS). Your purchase transaction data is stored only as long as is necessary to complete 
          your purchase transaction. After that is complete, your purchase transaction information is deleted.
          All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, 
          which is a joint effort of brands like Visa and Mastercard. PCI-DSS requirements help ensure the secure handling of 
          credit card information by our store and its service providers.
        </p>
        <br>
        <h3 class="is-size-4">iDEAL</h3>
        <br>
        <p>
          Paying with iDEAL is a safe domestic way of paying online. Choose your bank and follow the steps.
        </p>
        <br>
        <h3 class="is-size-4">PayPal</h3>
        <br>
        <p>
          PayPal is an online payment system both domestically and internationally. You are guided to the PayPal login page. 
          There you will find a summary of your ordered products and the total amount.
        </p>
        <br>
        <h3 class="is-size-4">Credit Card</h3>
        <br>
        <p>
          You can pay safely with your creditcard: Visa, MasterCard, Maestro and V-Pay.
        </p>
        </div>
        <div class="column auto">
        </div>
      </div>
  </piecePaper>
</template>

<script>
import piecePaper from '~/components/info/piecePaper.vue'

export default {
  head () {
    return {
      title: 'A.S.K.c Payment Policy',
      meta: [
        { hid: 'description', name: 'description', content: 'Amy Storm Kosman creative Payment Policy, how to pay, and how that payment is processed.' }
      ]
    }
  },
  components: {
    piecePaper
  }
}
</script>
