<template>
  <div class="error-page">
    <div class="container error-page__container">
        <div class="error-page__status">
          404
        </div>

        <div class="error-page__desc">
          <div class="error-page__title">
            Страница не найдена
          </div>
          <div class="error-page__text">
            Пожалуйста вернитесь на главную страницу по нажатию кнопки ниже.
          </div>
        </div>

        <div class="error-page__btn">
          <router-link
            to="/"
            class="btn btn-primary btn--bigger btn--center"
          >
            На главную
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageError'
}
</script>
