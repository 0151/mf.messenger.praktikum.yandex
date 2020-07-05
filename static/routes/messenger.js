import Messenger from '../components/Messenger.js'
import Compose from '../components/Compose.js'

const chats = [
    {
        author: 'Анна Керн',
        avatar: './images/avatars/kern.jpg',
        date: '11.06.25',
        text: 'Вы уверяете, что я не знаю вашего характера. А какое мне до него дело? очень он мне нужен — разве у хорошеньких женщин должен быть характер?',
    },
    {
        author: 'Елизавета Хитрово',
        avatar: './images/avatars/hitrovo.jpg',
        date: '02.10.26',
        text: 'Не в вашем благородном характере оставлять меня без вестей о себе.',
    },
    {
        author: 'Наталья Гончарова',
        avatar: './images/avatars/goncharova.jpg',
        date: '10.12.36',
        text: 'Ну прощай. Целую тебя и ребят, будьте здоровы.',
    }

]

const current = {
    author: 'Анна Керн',
    messages: [
        {
            text: 'Я никогда не забуду того восторга, который охватил мою душу. Я была в упоении как от текучих стихов этой чудной поэмы, так и от его чтения, в котором было столько музыкальности, что я истаивала от наслаждения',
            date: '2.06.1825',
        },
        {
            text: 'Вы уверяете, что я не знаю вашего характера. А какое мне до него дело? очень он мне нужен — разве у хорошеньких женщин должен быть характер? главное — это глаза, зубы, ручки и ножки — (я прибавил бы еще — сердце, — но ваша кузина очень уж затаскала это слово)',
            date: '11.06.1825',
            own: true
        }
    ]
}

const messenger = new Messenger('messenger', {
    chats,
    current
})
messenger.render()

const compose = new Compose('editor')
compose.render()