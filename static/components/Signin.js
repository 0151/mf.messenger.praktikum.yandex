import Component from './Component.js'

export class Signin extends Component {
    template = `
        <div class="wrapper">
            <div class="modal">
                <div class="modal__header">
                    <img class="logo logo_size_s" src="./images/logo.svg" />
                </div>
                <div class="modal__content">
                    <span class="form-title">Войдите, чтобы продолжить</span>
                    <yp-component id="signinForm"></yp-component>
                </div>
            </div>
        </div>
    `
}

export default Signin

/* <form class="form">
<div class="form__field">
    <div class="input">
        <input class="input__control" name="login" type="text" placeholder="Введите логин">
    </div>
</div>
<div class="form__field">
    <div class="input input_invalid">
        <input class="input__control" name="password" type="password" placeholder="Введите пароль">
            <span class="input__error">
                Неверный пароль
            </span>
    </div>
</div>
<button class="form__button button button_view_action" type="submit">Войти</button>
<a class="form__button button button_view_pseudo" href="signup.html">Зарегистрироваться</a>
</form>
 */
