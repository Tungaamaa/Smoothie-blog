import React from 'react';


export const SignUp = () => {
  return (
    <div>
    <form method="post" class="sign-up-form">
    <h2 class="title">Sign up</h2>
    <div class="input-field">
      <i class="fas fa-user"></i>
      <input required name="fullname" type="text" placeholder="Full Name" />
    </div>
    <div class="input-field">
      <i class="fas fa-user"></i>
      <input required name="username" type="text" placeholder="Username" />
    </div>
    <div class="input-field">
      <i class="fas fa-envelope"></i>
      <input name="email" required type="email" placeholder="Email" />
    </div>
    <div class="input-field">
      <i class="fas fa-lock"></i>
      <input name="password" required type="password" placeholder="Password" />
    </div>
    <div class="input-field">
      <i class="fas fa-lock"></i>
      <input name="confirm_password" required type="password" placeholder="Confirm Password" />
    </div>
    <input type="submit" name="register" class="btn" value="Sign up" />
    <p class="social-text">Or Sign up with social platforms</p>
    <div class="social-media">
      <a href="#" class="social-icon">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#" class="social-icon">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#" class="social-icon">
        <i class="fab fa-google"></i>
      </a>
      <a href="#" class="social-icon">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
  </form>
    </div>
  )
}
