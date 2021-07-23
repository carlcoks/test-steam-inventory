const request = require('request')

const api = {}

api.getItem = () => async (req, res) => {
  const countOnPage = 16 // кол-во предметов на странице
  const countLinesOnPage = 4 // кол-во линий на странице
  const countItemsOnLine = 4 // кол-во эл-ов в линии

  const { steamid, assetid } = req.body

  if (!steamid || !assetid)
    return res.status(400).json({
      success: false,
      message: 'Не указаны обязательные поля'
    })

  try {
    request.get({
      url: `http://steamcommunity.com/inventory/${steamid}/730/2`,
      json: true
    }, function (error, response, body) {
      if (error) {
        console.log(error)
        return res.status(400).json({
          success: false,
          message: 'Произошла ошибка'
        })
      }

      if (body && body.success === 1) {
        const { assets, descriptions } = body

        // массив объектов с classid доступных для tradeoffer
        const array = descriptions.reduce((arr, current) => {
          if (current.tradable) {
            arr.push(current.classid)
          }
          return arr
        }, [])

        // массив с assetid в tradeoffer
        const newAssets = assets.reduce((arr, current) => {
          if (array.includes(current.classid)) {
            arr.push(current.assetid)
          }

          return arr
        }, [])

        // позиция эл-та во всём списке
        const commonPosition = newAssets.indexOf(assetid) + 1

        // страница эл-та
        const page = Math.ceil(commonPosition / countOnPage)

        // позиция эл-та на странице
        const positionOnPage = (commonPosition % countOnPage === 0) ? countOnPage : (commonPosition % countOnPage)

        // номер линии эл-та
        const lineNumber = Math.ceil(positionOnPage / countLinesOnPage)

        // позиция эл-та в линии
        let positionOnLine = positionOnPage

        while (positionOnLine > countItemsOnLine) {
          positionOnLine = positionOnLine - countItemsOnLine
        }

        // Окончалтельный ответ:
        return res.json({
          success: true,
          data: {
            page,
            line: lineNumber,
            position: positionOnLine
          }
        })
      }
    })
  } catch (e) {
    return res.status(502).json({
      success: false,
      data: {
        message: `Произошла ошибка на сервере`
      }
    })
  }
}

module.exports = api
