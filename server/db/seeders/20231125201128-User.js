const bcrypt = require('bcrypt');
const { User, CoffeeShop, Barist, IndividualUser } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate(
      [
        {
          role: 'coffeeShop',
          email: 'emanola@mail.ru',
          password: await bcrypt.hash('123', 10),
          CoffeeShop: {
            shopName: 'BomBon Coffee',
            description: 'Супер пупер лучший кофе',
            photo:
              'https://p0.zoon.ru/preview/hycVr08mhBqqIRvxMujmjg/630x384x85/1/9/f/original_540f832240c088c5138deff1_594a2ce2f0c01.jpg',
            city: 'Санкт-Петербург',
            address: 'Торфяная дорога 4',
            menu: 'Латте, капучино ,эспрессо, фильтр-кофе ',
            rating: 4,
          },
        },
        {
          role: 'coffeeShop',
          email: 'ypnew@mail.ru',
          password: await bcrypt.hash('123', 10),
          CoffeeShop: {
            shopName: 'Super Coffee',
            description: 'Самый сложный кофе',
            photo:
              'https://yt3.googleusercontent.com/f21umP1LCTz32JUpsmTT_OaNRuzZWrOZaAny264xyvuKO-EmxUYAfZ2BoE6350wCfiIZhvLacA=s900-c-k-c0x00ffffff-no-rj',
            city: 'Санкт-Петербург',
            address: 'Спасский переулок, 14/35',
            menu: 'Латте, капучино, какао, раф',
            rating: 5,
          },
        },
        {
          role: 'coffeeShop',
          email: 'monkey@mail.ru',
          password: await bcrypt.hash('123', 10),
          CoffeeShop: {
            shopName: 'MonkeyGrinder',
            description: 'Самый сложный кофе',
            photo:
              'https://yt3.googleusercontent.com/f21umP1LCTz32JUpsmTT_OaNRuzZWrOZaAny264xyvuKO-EmxUYAfZ2BoE6350wCfiIZhvLacA=s900-c-k-c0x00ffffff-no-rj',
            city: 'Санкт-Петербург',
            address: 'Салова 61',
            menu: 'Макиато, глясе, моккачино, сырный раф',
            rating: 5,
          },
        },
        {
          role: 'coffeeShop',
          email: 'demid@mail.ru',
          password: await bcrypt.hash('123', 10),
          CoffeeShop: {
            shopName: 'Dimidroll shop',
            description: 'Самый топовый кофе',
            photo:
              'https://ca.slack-edge.com/T04V5DDHUN8-U05V09R0JGY-c52e86ee54ef-512',
            city: 'Санкт-Петербург',
            address: 'Пулковское шоссе 73',
            menu: 'Иван-чай, Парвиз-чай, чай с женьшенем, чебуреки с мясом, салфетки в комплекте',
            rating: 5,
          },
        },
        {
          role: 'barista',
          email: 'nivanova@mail.ru',
          password: await bcrypt.hash('123', 10),
          Barist: {
            baristaFirstName: 'Наталья',
            baristaLastName: 'Иванова',
            age: 28,
            gender: 'женский',
            photo:
              'https://dn1.vtomske.ru/a/42935a649996231065a63e098ba3f5f8_.jpg',
            experience: 2,
            skills:
              'Классифицирую сорта, их вкусовые вариации;\nГотовлю более 30 видов кофейных напитков;Определяю степень прожарки по запаху',
            description:
              'Коммуникабельная при общении с клиентом, умею находить к каждому индивидуальный подход, местами могу быть шоуменом',
            rating: 5,
          },
        },
        {
          role: 'barista',
          email: 'abashkatov@mail.ru',
          password: await bcrypt.hash('123', 10),
          Barist: {
            baristaFirstName: 'Александр',
            baristaLastName: 'Башкатов',
            age: 28,
            gender: 'мужской',
            photo:
              'https://i.pinimg.com/originals/16/3a/0c/163a0c2af14f1e5a676cd37885f21f78.jpg',
            experience: 4,
            skills:
              'Обслуживание клиентов;\nЛатте-арт и кипячение молока;Заваривание кофе вручную и автоматически',
            description:
              'Владею профессиональным оборудованием дя разного способа приготовления кофе, умею на нем работать и обслуживать его',
            rating: 5,
          },
        },
        {
          role: 'barista',
          email: 'vponomarenko@mail.ru',
          password: await bcrypt.hash('123', 10),
          Barist: {
            baristaFirstName: 'Владимир ',
            baristaLastName: 'Порхоменко',
            age: 25,
            gender: 'мужской',
            photo:
              'https://i.pinimg.com/originals/b1/6f/72/b16f722958ed0f2127f208b5c6a7beca.jpg',
            experience: 1,
            skills:
              'Умею заваривать чай в пакетиках;\nБанановый раф с карамельным сиропом;Заваривание кофе закрытыми глазами',
            description:
              'Предугадывал потребности клиента и всегда знал, что необходимо заведению, постоянно оценивая остановку.',
            rating: 5,
          },
        },
        {
          role: 'barista',
          email: 'mkurator@mail.ru',
          password: await bcrypt.hash('123', 10),
          Barist: {
            baristaFirstName: 'Марина ',
            baristaLastName: 'Куратор',
            age: 26,
            gender: 'женский',
            photo:
              'https://img.freepik.com/free-photo/gorgeous-young-woman-in-black-floppy-hat-posing-isolated-on-white_231208-10691.jpg',
            experience: 2,
            skills: 'Помол кофейных зерен',
            description:
              'Поддерживала рабочее место в безопасном, чистом и профессиональном состоянии и опрятный внешний вид на протяжении всего времени.',
            rating: 4,
          },
        },
      ],
      {
        include: [
          { model: CoffeeShop },
          { model: Barist },
          { model: IndividualUser },
        ],
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ truncate: { cascade: true } });
  },
};
