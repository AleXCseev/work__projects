$(document).ready(function() {
  // Плавный скролл
  
  if ($(window).width() > 992) {
    $('.smooth-scroll').on('click', function (e) {
      e.preventDefault();
      smoothScroll('product-card', 150);
    });
  } else {
    $('.smooth-scroll').on('click', function (e) {
      e.preventDefault();
      smoothScroll('product-card__form', ($(window).height() - 370));
    });
  }

  function smoothScroll(classOfName, topSmooth) {
    $('html, body').animate({
      scrollTop: $("." + classOfName).offset().top - topSmooth
    }, 1500);
  }


  // Добавление нуля, если число < 10

  function addZero(num) {
    return (num > 9) ? num : '0' + num;
  }

  function addZeroTwo(num) {
    if (num >= 100) {
      return num;
    } else if (num >= 10 && num <= 99) {
      return '0' + num;
    } else if (num >= 0 && num <= 9) {
      return '00' + num;
    }
  }


  // Динамическая дата, от сегодняшней + 2 дня с добавлением нулей, если день или месяц меньше 10

  function addDays(days) {
    var result = new Date();
    result.setDate(result.getDate() + days);
    return result;
  }

  $('.sale--date').text(addZero(addDays(2).getDate()) + '.' + (addZero(addDays(2).getMonth() + 1)) + '.' + (addDays(2).getFullYear() - 2000));


  // Roll

  let countClick = 0;

  $('.main__button').on('click', function(e) {
    e.preventDefault();
    
    if ($(this).attr('class') == 'main__button') {
      $(this).text('ЗУПИНИТИ');
      $(this).toggleClass('main__button-stop');
      rollAll();
    } else {
      $(this).text('ЗАПУСТИТИ');
      $(this).toggleClass('main__button-stop');
      countClick++;
      
      $('.main-count__text').each(function(i, key) {
        $(key).addClass('display-none');

        if ($(key).attr('data-countClick') == (3 - countClick)) {
          $(key).removeClass('display-none');
        }
      });
    }
  });

  function rollSingle(parentClass) {
    $(parentClass).children('.main-fortune__percent').each(function(i, key) {
      if ($(key).attr('class') == 'main-fortune__percent main-fortune__percent--next-next') {
        $($(key).removeClass('main-fortune__percent--next-next'));
        $($(key).addClass('main-fortune__percent--next'));
      } else if ($(key).attr('class') == 'main-fortune__percent main-fortune__percent--next') {
        $($(key).removeClass('main-fortune__percent--next'));
        $($(key).addClass('main-fortune__percent--active'));
      } else if ($(key).attr('class') == 'main-fortune__percent main-fortune__percent--active') {
        $($(key).removeClass('main-fortune__percent--active'));
        $($(key).addClass('main-fortune__percent--prev'));
      } else if ($(key).attr('class') == 'main-fortune__percent main-fortune__percent--prev') {
        $($(key).removeClass('main-fortune__percent--prev'));
        $($(key).addClass('main-fortune__percent--prev-prev'));
      } else if ($(key).attr('class') == 'main-fortune__percent main-fortune__percent--prev-prev') {
        $($(key).removeClass('main-fortune__percent--prev-prev'));
        $($(key).addClass('main-fortune__percent--next-next'));
      }  
    });

    if($('.main__button').attr('class') == 'main__button main__button-stop') {
      setTimeout(function() {
        rollSingle(parentClass);
      }, 100);
    } else {
      if (countClick == 3) {
        if($(parentClass).children('.main-fortune__percent--active').attr('data-active') == 'true') {
          document.querySelector('.main__button').setAttribute('disabled', 'disabled');

          
          setTimeout(function() {
            $('.main').addClass('opacity');
          }, 2000);

          setTimeout(function() {
            $('.main').addClass('display-none');
          }, 3000);

          setTimeout(function() {
            $('.win').removeClass('display-none');
          }, 3000);

        } else {
          rollSingle(parentClass);
        }
      } else {

      }
    }
  }
  
  function rollAll() {
    rollSingle('.main-fortune__wrapper-1');
    rollSingle('.main-fortune__wrapper-2');
    rollSingle('.main-fortune__wrapper-3');
  }

  // Таймер

  const TimerUtils = {
    startTimer: function(targetDateStr, tickCallback) {
        const targetDateMillis = Date.parse(targetDateStr);

        return setInterval(function() {
            const currentMillis = Date.now();
            const diffMillis = targetDateMillis - currentMillis;
            const diff = {};

            diff.miliseconds = Math.floor(diffMillis) % 1000;
            diff.seconds = Math.floor(diffMillis / 1000) % 60;
            diff.minutes = Math.floor(diffMillis / 1000 / 60) % 60;
            diff.hours = Math.floor(diffMillis / 1000 / 60 / 60) % 24;
            diff.days = Math.floor(diffMillis / 1000 / 60 / 60 / 24);

            tickCallback(diff);
        }, 45);
    },

    getTimerFinish: function(finishDate, period) {
        const finishDateMillis = Date.parse(finishDate);

        if (Date.now() >= finishDateMillis) {
            return TimerUtils.getTimerFinish(
                new Date(finishDateMillis + (period * 60 * 60 * 24 * 1000)).toISOString(),
                period
            );
        }

        return new Date(finishDateMillis);
    }
  };

  const day = 2;
  const finish = TimerUtils.getTimerFinish("2020-10-16T00:00:00", day);

  TimerUtils.startTimer(finish.toISOString(), function(diff) {
    if ($(".seconds").length >= 0) {
      $('.hours').text(addZero(diff.hours));
      $('.minutes').text(addZero(diff.minutes));
      $('.seconds').text(addZero(diff.seconds));
      $('.miliseconds').text(addZeroTwo(diff.miliseconds));
    }
  });
});