import React from "react";

const LoginComponent = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-container_image">
          <img
            className="login-container_image-logo"
            src="https://cdn.shopify.com/s/files/1/0449/4229/5199/files/elcomercio-logo_44e9a32c-7e5c-43a8-8427-a756908d44e1.png?v=1656086218"
            alt=""
          />
        </div>
        <form action="" className="login-container_form">
          <h1 className="login-container_form_title">Login Usuario</h1>
          <div className="login-container_form_subtitle">
            <h2 className="login-container_form_subtitle-1">
              Ingrese sus datos
            </h2>
          </div>
          <div className="login-container_form-group">
            <label className="login-container_form-group-label" htmlFor="email">
              Usuario:
            </label>
            <input
              id="email"
              type="email"
              className="login-container_form-group-input"
            />
          </div>
          <div className="login-container_form-group">
            <label
              htmlFor="password"
              className="login-container_form-group-label"
            >
              Contraseña:
            </label>
            <input
              id="password"
              type="password"
              className="login-container_form-group-input"
            />
          </div>
          <div className="login-container_form-btn">
            <button className="login-container_form-btn-submit" type="submit">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginComponent;
