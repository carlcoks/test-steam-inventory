<template>
  <div class="index">
    <div class="index__box">
      <form class="index__form">
        <div class="index__line">
          <v-input
            v-model="form.steamid"
            holder="Введите steamId"
            class-el="inpt__input--default"
          />
        </div>

        <div class="index__line">
          <v-input
            v-model="form.assetid"
            holder="Введите assetId"
            class-el="inpt__input--default"
          />
        </div>

        <v-btn
          @click="submit()"
          :disabled="loading"
          type="submit"
          class="btn--primary btn--big btn--center index__btn"
        >
          Показать результат
        </v-btn>
      </form>

      <div
        v-if="result"
        class="index__result"
      >
        Результат:<br>
        Номер страницы: {{ result.page }}<br>
        Номер линии: {{ result.line }}<br>
        Позиция: {{ result.position }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      form: {
        steamid: '',
        assetid: ''
      },
      loading: false,
      result: null
    }
  },
  methods: {
    async submit () {
      this.result = null
      this.loading = true
      try {
        const response = await this.$api.post('/v1/steam', this.form)
        if (response && response.data && response.data.success) {
          this.result = response.data.data

          this.clearForm()
        }

        this.loading = false
      } catch (e) {
        alert('Произошла ошибка')
        this.loading = false
      }
    },

    clearForm () {
      this.form = {
        steamId: '',
        assetId: ''
      }
    }
  }
}
</script>
