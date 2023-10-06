import { Nunito } from "next/font/google";
import moment from "moment";

export const DisplayCurrency = (selected) => {
  switch (selected) {
    case "USD":
      return "USD 🇺🇸";
    case "AFN":
      return "AFN 🇦🇫";
    case "ALL":
      return "ALL 🇦🇱";
    case "DZD":
      return "DZD 🇩🇿";
    case "AOA":
      return "AOA 🇦🇴";
    case "ARS":
      return "ARS 🇦🇷";
    case "AMD":
      return "AMD 🇦🇲";
    case "AWG":
      return "AWG 🇦🇼";
    case "AUD":
      return "AUD 🇦🇺";
    case "AZN":
      return "AZN 🇦🇿";
    case "BSD":
      return "BSD 🇧🇸";
    case "BHD":
      return "BHD 🇧🇭";
    case "BDT":
      return "BDT 🇧🇩";
    case "BBD":
      return "BBD 🇧🇧";
    case "BYR":
      return "BYR 🇧🇾";
    case "BEF":
      return "BEF 🇧🇪";
    case "BZD":
      return "BZD 🇧🇿";
    case "BMD":
      return "BMD 🇧🇲";
    case "BTN":
      return "BTN 🇧🇹";
    case "BTC":
      return "BTC";
    case "BOB":
      return "BOB 🇧🇴";
    case "BAM":
      return "BAM 🇧🇦";
    case "BWP":
      return "BWP 🇧🇼";
    case "BRL":
      return "BRL 🇧🇷";
    case "GBP":
      return "GBP Sterling 🇬🇧";
    case "BND":
      return "BND 🇧🇳";
    case "BGN":
      return "BGN 🇧🇬";
    case "BIF":
      return "BIF 🇧🇮";
    case "KHR":
      return "KHR 🇰🇭";
    case "CAD":
      return "CAD 🇨🇦";
    case "CVE":
      return "CVE Escudo 🇨🇻";
    case "KYD":
      return "KYD Dollar 🇰🇾";
    case "XOF":
      return "XOF BCEAO 🇧🇫";
    case "XAF":
      return "XAF BEAC 🇨🇲";
    case "XPF":
      return "XPF 🇨🇵";
    case "CLP":
      return "CLP 🇨🇱";
    case "CNY":
      return "CNY 🇨🇳";
    case "COP":
      return "COP 🇨🇴";
    case "KMF":
      return "KMF 🇰🇲";
    case "CDF":
      return "CDF 🇨🇩";
    case "CRC":
      return "CRC 🇨🇷";
    case "HRK":
      return "HRK 🇭🇷";
    case "CUC":
      return "CUC 🇨🇺";
    case "CZK":
      return "CZK 🇨🇿";
    case "DKK":
      return "DKK 🇩🇰";
    case "DJF":
      return "DJF 🇩🇯";
    case "DOP":
      return "DOP 🇩🇴";
    case "XCD":
      return "XCD 🇦🇮";
    case "EGP":
      return "EGP 🇪🇬";
    case "ERN":
      return "ERN 🇪🇷";
    case "EEK":
      return "EEK 🇪🇪";
    case "ETB":
      return "ETB 🇪🇹";
    case "EUR":
      return "EUR";
    case "FKP":
      return "FKP 🇫🇰";
    case "FJD":
      return "FJD 🇫🇯";
    case "GMD":
      return "GMD 🇬🇲";
    case "GEL":
      return "GEL 🇬🇪";
    case "DEM":
      return "DEM 🇩🇪";
    case "GHS":
      return "GHS 🇬🇭";
    case "GIP":
      return "GIP 🇬🇮";
    case "GRD":
      return "GRD 🇬🇷";
    case "GTQ":
      return "GTQ 🇬🇹";
    case "GNF":
      return "GNF 🇬🇳";
    case "GYD":
      return "GYD 🇬🇾";
    case "HTG":
      return "HTG 🇭🇹";
    case "HNL":
      return "HNL 🇭🇳";
    case "HKD":
      return "HKD 🇭🇰";
    case "HUF":
      return "HUF 🇭🇺";
    case "ISK":
      return "ISK 🇮🇸";
    case "INR":
      return "INR 🇮🇳";
    case "IDR":
      return "IDR 🇮🇩";
    case "IRR":
      return "IRR 🇮🇷";
    case "IQD":
      return "IQD 🇮🇶";
    case "ILS":
      return "ILS 🇮🇱";
    case "ITL":
      return "ITL 🇮🇹";
    case "JMD":
      return "JMD 🇯🇲";
    case "JPY":
      return "JPY 🇯🇵";
    case "JOD":
      return "JOD 🇯🇴";
    case "KZT":
      return "KZT 🇰🇿";
    case "KES":
      return "KES 🇰🇪";
    case "KWD":
      return "KWD 🇰🇼";
    case "KGS":
      return "KGS 🇰🇬";
    case "LAK":
      return "LAK 🇱🇦";
    case "LVL":
      return "LVL 🇱🇻";
    case "LBP":
      return "LBP 🇱🇧";
    case "LSL":
      return "LSL 🇱🇸";
    case "LRD":
      return "LRD 🇱🇷";
    case "LYD":
      return "LYD 🇱🇾";
    case "LTL":
      return "LTL 🇱🇹";
    case "MOP":
      return "MOP 🇲🇴";
    case "MKD":
      return "MKD 🇲🇰";
    case "MGA":
      return "MGA 🇲🇬";
    case "MWK":
      return "MWK 🇲🇼";
    case "MYR":
      return "MYR 🇲🇾";
    case "MVR":
      return "MVR 🇲🇻";
    case "MRO":
      return "MRO 🇲🇷";
    case "MUR":
      return "MUR 🇲🇺";
    case "MXN":
      return "MXN 🇲🇽";
    case "MDL":
      return "MDL 🇲🇩";
    case "MNT":
      return "MNT 🇲🇳";
    case "MAD":
      return "MAD 🇲🇦";
    case "MZM":
      return "MZM 🇲🇿";
    case "MMK":
      return "MMK 🇲🇲";
    case "NAD":
      return "NAD 🇳🇦";
    case "NPR":
      return "NPR 🇳🇵";
    case "ANG":
      return "ANG 🇳🇱";
    case "TWD":
      return "TWD 🇹🇼";
    case "NZD":
      return "NZD 🇳🇿";
    case "NIO":
      return "NIO 🇳🇮";
    case "NGN":
      return "NGN 🇳🇬";
    case "KPW":
      return "KPW 🇰🇵";
    case "NOK":
      return "NOK 🇳🇴";
    case "OMR":
      return "OMR 🇴🇲";
    case "PKR":
      return "PKR 🇵🇰";
    case "PAB":
      return "PAB 🇵🇦";
    case "PGK":
      return "PGK 🇵🇬";
    case "PYG":
      return "PYG 🇵🇾";
    case "PEN":
      return "PEN 🇵🇪";
    case "PHP":
      return "PHP 🇵🇭";
    case "PLN":
      return "PLN 🇵🇱";
    case "QAR":
      return "QAR 🇶🇦";
    case "RON":
      return "RON 🇷🇴";
    case "RUB":
      return "RUB 🇷🇺";
    case "RWF":
      return "RWF 🇷🇼";
    case "SVC":
      return "SVC 🇸🇻";
    case "WST":
      return "WST 🇼🇸";
    case "SAR":
      return "SAR 🇸🇦";
    case "RSD":
      return "RSD 🇷🇸";
    case "SCR":
      return "SCR 🇸🇨";
    case "SLL":
      return "SLL 🇸🇱";
    case "SGD":
      return "SGD 🇸🇬";
    case "SKK":
      return "SKK 🇸🇰";
    case "SBD":
      return "SBD 🇸🇧";
    case "SOS":
      return "SOS 🇸🇴";
    case "ZAR":
      return "ZAR 🇿🇦";
    case "KRW":
      return "KRW 🇰🇷";
    case "XDR":
      return "XDR 🌍";
    case "LKR":
      return "LKR 🇱🇰";
    case "SHP":
      return "SHP 🇸🇭";
    case "SDG":
      return "SDG 🇸🇩";
    case "SRD":
      return "SRD 🇸🇷";
    case "SZL":
      return "SZL 🇸🇿";
    case "SEK":
      return "SEK 🇸🇪";
    case "CHF":
      return "CHF 🇨🇭";
    case "SYP":
      return "SYP 🇸🇾";
    case "STD":
      return "STD 🇸🇹";
    case "TJS":
      return "TJS 🇹🇯";
    case "TZS":
      return "TZS 🇹🇿";
    case "THB":
      return "THB 🇹🇭";
    case "TOP":
      return "TOP 🇹🇴";
    case "TTD":
      return "TTD 🇹🇹";
    case "TND":
      return "TND 🇹🇳";
    case "TRY":
      return "TRY 🇹🇷";
    case "TMT":
      return "TMT 🇹🇲";
    case "UGX":
      return "UGX 🇺🇬";
    case "UAH":
      return "UAH 🇺🇦";
    case "AED":
      return "AED 🇦🇪";
    case "UYU":
      return "UYU 🇺🇾";
    case "USD":
      return "USD 🇺🇸";
    case "UZS":
      return "UZS 🇺🇿";
    case "VUV":
      return "VUV 🇻🇺";
    case "VEF":
      return "VEF 🇻🇪";
    case "VND":
      return "VND 🇻🇳";
    case "YER":
      return "YER 🇾🇪";
    case "ZMK":
      return "ZMK 🇿🇲";
    default:
      return selected;
  }
};

