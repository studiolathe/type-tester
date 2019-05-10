<template>
  <section class="container" :class="{ 'container-dark': !darkMode }">
    <div class="container-wrapper">
      <nav class="nav">
        <div class="w-100 w-25-m">
          <div class="logo">
            <svg width="938" height="200" viewBox="0 0 938 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 99.9999C0 142.8 26.8 179.3 64.6 193.6V6.3999C26.8 20.6999 0 57.1999 0 99.9999Z" fill="#DC1928"/>
            <path d="M100 0C97.2 0 94.5 0.1 91.8 0.3V7.3H92.3C130.4 7.6 161.1 36.6 160.8 72.2C160.5 107.6 129.7 136.1 91.8 136.1V199.6C94.5 199.8 97.3 199.9 100 199.9C155.2 199.9 200 155.1 200 99.9C200 44.8 155.2 0 100 0Z" fill="#DC1928"/>
            <path class="wordmark" d="M266.6 59.8999L240 140H253.8L259.3 123H290.7L296.2 140H310L283.4 59.8999H266.6ZM263.2 110.9L274.9 74.8999L286.6 110.9H263.2Z" fill="#DC1928"/>
            <path class="wordmark" d="M351.6 117.2C351.6 124 347.9 129.5 340.2 129.5C332.8 129.5 330 124.8 330 118.1V80.8H316.6V119.5C316.6 132.8 323.8 141.4 335.2 141.4C342.9 141.4 347.5 138.1 351.1 133.2H351.6V140.1H365.1V80.8H351.6V117.2Z" fill="#DC1928"/>
            <path class="wordmark" d="M408.1 105.1L398.1 103.7C391.7 102.8 389.8 100.7 389.8 97.1999C389.8 92.4999 393.9 89.4999 400.2 89.4999C406.5 89.4999 409.7 92.4999 410.5 97.0999H423C422.3 88.3999 415.4 79.3999 400.2 79.3999C385.8 79.3999 376.7 87.3999 376.7 98.5999C376.7 107.5 381.4 113.4 393.6 115L403.6 116.4C409.8 117.2 411.2 119.7 411.2 123.5C411.2 128.5 407.4 131.3 400.7 131.3C393.3 131.3 389.6 127.9 388.9 123.1H375.8C376.9 133.5 384.9 141.5 400.6 141.5C414.5 141.5 424.2 134.1 424.2 122.2C424.2 112.2 419.7 106.7 408.1 105.1Z" fill="#DC1928"/>
            <path class="wordmark" d="M452 59.8999H438.7V80.7999H427.3V91.3999H438.6V122.5C438.6 133.9 445 140 458.3 140H465.1V128.7H459.9C454.7 128.7 452 126.7 452 121.3V91.3999H465.3V80.7999H452V59.8999Z" fill="#DC1928"/>
            <path class="wordmark" d="M490.5 89.6H490.2V80.8H476.8V140H490.2V109C490.2 98.4 494.6 93.9 503.7 93.9H508.3V80.8H503.1C498.1 80.8 493.3 83.1 490.5 89.6Z" fill="#DC1928"/>
            <path class="wordmark" d="M560.6 100.2C560.6 87.6999 552.6 79.3999 537.2 79.3999C521.1 79.3999 513.3 88.9999 512.9 98.7999H526.3C526.9 93.7999 529.9 90.0999 537.4 90.0999C544.4 90.0999 547.3 93.7999 547.3 98.3999C547.3 102 546.2 103.8 541.3 104.5L530 106C520.3 107.2 511.6 112 511.6 123.5C511.6 134.6 519.2 141.3 530.2 141.3C538.7 141.3 543.9 137.9 547.2 132.8H547.5C547.5 135.2 547.6 137.7 548.2 139.9H561.6C560.9 137.1 560.4 133.5 560.4 129.9V100.2H560.6ZM547.6 119C547.6 126.4 541.7 131.3 534.5 131.3C528.7 131.3 525.4 128.4 525.4 122.8C525.4 117.2 528.9 114.7 535.2 113.8L540.2 113.1C543.2 112.5 545.8 112 547.6 110.7V119Z" fill="#DC1928"/>
            <path class="wordmark" d="M587.8 123V59.8999H574.4V124.3C574.4 133.9 579.9 140 590.8 140H597.3V128.6H593.2C589.3 128.6 587.8 126.6 587.8 123Z" fill="#DC1928"/>
            <path class="wordmark" d="M614.3 56.1001C609.7 56.1001 606.2 59.7001 606.2 64.3001C606.2 68.9001 609.7 72.5001 614.3 72.5001C618.9 72.5001 622.4 68.9001 622.4 64.3001C622.5 59.7001 619 56.1001 614.3 56.1001Z" fill="#DC1928"/>
            <path class="wordmark" d="M621 80.8H607.6V140H621V80.8Z" fill="#DC1928"/>
            <path class="wordmark" d="M681 100.2C681 87.6999 673 79.3999 657.6 79.3999C641.5 79.3999 633.7 88.9999 633.3 98.7999H646.7C647.3 93.7999 650.3 90.0999 657.8 90.0999C664.8 90.0999 667.7 93.7999 667.7 98.3999C667.7 102 666.6 103.8 661.7 104.5L650.4 106C640.7 107.2 632 112 632 123.5C632 134.6 639.6 141.3 650.6 141.3C659.1 141.3 664.3 137.9 667.6 132.8H667.9C667.9 135.2 668 137.7 668.6 139.9H682C681.3 137.1 680.8 133.5 680.8 129.9V100.2H681ZM667.9 119C667.9 126.4 662 131.3 654.8 131.3C649 131.3 645.7 128.4 645.7 122.8C645.7 117.2 649.2 114.7 655.5 113.8L660.5 113.1C663.5 112.5 666.1 112 667.9 110.7V119Z" fill="#DC1928"/>
            <path class="wordmark" d="M753.6 59.8999H721.1V140H735.4V113.4H753.6C771 113.4 781.9 103.4 781.9 86.6999C781.9 70.0999 771.2 59.8999 753.6 59.8999ZM751.2 101.5H735.4V71.8999H751.2C761.6 71.8999 767.6 76.1999 767.6 86.6999C767.5 97.4999 761.6 101.5 751.2 101.5Z" fill="#DC1928"/>
            <path class="wordmark" d="M813.2 79.3999C796.3 79.3999 786.1 91.5999 786.1 110.3C786.1 129.1 796.3 141.3 813.2 141.3C830.1 141.3 840.3 129.1 840.3 110.3C840.3 91.5999 830.2 79.3999 813.2 79.3999ZM826.8 113C826.8 123.9 821.8 130.3 813.3 130.3C804.8 130.3 799.8 124 799.8 113V107.8C799.8 96.5999 804.9 90.2999 813.3 90.2999C821.9 90.2999 826.8 96.5999 826.8 107.8V113Z" fill="#DC1928"/>
            <path class="wordmark" d="M879.9 105.1L869.9 103.7C863.5 102.8 861.6 100.7 861.6 97.1999C861.6 92.4999 865.7 89.4999 872 89.4999C878.3 89.4999 881.5 92.4999 882.3 97.0999H894.9C894.2 88.3999 887.3 79.3999 872.1 79.3999C857.7 79.3999 848.6 87.3999 848.6 98.5999C848.6 107.5 853.3 113.4 865.5 115L875.5 116.4C881.7 117.2 883.1 119.7 883.1 123.5C883.1 128.5 879.3 131.3 872.6 131.3C865.2 131.3 861.5 127.9 860.8 123.1H847.7C848.8 133.5 856.8 141.5 872.5 141.5C886.4 141.5 896.1 134.1 896.1 122.2C896 112.2 891.5 106.7 879.9 105.1Z" fill="#DC1928"/>
            <path class="wordmark" d="M937.1 91.3999V80.7999H923.8V59.8999H910.5V80.7999H899.1V91.3999H910.4V122.5C910.4 133.9 916.8 140 930.1 140H936.9V128.7H931.7C926.5 128.7 923.8 126.7 923.8 121.3V91.3999H937.1Z" fill="#DC1928"/>
            </svg>
          </div>
        </div>
        <div class="w-100 w-25-m">
          <span>AP Sans BETA - 19.03.27</span>
        </div>
        <div class="w-100 w-25-m">
          <span>Contrast: </span>
          <button @click="toggleDarkMode" type="button" name="button">{{ updateText }}</button>
        </div>
      </nav>
      <div class="text heading-one">
        <div class="w-100 w-25-m pb1">
          <span class="db">Heading One</span>
          <span class="db">AP Sans - Display Medium</span>
          <span class="label db"></span>
        </div>
        <h1 class="h1 w-100 w-75-m pb1">Over our long history, our social purpose and commitment to the community has remained the same; to create connections and opportunities that matter to every Australian.</h1>
      </div>
      <div class="text heading-one">
        <div class="w-100 w-25-m pb1">
          <span class="db">Heading One</span>
          <span class="db">AP Sans - Display Regular</span>
          <span class="label db"></span>
        </div>
        <h1 class="h1 w-100 w-75-m pb1 display-regular">Over our long history, our social purpose and commitment to the community has remained the same; to create connections and opportunities that matter to every Australian.</h1>
      </div>
      <div class="text heading-two">
        <div class="w-100 w-25-m pb1">
          <span class="db">Heading Two</span>
          <span class="db">AP Sans - Display Medium</span>
          <span class="label db"></span>
        </div>
        <h2 class="h2 w-100 w-75-m pb1">Our network of 4,356 post offices enables convenient, local access to essential services in ommunities everywhere.</h2>
      </div>
      <div class="text heading-two">
        <div class="w-100 w-25-m pb1">
          <span class="db">Heading Two</span>
          <span class="db">AP Sans - Display Regular</span>
          <span class="label db"></span>
        </div>
        <h2 class="h2 w-100 w-75-m pb1 display-regular">Our network of 4,356 post offices enables convenient, local access to essential services in ommunities everywhere.</h2>
      </div>
      <div class="text body">
        <div class="w-100 w-25-m pb1">
          <span class="db">Body Text</span>
          <span class="db">AP Sans - Text Medium</span>
          <span class="label db"></span>
        </div>
        <div class="p w-100 w-75-m text-medium">
          <p>At Australia Post we proudly provide trusted ways for people, businesses and communities to connect with each other and the world. As our world changes, so too does our business. While we deliver over three billion articles a year, the mix is shifting dramatically to parcels as the community embraces eCommerce and new forms of digital communication.
          </p>
          <p>Today, Australia Post facilitates 82 per cent of the nation’s eCommerce, while new financial and identity services are changing the role of our post offices. Our business has changed significantly over the last decade.
          </p>
          <p>In 2008, Australian letter volumes reached an all-time peak. Since then, the number of addressed letters has declined by over 50 per cent – with more and more Australians choosing digital communication platforms and online transaction methods over the post. But the consumer shift to online channels has also opened up a whole new world of opportunity for our business.
          </p>
        </div>
      </div>
      <div class="text body">
        <div class="w-100 w-25-m pb1">
          <span class="db">Body Text</span>
          <span class="db">AP Sans - Text Regular</span>
          <span class="label db"></span>
        </div>
        <div class="p w-100 w-75-m text-regular">
          <p>At Australia Post we proudly provide trusted ways for people, businesses and communities to connect with each other and the world. As our world changes, so too does our business. While we deliver over three billion articles a year, the mix is shifting dramatically to parcels as the community embraces eCommerce and new forms of digital communication.
          </p>
          <p>Today, Australia Post facilitates 82 per cent of the nation’s eCommerce, while new financial and identity services are changing the role of our post offices. Our business has changed significantly over the last decade.
          </p>
          <p>In 2008, Australian letter volumes reached an all-time peak. Since then, the number of addressed letters has declined by over 50 per cent – with more and more Australians choosing digital communication platforms and online transaction methods over the post. But the consumer shift to online channels has also opened up a whole new world of opportunity for our business.
          </p>
        </div>
      </div>
      <div class="text body">
        <div class="w-100 w-25-m pb1">
          <span class="db">Body Text</span>
          <span class="db">AP Sans - Text Light</span>
          <span class="label db"></span>
        </div>
        <div class="p w-100 w-75-m text-light">
          <p>At Australia Post we proudly provide trusted ways for people, businesses and communities to connect with each other and the world. As our world changes, so too does our business. While we deliver over three billion articles a year, the mix is shifting dramatically to parcels as the community embraces eCommerce and new forms of digital communication.
          </p>
          <p>Today, Australia Post facilitates 82 per cent of the nation’s eCommerce, while new financial and identity services are changing the role of our post offices. Our business has changed significantly over the last decade.
          </p>
          <p>In 2008, Australian letter volumes reached an all-time peak. Since then, the number of addressed letters has declined by over 50 per cent – with more and more Australians choosing digital communication platforms and online transaction methods over the post. But the consumer shift to online channels has also opened up a whole new world of opportunity for our business.
          </p>
        </div>
      </div>
      <div class="text">
        <div class="w-100 w-25-m pb1">
          <span class="db">Numerals (Default)</span>
          <span class="db">AP Sans - Text Regular</span>
          <span class="label db"></span>
        </div>
        <div class="w-100 w-75-m">
          <p>These are our default numeral settings:</p>
          <div class="box">
            <p class="numerals-default">1234567890</p>
          </div>
        </div>
      </div>
      <div class="text">
        <div class="w-100 w-25-m pb1">
          <span class="db">Numerals (Tabular)</span>
          <span class="db">AP Sans - Text Regular</span>
          <span class="label db"></span>
        </div>
        <div class="w-100 w-75-m">
          <p>Fixed-width numbers are useful for tabular data, where comparing columns across rows is desired:</p>
          <div class="box">
            <p class="row">Tracking Number: <span class="numerals-tabular">1234567890</span></p>
            <p class="row">Tracking Number: <span class="numerals-tabular">8135468213</span></p>
            <p class="row">Tracking Number: <span class="numerals-tabular">2541638426</span></p>
            <p class="row">Tracking Number: <span class="numerals-tabular">3698515662</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import $ from 'jquery'

  export default {
    data: () => ({
      darkMode: true,
      showText: false
    }),
    methods: {
      toggleDarkMode() {
        this.darkMode = !this.darkMode
      }
    },
    computed: {
      updateText() {
        return this.darkMode ? 'Dark' : 'Light'
      }
    },
    mounted: () => {



      // let para = document.querySelector('p');
      // let compStyles = window.getComputedStyle(para);
      // para.textContent = 'My computed font-size is ' +
      //     compStyles.getPropertyValue('font-size') +
      //     ',\nand my computed line-height is ' +
      //     compStyles.getPropertyValue('line-height') +
      //     '.';

      // let getSize = function(elem) {
      //   let styles = window.getComputedStyle(elem);
      //   let label = elem.closest('.text').querySelector('.label')
      //   label.textContent = styles.getPropertyValue('font-size') + ' / ' + styles.getPropertyValue('line-height');
      // }
      //
      // let h1 = document.querySelectorAll('.h1');
      // let h2 = document.querySelectorAll('.h2');
      // let p = document.querySelectorAll('.p');
      //
      // // getSize(h1);
      // // getSize(h2);
      // // getSize(p);
      //
      // window.addEventListener("resize", function(){
      //   // getSize(h1);
      //   // getSize(h2);
      //   // getSize(p);
      // });


    }
  }
