/* Searchable country/dial-code selector for the contact form phone field. */
(function () {
  var COUNTRIES = [
["AD","+376","Andorra","Andorre"],
["AE","+971","United Arab Emirates","Émirats arabes unis"],
["AF","+93","Afghanistan","Afghanistan"],
["AG","+1","Antigua and Barbuda","Antigua-et-Barbuda"],
["AI","+1","Anguilla","Anguilla"],
["AL","+355","Albania","Albanie"],
["AM","+374","Armenia","Arménie"],
["AO","+244","Angola","Angola"],
["AR","+54","Argentina","Argentine"],
["AS","+1","American Samoa","Samoa américaines"],
["AT","+43","Austria","Autriche"],
["AU","+61","Australia","Australie"],
["AW","+297","Aruba","Aruba"],
["AX","+358","Åland Islands","Ahvenanmaa"],
["AZ","+994","Azerbaijan","Azerbaïdjan"],
["BA","+387","Bosnia and Herzegovina","Bosnie-Herzégovine"],
["BB","+1","Barbados","Barbade"],
["BD","+880","Bangladesh","Bangladesh"],
["BE","+32","Belgium","Belgique"],
["BF","+226","Burkina Faso","Burkina Faso"],
["BG","+359","Bulgaria","Bulgarie"],
["BH","+973","Bahrain","Bahreïn"],
["BI","+257","Burundi","Burundi"],
["BJ","+229","Benin","Bénin"],
["BL","+590","Saint Barthélemy","Saint-Barthélemy"],
["BM","+1","Bermuda","Bermudes"],
["BN","+673","Brunei","Brunei"],
["BO","+591","Bolivia","Bolivie"],
["BQ","+599","Caribbean Netherlands","Pays-Bas caribéens"],
["BR","+55","Brazil","Brésil"],
["BS","+1","Bahamas","Bahamas"],
["BT","+975","Bhutan","Bhoutan"],
["BW","+267","Botswana","Botswana"],
["BY","+375","Belarus","Biélorussie"],
["BZ","+501","Belize","Belize"],
["CA","+1","Canada","Canada"],
["CC","+61","Cocos (Keeling) Islands","Îles Cocos"],
["CD","+243","DR Congo","Congo (Rép. dém.)"],
["CF","+236","Central African Republic","République centrafricaine"],
["CG","+242","Congo","Congo"],
["CH","+41","Switzerland","Suisse"],
["CI","+225","Ivory Coast","Côte d'Ivoire"],
["CK","+682","Cook Islands","Îles Cook"],
["CL","+56","Chile","Chili"],
["CM","+237","Cameroon","Cameroun"],
["CN","+86","China","Chine"],
["CO","+57","Colombia","Colombie"],
["CR","+506","Costa Rica","Costa Rica"],
["CU","+53","Cuba","Cuba"],
["CV","+238","Cape Verde","Îles du Cap-Vert"],
["CW","+599","Curaçao","Curaçao"],
["CX","+61","Christmas Island","Île Christmas"],
["CY","+357","Cyprus","Chypre"],
["CZ","+420","Czechia","Tchéquie"],
["DE","+49","Germany","Allemagne"],
["DJ","+253","Djibouti","Djibouti"],
["DK","+45","Denmark","Danemark"],
["DM","+1","Dominica","Dominique"],
["DO","+1","Dominican Republic","République dominicaine"],
["DZ","+213","Algeria","Algérie"],
["EC","+593","Ecuador","Équateur"],
["EE","+372","Estonia","Estonie"],
["EG","+20","Egypt","Égypte"],
["EH","+212","Western Sahara","Sahara Occidental"],
["ER","+291","Eritrea","Érythrée"],
["ES","+34","Spain","Espagne"],
["ET","+251","Ethiopia","Éthiopie"],
["FI","+358","Finland","Finlande"],
["FJ","+679","Fiji","Fidji"],
["FK","+500","Falkland Islands","Îles Malouines"],
["FM","+691","Micronesia","Micronésie"],
["FO","+298","Faroe Islands","Îles Féroé"],
["FR","+33","France","France"],
["GA","+241","Gabon","Gabon"],
["GB","+44","United Kingdom","Royaume-Uni"],
["GD","+1","Grenada","Grenade"],
["GE","+995","Georgia","Géorgie"],
["GF","+594","French Guiana","Guyane"],
["GG","+44","Guernsey","Guernesey"],
["GH","+233","Ghana","Ghana"],
["GI","+350","Gibraltar","Gibraltar"],
["GL","+299","Greenland","Groenland"],
["GM","+220","Gambia","Gambie"],
["GN","+224","Guinea","Guinée"],
["GP","+590","Guadeloupe","Guadeloupe"],
["GQ","+240","Equatorial Guinea","Guinée équatoriale"],
["GR","+30","Greece","Grèce"],
["GT","+502","Guatemala","Guatemala"],
["GU","+1","Guam","Guam"],
["GW","+245","Guinea-Bissau","Guinée-Bissau"],
["GY","+592","Guyana","Guyana"],
["HK","+852","Hong Kong","Hong Kong"],
["HN","+504","Honduras","Honduras"],
["HR","+385","Croatia","Croatie"],
["HT","+509","Haiti","Haïti"],
["HU","+36","Hungary","Hongrie"],
["ID","+62","Indonesia","Indonésie"],
["IE","+353","Ireland","Irlande"],
["IL","+972","Israel","Israël"],
["IM","+44","Isle of Man","Île de Man"],
["IN","+91","India","Inde"],
["IO","+246","British Indian Ocean Territory","Territoire britannique de l'océan Indien"],
["IQ","+964","Iraq","Irak"],
["IR","+98","Iran","Iran"],
["IS","+354","Iceland","Islande"],
["IT","+39","Italy","Italie"],
["JE","+44","Jersey","Jersey"],
["JM","+1","Jamaica","Jamaïque"],
["JO","+962","Jordan","Jordanie"],
["JP","+81","Japan","Japon"],
["KE","+254","Kenya","Kenya"],
["KG","+996","Kyrgyzstan","Kirghizistan"],
["KH","+855","Cambodia","Cambodge"],
["KI","+686","Kiribati","Kiribati"],
["KM","+269","Comoros","Comores"],
["KN","+1","Saint Kitts and Nevis","Saint-Christophe-et-Niévès"],
["KP","+850","North Korea","Corée du Nord"],
["KR","+82","South Korea","Corée du Sud"],
["KW","+965","Kuwait","Koweït"],
["KY","+1","Cayman Islands","Îles Caïmans"],
["KZ","+7","Kazakhstan","Kazakhstan"],
["LA","+856","Laos","Laos"],
["LB","+961","Lebanon","Liban"],
["LC","+1","Saint Lucia","Sainte-Lucie"],
["LI","+423","Liechtenstein","Liechtenstein"],
["LK","+94","Sri Lanka","Sri Lanka"],
["LR","+231","Liberia","Liberia"],
["LS","+266","Lesotho","Lesotho"],
["LT","+370","Lithuania","Lituanie"],
["LU","+352","Luxembourg","Luxembourg"],
["LV","+371","Latvia","Lettonie"],
["LY","+218","Libya","Libye"],
["MA","+212","Morocco","Maroc"],
["MC","+377","Monaco","Monaco"],
["MD","+373","Moldova","Moldavie"],
["ME","+382","Montenegro","Monténégro"],
["MF","+590","Saint Martin","Saint-Martin"],
["MG","+261","Madagascar","Madagascar"],
["MH","+692","Marshall Islands","Îles Marshall"],
["MK","+389","North Macedonia","Macédoine du Nord"],
["ML","+223","Mali","Mali"],
["MM","+95","Myanmar","Birmanie"],
["MN","+976","Mongolia","Mongolie"],
["MO","+853","Macau","Macao"],
["MP","+1","Northern Mariana Islands","Îles Mariannes du Nord"],
["MQ","+596","Martinique","Martinique"],
["MR","+222","Mauritania","Mauritanie"],
["MS","+1","Montserrat","Montserrat"],
["MT","+356","Malta","Malte"],
["MU","+230","Mauritius","Île Maurice"],
["MV","+960","Maldives","Maldives"],
["MW","+265","Malawi","Malawi"],
["MX","+52","Mexico","Mexique"],
["MY","+60","Malaysia","Malaisie"],
["MZ","+258","Mozambique","Mozambique"],
["NA","+264","Namibia","Namibie"],
["NC","+687","New Caledonia","Nouvelle-Calédonie"],
["NE","+227","Niger","Niger"],
["NF","+672","Norfolk Island","Île Norfolk"],
["NG","+234","Nigeria","Nigéria"],
["NI","+505","Nicaragua","Nicaragua"],
["NL","+31","Netherlands","Pays-Bas"],
["NO","+47","Norway","Norvège"],
["NP","+977","Nepal","Népal"],
["NR","+674","Nauru","Nauru"],
["NU","+683","Niue","Niue"],
["NZ","+64","New Zealand","Nouvelle-Zélande"],
["OM","+968","Oman","Oman"],
["PA","+507","Panama","Panama"],
["PE","+51","Peru","Pérou"],
["PF","+689","French Polynesia","Polynésie française"],
["PG","+675","Papua New Guinea","Papouasie-Nouvelle-Guinée"],
["PH","+63","Philippines","Philippines"],
["PK","+92","Pakistan","Pakistan"],
["PL","+48","Poland","Pologne"],
["PM","+508","Saint Pierre and Miquelon","Saint-Pierre-et-Miquelon"],
["PN","+64","Pitcairn Islands","Îles Pitcairn"],
["PR","+1","Puerto Rico","Porto Rico"],
["PS","+970","Palestine","Palestine"],
["PT","+351","Portugal","Portugal"],
["PW","+680","Palau","Palaos (Palau)"],
["PY","+595","Paraguay","Paraguay"],
["QA","+974","Qatar","Qatar"],
["RE","+262","Réunion","Réunion"],
["RO","+40","Romania","Roumanie"],
["RS","+381","Serbia","Serbie"],
["RU","+7","Russia","Russie"],
["RW","+250","Rwanda","Rwanda"],
["SA","+966","Saudi Arabia","Arabie Saoudite"],
["SB","+677","Solomon Islands","Îles Salomon"],
["SC","+248","Seychelles","Seychelles"],
["SD","+249","Sudan","Soudan"],
["SE","+46","Sweden","Suède"],
["SG","+65","Singapore","Singapour"],
["SH","+290","Saint Helena, Ascension and Tristan da Cunha","Sainte-Hélène, Ascension et Tristan da Cunha"],
["SI","+386","Slovenia","Slovénie"],
["SJ","+47","Svalbard and Jan Mayen","Svalbard et Jan Mayen"],
["SK","+421","Slovakia","Slovaquie"],
["SL","+232","Sierra Leone","Sierra Leone"],
["SM","+378","San Marino","Saint-Marin"],
["SN","+221","Senegal","Sénégal"],
["SO","+252","Somalia","Somalie"],
["SR","+597","Suriname","Surinam"],
["SS","+211","South Sudan","Soudan du Sud"],
["ST","+239","São Tomé and Príncipe","São Tomé et Príncipe"],
["SV","+503","El Salvador","Salvador"],
["SX","+1","Sint Maarten","Saint-Martin"],
["SY","+963","Syria","Syrie"],
["SZ","+268","Eswatini","Eswatini"],
["TC","+1","Turks and Caicos Islands","Îles Turques-et-Caïques"],
["TD","+235","Chad","Tchad"],
["TG","+228","Togo","Togo"],
["TH","+66","Thailand","Thaïlande"],
["TJ","+992","Tajikistan","Tadjikistan"],
["TK","+690","Tokelau","Tokelau"],
["TL","+670","Timor-Leste","Timor oriental"],
["TM","+993","Turkmenistan","Turkménistan"],
["TN","+216","Tunisia","Tunisie"],
["TO","+676","Tonga","Tonga"],
["TR","+90","Türkiye","Turquie"],
["TT","+1","Trinidad and Tobago","Trinité-et-Tobago"],
["TV","+688","Tuvalu","Tuvalu"],
["TW","+886","Taiwan","Taïwan"],
["TZ","+255","Tanzania","Tanzanie"],
["UA","+380","Ukraine","Ukraine"],
["UG","+256","Uganda","Ouganda"],
["US","+1","United States","États-Unis"],
["UY","+598","Uruguay","Uruguay"],
["UZ","+998","Uzbekistan","Ouzbékistan"],
["VA","+379","Vatican City","Cité du Vatican"],
["VC","+1","Saint Vincent and the Grenadines","Saint-Vincent-et-les-Grenadines"],
["VE","+58","Venezuela","Venezuela"],
["VG","+1","British Virgin Islands","Îles Vierges britanniques"],
["VI","+1","United States Virgin Islands","Îles Vierges des États-Unis"],
["VN","+84","Vietnam","Viêt Nam"],
["VU","+678","Vanuatu","Vanuatu"],
["WF","+681","Wallis and Futuna","Wallis-et-Futuna"],
["WS","+685","Samoa","Samoa"],
["XK","+383","Kosovo","Kosovo"],
["YE","+967","Yemen","Yémen"],
["YT","+262","Mayotte","Mayotte"],
["ZA","+27","South Africa","Afrique du Sud"],
["ZM","+260","Zambia","Zambie"],
["ZW","+263","Zimbabwe","Zimbabwe"]
  ];

  var STRINGS = {
    fr: { placeholder: 'Rechercher un pays…', empty: 'Aucun pays trouvé', label: 'Indicatif téléphonique' },
    en: { placeholder: 'Search for a country…', empty: 'No country found', label: 'Phone country code' }
  };

  function flagEmoji(iso2) {
    var codePoints = iso2.toUpperCase().split('').map(function (c) {
      return 127397 + c.charCodeAt(0);
    });
    return String.fromCodePoint.apply(String, codePoints);
  }

  function normalize(s) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function init(root) {
    var lang = (document.documentElement.lang || 'fr').slice(0, 2) === 'en' ? 'en' : 'fr';
    var strings = STRINGS[lang];
    var nameIndex = lang === 'en' ? 2 : 3;

    var entries = COUNTRIES.map(function (c) {
      return { iso2: c[0], dial: c[1], name: c[nameIndex] };
    }).sort(function (a, b) { return normalize(a.name) < normalize(b.name) ? -1 : 1; });

    var toggle = root.querySelector('[data-country-toggle]');
    var flagEl = root.querySelector('[data-country-flag]');
    var codeEl = root.querySelector('[data-country-code]');
    var valueInput = root.querySelector('[data-country-value]');
    var panel = root.querySelector('[data-country-panel]');
    var search = root.querySelector('[data-country-search]');
    var list = root.querySelector('[data-country-list]');

    search.placeholder = strings.placeholder;
    toggle.setAttribute('aria-label', strings.label);

    var activeIndex = -1;
    var visible = entries;

    function render(filtered) {
      visible = filtered;
      list.innerHTML = '';
      activeIndex = -1;
      if (!filtered.length) {
        var empty = document.createElement('li');
        empty.className = 'country-empty';
        empty.textContent = strings.empty;
        list.appendChild(empty);
        return;
      }
      filtered.forEach(function (c, i) {
        var li = document.createElement('li');
        li.setAttribute('role', 'option');
        li.id = 'country-opt-' + root.dataset.instance + '-' + i;
        li.dataset.iso2 = c.iso2;
        li.dataset.dial = c.dial;
        li.innerHTML =
          '<span class="country-flag">' + flagEmoji(c.iso2) + '</span>' +
          '<span class="country-name"></span>' +
          '<span class="country-dial">' + c.dial + '</span>';
        li.querySelector('.country-name').textContent = c.name;
        li.addEventListener('click', function () { select(c); });
        list.appendChild(li);
      });
    }

    function setActive(index) {
      var items = list.querySelectorAll('li[role="option"]');
      items.forEach(function (li) { li.classList.remove('active'); });
      if (index >= 0 && index < items.length) {
        items[index].classList.add('active');
        search.setAttribute('aria-activedescendant', items[index].id);
        items[index].scrollIntoView({ block: 'nearest' });
      } else {
        search.removeAttribute('aria-activedescendant');
      }
      activeIndex = index;
    }

    function select(c) {
      valueInput.value = c.dial;
      flagEl.textContent = flagEmoji(c.iso2);
      codeEl.textContent = c.dial;
      close();
      var phoneInput = root.parentElement.querySelector('input[type="tel"]');
      if (phoneInput) phoneInput.focus();
    }

    function open() {
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      search.value = '';
      render(entries);
      search.focus();
    }

    function close() {
      panel.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function () {
      if (panel.hidden) open(); else close();
    });

    search.addEventListener('input', function () {
      var q = normalize(search.value.trim());
      if (!q) { render(entries); return; }
      var qDigits = q.replace(/[^0-9]/g, '');
      render(entries.filter(function (c) {
        if (normalize(c.name).indexOf(q) !== -1) return true;
        if (qDigits && c.dial.replace('+', '').indexOf(qDigits) === 0) return true;
        return false;
      }));
    });

    search.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive(Math.min(activeIndex + 1, visible.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive(Math.max(activeIndex - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeIndex >= 0 && visible[activeIndex]) select(visible[activeIndex]);
      } else if (e.key === 'Escape') {
        close();
        toggle.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (!root.contains(e.target)) close();
    });
  }

  function boot() {
    var roots = document.querySelectorAll('[data-country-select]');
    roots.forEach(function (root, i) {
      root.dataset.instance = String(i);
      init(root);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