export const DisplayType = (type) => {
  switch (type) {
    case "Food":
      return "Food 🍲";
    case "Accommodation":
      return "Accommodation 🏠";
    case "Transportation":
      return "Transportation 🚂";
    case "Entertainment":
      return "Entertainment 🍿";
    case "Utilities":
      return "Utilities 💡";
    case "Internet":
      return "Internet 🌐";
    case "Others":
      return "Others 🧳";
    case "Salary":
      return "Salary 🧑‍💻";
    case "Cash":
      return "Cash 💵";
    case "Royalties":
      return "Royalties 👑";
    case "Interests":
      return "Interests 📈";
    case "MRR":
      return "MRR 🍜";
    case "Buy & Sell":
      return "Buy & Sell 🛍️";
    case "Investment Funds":
      return "Investment Funds 🏦";
    case "Others":
      return "Others 🧳";
    default:
      return type;
  }
};

export const CurrencyExpenseSelect = ({ setSelectedCurrency, selectedCurrency }) => {
  const handleChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <select
      className="form-select block bg-grey-100 w-full"
      id="currency"
      name="currency"
      value={selectedCurrency}
      onChange={handleChange}
    >
      <option value="">Select One</option>
      <option value="USD">USD - US Dollar 🇺🇸</option>
      <option value="AFN">AFN - Afghan Afghani 🇦🇫</option>
      <option value="ALL">ALL - Albanian Lek 🇦🇱</option>
      <option value="DZD">DZD - Algerian Dinar 🇩🇿</option>
      <option value="AOA">AOA - Angolan Kwanza 🇦🇴</option>
      <option value="ARS">ARS - Argentine Peso 🇦🇷</option>
      <option value="AMD">AMD - Armenian Dram 🇦🇲</option>
      <option value="AWG">AWG - Aruban Florin 🇦🇼</option>
      <option value="AUD">AUD - Australian Dollar 🇦🇺</option>
      <option value="AZN">AZN - Azerbaijani Manat 🇦🇿</option>
      <option value="BSD">BSD - Bahamian Dollar 🇧🇸</option>
      <option value="BHD">BHD - Bahraini Dinar 🇧🇭</option>
      <option value="BDT">BDT - Bangladeshi Taka 🇧🇩</option>
      <option value="BBD">BBD - Barbadian Dollar 🇧🇧</option>
      <option value="BYR">BYR - Belarusian Ruble 🇧🇾</option>
      <option value="BEF">BEF - Belgian Franc 🇧🇪</option>
      <option value="BZD">BZD - Belize Dollar 🇧🇿</option>
      <option value="BMD">BMD - Bermudan Dollar 🇧🇲</option>
      <option value="BTN">BTN - Bhutanese Ngultrum 🇧🇹</option>
      <option value="BTC">BTC - Bitcoin ₿</option>
      <option value="BOB">BOB - Bolivian Boliviano 🇧🇴</option>
      <option value="BAM">BAM - Bosnia-Herzegovina Convertible Mark 🇧🇦</option>
      <option value="BWP">BWP - Botswanan Pula 🇧🇼</option>
      <option value="BRL">BRL - Brazilian Real 🇧🇷</option>
      <option value="GBP">GBP - British Pound Sterling 🇬🇧</option>
      <option value="BND">BND - Brunei Dollar 🇧🇳</option>
      <option value="BGN">BGN - Bulgarian Lev 🇧🇬</option>
      <option value="BIF">BIF - Burundian Franc 🇧🇮</option>
      <option value="KHR">KHR - Cambodian Riel 🇰🇭</option>
      <option value="CAD">CAD - Canadian Dollar 🇨🇦</option>
      <option value="CVE">CVE - Cape Verdean Escudo 🇨🇻</option>
      <option value="KYD">KYD - Cayman Islands Dollar 🇰🇾</option>
      <option value="XOF">XOF - CFA Franc BCEAO 🇧🇫</option>
      <option value="XAF">XAF - CFA Franc BEAC 🇨🇲</option>
      <option value="XPF">XPF - CFP Franc 🇨🇵</option>
      <option value="CLP">CLP - Chilean Peso 🇨🇱</option>
      <option value="CNY">CNY - Chinese Yuan 🇨🇳</option>
      <option value="COP">COP - Colombian Peso 🇨🇴</option>
      <option value="KMF">KMF - Comorian Franc 🇰🇲</option>
      <option value="CDF">CDF - Congolese Franc 🇨🇩</option>
      <option value="CRC">CRC - Costa Rican Colón 🇨🇷</option>
      <option value="HRK">HRK - Croatian Kuna 🇭🇷</option>
      <option value="CUC">CUC - Cuban Convertible Peso 🇨🇺</option>
      <option value="CZK">CZK - Czech Republic Koruna 🇨🇿</option>
      <option value="DKK">DKK - Danish Krone 🇩🇰</option>
      <option value="DJF">DJF - Djiboutian Franc 🇩🇯</option>
      <option value="DOP">DOP - Dominican Peso 🇩🇴</option>
      <option value="XCD">XCD - East Caribbean Dollar 🇦🇮</option>
      <option value="EGP">EGP - Egyptian Pound 🇪🇬</option>
      <option value="ERN">ERN - Eritrean Nakfa 🇪🇷</option>
      <option value="EEK">EEK - Estonian Kroon 🇪🇪</option>
      <option value="ETB">ETB - Ethiopian Birr 🇪🇹</option>
      <option value="EUR">EUR - Euro 🇪🇺</option>
      <option value="FKP">FKP - Falkland Islands Pound 🇫🇰</option>
      <option value="FJD">FJD - Fijian Dollar 🇫🇯</option>
      <option value="GMD">GMD - Gambian Dalasi 🇬🇲</option>
      <option value="GEL">GEL - Georgian Lari 🇬🇪</option>
      <option value="DEM">DEM - German Mark 🇩🇪</option>
      <option value="GHS">GHS - Ghanaian Cedi 🇬🇭</option>
      <option value="GIP">GIP - Gibraltar Pound 🇬🇮</option>
      <option value="GRD">GRD - Greek Drachma 🇬🇷</option>
      <option value="GTQ">GTQ - Guatemalan Quetzal 🇬🇹</option>
      <option value="GNF">GNF - Guinean Franc 🇬🇳</option>
      <option value="GYD">GYD - Guyanaese Dollar 🇬🇾</option>
      <option value="HTG">HTG - Haitian Gourde 🇭🇹</option>
      <option value="HNL">HNL - Honduran Lempira 🇭🇳</option>
      <option value="HKD">HKD - Hong Kong Dollar 🇭🇰</option>
      <option value="HUF">HUF - Hungarian Forint 🇭🇺</option>
      <option value="ISK">ISK - Icelandic Króna 🇮🇸</option>
      <option value="INR">INR - Indian Rupee 🇮🇳</option>
      <option value="IDR">IDR - Indonesian Rupiah 🇮🇩</option>
      <option value="IRR">IRR - Iranian Rial 🇮🇷</option>
      <option value="IQD">IQD - Iraqi Dinar 🇮🇶</option>
      <option value="ILS">ILS - Israeli New Sheqel 🇮🇱</option>
      <option value="ITL">ITL - Italian Lira 🇮🇹</option>
      <option value="JMD">JMD - Jamaican Dollar 🇯🇲</option>
      <option value="JPY">JPY - Japanese Yen 🇯🇵</option>
      <option value="JOD">JOD - Jordanian Dinar 🇯🇴</option>
      <option value="KZT">KZT - Kazakhstani Tenge 🇰🇿</option>
      <option value="KES">KES - Kenyan Shilling 🇰🇪</option>
      <option value="KWD">KWD - Kuwaiti Dinar 🇰🇼</option>
      <option value="KGS">KGS - Kyrgystani Som 🇰🇬</option>
      <option value="LAK">LAK - Laotian Kip 🇱🇦</option>
      <option value="LVL">LVL - Latvian Lats 🇱🇻</option>
      <option value="LBP">LBP - Lebanese Pound 🇱🇧</option>
      <option value="LSL">LSL - Lesotho Loti 🇱🇸</option>
      <option value="LRD">LRD - Liberian Dollar 🇱🇷</option>
      <option value="LYD">LYD - Libyan Dinar 🇱🇾</option>
      <option value="LTL">LTL - Lithuanian Litas 🇱🇹</option>
      <option value="MOP">MOP - Macanese Pataca 🇲🇴</option>
      <option value="MKD">MKD - Macedonian Denar 🇲🇰</option>
      <option value="MGA">MGA - Malagasy Ariary 🇲🇬</option>
      <option value="MWK">MWK - Malawian Kwacha 🇲🇼</option>
      <option value="MYR">MYR - Malaysian Ringgit 🇲🇾</option>
      <option value="MVR">MVR - Maldivian Rufiyaa 🇲🇻</option>
      <option value="MRO">MRO - Mauritanian Ouguiya 🇲🇷</option>
      <option value="MUR">MUR - Mauritian Rupee 🇲🇺</option>
      <option value="MXN">MXN - Mexican Peso 🇲🇽</option>
      <option value="MDL">MDL - Moldovan Leu 🇲🇩</option>
      <option value="MNT">MNT - Mongolian Tugrik 🇲🇳</option>
      <option value="MAD">MAD - Moroccan Dirham 🇲🇦</option>
      <option value="MZM">MZM - Mozambican Metical 🇲🇿</option>
      <option value="MMK">MMK - Myanmar Kyat 🇲🇲</option>
      <option value="NAD">NAD - Namibian Dollar 🇳🇦</option>
      <option value="NPR">NPR - Nepalese Rupee 🇳🇵</option>
      <option value="ANG">ANG - Netherlands Guilder 🇳🇱</option>
      <option value="TWD">TWD - New Taiwan Dollar 🇹🇼</option>
      <option value="NZD">NZD - New Zealand Dollar 🇳🇿</option>
      <option value="NIO">NIO - Nicaraguan Córdoba 🇳🇮</option>
      <option value="NGN">NGN - Nigerian Naira 🇳🇬</option>
      <option value="KPW">KPW - North Korean Won 🇰🇵</option>
      <option value="NOK">NOK - Norwegian Krone 🇳🇴</option>
      <option value="OMR">OMR - Omani Rial 🇴🇲</option>
      <option value="PKR">PKR - Pakistani Rupee 🇵🇰</option>
      <option value="PAB">PAB - Panamanian Balboa 🇵🇦</option>
      <option value="PGK">PGK - Papua New Guinean Kina 🇵🇬</option>
      <option value="PYG">PYG - Paraguayan Guarani 🇵🇾</option>
      <option value="PEN">PEN - Peruvian Nuevo Sol 🇵🇪</option>
      <option value="PHP">PHP - Philippine Peso 🇵🇭</option>
      <option value="PLN">PLN - Polish Złoty 🇵🇱</option>
      <option value="QAR">QAR - Qatari Rial 🇶🇦</option>
      <option value="RON">RON - Romanian Leu 🇷🇴</option>
      <option value="RUB">RUB - Russian Ruble 🇷🇺</option>
      <option value="RWF">RWF - Rwandan Franc 🇷🇼</option>
      <option value="SVC">SVC - Salvadoran Colón 🇸🇻</option>
      <option value="WST">WST - Samoan Tala 🇼🇸</option>
      <option value="SAR">SAR - Saudi Riyal 🇸🇦</option>
      <option value="RSD">RSD - Serbian Dinar 🇷🇸</option>
      <option value="SCR">SCR - Seychellois Rupee 🇸🇨</option>
      <option value="SLL">SLL - Sierra Leonean Leone 🇸🇱</option>
      <option value="SGD">SGD - Singapore Dollar 🇸🇬</option>
      <option value="SKK">SKK - Slovak Koruna 🇸🇰</option>
      <option value="SBD">SBD - Solomon Islands Dollar 🇸🇧</option>
      <option value="SOS">SOS - Somali Shilling 🇸🇴</option>
      <option value="ZAR">ZAR - South African Rand 🇿🇦</option>
      <option value="KRW">KRW - South Korean Won 🇰🇷</option>
      <option value="XDR">XDR - Special Drawing Rights 🌍</option>
      <option value="LKR">LKR - Sri Lankan Rupee 🇱🇰</option>
      <option value="SHP">SHP - St. Helena Pound 🇸🇭</option>
      <option value="SDG">SDG - Sudanese Pound 🇸🇩</option>
      <option value="SRD">SRD - Surinamese Dollar 🇸🇷</option>
      <option value="SZL">SZL - Swazi Lilangeni 🇸🇿</option>
      <option value="SEK">SEK - Swedish Krona 🇸🇪</option>
      <option value="CHF">CHF - Swiss Franc 🇨🇭</option>
      <option value="SYP">SYP - Syrian Pound 🇸🇾</option>
      <option value="STD">STD - São Tomé and Príncipe Dobra 🇸🇹</option>
      <option value="TJS">TJS - Tajikistani Somoni 🇹🇯</option>
      <option value="TZS">TZS - Tanzanian Shilling 🇹🇿</option>
      <option value="THB">THB - Thai Baht 🇹🇭</option>
      <option value="TOP">TOP - Tongan pa&apos;anga 🇹🇴</option>
      <option value="TTD">TTD - Trinidad & Tobago Dollar 🇹🇹</option>
      <option value="TND">TND - Tunisian Dinar 🇹🇳</option>
      <option value="TRY">TRY - Turkish Lira 🇹🇷</option>
      <option value="TMT">TMT - Turkmenistani Manat 🇹🇲</option>
      <option value="UGX">UGX - Ugandan Shilling 🇺🇬</option>
      <option value="UAH">UAH - Ukrainian Hryvnia 🇺🇦</option>
      <option value="AED">AED - United Arab Emirates Dirham 🇦🇪</option>
      <option value="UYU">UYU - Uruguayan Peso 🇺🇾</option>
      <option value="USD">USD - US Dollar 🇺🇸</option>
      <option value="UZS">UZS - Uzbekistani Som 🇺🇿</option>
      <option value="VUV">VUV - Vanuatu Vatu 🇻🇺</option>
      <option value="VEF">VEF - Venezuelan Bolívar 🇻🇪</option>
      <option value="VND">VND - Vietnamese Dong 🇻🇳</option>
      <option value="YER">YER - Yemeni Rial 🇾🇪</option>
      <option value="ZMK">ZMK - Zambian Kwacha 🇿🇲</option>
    </select>
  );
};

