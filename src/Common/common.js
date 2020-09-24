const inBrowser = typeof window !== 'undefined'

const UA = inBrowser && window.navigator.userAgent.toLowerCase()
const isIE = UA && /msie|trident/.test(UA)
const isIE9 = UA && UA.indexOf('msie 9.0') > 0
const isEdge = UA && UA.indexOf('edge/') > 0
const isAndroid = (UA && UA.indexOf('android') > 0) 
const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA))
const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
const isPhantomJS = UA && /phantomjs/.test(UA)
const isFF = UA && UA.match(/firefox\/(\d+)/)

function decoder(html){
    let decoder = document.createElement('div')
    decoder.innerHTML = html
    console.log(decoder.textContent)
    // return decoder.textContent
  }


  function once (fn) {
    let called = false
    return function () {
      if (!called) {
        called = true
        fn.apply(this, arguments)
      }
    }
  }

  function launchRocket(){
    console.log('The rocket has been launched.')
  }
  const launchRocketOnce = once(launchRocket)
  launchRocketOnce()
  launchRocketOnce()
  launchRocketOnce()
