import { defineCustomElement } from 'vue'
import './index.css'
import Clock from './components/Clock.vue'
import Message from './components/Message.vue'

const ClockElement = defineCustomElement(Clock)
const MessageElement = defineCustomElement(Message)

customElements.define('wc-clock', ClockElement)
customElements.define('wc-message', MessageElement)