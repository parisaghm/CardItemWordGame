"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(target) {
    _classCallCheck(this, Card);

    this.cardsInfo = [{
      title: 'امداد غیبی!',
      desc: 'یکی از تماشاگران رو انتحاب کن ۲۰ ثانیه وقت داره دو تا کلمه جدید بسازه که اگه موفق شد به امتیاز شرکت کننده اضافه میشه'
    }, {
      title: 'لوک خوش شانس!',
      desc: 'یک امتیاز به بازیکن اضافه میشه'
    }, {
      title: 'لوک بد شانس!',
      desc: 'یک امتیاز از بازیکن کم میشه'
    }, {
      title: 'پیروزی یا مرگ!',
      desc: 'بازیکن باید با یه سری حروف جدید از اول بازی کنه!'
    }, {
      title: 'ازت بدم میاد!',
      desc: 'یک امتیاز از یکی از شرکت کنندگان به دلخواه کسر کن ( بازیکن میتواند کسی را انتخاب نکند)'
    }, {
      title: 'بلیط طلایی!',
      desc: 'یک نفر از تماشاچی ها رو وارد بازی کن!'
    }];
    this.cardRender(target);
  }

  _createClass(Card, [{
    key: "shffleArray",
    value: function shffleArray(array) {
      var currentIndex = array.length,
          randomIndex;

      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        var _ref = [array[randomIndex], array[currentIndex]];
        array[currentIndex] = _ref[0];
        array[randomIndex] = _ref[1];
      }

      return array;
    }
  }, {
    key: "cardRender",
    value: function cardRender(target) {
      var arrayInfo = this.shffleArray(this.cardsInfo);

      for (var key in arrayInfo) {
        var cardItemWrapper = document.createElement('div');
        cardItemWrapper.id = key;
        cardItemWrapper.classList.add('card-item-wrapper');
        cardItemWrapper.classList.add("card-item-".concat(key));
        cardItemWrapper.addEventListener('click', function (e) {
          e.target.classList.add('remove');
          var parentId = e.currentTarget.getAttribute('id');
          document.querySelector(".card-back-".concat(parentId)).classList.add('show');
        }); // front side

        var cardItemFrontLayer = document.createElement('div');
        cardItemFrontLayer.classList.add('cart-front');
        cardItemFrontLayer.classList.add("card-front-".concat(key));
        var carItemNumber = document.createElement('span');
        carItemNumber.classList.add('card-number');
        carItemNumber.textContent = Number(key) + 1;
        cardItemFrontLayer.appendChild(carItemNumber); // end front
        // back side

        var cardItemBackLayer = document.createElement('div');
        cardItemBackLayer.classList.add('cart-back');
        cardItemBackLayer.classList.add("card-back-".concat(key));
        var titleDescWrapper = document.createElement('div');
        titleDescWrapper.classList.add('title-desc-wrapper');
        var cartItemTitle = document.createElement('span');
        cartItemTitle.classList.add('card-title');
        cartItemTitle.textContent = arrayInfo[key].title;
        titleDescWrapper.appendChild(cartItemTitle);
        var cardItemDescription = document.createElement('span');
        cardItemDescription.classList.add('card-desc');
        cardItemDescription.textContent = arrayInfo[key].desc;
        titleDescWrapper.appendChild(cardItemDescription);
        cardItemBackLayer.appendChild(titleDescWrapper); // end of back

        cardItemWrapper.appendChild(cardItemFrontLayer);
        cardItemWrapper.appendChild(cardItemBackLayer);
        target.appendChild(cardItemWrapper);
      }
    }
  }]);

  return Card;
}();