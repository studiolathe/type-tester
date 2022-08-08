<template>
  <section class="container" :class="{ 'container-dark': !darkMode }">
    <div class="container-wrapper">
      <nav class="nav">
        <div class="w-100 w-25-m">
          <div class="logo logo-dark" v-if="darkMode == false">
            <svg
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 873.78 1000"
            >
              <defs>
                <clipPath id="b">
                  <rect width="873.78" height="1000" style="fill: none" />
                </clipPath>
              </defs>
              <g style="clip-path: url(#b)">
                <path
                  d="M584.86,440.09l-38.63,227.15c-8.01,40.87-34.91,51.92-58.84,51.92h-179.1l75.49-416.04c-75.29-34.45-152.24-56.96-213.52-56.96s-105.57,15.74-137.06,53.54C11.03,326.51,0,359.69,0,399.09,0,517.36,93.02,681.49,252.24,815.41c141.94,118.31,298.1,184.59,411.77,184.59,56.69,0,102.44-17.38,132.47-52.02,23.64-26.81,33.06-61.63,33.06-101,0-114.97-93.75-276.07-244.67-406.89"
                  style="fill: #0d54ff"
                />
                <path
                  d="M263.38,0c-28.47,0-52.05,19.07-58.35,49l-25.19,137.16h225.19l-96.68,532.99h179.06c23.93,0,50.83-11.04,58.79-51.91l81.93-481.08h161.92c28.56,0,52.1-18.97,58.44-48.85L873.78,0H263.38Z"
                  style="fill: #fff"
                />
              </g>
            </svg>
          </div>
          <div class="logo logo-light" v-else>
            <svg
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 873.78 1000"
            >
              <defs>
                <clipPath id="b">
                  <rect width="873.78" height="1000" style="fill: none" />
                </clipPath>
              </defs>
              <g style="clip-path: url(#b)">
                <path
                  d="M584.86,440.09l-38.63,227.15c-8.01,40.87-34.91,51.92-58.84,51.92h-179.1l75.49-416.04c-75.29-34.45-152.24-56.96-213.52-56.96s-105.57,15.74-137.06,53.54C11.03,326.51,0,359.69,0,399.09,0,517.36,93.02,681.49,252.24,815.41c141.94,118.31,298.1,184.59,411.77,184.59,56.69,0,102.44-17.38,132.47-52.02,23.64-26.81,33.06-61.63,33.06-101,0-114.97-93.75-276.07-244.67-406.89"
                  style="fill: #3d76ff"
                />
                <path
                  d="M263.38,0c-28.47,0-52.05,19.07-58.35,49l-25.19,137.16h225.19l-96.68,532.99h179.06c23.93,0,50.83-11.04,58.79-51.91l81.93-481.08h161.92c28.56,0,52.1-18.97,58.44-48.85L873.78,0H263.38Z"
                  style="fill: #131b37"
                />
              </g>
            </svg>
          </div>
        </div>
        <div class="w-100 w-25-m">
          <span class="mono">Telstra Sans BETA - 08.08.22</span>
        </div>
        <div class="w-100 w-25-m">
          <span class="mono">Contrast: </span>
          <button
            class="mono"
            @click="toggleDarkMode"
            type="button"
            name="button"
          >
            {{ updateText }}
          </button>
        </div>
      </nav>

      <div class="divider w-100">
        <span class="mono">Type Styles</span>
        <span class="mono">Featured Headline</span>
      </div>

      <!-- Display Bold -->
      <div class="text heading-one">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Leader: Text Medium</span>
          <span class="db mono">Headline: Display Bold</span>
          <span class="db mono">Subline: Text Regular</span>
          <span class="label db mono"></span>
        </div>
        <div class="card-featured">
          <div class="w-100 w-70-m">
            <h1 class="h1 pb1 display-bold">
              <small>NBN Plans</small>More speed for less.
            </h1>
            <p class="sub-text w-100">
              Save on home internet plans. Unlimited data. No lock-in contracts.
              For new services. Hurry, offer ends 24 Oct 2022.
            </p>
          </div>
        </div>
      </div>

      <!-- Display Medium -->
      <div class="text heading-one">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Leader: Text Medium</span>
          <span class="db mono">Headline: Display Medium</span>
          <span class="db mono">Subline: Text Regular</span>
          <span class="label db mono"></span>
        </div>
        <div class="card-featured">
          <div class="w-100 w-70-m">
            <h1 class="h1 pb1 display-medium">
              <small>NBN Plans</small>More speed for less.
            </h1>
            <p class="sub-text w-100">
              Save on home internet plans. Unlimited data. No lock-in contracts.
              For new services. Hurry, offer ends 24 Oct 2022.
            </p>
          </div>
        </div>
      </div>

      <!-- Display Regular -->
      <div class="text heading-two">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Leader: Text Medium</span>
          <span class="db mono">Headline: Display Regular</span>
          <span class="db mono">Subline: Text Regular</span>
          <span class="label db mono"></span>
        </div>
        <div class="card-featured">
          <div class="w-100 w-70-m">
            <h1 class="h1 pb1 display-regular">
              <small>NBN Plans</small>More speed for less.
            </h1>
            <p class="sub-text w-100">
              Save on home internet plans. Unlimited data. No lock-in contracts.
              For new services. Hurry, offer ends 24 Oct 2022.
            </p>
          </div>
        </div>
      </div>

      <!-- Display Light -->
      <div class="text heading-two">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Leader: Text Medium</span>
          <span class="db mono">Headline: Display Light</span>
          <span class="db mono">Subline: Text Regular</span>
          <span class="label db mono"></span>
        </div>
        <div class="card-featured">
          <div class="w-100 w-70-m">
            <h1 class="h1 pb1 display-regular">
              <small>NBN Plans</small>More speed for less.
            </h1>
            <p class="sub-text w-100">
              Save on home internet plans. Unlimited data. No lock-in contracts.
              For new services. Hurry, offer ends 24 Oct 2022.
            </p>
          </div>
        </div>
      </div>

      <div class="divider w-100">
        <span class="mono">Type Styles</span>
        <span class="mono">Article Headline</span>
      </div>

      <!-- Display Bold -->
      <div class="text body">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Heading: Display Bold</span>
          <span class="db mono">Body: Text Regular</span>
          <span class="db mono"></span>
          <span class="label db mono"></span>
        </div>
        <div class="p w-100 w-75-m">
          <div class="">
            <h3 class="display-bold pb1">
              Get a new mobile, pay upfront or monthly.
            </h3>
            <p class="sub-text w-100 w-50-m">
              Get the latest mobile and stay in control of what you spend. Pay
              upfront or over 12 or 24 months when added to a mobile plan.
            </p>
            <button class="button">Find out more</button>
          </div>
        </div>
      </div>

      <!-- Display Medium -->
      <div class="text body">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Heading: Display Medium</span>
          <span class="db mono">Body: Text Regular</span>
          <span class="db mono"></span>
          <span class="label db mono"></span>
        </div>
        <div class="p w-100 w-75-m">
          <div class="">
            <h3 class="display-medium pb1">
              Get a new mobile, pay upfront or monthly.
            </h3>
            <p class="sub-text w-100 w-50-m">
              Get the latest mobile and stay in control of what you spend. Pay
              upfront or over 12 or 24 months when added to a mobile plan.
            </p>
            <button class="button">Find out more</button>
          </div>
        </div>
      </div>

      <!-- Display Regular -->
      <div class="text body">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Heading: Display Regular</span>
          <span class="db mono">Body: Text Regular</span>
          <span class="db mono"></span>
          <span class="label db mono"></span>
        </div>
        <div class="p w-100 w-75-m">
          <div class="">
            <h3 class="display-regular pb1">
              Get a new mobile, pay upfront or monthly.
            </h3>
            <p class="sub-text w-100 w-50-m">
              Get the latest mobile and stay in control of what you spend. Pay
              upfront or over 12 or 24 months when added to a mobile plan.
            </p>
            <button class="button">Find out more</button>
          </div>
        </div>
      </div>

      <!-- Display Light -->
      <div class="text body">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Heading: Display Light</span>
          <span class="db mono">Body: Text Regular</span>
          <span class="db mono"></span>
          <span class="label db mono"></span>
        </div>
        <div class="p w-100 w-75-m">
          <div class="">
            <h3 class="display-light pb1">
              Get a new mobile, pay upfront or monthly.
            </h3>
            <p class="sub-text w-100 w-50-m">
              Get the latest mobile and stay in control of what you spend. Pay
              upfront or over 12 or 24 months when added to a mobile plan.
            </p>
            <button class="button">Find out more</button>
          </div>
        </div>
      </div>

      <!-- Featured cards -->
      <div class="divider w-100">
        <span class="mono">Type Styles</span>
        <span class="mono">Featured Cards</span>
      </div>
      <!-- Display Bold -->
      <div class="text body">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Heading: Display Bold</span>
          <span class="db mono">Body: Text Regular</span>
          <span class="db mono"></span>
          <span class="label db mono"></span>
        </div>
        <div class="p w-100 w-75-m">
          <div class="card">
            <h3 class="display-bold pb1">
              Get a new mobile, pay upfront or monthly.
            </h3>
            <p class="sub-text">
              Get the latest mobile and stay in control of what you spend. Pay
              upfront or over 12 or 24 months when added to a mobile plan.
            </p>
            <button class="button">Find out more</button>
          </div>
        </div>
      </div>
      <!-- Display Medium -->
      <div class="text body">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Heading: Display Medium</span>
          <span class="db mono">Body: Text Regular</span>
          <span class="db mono"></span>
          <span class="label db mono"></span>
        </div>
        <div class="p w-100 w-75-m">
          <div class="card">
            <h3 class="display-medium pb1">
              Get a new mobile, pay upfront or monthly.
            </h3>
            <p class="sub-text">
              Get the latest mobile and stay in control of what you spend. Pay
              upfront or over 12 or 24 months when added to a mobile plan.
            </p>
            <button class="button">Find out more</button>
          </div>
        </div>
      </div>
      <!-- Display Regular -->
      <div class="text body">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Heading: Display Regular</span>
          <span class="db mono">Body: Text Regular</span>
          <span class="db mono"></span>
          <span class="label db mono"></span>
        </div>
        <div class="p w-100 w-75-m">
          <div class="card">
            <h3 class="display-regular pb1">
              Get a new mobile, pay upfront or monthly.
            </h3>
            <p class="sub-text">
              Get the latest mobile and stay in control of what you spend. Pay
              upfront or over 12 or 24 months when added to a mobile plan.
            </p>
            <button class="button">Find out more</button>
          </div>
        </div>
      </div>
      <!-- Display Light -->
      <div class="text body">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Heading: Display Light</span>
          <span class="db mono">Body: Text Regular</span>
          <span class="db mono"></span>
          <span class="label db mono"></span>
        </div>
        <div class="p w-100 w-75-m">
          <div class="card">
            <h3 class="display-light pb1">
              Get a new mobile, pay upfront or monthly.
            </h3>
            <p class="sub-text">
              Get the latest mobile and stay in control of what you spend. Pay
              upfront or over 12 or 24 months when added to a mobile plan.
            </p>
            <button class="button">Find out more</button>
          </div>
        </div>
      </div>

      <div class="divider w-100">
        <span class="mono">Type Styles</span>
        <span class="mono">Body (Long line length)</span>
      </div>

      <div class="text body">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Heading: Text Bold</span>
          <span class="db mono">Body: Text Regular</span>
          <span class="db mono">Opacity: 100%</span>
          <span class="label db mono"></span>
        </div>
        <div class="p w-100 w-75-m text-regular">
          <p class="text-bold">Data usage</p>
          <p>
            Download speeds for your included data on the Basic Mobile plan are
            capped at 250Mbps on our 4G and 5G network, rolling out from August
            2022. With an Essential and Premium Mobile plan your included data
            comes with access to our fastest download speeds on our 4G and 5G
            network. Speeds may vary due to factors such as location, distance
            from the base station, local conditions, concurrent users, hardware
            and software configuration and download/upload destination. For 5G
            coverage information, see telstra.com/coverage.
          </p>
        </div>
      </div>
      <div class="text body">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Heading: Text Bold</span>
          <span class="db mono">Body: Text Regular</span>
          <span class="db mono">Opacity: 80%</span>
          <span class="label db mono"></span>
        </div>
        <div class="p w-100 w-75-m text-regular light-black">
          <p class="text-bold">Data usage</p>
          <p>
            Download speeds for your included data on the Basic Mobile plan are
            capped at 250Mbps on our 4G and 5G network, rolling out from August
            2022. With an Essential and Premium Mobile plan your included data
            comes with access to our fastest download speeds on our 4G and 5G
            network. Speeds may vary due to factors such as location, distance
            from the base station, local conditions, concurrent users, hardware
            and software configuration and download/upload destination. For 5G
            coverage information, see telstra.com/coverage.
          </p>
        </div>
      </div>
      <div class="text body">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Heading: Text Bold</span>
          <span class="db mono">Body: Text Light</span>
          <span class="db mono">Opacity: 100%</span>
          <span class="label db mono"></span>
        </div>
        <div class="p w-100 w-75-m text-light">
          <p class="text-bold">Data usage</p>
          <p>
            Download speeds for your included data on the Basic Mobile plan are
            capped at 250Mbps on our 4G and 5G network, rolling out from August
            2022. With an Essential and Premium Mobile plan your included data
            comes with access to our fastest download speeds on our 4G and 5G
            network. Speeds may vary due to factors such as location, distance
            from the base station, local conditions, concurrent users, hardware
            and software configuration and download/upload destination. For 5G
            coverage information, see telstra.com/coverage.
          </p>
        </div>
      </div>

      <div class="divider w-100">
        <span class="mono">Type Styles</span>
        <span class="mono">Tracking Forms (Tabular vs Default)</span>
      </div>

      <div class="text">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Numerals (Default)</span>
          <span class="db mono">Body: Text Regular</span>
          <span class="label db mono"></span>
        </div>
        <div class="w-100 w-75-m tracking-codes">
          <p>These are our default numeral settings:</p>
          <div class="box">
            <p class="row">
              Tracking Number: <span class="numerals-default">1234567890</span>
            </p>
          </div>
          <div class="box">
            <p class="row">
              Tracking Number: <span class="numerals-default">8135468213</span>
            </p>
          </div>
          <div class="box">
            <p class="row">
              Tracking Number: <span class="numerals-default">2541638426</span>
            </p>
          </div>
          <div class="box">
            <p class="row">
              Tracking Number: <span class="numerals-default">3698515662</span>
            </p>
          </div>
        </div>
      </div>
      <div class="text">
        <div class="w-100 w-25-m pb2">
          <span class="db mono">Numerals (Tabular)</span>
          <span class="db mono">Body: Text Regular</span>
          <span class="label db mono"></span>
        </div>
        <div class="w-100 w-75-m tracking-codes">
          <p>
            Fixed-width numbers (Tabular Lining enabled) are useful for tabular
            data, where comparing columns across rows is desired:
          </p>
          <div class="box">
            <p class="row">
              Tracking Number: <span class="numerals-tabular">1234567890</span>
            </p>
          </div>
          <div class="box">
            <p class="row">
              Tracking Number: <span class="numerals-tabular">8135468213</span>
            </p>
          </div>
          <div class="box">
            <p class="row">
              Tracking Number: <span class="numerals-tabular">2541638426</span>
            </p>
          </div>
          <div class="box">
            <p class="row">
              Tracking Number: <span class="numerals-tabular">3698515662</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import LogoLight from "@/assets/images/logo/Telstra_Primary-logo_Light_RGB.svg?inline";