export function FormatDateFromLongFormat(timestamp) {
  const date = new Date(timestamp * 1000);

  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();

  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  return `${month} ${day}, ${year} (${hours}:${minutes})`;
}

export const FormatDateDisplay = (rawDateString) => {
  const parsedDate = moment(rawDateString, "DD/MM/YYYY, HH:mm:ss");
  const formattedDate = parsedDate.format("MMM D, YYYY hh:mm A");
  return formattedDate;
};

export const FormatAsCurrency = (input, currency) => {
  if (typeof input !== "string") {
    return "";
  }
  const number = parseFloat(input);
  if (isNaN(number)) {
    return "";
  }
  return number.toLocaleString("en-US", { style: "currency", currency: currency });
};

export const SortByDateDescending = (arr) => {
  if (!arr || arr === undefined) {
    return;
  }
  // Convert dateAdded strings to date objects using Moment.js
  arr.forEach((obj) => {
    obj.dateAdded = moment(obj.dateAdded, "DD/MM/YYYY, HH:mm:ss").toDate();
  });

  // Sort the array in descending order by dateAdded
  arr.sort((a, b) => b.dateAdded - a.dateAdded);

  return arr;
};

export const CategoryStyle = (category) => {
  if (category === "Expense") {
    return "text-red-600";
  } else {
    return "text-green-600";
  }
};
