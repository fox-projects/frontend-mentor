const subscribeButtonEl = document.querySelector('button.newsletter-subscribe')
const dismissButtonEl = document.querySelector('button.dismiss-message')

const cardStayUpdated = document.querySelector('.card-stay-updated')
const cardThanksForSubscribing = document.querySelector('.card-thanks-for-subscribing')

subscribeButtonEl.addEventListener('click', (ev) => {
	cardStayUpdated.attributeStyleMap.set('display', new CSSKeywordValue('none'))
	cardThanksForSubscribing.attributeStyleMap.set('display', new CSSKeywordValue('block'))
})
dismissButtonEl.addEventListener('click', (ev) => {
	cardStayUpdated.attributeStyleMap.set('display', new CSSKeywordValue('flex'))
	cardThanksForSubscribing.attributeStyleMap.set('display', new CSSKeywordValue('none'))
})
