(()=>{"use strict";var e,t={916:(e,t,a)=>{var i=a(655),l=a(541),s=a(131),n=a(917),o=a(64),r=a(969);const c=s.i``,h=s.i`
  :host > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 48px;
    text-align: center;
    font-family: aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 20px;
    min-height: 100vh;
    color: #e5e5e5;
    background: #181818;
  }

  h1 {
    display: flex;
    column-gap: 18px;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 60px;
    line-height: 72px;
  }

  h1 span {
    display: flex;
    align-items: center;
  }

  h2 {
    font-size: 34px;
    line-height: 44px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 16px;
  }

  header,
  main,
  footer {
    padding: 0 12px;
  }

  header {
    display: flex;
    flex-direction: column;
  }

  header p {
    max-width: 900px;
    align-self: center;
    font-size: 20px;
    line-height: 28px;
  }

  header svg {
    display: inline-block;
    width: 90px;
    height: 80px;
    margin-inline-end: 10px;
    shape-rendering: geometricPrecision;
  }

  header .icon-brand-fast,
  .card svg {
    fill: #e5e5e5;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 24px;
    row-gap: 24px;
  }

  .card {
    width: 320px;
    border-radius: 4px;
    background: #424242;
    text-align: left;
    display: flex;
    flex-direction: column;
  }

  .card .image {
    background: #2b2b2b;
    padding: 44px 0;
  }

  .card .image svg {
    width: 320px;
    height: 80px;
  }

  .card .image.small {
    padding: 54px 0;
  }

  .card .image.small svg {
    height: 60px;
  }

  .card .content {
    padding: 10px 15px;
    flex-grow: 1;
  }

  .card .action {
    padding: 10px 15px;
  }

  .card .action svg {
    margin-left: 2px;
    position: relative;
    top: 1px;
  }

  .card a {
    display: inline-block;
    background: #da1a5f;
    border-radius: 4px;
    text-decoration: none;
    padding: 10px;
    color: #ffffff;
  }

  a {
    color: #ffffff;
  }
`,d=l.d`
    <template>
        <div>
            <header>
                <h1><span>Welcome to </span><span><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-brand" viewBox="0 0 140 123"><path fill-rule="evenodd" clip-rule="evenodd" d="M124.787 64.442l-4.98-.636c-.885-.113-1.691.514-1.839 1.393A40.326 40.326 0 0155.29 91.674c-2.462-1.7-1.57-5.286 1.32-6.06l21.06-5.643a3.318 3.318 0 10-1.717-6.41l-27.098 7.261c-.07.019-.14.036-.211.052l-12.779 3.424a.897.897 0 01-.083.027 3.318 3.318 0 101.717 6.41l.29-.078c1.99-.533 4.09.151 5.523 1.63a48.582 48.582 0 0038.695 14.632 48.577 48.577 0 0044.151-40.674c.142-.88-.486-1.69-1.371-1.803zM23.479 60.166a5.439 5.439 0 00-.533.115l-10.423 2.793a3.318 3.318 0 11-1.718-6.41l15.957-4.276c2.048-.548 3.547-2.27 4.003-4.34a48.57 48.57 0 0124.618-32.436 48.577 48.577 0 0159.093 10.57c.594.666.499 1.686-.187 2.257l-3.857 3.213-1.237 1.03c-.003.002-.006.002-.009 0a40.323 40.323 0 00-68.139 10.145c-1.16 2.754 1.449 5.345 4.336 4.572l2.222-.596a3.318 3.318 0 011.718 6.41l-7.667 2.054a5.35 5.35 0 00-.515.167l-17.662 4.732z" fill="#FF4387"></path><rect x="69.904" y="56.905" width="6.636" height="16.454" rx="3.318" transform="rotate(75 69.904 56.905)" fill="#FF4387"></rect><rect x="48.333" y="62.703" width="6.636" height="49.768" rx="3.318" transform="rotate(75 48.333 62.703)" fill="#FF4387"></rect><rect x="94.364" y="50.565" width="6.636" height="19.829" rx="3.318" transform="rotate(75 94.364 50.565)" fill="#FF4387"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M97.725 51.927c3.022 11.276 14.612 17.967 25.888 14.946 11.275-3.022 17.967-14.612 14.946-25.887-3.022-11.276-14.612-17.968-25.888-14.946-11.275 3.021-17.967 14.611-14.946 25.887zm20.425 9.448c8.429 0 15.262-6.684 15.262-14.93 0-8.246-6.833-14.93-15.262-14.93s-15.262 6.684-15.262 14.93c0 8.246 6.833 14.93 15.262 14.93z" fill="#FF4387"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-brand-fast" width="59" height="30" viewBox="53 0 59 30" fill="none"><path d="M54.162 26.754h1.1c.754 0 1.225-.338 1.35-1.106l1.477-8.081h3.738c.754 0 1.225-.338 1.351-1.106l.126-.707c.157-.86-.283-1.321-1.131-1.321h-3.519l1.068-6.053h4.712c.754 0 1.226-.338 1.351-1.106l.126-.707c.157-.86-.283-1.321-1.131-1.321h-6.974c-.754 0-1.225.338-1.35 1.106L53.03 25.433c-.157.86.283 1.321 1.131 1.321zM77.598 6.475c0-.768-.503-1.23-1.288-1.23h-2.262c-.722 0-1.194.339-1.445.984l-7.037 19.112c-.314.83.095 1.413 1.006 1.413h1.005c.722 0 1.194-.338 1.413-1.014l1.288-3.78h4.053l-.063 3.565c0 .83.408 1.23 1.225 1.23h1.1c.816 0 1.256-.4 1.256-1.23l-.251-19.05zM71.284 19.01l3.267-9.556-.157 9.556h-3.11zM95.569 11.821l.44-2.396C96.606 6.229 94.124 5 91.422 5h-.063c-3.33 0-5.623 1.229-6.22 4.425l-.502 2.826c-.346 1.905.88 3.257 2.576 4.302l2.293 1.413c.974.584 1.257 1.199 1.037 2.366l-.315 1.69c-.22 1.322-1.13 1.905-2.23 1.905s-1.759-.583-1.54-1.905l.347-1.935c.157-.86-.283-1.322-1.131-1.322h-1.037c-.754 0-1.257.37-1.382 1.107l-.471 2.642C82.187 25.864 84.417 27 87.433 27h.063c3.644 0 5.623-1.168 6.22-4.486l.565-3.103c.408-2.182-.66-3.104-2.607-4.302l-2.325-1.414c-.942-.583-1.162-1.198-.974-2.304l.283-1.475c.22-1.352 1.1-1.843 2.167-1.843 1.069 0 1.76.491 1.54 1.843l-.314 1.69c-.157.86.282 1.321 1.13 1.321h1.037c.754 0 1.225-.338 1.35-1.106zM110.838 5.246h-8.451c-.753 0-1.225.338-1.35 1.106l-.126.707c-.157.86.283 1.32 1.131 1.32h2.293l-3.047 17.054c-.157.86.283 1.321 1.131 1.321h1.099c.754 0 1.225-.338 1.351-1.106l3.11-17.268h2.513c.754 0 1.225-.338 1.351-1.106l.126-.707c.157-.86-.283-1.321-1.131-1.321z"></path></svg></span></h1>
                <p>
                    <slot></slot>
                </p>
            </header>

            <main>
                <h2>Next steps</h2>
                <div class="card-container">
                    <div class="card">
                        <div class="image">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.06562 18.9434L14.5656 4.44339C14.7351 4.06542 15.1788 3.89637 15.5568 4.0658C15.9033 4.22112 16.0742 4.60695 15.9698 4.96131L15.9344 5.05698L9.43438 19.557C9.26495 19.935 8.82118 20.104 8.44321 19.9346C8.09673 19.7793 7.92581 19.3934 8.03024 19.0391L8.06562 18.9434L14.5656 4.44339L8.06562 18.9434ZM2.21967 11.4699L6.46967 7.21986C6.76256 6.92696 7.23744 6.92696 7.53033 7.21986C7.7966 7.48612 7.8208 7.90279 7.60295 8.1964L7.53033 8.28052L3.81066 12.0002L7.53033 15.7199C7.82322 16.0127 7.82322 16.4876 7.53033 16.7805C7.26406 17.0468 6.8474 17.071 6.55379 16.8531L6.46967 16.7805L2.21967 12.5305C1.9534 12.2642 1.9292 11.8476 2.14705 11.554L2.21967 11.4699L6.46967 7.21986L2.21967 11.4699ZM16.4697 7.21986C16.7359 6.95359 17.1526 6.92938 17.4462 7.14724L17.5303 7.21986L21.7803 11.4699C22.0466 11.7361 22.0708 12.1528 21.8529 12.4464L21.7803 12.5305L17.5303 16.7805C17.2374 17.0734 16.7626 17.0734 16.4697 16.7805C16.2034 16.5143 16.1792 16.0976 16.3971 15.804L16.4697 15.7199L20.1893 12.0002L16.4697 8.28052C16.1768 7.98762 16.1768 7.51275 16.4697 7.21986Z" />
                        </svg>
                        </div>
                        <div class="content">
                            <h3>Create Custom Elements</h3>
                            <p>Create your own custom elements using our FAST element architecture.</p>
                        </div>
                        <div class="action">
                            <a href="https://www.fast.design/docs/fast-element/getting-started">Get Started <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_cOdw"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image small">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-brand-fast" width="59" height="30" viewBox="53 0 59 30" fill="none"><path d="M54.162 26.754h1.1c.754 0 1.225-.338 1.35-1.106l1.477-8.081h3.738c.754 0 1.225-.338 1.351-1.106l.126-.707c.157-.86-.283-1.321-1.131-1.321h-3.519l1.068-6.053h4.712c.754 0 1.226-.338 1.351-1.106l.126-.707c.157-.86-.283-1.321-1.131-1.321h-6.974c-.754 0-1.225.338-1.35 1.106L53.03 25.433c-.157.86.283 1.321 1.131 1.321zM77.598 6.475c0-.768-.503-1.23-1.288-1.23h-2.262c-.722 0-1.194.339-1.445.984l-7.037 19.112c-.314.83.095 1.413 1.006 1.413h1.005c.722 0 1.194-.338 1.413-1.014l1.288-3.78h4.053l-.063 3.565c0 .83.408 1.23 1.225 1.23h1.1c.816 0 1.256-.4 1.256-1.23l-.251-19.05zM71.284 19.01l3.267-9.556-.157 9.556h-3.11zM95.569 11.821l.44-2.396C96.606 6.229 94.124 5 91.422 5h-.063c-3.33 0-5.623 1.229-6.22 4.425l-.502 2.826c-.346 1.905.88 3.257 2.576 4.302l2.293 1.413c.974.584 1.257 1.199 1.037 2.366l-.315 1.69c-.22 1.322-1.13 1.905-2.23 1.905s-1.759-.583-1.54-1.905l.347-1.935c.157-.86-.283-1.322-1.131-1.322h-1.037c-.754 0-1.257.37-1.382 1.107l-.471 2.642C82.187 25.864 84.417 27 87.433 27h.063c3.644 0 5.623-1.168 6.22-4.486l.565-3.103c.408-2.182-.66-3.104-2.607-4.302l-2.325-1.414c-.942-.583-1.162-1.198-.974-2.304l.283-1.475c.22-1.352 1.1-1.843 2.167-1.843 1.069 0 1.76.491 1.54 1.843l-.314 1.69c-.157.86.282 1.321 1.13 1.321h1.037c.754 0 1.225-.338 1.35-1.106zM110.838 5.246h-8.451c-.753 0-1.225.338-1.35 1.106l-.126.707c-.157.86.283 1.32 1.131 1.32h2.293l-3.047 17.054c-.157.86.283 1.321 1.131 1.321h1.099c.754 0 1.225-.338 1.351-1.106l3.11-17.268h2.513c.754 0 1.225-.338 1.351-1.106l.126-.707c.157-.86-.283-1.321-1.131-1.321z"></path></svg>
                        </div>
                        <div class="content">
                            <h3>FAST Components</h3>
                            <p>Use FAST components to construct thoughtfully designed pages that can be configured for your own design needs.</p>
                        </div>
                        <div class="action">
                            <a href="https://www.fast.design/docs/components/getting-started">Get Started <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_cOdw"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.56158 3C5.41944 3 2.06158 6.35786 2.06158 10.5C2.06158 11.6329 2.31325 12.7088 2.76423 13.6734C2.5102 14.6714 2.22638 15.7842 2.03999 16.5147C1.80697 17.428 2.6294 18.2588 3.54374 18.039C4.29396 17.8587 5.44699 17.5819 6.47447 17.337C7.41678 17.7631 8.46241 18 9.56158 18C13.7037 18 17.0616 14.6421 17.0616 10.5C17.0616 6.35786 13.7037 3 9.56158 3ZM3.56158 10.5C3.56158 7.18629 6.24787 4.5 9.56158 4.5C12.8753 4.5 15.5616 7.18629 15.5616 10.5C15.5616 13.8137 12.8753 16.5 9.56158 16.5C8.60084 16.5 7.69487 16.2748 6.89161 15.8749L6.6482 15.7537L6.38368 15.8167C5.46095 16.0363 4.39489 16.2919 3.59592 16.4838C3.79467 15.7047 4.05784 14.6724 4.28601 13.7757L4.35619 13.4998L4.22568 13.2468C3.80145 12.4246 3.56158 11.4914 3.56158 10.5ZM14.5616 21.0001C12.5922 21.0001 10.8001 20.241 9.46191 18.9995C9.49511 18.9999 9.52835 19.0001 9.56163 19.0001C10.2796 19.0001 10.9768 18.911 11.6427 18.7434C12.5067 19.2254 13.5021 19.5001 14.5616 19.5001C15.5223 19.5001 16.4283 19.2748 17.2316 18.8749L17.475 18.7537L17.7395 18.8167C18.6611 19.0361 19.7046 19.2625 20.4787 19.4262C20.3037 18.6757 20.065 17.6711 19.8372 16.7757L19.767 16.4999L19.8975 16.2469C20.3217 15.4247 20.5616 14.4915 20.5616 13.5001C20.5616 11.3853 19.4676 9.52617 17.8146 8.45761C17.6363 7.73435 17.3653 7.04756 17.015 6.41052C19.9523 7.42684 22.0616 10.2171 22.0616 13.5001C22.0616 14.6332 21.8098 15.7094 21.3586 16.6741C21.6117 17.6821 21.8679 18.774 22.0304 19.4773C22.2348 20.3623 21.4554 21.1633 20.563 20.9768C19.8358 20.8248 18.6933 20.581 17.6495 20.3367C16.707 20.763 15.6611 21.0001 14.5616 21.0001Z" />
                            </svg>
                        </div>
                        <div class="content">
                            <h3>Community</h3>
                            <p>Join our Discord server, where you can get real-time updates, ask questions and interact with other FAST developers!</p>
                        </div>
                        <div class="action">
                            <a href="https://discord.gg/FcSNfg4">Discord <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_cOdw"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
                        </div>
                    </div>
                </div>
            </main>

            <footer class="resources">
                © Microsoft ${(new Date).getFullYear()}
            <footer>
        </div>
    </template>
`;let p=class extends n.H{};p=(0,i.gn)([(0,n.M)({name:"fast-welcome",template:d,styles:h})],p);const g=l.d`
  <template>
    <div>Home page</div>

    <fast-welcome></fast-welcome>
  </template>
`;let f=class extends n.H{};f=(0,i.gn)([(0,n.M)({name:"app-home-page",template:g,styles:c})],f);var m=a(657);const v=s.i``;var u=a(23);const x=s.i`
  :host > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 48px;
    text-align: center;
    font-family: aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 20px;
    min-height: 100vh;
    color: #e5e5e5;
    background: #181818;
  }
`,w=l.d`
  <template>
    <div>${e=>e.initials}</div>
  </template>
`;let C=class extends n.H{constructor(){super(...arguments),this.firstName="",this.lastName="",this.age=null,this.roles=[],this.user=null}get initials(){return this.firstName&&this.lastName?`${this.firstName.charAt(0).toLocaleUpperCase()}${this.lastName.charAt(0).toLocaleUpperCase()}`:""}rolesChanged(e,t){console.log(e,t)}userChanged(e,t){console.log(e,t)}ageChanged(e,t){console.log(e,t)}};(0,i.gn)([u.Lj],C.prototype,"firstName",void 0),(0,i.gn)([u.Lj],C.prototype,"lastName",void 0),(0,i.gn)([u.Lj],C.prototype,"age",void 0),(0,i.gn)([u.Lj],C.prototype,"roles",void 0),(0,i.gn)([u.Lj],C.prototype,"user",void 0),(0,i.gn)([m.lk],C.prototype,"initials",null),C=(0,i.gn)([(0,n.M)({name:"app-profile-icon",template:w,styles:x})],C);const L=l.d`
  <template>
    <div>About page</div>

    <app-profile-icon
      :firstName="${e=>e.firstName}"
      :lastName="${e=>e.lastName}"
      :age="${e=>e.age}"
      :roles="${e=>e.roles}"
      :user="${e=>e.user}"
    ></app-profile-icon>
  </template>
`;let y=class extends n.H{constructor(){super(...arguments),this.firstName="John",this.lastName="Doe",this.age=27,this.roles=["admin","editor"],this.user={firstName:"John",lastName:"Doe",roles:["admin","editor"]},this.updateFirstNameAndLastNameTimeout=null}connectedCallback(){super.connectedCallback(),this.updateFirstNameAndLastNameAfter3Seconds()}updateFirstNameAndLastNameAfter3Seconds(){this.updateFirstNameAndLastNameTimeout=setTimeout((()=>{this.firstName="Marie",this.lastName="Jeanne",this.updateFirstNameAndLastNameTimeout=null}),3e3)}disconnectedCallback(){super.disconnectedCallback(),this.updateFirstNameAndLastNameTimeout&&clearTimeout(this.updateFirstNameAndLastNameTimeout)}};(0,i.gn)([m.LO],y.prototype,"firstName",void 0),(0,i.gn)([m.LO],y.prototype,"lastName",void 0),y=(0,i.gn)([(0,n.M)({name:"app-about-page",template:L,styles:v})],y);const b=new(a(875).u3)(l.d`
    <nav>
      <ul>
        <li>
          <a href="/csgo-helpers">Home</a>
        </li>
        <li>
          <a href="/csgo-helpers/about">About</a>
        </li>
      </ul>
    </nav>
    <main>
      <slot></slot>
    </main>
  `);class N extends r.A{configure(){this.title="My App",this.defaultLayout=b,this.routes.map({path:"",redirect:"/csgo-helpers/"},{path:"/csgo-helpers",children:[{path:"",title:"Home",element:f},{path:"about",title:"about",element:y}]}),this.routes.fallback({redirect:""})}}o.e;const M=l.d`
  <fast-router
    :config=${e=>e.routerConfiguration}
  ></fast-router>
`,k=s.i`
  :host {
    contain: content;
  }

  :host,
  fast-router {
    display: block;
    width: 100%;
    height: 100%;
  }
`;let z=class extends n.H{constructor(){super(...arguments),this.routerConfiguration=new N}};z=(0,i.gn)([(0,n.M)({name:"main-application",template:M,styles:k})],z)},655:(e,t,a)=>{function i(e,t,a,i){var l,s=arguments.length,n=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(n=(s<3?l(n):s>3?l(t,a,n):l(t,a))||n);return s>3&&n&&Object.defineProperty(t,a,n),n}function l(e,t,a,i){return new(a||(a=Promise))((function(l,s){function n(e){try{r(i.next(e))}catch(e){s(e)}}function o(e){try{r(i.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?l(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,o)}r((i=i.apply(e,t||[])).next())}))}a.d(t,{gn:()=>i,mG:()=>l}),Object.create,Object.create}},a={};function i(e){var l=a[e];if(void 0!==l)return l.exports;var s=a[e]={exports:{}};return t[e](s,s.exports,i),s.exports}i.m=t,e=[],i.O=(t,a,l,s)=>{if(!a){var n=1/0;for(h=0;h<e.length;h++){for(var[a,l,s]=e[h],o=!0,r=0;r<a.length;r++)(!1&s||n>=s)&&Object.keys(i.O).every((e=>i.O[e](a[r])))?a.splice(r--,1):(o=!1,s<n&&(n=s));if(o){e.splice(h--,1);var c=l();void 0!==c&&(t=c)}}return t}s=s||0;for(var h=e.length;h>0&&e[h-1][2]>s;h--)e[h]=e[h-1];e[h]=[a,l,s]},i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,a)=>{var l,s,[n,o,r]=a,c=0;if(n.some((t=>0!==e[t]))){for(l in o)i.o(o,l)&&(i.m[l]=o[l]);if(r)var h=r(i)}for(t&&t(a);c<n.length;c++)s=n[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(h)},a=self.webpackChunk_microsoft_cfp_template=self.webpackChunk_microsoft_cfp_template||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=i.O(void 0,[127],(()=>i(916)));l=i.O(l)})();