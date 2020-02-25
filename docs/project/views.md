
# UI Templates

## Layout

### Navbar
```html
<template>
  <nav class="navbar is-right" class="is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="https://imagesadc.s3.amazonaws.com/logos/logohor_bco2.png"
          width="auto" height="auto">
        <span class="nav-title"><strong>AscoMusic</strong></span>
      </a>
      <a class="navbar-burger burger" role="button" class="is-active" aria-label="menu"
        aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="navbarBasicExample" class="is-active">
      <div class="navbar-start"></div>
      <div class="navbar-end">
        <a class="navbar-item" class="is-active">Home</a>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-danger">Logout</a>
            <a class="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
```

### Footer

```html
<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>ADCMusic</strong>
        &copy; 2018 by
        <a href="https://www.facebook.com/ascodecodigo/?ref=br_rs"
        >AscoDeCodigo</a>.
      </p>
    </div>
  </footer>
</template>
```

## Views
### Login
```html
<div class="column is-4 is-offset-4">
    <h3 class="title">Login</h3>
    <p class="subtitle">Please login to proceed.</p>
    <div class="box">
        <main>
            <form>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email" required />
                        <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                        <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password" required />
                        <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button type="submit" class="button is-info">Login</button>
                        <a href="" class="button is-success">Login with Spotify</a>
                    </p>
                </div>
            </form>
        </main>
    </div>
    <p>
        <a href="../">Sign Up</a> &nbsp;·&nbsp;
        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
        <a href="../">Need Help?</a>
    </p>
</div>
```

## Components

### Search
```html
<template>
  <section class="section">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          class="input is-large"
          type="text"
          placeholder="Search songs..."
        />
      </div>
      <p class="control">
        <a class="button is-large is-info">
          <span class="icon is-large">
            <i class="fas fa-search"></i>
          </span>
        </a>
      </p>
      <p class="control">
        <a class="button is-large is-danger">
          <span class="icon is-large">
            <i class="fas fa-times"></i>
          </span>
        </a>
      </p>
    </div>
  </section>
</template>
```

### Track Detail
```html
<template>
   <div class="card">
      <div class="card-image">
         <figure class="image is-1by1">
            <img src="" alt="Placeholder image" />
         </figure>
      </div>
      <div class="card-content">
         <div class="media">
            <div class="media-left">
               <figure class="image is-48x48">
                  <img src="" alt="Placeholder image" />
               </figure>
            </div>
            <div class="media-content">
               <strong><a class="title is-6"></a></strong>
               -
               <a class="subtitle is-6"></a>
               <p class="subtitle is-6"></p>
            </div>
         </div>
      </div>
      <footer class="card-footer">
         <a id="play" class="card-footer-item button is-success is-inverted">
         <span class="icon">
         <i class="fa fa-play"></i>
         </span>
         <span>Preview</span>
         </a>
         <a href="" target="_blank" class="card-footer-item is-primary is-inverted button">
         <span class="icon">
         <i class="fab fa-spotify"></i>
         </span>
         <span>Go to Spotify</span>
         </a>
      </footer>
   </div>
</template>
```