</script>

<style lang="scss" scoped>
  .container-dark{
    background-color:#292F33;
    color: $white;
    transition: all 0.25s $ease;
    .logo > svg{
      path{
        fill: $white;
      }
    }
    .box{
      color: $black;
    }
  }

  .container-wrapper{
    max-width: 1440px;
    width: 100%;
    padding: $padding;
    padding-bottom: $padding * 10;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    margin: 0 auto;

    .h1,
    .h2{
      max-width: 60ch;
    }
    p{
      max-width: 70ch;
    }
  }
  .text{
    display: flex;
    flex-direction: column;
    @include breakpoint(md){
      flex-direction: row;
    }
    padding-bottom: $padding * 2;
    p{
      padding-bottom: $padding;
    }
  }

  .box{
    background-color: rgb(238, 238, 238);
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    p{
      padding-bottom: 0;
    }
  }

  .numerals-default{

  }
  .numerals-tabular{
    font-feature-settings: 'tnum' 1;
    letter-spacing: 0.075em;
    color: $black;
    padding-left: 0.5rem;
  }

  .row{
    // border-top: 1px solid $grey;
    // padding-top: 1rem 0;
  }

  .nav{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: flex-end;

    padding-bottom: 20rem;
    .logo{
      max-width: 200px;
      align-self: flex-start;
      .wordmark{
        display: none;
        // @include breakpoint(md){
        //   display: block;
        // }
      }
    }
  }
</style>