// import LogoMid from "@/assets/images/logo/Telstra_Primary-logo_Mid_RGB.svg?inline";
// import LogoDark from "@/assets/images/logo/Telstra_Primary-logo_Dark_RGB.svg?inline";

export default {
  data: () => ({
    darkMode: true,
    showText: false,
  }),
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
  computed: {
    updateText() {
      return this.darkMode ? "Dark" : "Light";
    },
  },
  // components: {
  //   LogoLight,
  //   LogoMid,
  //   LogoDark,
  // },
};
</script>

<style lang="scss" scoped>
.container-dark {
  background-color: $blue-100;
  color: $white;
  transition: all 0.25s $ease;
  .box {
    background-color: #0a0f25;
    * {
      color: $white;
    }
  }
  h1,
  h2,
  h3,
  h4 {
    color: $white;
  }
  .sub-text {
    color: rgba($white, 1);
  }

  .light-black {
    color: rgba($white, 0.8);
  }

  .divider {
    border-color: rgba($white, 0.2);
  }

  .card {
    border: 1px solid rgba($white, 0.2);
    border-radius: 12px;
    padding: $padding * 2;
    // box-shadow: 1px 2px 2px rgba($white, 0.1);
    @include breakpoint(md) {
      max-width: 50ch;
    }
  }
  small {
    color: $white;
  }
  .button {
    background: $blue-60;
    color: $white;
    border: 1px solid transparent;
    &:hover {
      background: transparent;
      border: 1px solid $white;
      color: $white;
    }
  }
}

