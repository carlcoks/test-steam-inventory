export default {
  // Валидация e-mail
  isEmailValid (email) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    return (email == '') ? false : (reg.test(email)) ? true : false
  },

  // поиск родителя по классу
  findParent (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls))
    return el
  },

  // return errors
  returnError(response) {
    const error = { response }
    let code, message, data
    if (error.response.response) {
      code = error.response.response.data.code
      message = error.response.response.data.message
      data = error.response.response.data.data
    } else {
      code = 500
      message = 'Сервер не доступен. Попробуйте позже!'
    }
    return { type: 'error', code, data, message }
  },

  priceFormat (price) {
    const str = price.toString()
    return str.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
  },

  returnPreview (file, wid, hei) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = function (image) {
        // если требуется проверка на размер
        if (wid && hei) {
          const img = new Image()
          img.src = reader.result
          img.onload = function () {
            if (+this.width < wid || +this.heigth < hei) {
              reject(new Error())
            }

            resolve(reader.result)
          }
        } else {
          resolve(reader.result)
        }
      }
      reader.readAsDataURL(file)
    })
  }
}
