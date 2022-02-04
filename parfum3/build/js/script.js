var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.card()
		this.time()
	}, 

	initLibraris: function() {
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 20;
			// var cardHeight = $(".card").outerHeight(false)
			// var windowHeight = $(window).height()
	

			$('html, body')
				.stop()
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		});

		// $(".review__slider").owlCarousel({
		// 	loop: true,
		// 	nav : true,
		// 	dots: true,
		// 	items: 1,
		// 	margin: 50,
		// 	autoHeight: false,
		// 	responsive:{
		// 		0: {
		// 			items: 1,
		// 			autoHeight: true,
		// 			nav: false,
					
		// 		},
		// 		481: {
		// 			items: 1,
		// 			autoHeight: false,
		// 			nav: true,
					
		// 		},
		// 	}
		// });

		// AOS.init({
		// 	disable : 'mobile',
		// 	once: true,
		// 	duration: 1000,
		// 	// offset : -200,
		// });
	
		// $(window).resize(function() {
		// 	AOS.refresh();
		// })

		$('[data-fancybox]').fancybox({
			loop: true,
			infobar: false,
			animationEffect: false,
			backFocus: false,
			hash: false,
		});
	},

	card: function() {
		var womanParfums = [
			{
				brand: "GIORGIO ARMANI",
				name: "SI",
				img: $("body").data("path") + "img/parfum/armani-si.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Композицию открывает приятный, чуть терпкий запах нектара черной смородины, подчеркнутый удивительным синтетическим веществом амбоксаном (максимально приближено к амбре), придающим неожиданные и такие привлекательные нотки, обеспечивающим неимоверную стойкость. В цветочном «сердце» распускается очаровательная майская роза с пленительной белой фрезией. В древесном шлейфе элегантно чувствуются благородные оттенки мускуса.",
				volume: "100 МЛ",
				country: "Made in France",

			},
			{
				brand: "GIVENCHY",
				name: "PLAY FOR HER",
				img: $("body").data("path") + "img/parfum/givenchy-play-for-her.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Вершина пирамиды наполнена цитрусовой свежестью бергамота, сочными нотами белого персика и приятным пряным аккордом розового перца. Ведущую партию в композиции исполняет карибское «свечное дерево» амирис, чей теплый, смолистый запах украшает изысканный цветочный букет из магнолий и тиаре. Особенно элегантно звучит чувственный шлейф Play For Her, составленный из теплых нот пачулей, сладковато-бальзамического аккорда сандала, ванильной сладости бобов тонка и мускуса.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "LACOSTE",
				name: "L12 12 POUR ELLE SPARKLING",
				img: $("body").data("path") + "img/parfum/lacoste-sparkling.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Аромат Lacoste L.12.12 Pour Elle Sparkling – это нежная, легкая и жизнерадостная композиция, которая играет утонченными переливами цветов и фруктов на коже. Она пробуждает приятные воспоминания, прогоняет грусть и дарит ощущение окрыленности. Парфюм призван подчеркнуть безупречный вкус и чувство стиля, усилив природное обаяние.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "NINA RICCI",
				name: "NINA PLAIN GREEN APPLE",
				img: $("body").data("path") + "img/parfum/nina-green-apple.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Nina Ricci Nina Green Apple (Нина Риччи Зеленое Яблоко) – современная волшебная сказка. Она предназначена для всех молодых девушек, любящих сюрпризы и романтику. Она живет в мире фантазий, но теперь пришло время воплотить ее мечты в реальность с помощью этого магического парфюма нина риччи нина грин эпл, окутывающего свою обладательницу аурой соблазна, шарма и женственности. Парфюмерная композиция нина риччи грин эпл начинается нотами калабрийского лимона и лайма, переходящими в «сердце» из красного яблока, ванили, луноцвета и лепестков пиона. «База» Нина Риччи Зеленое Яблоко состоит из древесины яблони, хлопкового мускуса и белого кедра.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "ARMAND BASI",
				name: "IN RED",
				img: $("body").data("path") + "img/parfum/armand-basi-in-red.jpg",
				flag: $("body").data("path") + "img/flag-spain.png",
				description: "Это легкая цветочная туалетная вода с древесными нотками, которая словно дополняет лето, внося в него еще больший шарм и красоту. Сочетает в себе свободу и непосредственность дикой природы с архитектурой и геометрией городских пейзажей. Она предназначена для женщин нашего времени: подтверждающих свое право на яркую индивидуальность, самоуверенных, способных выразить свои эмоции и чувства.",
				volume: "100 МЛ",
				country: "Made in Spain",
			},
			{
				brand: "DKNY",
				name: "MY NY",
				img: $("body").data("path") + "img/parfum/dkny-my-ny.jpg",
				flag: $("body").data("path") + "img/flag-usa.png",
				description: "Опьяняющие тонкие ароматы цветов создают чувственную, легкую ауру духов. А кисло-сладкие аккорды малины, приправленные розовым перцем, придают парфюму инфантильного шарма. Манящая база аромата раскрывается благоуханием сладкой ванили, серой амбры и пачулей. Соблазнительные ноты мускуса завершают совершенную композицию швейцарского парфюма.",
				volume: "100 МЛ",
				country: "Made in USA",
			},
			{
				brand: "GIVENCHY",
				name: "ANGE OU DEMON LE PARFUM & ACCORD ILLICITE",
				img: $("body").data("path") + "img/parfum/givenchy-demon-son.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "При первом знакомстве аромат ведет себя самым что ни на есть «ангельским» образом. Скромная начальная нота тангерина привлекает внимание, однако звучит легко и ненавязчиво, быстро уступая место нотам «сердца». А тут — женственный жасмин Самбак дополнили нежными апельсиновыми цветочками, дабы показать, насколько нежной и женственной бывает их обладательница — настоящий ангел! Однако уже в финальных аккордах все больше набирает силы демоническое начало: знойные пачули подчеркиваются кожей, амброй и мускусом, создавая стильное завершение композиции.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "LANCOME",
				name: "TRESOR EAU DE PARFUM",
				img: $("body").data("path") + "img/parfum/lancome-tresor.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: 'Начальная нота: ананас, сирень, персик, цветок абрикоса, ландыш, бергамот и роза. Нота "сердца": ирис, жасмин, гелиотроп и роза. Конечная нота: абрикос, сандаловое дерево, амбра, мускус, ваниль и персик. Удивительный парфюм дарит необыкновенное ощущение женственности, чувственности, гармонии, ослепительного счастья и очарования.',
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "PACO RABANNE",
				name: "LADY MILLION EAU MY GOLD!",
				img: $("body").data("path") + "img/parfum/pr-my-gold.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: 'Сладостный, соблазнительный шлейф, приправленный горечью сандала и мускуса, дарит энергию сочных фруктов и самых утонченных цветов. Для чувственной, изысканной, загадочной девушки, которая одним движением руки может остановить неустанный бег часов и насладиться вечностью мгновения... Сочные цитрусовые ноты в сочетании с листьями фиалки и цветами апельсина здесь ароматнее и слаще лимонного мармелада. Взрывная энергия мускуса, амбры и сандала переносит в феерическую атмосферу праздника.',
				volume: "80 МЛ",
				country: "Made in France",
			},
			{
				brand: "VALENTINO",
				name: "ROCK 'N ROSE",
				img: $("body").data("path") + "img/parfum/valentino-rock-n-rose.jpg",
				flag: $("body").data("path") + "img/flag-spain.png",
				description: 'Начальные ноты открываются дуэтом лесного ландыша и свежей черной смородины с цитрусовым акцентом бергамота. Чудесный душистый букет представляет ноту «сердца»: душистая роза, цветы апельсина и гардения. Ароматный шлейф составят вкусные запахи сладкой ванили, лилового ириса, гелиотропа и эфирного сандала. Обладательница «Rock’n Rose» – современная девушка, которая мастерски сочетает задорную рок-н-ролльную жизнь с изяществом и высоким стилем.',
				volume: "100 МЛ",
				country: "Made in Spain",
			},
			{
				brand: "VALENTINO",
				name: "ROCK 'N ROSE COUTURE RED",
				img: $("body").data("path") + "img/parfum/valentino-rock-n-rose-red.jpg",
				flag: $("body").data("path") + "img/flag-spain.png",
				description: "Композиция парфюма Rock'n Rose Couture Red Valentino от Valentino переливается аккордом верхних нот: свежей зелени, тонкого, пряного ландыша, терпкой черной смородины, душистой красной смородины, кисло-сладкого бергамота. Сердце играет нотами: дымной розы, сладковато-терпкой гардении, бодрящего иланг-иланга, нежного флердоранжа (апельсинового цвета). В ноты базы вошли: шелковистый фиалковый корень, приторная, сладкая ваниль, туманный сандал, чистый мускус, душистый гелиотроп, тонкий, пудровый ирис, терпкая кора дуба, дурманящие пачули.",
				volume: "100 МЛ",
				country: "Made in Spain",
			},
			{
				brand: "GIVENCHY",
				name: "LIVE IRRESISTIBLE EAU DE PARFUM",
				img: $("body").data("path") + "img/parfum/w45.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Элитные духи, создаваемые известным французским брендом Givenchy, никогда не оставят равнодушными прекрасных леди. Основатель этого модного дома Юбер де Живанши верил в то, что аромат — это визитная карточка женщины, поэтому должен тонко подчеркивать ее индивидуальный стиль. С этой задачей на отлично справляется парфюмированная вода 2015 года выпуска - Live Irresistible.",
				volume: "75 МЛ",
				country: "Made in France",
			},
			{
				brand: "LANCOME",
				name: "MIRACLE SECRET",
				img: $("body").data("path") + "img/parfum/w42.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "В линейке элитный парфюмов Miracle появился еще один таинственный незнакомец — аромат Miracle Secret. Элегантный и нежный, чувственный и прекрасный — он адресован очаровательным девушкам, которые верят в цветные сны, слышат мелодию весны и знают, что все в жизни происходит не напрасно.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "CAROLINA HERRERA",
				name: "212 VIP ORANGE",
				img: $("body").data("path") + "img/parfum/w43.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Новый аромат нашел свое вдохновение у молодых и творческих людей Нью-Йорка, которые пишут будущую историю мегаполиса, истинных VIP персон. Яркие эпатажные люди, которые любят и умеют хорошо проводить время. Основная идея аромата «А вы есть в списке?» – фраза, пришедшая из мира VIP, но не имеющая ничего общего с деньгами или известностью. Быть в списке — значит обладать особой жизненной позицией и неординарными личностными характеристиками.",
				volume: "80 МЛ",
				country: "Made in France",
			},
			{
				brand: "PACO RABANNE",
				name: "BLACK XS POUR FEMME",
				img: $("body").data("path") + "img/parfum/pr-xs-femme.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Black XS Pour Femme призван придавать образу своей обладательницы некую дерзость. Шикарный аромат выбирают волевые и непокорные, слегка импульсивные красотки, которые делают все, что сами пожелают. Таким женщинам по душе адреналин, скорость, безудержное веселье и разнообразие. Волнующий и чувственный парфюм способен вскружить голову любому мужчине.",
				volume: "80 МЛ",
				country: "Made in France",
			},
			{
				brand: "COACH",
				name: "POPPY",
				img: $("body").data("path") + "img/parfum/coach-poppy.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Разработкой аромата занималась несравненная Celine Barel (Селин Барель), которая взяла за основу семейства цветочных фруктовых запахов. Дизайнеры Coach используют в композиции туалетной воды Coach Poppy ноты мандарина, фрезии, виргинского кедра, ванили, розовой пастилы, водяной лилии и ноты розы. Такое удивительное сочетание создает насыщенную красочную картину, которая наполнена всеми красками и оттенками чувств и эмоций. Утонченный характер аромата не оставит равнодушным даже самых холодных и искушенных мужчин.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "BVLGARI",
				name: "GOLDEA",
				img: $("body").data("path") + "img/parfum/bvlgari-goldea.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Теплый и солнечный, умопомрачительно сладкий Goldea от Bvlgari дополняет яркий женский образ, подобно драгоценному золотому украшению. Вдыхая его, можно ощутить, как ноты ароматного апельсинового цвета и освежающего бергамота парируют сладострастной малине. В сердце парфюмерной симфонии великолепный жасмин конкурирует с сексуальным иланг-илангом и мускусом. Завершает эту ароматную феерию микс амбры, папируса и пачулей.",
				volume: "90 МЛ",
				country: "Made in France",
			},
			{
				brand: "CHANEL",
				name: "N5 PARIS",
				img: $("body").data("path") + "img/parfum/1.png",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Chanel N5 — классика, неподвластная времени. Потрясающий аромат будоражит сердца людей уже не одно поколение. Не подражая ничему, что было раньше, парфюмер Эрнест Бо представил Коко Шанель по-настоящему свежую и новую композицию.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "CHANEL COCO",
				name: "MADEMOISELLE",
				img: $("body").data("path") + "img/parfum/3.png",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Несколько искрящихся капель на тонкие, нежные запястья – в женщине просыпается нечто особенное, волнующее. Она уже не идет, она плывет на волнах цитрусовой свежести и дурманящей пряности пачули, переплетающейся с нежными нотами розы и жасмина. Coco Mademoiselle оценит молодая, элегантная женщина, не лишенная темперамента. Горечь пачули и терпкость ветивера под стать элегантной леди с горячим сердцем и холодной головой.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "VERSACE",
				name: "BRIGHT CRYSTAL",
				img: $("body").data("path") + "img/parfum/4.png",
				flag: $("body").data("path") + "img/flag-italy.png",
				description: "Элегантная смесь ярких фруктовых нот и изысканного цветочного благоухания на фоне теплой древесной базы выгодно подчеркивает очарование и женственность обладательницы парфюма. Цветочная композиция Versace Bright Crystal в начальных нотах искрится свежими аккордами граната и экзотической цитрусовой терпкостью юзу.",
				volume: "90 МЛ",
				country: "Made in Italy",
			},
			{
				brand: "DOLCE&GABBANA",
				name: "LIGHT BLUE",
				img: $("body").data("path") + "img/parfum/6.png",
				flag: $("body").data("path") + "img/flag-italy.png",
				description: "Пленительные нотки парфюма Dolce&Gabbana Light Blue превратят обычный день в невероятное путешествие по необозримым просторам чистых лесов и прозрачных рек, глубоких океанов и непокоренных горных вершин. Великолепие этого аромата поразит с самых первых аккордов, наполненных свежестью лимона и сочными нотами яблока. Лаконичные акценты бамбука и невесомые переливы колокольчика осуществляют плавный переход от фруктовых к цветочным нотам, полным благоухания жасмина и белой розы. Бархатный мускус, сладкая амбра и немного терпкий кедр формируют завершающую ноту этого изящного парфюма и делают его мелодию невероятно чувственной и нежной.",
				volume: "100 МЛ",
				country: "Made in Italy",
			},
			{
				brand: "JOSE EISENBERG",
				name: "J'OSE",
				img: $("body").data("path") + "img/parfum/eisenberg-jose.png",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "J'Ose - неординарный женский аромат от Eisenberg. Интересный, многогранный парфюм, томный и чувственный, но в то же время спокойный и ласковый. Хотя в пирамидке нет табака, многие замечают легкие оттенки сигарет.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "CHANEL",
				name: "GABRIELLE",
				img: $("body").data("path") + "img/parfum/chanel-gabrielle.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Сладковато-пряное сочетание цитрусов с черной смородиной открывают звучание парфюма, даря наслаждение свежестью и чистотой. Белые цветы в обрамлении иланг-иланга и томной туберозы намекают на потенциал страсти, заключенный в каждой женщине. Финальный аккорд композиции придает ей волнующий оттенок сандала и мускуса. Chanel Gabrielle — парфюм о том, как быть Женщиной!",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "DIOR",
				name: "MISS DIOR BLOOMING BOUQUET",
				img: $("body").data("path") + "img/parfum/dior-blooming-bouquet.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Туалетная вода D&G Anthology L`Imperatrice 3 – яркое, весеннее сочетание искристых брызг экзотических цветов и драгоценных капель спелых, сочных фруктов. Верхний аккорд завораживает и околдовывает гармоничным коктейлем из тонких и изящных розовых лепестков и насыщенной «бодрости» экзотических фруктов. Сочный, глубокий и богатый аромат, который уместен и в летний сезон, и в зимние холода. Ноты сердца – приятная и свежая кислинка из киви в коктейле из мякоти спелых арбузов. Фруктовый аккорд раскрывается на коже нежным и чувственным сочетанием, даря прохладу и свежесть жарким летним днем.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "DOLCE&GABBANA",
				name: "L'IMPERATRICE 3",
				img: $("body").data("path") + "img/parfum/9.png",
				flag: $("body").data("path") + "img/flag-italy.png",
				description: "Туалетная вода D&G Anthology L`Imperatrice 3 – яркое, весеннее сочетание искристых брызг экзотических цветов и драгоценных капель спелых, сочных фруктов. Верхний аккорд завораживает и околдовывает гармоничным коктейлем из тонких и изящных розовых лепестков и насыщенной «бодрости» экзотических фруктов. Сочный, глубокий и богатый аромат, который уместен и в летний сезон, и в зимние холода. Ноты сердца – приятная и свежая кислинка из киви в коктейле из мякоти спелых арбузов. Фруктовый аккорд раскрывается на коже нежным и чувственным сочетанием, даря прохладу и свежесть жарким летним днем.",
				volume: "100 МЛ",
				country: "Made in Italy",
			},
			{
				brand: "CHANEL",
				name: "CHANCE EAU DE TOILET",
				img: $("body").data("path") + "img/parfum/w46.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Есть особенные вещи для особенных случаев. И этот терпкий, согревающий парфюм – не исключение. Богатый шлейф этих изысканных духов невозможно перепутать ни с чем. Невидимая нить аромата создает неповторимое кружево, обладающее магнетической притягательностью. Как нить нежнейших жемчужин, выстроены стройные ноты парфюма.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "GUCCI",
				name: "BAMBOO",
				img: $("body").data("path") + "img/parfum/gucci-bamboo.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Звенящая и интригующая нота бергамота – единственное, что вы встречаете, открыв для себя Gucci Bamboo. Но этого даже более, чем достаточно, ведь она сразу дает понять прозрачный и открытый образ аромата, и создает хорошую базу для «сердечных» нот. А здесь у нас – королевская лилия с ее чуть тяжелым восточным флером сочетается с иланг-илангом и еле слышными апельсиновыми цветочками на фоне. Парфюм накрывает волной чистоты и воодушевления, настраивая на умиротворенность и возвышенность. Финальный акцент из тропической ванили, амбры и сандала создает мистически-упоительный шлейф, который заставляет вас почувствовать себя настоящей женщиной – чувственной, загадочной и желанной!",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "CHANEL",
				name: "CHANCE EAU TENDRE",
				img: $("body").data("path") + "img/parfum/11.png",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Такой аромат будет приятен в любую погоду: в жару, и в холод, и в дождь. Увесистые базовые нотки придают аромату невероятную стойкость и глубину, оставляя его нежным и тёплым. Это творение очень скурпулёзно создано, что в одном флаконе гармонично сплетаются слабость и сила, огонь и лёд. Chanel Chance Eau Tendre оставляет цветочный шлейф, очень красивый и элегантный, не бьющий в нос.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "CAROLINA HERRERA",
				name: "GOOD GIRL",
				img: $("body").data("path") + "img/parfum/gg.png",
				flag: $("body").data("path") + "img/flag-spain.png",
				description: "Загадочный и манящий восточный аромат Carolina Herrera Good Girl станет прекрасным дополнением к образу настоящей обольстительницы. Первые ноты представленного шедевра звучат ароматным черным кофе и терпким миндалем. За ними следует сердечный аккорд - это сочетание жасмина, самбака и туберозы.",
				volume: "100 МЛ",
				country: "Made in Spain",
			},
			{
				brand: "LANVIN",
				name: "ECLAT D'ARPEGE",
				img: $("body").data("path") + "img/parfum/lanvin-eclat.png",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Невероятно легкий, невесомый цветочный аромат от французского бренда полон очарования и чистоты. Утонченный Lanvin Eclat d'Arpege безупречно подходит для современных женщин. Леди, которые желают проявить своё обаяние, элегантность, отдадут предпочтение именно этой композиции. Ведь в ней таится вся притягательность, коей только может обладать женская натура. И поэтому так хочется купить сей аромат. Пирамида аромата разливается в первые минуты благородством пиона и фрезии, насыщенностью сирени и свежестью зеленого чая. Еле заметное облако верхних нот сменяется чуть более насыщенным «сердцем».",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "LANCOME",
				name: "LA VIE EST BELLE DE PARFUM",
				img: $("body").data("path") + "img/parfum/lancome-est-belle.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Это волнующая, грациозная и полная жизни парфюмированная вода, обладающая волшебной силой. Ее концепцию построили на простой, но такой манящей идее обретения красоты, свободы и счастья, отбрасывая все жесткие рамки и условности, которые навязывает окружающий мир. Обладательница аромата умеет вдохновляться естественным и привычным, находить радость и смысл в мелочах. Начало роскошной парфюмерной композиции успокаивает нежными нотами груши и оттенками черной смородины. Затем добавляются сердечные нотки, в которых доминируют ирис с романтичным жасмином, а цветки апельсина создают волнующее ощущение теплоты. В шлейфе, который окутывает нежностью, соединились пачули с бобами тонка, пралине с ванилью.",
				volume: "100 МЛ",
				country: "Made in France",
			},
		]

		var manParfums = [
			{
				brand: "KENZO",
				name: "L'EAU PAR COLORS POUR HOMME",
				img: $("body").data("path") + "img/parfum/kenzo-colors-for-men.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Парфюм напоминает тихое утро летнего дня, когда свежие, кристально чистые капельки росы застыли на сонных сочно-зеленых листочках мяты, отчего, кажется, весь воздух пропитан сладко-холодным, ароматным дурманом мяты. Дерзкий лимон дразнит своими кисло-горькими аккордами, взбудораживая и освежая ваши мысли, возбуждая ваши желания. Приятный, немного схожий с амброй, аромат шалфея, согревающий запах кардамона, нежного, свежего белого мускуса, теплого, древесного кедра, а также душистая кинза и цитрусовый, пряный имбирь делают парфюм действительно особенным.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "ANTONIO BANDERAS",
				name: "BLUE SEDUCTION",
				img: $("body").data("path") + "img/parfum/blue-seduction.jpg",
				flag: $("body").data("path") + "img/flag-spain.png",
				description: "Это искристый водный нектар, который начинается с прохладной свежести душистого цитруса, а завершается сочетанием смородины и мяты. Отличительная особенность композиции – ее благородная чистота. Как и все продукты известного бренда, представленная туалетная вода отличается стойкостью с одновременной легкостью. Именно в этом заключается секрет и популярность этих парфюмов: их будет уместно использовать в любое время суток, всегда подчеркивая чувство вкуса и оригинальный стиль.",
				volume: "100 МЛ",
				country: "Made in Spain",
			},
			{
				brand: "CAROLINA HERRERA",
				name: "BAD BOY",
				img: $("body").data("path") + "img/parfum/ch-bad-boy.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Парфюмерная композиция принадлежит к группе восточных пряных ароматов, а это всегда необычайное притяжение противоположностей. Яркие ноты шалфея, зеленого бергамота и перца сочетаются с чувственной насыщенностью бобов тонка, какао и амбры. Bad Boy подчеркивает светлую и темную стороны современного мужчины.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "CHANEL",
				name: "BLEU DE CHANEL",
				img: $("body").data("path") + "img/parfum/chanel-bleu.jpg",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Парфюмерную композицию начинают раскрывать оттенки мяты, перца, цитрусов (лимона, бергамота, лайма), придавая пикантность, свежесть, уверенность. Затем дают о себе знать нотки жасмина, лабданума, фимиама, имбиря и мускатного ореха, привнося неотразимость и искренность. Плотный массивный пузырек загадочного и глубокого темно-синего цвета отличается властной элегантностью – настоящее произведение искусства, которое никого не оставляет равнодушным.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "VERSACE",
				name: "EAU FRAICHE",
				img: $("body").data("path") + "img/parfum/1 (1).png",
				flag: $("body").data("path") + "img/flag-italy.png",
				description: "Основным достоинством этого парфюма является его ненавязчивый аромат, который позволяет использовать его в повседневной жизни. Базовые мотивы композиции основаны на сочетании амбры, мускуса и древесного привкуса. Пикантности «сердцу» аромата придают кедр, мускатный орех и эстрагон.",
				volume: "100 МЛ",
				country: "Made in Italy",
			},
			{
				brand: "CHRISTIAN DIOR",
				name: "DIOR SAUVAGE",
				img: $("body").data("path") + "img/parfum/3 (1).png",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Sauvage – яркий, освежающий и благородный, с чистым, безупречным звучанием восточно-древесный мужской парфюм, пополнивший в 2015 году коллекцию знаменитого бренда Dior. Своим названием аромат перекликается со знаменитым парфюмом «Eau Sauvage» 1966 года, но, похоже, что представляет собой совершенно новую композицию. Парфюм создан из натуральных ингредиентов, отобранных с особой тщательностью, благодаря чему аромат обладает яркой, природной, почти мистической энергетикой.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "CHRISTIAN DIOR",
				name: "FAHRENHEIT",
				img: $("body").data("path") + "img/parfum/4 (1).png",
				flag: $("body").data("path") + "img/flag-france.png",
				description: 'Эта композиция с акцентированными восточно-кожаными нотами позиционируется как гармония контрастов. Она разработана парфюмером дома Dior Франсуа Демаши: "Я не хотел создавать карикатуру на Fahrenheit, аромат, который имеет очень узнаваемую композицию. Я сохранил его первоначальную структуру, добавив элементы, которые обогащают парфюмерную историю и подчеркивают индивидуальный стиль." Для того, чтобы усилить горячие и чувственные восточно-кожаные аспекты были выбраны редкие натуральные ингредиенты.',
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "GIORGIO ARMANI",
				name: "ACQUA DI GIO POUR HOMME",
				img: $("body").data("path") + "img/parfum/9 (1).png",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Эта туалетная вода представляет собой подлинный эталон стиля в мире парфюмерии для мужчин, став одним из наиболее продаваемых и популярных ароматов в истории. Передавая солнечный свет лета, она вовлекает в романтическое приключение. Элегантный и свежий, удивительно чистый и нежно-чувственный парфюм наделен потрясающей силой очарования и притягательности, отличаясь яркими и сочными цветочно-фруктовыми нотами.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "CLINIQUE",
				name: "HAPPY FOR MEN",
				img: $("body").data("path") + "img/parfum/clinique-happy-men.jpg",
				flag: $("body").data("path") + "img/flag-uk.png",
				description: "Счастье – часть концепции роскошного одеколона для мужчин Happy от американского бренда Clinique. Новый запах – это квинтэссенция ярких эмоций, искренней радости и бесконечного счастья в лаконичном оранжевом флаконе. Одеколон создан для современного мужчины, который ценит каждую минуту, поэтому в его жизни нет места грусти. Он покоряет окружающих своим оптимизмом и заражает их позитивными эмоциями.",
				volume: "100 МЛ",
				country: "Made in UK",
			},
			{
				brand: "CHANEL",
				name: "ALLURE HOMME SPORT",
				img: $("body").data("path") + "img/parfum/10.png",
				flag: $("body").data("path") + "img/flag-france.png",
				description: "Серебристый флакон с черной резиновой крышкой и хромированным стальным кольцом. Жак ЭЛЛЕ черпал вдохновение в спортивной тематике, которая, сочетаясь с роскошью и элегантностью, свойственными CHANEL, делает эту упаковку оригинальной и безусловно мужской.",
				volume: "100 МЛ",
				country: "Made in France",
			},
			{
				brand: "DOLCE&GABBANA",
				name: "LIGHT BLUE POUR HOMME",
				img: $("body").data("path") + "img/parfum/dg-light-blue-ph.jpg",
				flag: $("body").data("path") + "img/flag-uk.png",
				description: "Туалетная вода Dolce&Gabbana Light Blue Pour Homme – свежий и очень глубокий аромат, насыщенный цитрусовыми и древесными нотками. Парфюмерам удалось создать настоящий фейерверк из яркого и по-настоящему летнего настроения в сочетании с холодноватой мужской сдержанностью. Верхние ноты раскрываются бодрым и динамичным соединением спелости сицилийских мандаринов, энергии можжевельника и тонкой прохлады бергамота с едва заметной горчинкой грейпфрута. Сердечный аккорд – изящное и со вкусом подобранное сочетание драгоценных капель смолы бразильского розового дерева с пряным звучанием нот розмарина и перца.",
				volume: "100 МЛ",
				country: "Made in UK",
			},
		]

		function createCard(cardInfo, selector) {
			var card = $(".card__1").clone();

			card.find(".card__flag").attr("src", cardInfo.flag);
			card.find(".card__img").attr("src", cardInfo.img);
			card.find(".card__brand").text(cardInfo.brand);
			card.find(".card__name").text(cardInfo.name);
			card.find(".card__description").text(cardInfo.description);
			card.find(".card__volume span").text(cardInfo.volume);
			card.find(".card__manufactur").text(cardInfo.country);

			card.removeClass("card__1 close");
			$(selector).append(card);
		}

		for ( var i = 0; i < womanParfums.length; i++) {
			createCard(womanParfums[i], ".card__block-woman")
		}

		for ( var i = 0; i < manParfums.length; i++) {
			createCard(manParfums[i], ".card__block-man")
		}

		$(".open__form-btn").click(function() {
			$(this).closest(".card").find(".card__form-block").addClass("active");
		})

		$(".card__form-close").click(function() {
			$(this).closest(".card").find(".card__form-block").removeClass("active");
		})
		
	},

	time: function() {
		Date.prototype.daysInMonth = function () {
			return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
		};
		
		if (!String.prototype.padStart) {
			String.prototype.padStart = function padStart(targetLength, padString) {
				targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
				padString = String((typeof padString !== 'undefined' ? padString : ' '));
				if (this.length > targetLength) {
					return String(this);
				}
				else {
					targetLength = targetLength - this.length;
					if (targetLength > padString.length) {
						padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
					}
					return padString.slice(0, targetLength) + String(this);
				}
			};
		}

		function getDate(plusDays) {
			var today = new Date();
			var dd = String(today.getDate() + plusDays).padStart(2, '0');
			var mm = String(today.getMonth() + 1).padStart(2, '0');
			if (+dd < 0) {
				mm = String(today.getMonth()).padStart(2, '0');
			}
			
			var yyyy = String(today.getFullYear());
			// yyyy = yyyy.substr(yyyy.length - 2);
			var currentDaysInMonth = new Date().daysInMonth()
			if (+dd > currentDaysInMonth) {
				dd = String(dd - currentDaysInMonth).padStart(2, '0');
				mm = String(+mm + 1).padStart(2, "0");
			}
			if (+dd < 0) {
				dd = String(currentDaysInMonth + +dd).padStart(2, '0');
			}
			return dd + "." + mm + "." + yyyy
		}

		// $(".date__1").text(getDate(-5));
    	// $(".date__2").text(getDate(2));

		$(".header__discount span").text(getDate(2));

		// $(".year").text(new Date().getFullYear())
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