.container-wrapper {
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
  .h2 {
    max-width: 60ch;
  }
  p {
    max-width: 70ch;
  }
}
.text {
  display: flex;
  flex-direction: column;
  padding-bottom: $padding * 4;
  @include breakpoint(md) {
    flex-direction: row;
    padding-bottom: $padding * 8;
  }
  p {
    padding-bottom: $padding;
  }
}

.card-featured {
  display: flex;
  flex-direction: row;
  .backbone {
    display: block;
    background: $red;
    width: 4px;
    min-height: 100%;
    margin-right: 1rem;
    @include breakpoint(md) {
      margin-right: 2rem;
    }
  }
}

.light-black {
  color: $light-black;
}

.card {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: $padding * 2;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);
  @include breakpoint(md) {
    max-width: 50ch;
  }
}

.divider {
  margin-bottom: $padding * 4;
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: row;
  @include breakpoint(md) {
    margin-top: $padding * 8;
    &:first-of-type {
      margin-top: 0;
    }
  }
  span {
    display: block;
    padding-bottom: $padding;
    &:first-of-type {
      width: 50%;
      @include breakpoint(md) {
        width: 25%;
      }
    }
  }
}

small {
  font-family: $text-medium;
  display: block;
  color: $blue-60;
  font-size: 14px;
  text-transform: uppercase;
  padding-bottom: 0.5rem;
}

.box {
  background-color: rgb(238, 238, 238);
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  p {
    padding-bottom: 0;
  }
}

.sub-text {
  // color: $light-black;
  font-size: 18px;
  padding-bottom: 0 !important;
}

// .t-highlight{
//   color: $blue-60;
// }

.numerals-default {
  color: $black;
  padding-left: 0.5rem;
}
.numerals-tabular {
  font-feature-settings: "tnum" 1;
  letter-spacing: 0.075em;
  color: $black;
  padding-left: 0.5rem;
}

.row {
  // border-top: 1px solid $grey;
  // padding-top: 1rem 0;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-end;

  padding-bottom: 10rem;
  .logo {
    max-width: 100px;
    align-self: flex-start;
    .wordmark {
      display: none;
      // @include breakpoint(md){
      //   display: block;
      // }
    }
  }
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  padding-bottom: 8px;

  background: transparent;
  border: 1px solid $blue-60;
  color: $blue-60;
  transition: all 0.25s $ease;

  // backdrop-filter: blur(50px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 40px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-top: 1.5rem;
  &:hover {
    background: $blue-60;
    color: $white;
    border: 1px solid transparent;
    :deep svg {
      path {
        // fill: var(--color-purple);
      }
    }
  }
}
</style>
