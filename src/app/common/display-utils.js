"use client";

import moment from "moment";

export const DisplayCurrency = (selected) => {
  if (isWindows()) {
    return selected;
  }
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
  if (isWindows()) {
    return type;
  }
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

export const CurrencyExpenseSelect = ({ setSelectedCurrency, selectedCurrency, shortForm, onChange }) => {
  const handleChange = (event) => {
    setSelectedCurrency(event.target.value);
    onChange();
  };

  return (
    <select
      className="form-select block bg-grey-100 w-full h-full"
      id="currency"
      name="currency"
      value={selectedCurrency}
      onChange={handleChange}
    >
      {shortForm ? (
        <>
          {" "}
          <option value="USD">USD 🇺🇸</option>
          <option value="AFN">AFN 🇦🇫</option>
          <option value="ALL">ALL 🇦🇱</option>
          <option value="DZD">DZD 🇩🇿</option>
          <option value="AOA">AOA 🇦🇴</option>
          <option value="ARS">ARS 🇦🇷</option>
          <option value="AMD">AMD 🇦🇲</option>
          <option value="AWG">AWG 🇦🇼</option>
          <option value="AUD">AUD 🇦🇺</option>
          <option value="AZN">AZN 🇦🇿</option>
          <option value="BSD">BSD 🇧🇸</option>
          <option value="BHD">BHD 🇧🇭</option>
          <option value="BDT">BDT 🇧🇩</option>
          <option value="BBD">BBD 🇧🇧</option>
          <option value="BYR">BYR 🇧🇾</option>
          <option value="BEF">BEF 🇧🇪</option>
          <option value="BZD">BZD 🇧🇿</option>
          <option value="BMD">BMD 🇧🇲</option>
          <option value="BTN">BTN 🇧🇹</option>
          <option value="BOB">BOB 🇧🇴</option>
          <option value="BAM">BAM 🇧🇦</option>
          <option value="BWP">BWP 🇧🇼</option>
          <option value="BRL">BRL 🇧🇷</option>
          <option value="GBP">GBP 🇬🇧</option>
          <option value="BND">BND 🇧🇳</option>
          <option value="BGN">BGN 🇧🇬</option>
          <option value="BIF">BIF 🇧🇮</option>
          <option value="KHR">KHR 🇰🇭</option>
          <option value="CAD">CAD 🇨🇦</option>
          <option value="CVE">CVE 🇨🇻</option>
          <option value="KYD">KYD 🇰🇾</option>
          <option value="XOF">XOF 🇧🇫</option>
          <option value="XAF">XAF 🇨🇲</option>
          <option value="XPF">XPF 🇨🇵</option>
          <option value="CLP">CLP 🇨🇱</option>
          <option value="CNY">CNY 🇨🇳</option>
          <option value="COP">COP 🇨🇴</option>
          <option value="KMF">KMF 🇰🇲</option>
          <option value="CDF">CDF 🇨🇩</option>
          <option value="CRC">CRC 🇨🇷</option>
          <option value="HRK">HRK 🇭🇷</option>
          <option value="CUC">CUC 🇨🇺</option>
          <option value="CZK">CZK 🇨🇿</option>
          <option value="DKK">DKK 🇩🇰</option>
          <option value="DJF">DJF 🇩🇯</option>
          <option value="DOP">DOP 🇩🇴</option>
          <option value="XCD">XCD 🇦🇮</option>
          <option value="EGP">EGP 🇪🇬</option>
          <option value="ERN">ERN 🇪🇷</option>
          <option value="EEK">EEK 🇪🇪</option>
          <option value="ETB">ETB 🇪🇹</option>
          <option value="EUR">EUR 🇪🇺</option>
          <option value="FKP">FKP 🇫🇰</option>
          <option value="FJD">FJD 🇫🇯</option>
          <option value="GMD">GMD 🇬🇲</option>
          <option value="GEL">GEL 🇬🇪</option>
          <option value="DEM">DEM 🇩🇪</option>
          <option value="GHS">GHS 🇬🇭</option>
          <option value="GIP">GIP 🇬🇮</option>
          <option value="GRD">GRD 🇬🇷</option>
          <option value="GTQ">GTQ 🇬🇹</option>
          <option value="GNF">GNF 🇬🇳</option>
          <option value="GYD">GYD 🇬🇾</option>
          <option value="HTG">HTG 🇭🇹</option>
          <option value="HNL">HNL 🇭🇳</option>
          <option value="HKD">HKD 🇭🇰</option>
          <option value="HUF">HUF 🇭🇺</option>
          <option value="ISK">ISK 🇮🇸</option>
          <option value="INR">INR 🇮🇳</option>
          <option value="IDR">IDR 🇮🇩</option>
          <option value="IRR">IRR 🇮🇷</option>
          <option value="IQD">IQD 🇮🇶</option>
          <option value="ILS">ILS 🇮🇱</option>
          <option value="ITL">ITL 🇮🇹</option>
          <option value="JMD">JMD 🇯🇲</option>
          <option value="JPY">JPY 🇯🇵</option>
          <option value="JOD">JOD 🇯🇴</option>
          <option value="KZT">KZT 🇰🇿</option>
          <option value="KES">KES 🇰🇪</option>
          <option value="KWD">KWD 🇰🇼</option>
          <option value="KGS">KGS 🇰🇬</option>
          <option value="LAK">LAK 🇱🇦</option>
          <option value="LVL">LVL 🇱🇻</option>
          <option value="LBP">LBP 🇱🇧</option>
          <option value="LSL">LSL 🇱🇸</option>
          <option value="LRD">LRD 🇱🇷</option>
          <option value="LYD">LYD 🇱🇾</option>
          <option value="LTL">LTL 🇱🇹</option>
          <option value="MOP">MOP 🇲🇴</option>
          <option value="MKD">MKD 🇲🇰</option>
          <option value="MGA">MGA 🇲🇬</option>
          <option value="MWK">MWK 🇲🇼</option>
          <option value="MYR">MYR 🇲🇾</option>
          <option value="MVR">MVR 🇲🇻</option>
          <option value="MRO">MRO 🇲🇷</option>
          <option value="MUR">MUR 🇲🇺</option>
          <option value="MXN">MXN 🇲🇽</option>
          <option value="MDL">MDL 🇲🇩</option>
          <option value="MNT">MNT 🇲🇳</option>
          <option value="MAD">MAD 🇲🇦</option>
          <option value="MZM">MZM 🇲🇿</option>
          <option value="MMK">MMK 🇲🇲</option>
          <option value="NAD">NAD 🇳🇦</option>
          <option value="NPR">NPR 🇳🇵</option>
          <option value="ANG">ANG 🇳🇱</option>
          <option value="TWD">TWD 🇹🇼</option>
          <option value="NZD">NZD 🇳🇿</option>
          <option value="NIO">NIO 🇳🇮</option>
          <option value="NGN">NGN 🇳🇬</option>
          <option value="KPW">KPW 🇰🇵</option>
          <option value="NOK">NOK 🇳🇴</option>
          <option value="OMR">OMR 🇴🇲</option>
          <option value="PKR">PKR 🇵🇰</option>
          <option value="PAB">PAB 🇵🇦</option>
          <option value="PGK">PGK 🇵🇬</option>
          <option value="PYG">PYG 🇵🇾</option>
          <option value="PEN">PEN 🇵🇪</option>
          <option value="PHP">PHP 🇵🇭</option>
          <option value="PLN">PLN 🇵🇱</option>
          <option value="QAR">QAR 🇶🇦</option>
          <option value="RON">RON 🇷🇴</option>
          <option value="RUB">RUB 🇷🇺</option>
          <option value="RWF">RWF 🇷🇼</option>
          <option value="SVC">SVC 🇸🇻</option>
          <option value="WST">WST 🇼🇸</option>
          <option value="SAR">SAR 🇸🇦</option>
          <option value="RSD">RSD 🇷🇸</option>
          <option value="SCR">SCR 🇸🇨</option>
          <option value="SLL">SLL 🇸🇱</option>
          <option value="SGD">SGD 🇸🇬</option>
          <option value="SKK">SKK 🇸🇰</option>
          <option value="SBD">SBD 🇸🇧</option>
          <option value="SOS">SOS 🇸🇴</option>
          <option value="ZAR">ZAR 🇿🇦</option>
          <option value="KRW">KRW 🇰🇷</option>
          <option value="XDR">XDR 🌍</option>
          <option value="LKR">LKR 🇱🇰</option>
          <option value="SHP">SHP 🇸🇭</option>
          <option value="SDG">SDG 🇸🇩</option>
          <option value="SRD">SRD 🇸🇷</option>
          <option value="SZL">SZL 🇸🇿</option>
          <option value="SEK">SEK 🇸🇪</option>
          <option value="CHF">CHF 🇨🇭</option>
          <option value="SYP">SYP 🇸🇾</option>
          <option value="STD">STD 🇸🇹</option>
          <option value="TJS">TJS 🇹🇯</option>
          <option value="TZS">TZS 🇹🇿</option>
          <option value="THB">THB 🇹🇭</option>
          <option value="TOP">TOP 🇹🇴</option>
          <option value="TTD">TTD 🇹🇹</option>
          <option value="TND">TND 🇹🇳</option>
          <option value="TRY">TRY 🇹🇷</option>
          <option value="TMT">TMT 🇹🇲</option>
          <option value="UGX">UGX 🇺🇬</option>
          <option value="UAH">UAH 🇺🇦</option>
          <option value="AED">AED 🇦🇪</option>
          <option value="UYU">UYU 🇺🇾</option>
          <option value="USD">USD 🇺🇸</option>
          <option value="UZS">UZS 🇺🇿</option>
          <option value="VUV">VUV 🇻🇺</option>
          <option value="VEF">VEF 🇻🇪</option>
          <option value="VND">VND 🇻🇳</option>
          <option value="YER">YER 🇾🇪</option>
          <option value="ZMK">ZMK 🇿🇲</option>
        </>
      ) : (
        <>
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
        </>
      )}
    </select>
  );
};

export const GetCountryFromCurrency = (currency) => {
  switch (currency) {
    case "USD":
      return "United States";
    case "AFN":
      return "Afghanistan";
    case "ALL":
      return "Albania";
    case "DZD":
      return "Algeria";
    case "AOA":
      return "Angola";
    case "ARS":
      return "Argentina";
    case "AMD":
      return "Armenia";
    case "AWG":
      return "Aruba";
    case "AUD":
      return "Australia";
    case "AZN":
      return "Azerbaijan";
    case "BSD":
      return "Bahamas";
    case "BHD":
      return "Bahrain";
    case "BDT":
      return "Bangladesh";
    case "BBD":
      return "Barbados";
    case "BYR":
      return "Belarus";
    case "BEF":
      return "Belgium";
    case "BZD":
      return "Belize";
    case "BMD":
      return "Bermuda";
    case "BTN":
      return "Bhutan";
    case "BTC":
      return "Bitcoin";
    case "BOB":
      return "Bolivia";
    case "BAM":
      return "Bosnia and Herzegovina";
    case "BWP":
      return "Botswana";
    case "BRL":
      return "Brazil";
    case "GBP":
      return "United Kingdom";
    case "BND":
      return "Brunei";
    case "BGN":
      return "Bulgaria";
    case "BIF":
      return "Burundi";
    case "KHR":
      return "Cambodia";
    case "CAD":
      return "Canada";
    case "CVE":
      return "Cape Verde";
    case "KYD":
      return "Cayman Islands";
    case "XOF":
      return "West African CFA franc";
    case "XAF":
      return "Central African CFA franc";
    case "XPF":
      return "CFP franc";
    case "CLP":
      return "Chile";
    case "CNY":
      return "China";
    case "COP":
      return "Colombia";
    case "KMF":
      return "Comoros";
    case "CDF":
      return "Democratic Republic of the Congo";
    case "CRC":
      return "Costa Rica";
    case "HRK":
      return "Croatia";
    case "CUC":
      return "Cuba";
    case "CZK":
      return "Czech Republic";
    case "DKK":
      return "Denmark";
    case "DJF":
      return "Djibouti";
    case "DOP":
      return "Dominican Republic";
    case "XCD":
      return "Eastern Caribbean dollar";
    case "EGP":
      return "Egypt";
    case "ERN":
      return "Eritrea";
    case "EEK":
      return "Estonia";
    case "ETB":
      return "Ethiopia";
    case "EUR":
      return "European Union";
    case "FKP":
      return "Falkland Islands";
    case "FJD":
      return "Fiji";
    case "GMD":
      return "Gambia";
    case "GEL":
      return "Georgia";
    case "DEM":
      return "Germany";
    case "GHS":
      return "Ghana";
    case "GIP":
      return "Gibraltar";
    case "GRD":
      return "Greece";
    case "GTQ":
      return "Guatemala";
    case "GNF":
      return "Guinea";
    case "GYD":
      return "Guyana";
    case "HTG":
      return "Haiti";
    case "HNL":
      return "Honduras";
    case "HKD":
      return "Hong Kong";
    case "HUF":
      return "Hungary";
    case "ISK":
      return "Iceland";
    case "INR":
      return "India";
    case "IDR":
      return "Indonesia";
    case "IRR":
      return "Iran";
    case "IQD":
      return "Iraq";
    case "ILS":
      return "Israel";
    case "ITL":
      return "Italy";
    case "JMD":
      return "Jamaica";
    case "JPY":
      return "Japan";
    case "JOD":
      return "Jordan";
    case "KZT":
      return "Kazakhstan";
    case "KES":
      return "Kenya";
    case "KWD":
      return "Kuwait";
    case "KGS":
      return "Kyrgyzstan";
    case "LAK":
      return "Laos";
    case "LVL":
      return "Latvia";
    case "LBP":
      return "Lebanon";
    case "LSL":
      return "Lesotho";
    case "LRD":
      return "Liberia";
    case "LYD":
      return "Libya";
    case "LTL":
      return "Lithuania";
    case "MOP":
      return "Macau";
    case "MKD":
      return "Macedonia";
    case "MGA":
      return "Madagascar";
    case "MWK":
      return "Malawi";
    case "MYR":
      return "Malaysia";
    case "MVR":
      return "Maldives";
    case "MRO":
      return "Mauritania";
    case "MUR":
      return "Mauritius";
    case "MXN":
      return "Mexico";
    case "MDL":
      return "Moldova";
    case "MNT":
      return "Mongolia";
    case "MAD":
      return "Morocco";
    case "MZM":
      return "Mozambique";
    case "MMK":
      return "Myanmar";
    case "NAD":
      return "Namibia";
    case "NPR":
      return "Nepal";
    case "ANG":
      return "Netherlands Antilles";
    case "TWD":
      return "Taiwan";
    case "NZD":
      return "New Zealand";
    case "NIO":
      return "Nicaragua";
    case "NGN":
      return "Nigeria";
    case "KPW":
      return "North Korea";
    case "NOK":
      return "Norway";
    case "OMR":
      return "Oman";
    case "PKR":
      return "Pakistan";
    case "PAB":
      return "Panama";
    case "PGK":
      return "Papua New Guinea";
    case "PYG":
      return "Paraguay";
    case "PEN":
      return "Peru";
    case "PHP":
      return "Philippines";
    case "PLN":
      return "Poland";
    case "QAR":
      return "Qatar";
    case "RON":
      return "Romania";
    case "RUB":
      return "Russia";
    case "RWF":
      return "Rwanda";
    case "SVC":
      return "El Salvador";
    case "WST":
      return "Samoa";
    case "SAR":
      return "Saudi Arabia";
    case "RSD":
      return "Serbia";
    case "SCR":
      return "Seychelles";
    case "SLL":
      return "Sierra Leone";
    case "SGD":
      return "Singapore";
    case "SKK":
      return "Slovakia";
    case "SBD":
      return "Solomon Islands";
    case "SOS":
      return "Somalia";
    case "ZAR":
      return "South Africa";
    case "KRW":
      return "South Korea";
    case "XDR":
      return "Special Drawing Rights (International Monetary Fund)";
    case "LKR":
      return "Sri Lanka";
    case "SHP":
      return "Saint Helena";
    case "SDG":
      return "Sudan";
    case "SRD":
      return "Suriname";
    case "SZL":
      return "Swaziland";
    case "SEK":
      return "Sweden";
    case "CHF":
      return "Switzerland";
    case "SYP":
      return "Syria";
    case "STD":
      return "São Tomé and Príncipe";
    case "TJS":
      return "Tajikistan";
    case "TZS":
      return "Tanzania";
    case "THB":
      return "Thailand";
    case "TOP":
      return "Tonga";
    case "TTD":
      return "Trinidad and Tobago";
    case "TND":
      return "Tunisia";
    case "TRY":
      return "Turkey";
    case "TMT":
      return "Turkmenistan";
    case "UGX":
      return "Uganda";
    case "UAH":
      return "Ukraine";
    case "AED":
      return "United Arab Emirates";
    case "UYU":
      return "Uruguay";
    case "UZS":
      return "Uzbekistan";
    case "VUV":
      return "Vanuatu";
    case "VEF":
      return "Venezuela";
    case "VND":
      return "Vietnam";
    case "YER":
      return "Yemen";
    case "ZMK":
      return "Zambia";
    case "":
      return "";
  }
};

export const GetAlpha3Code = (currency) => {
  switch (currency) {
    case "USD":
      return "USA";
    case "AFN":
      return "AFG";
    case "ALL":
      return "ALB";
    case "DZD":
      return "DZA";
    case "AOA":
      return "AGO";
    case "ARS":
      return "ARG";
    case "AMD":
      return "ARM";
    case "AWG":
      return "ABW";
    case "AUD":
      return "AUS";
    case "AZN":
      return "AZE";
    case "BSD":
      return "BHS";
    case "BHD":
      return "BHR";
    case "BDT":
      return "BGD";
    case "BBD":
      return "BRB";
    case "BYR":
      return "BLR";
    case "BEF":
      return "BEL";
    case "BZD":
      return "BLZ";
    case "BMD":
      return "BMU";
    case "BTN":
      return "BTN";
    case "BOB":
      return "BOL";
    case "BAM":
      return "BIH";
    case "BWP":
      return "BWA";
    case "BRL":
      return "BRA";
    case "GBP":
      return "GBR";
    case "BND":
      return "BRN";
    case "BGN":
      return "BGR";
    case "BIF":
      return "BDI";
    case "KHR":
      return "KHM";
    case "CAD":
      return "CAN";
    case "CVE":
      return "CPV";
    case "KYD":
      return "CYM";
    case "XOF":
      return "NER";
    case "XAF":
      return "CAF";
    case "XPF":
      return "PYF";
    case "CLP":
      return "CHL";
    case "CNY":
      return "CHN";
    case "COP":
      return "COL";
    case "KMF":
      return "COM";
    case "CDF":
      return "COD";
    case "CRC":
      return "CRI";
    case "HRK":
      return "HRV";
    case "CUC":
      return "CUB";
    case "CZK":
      return "CZE";
    case "DKK":
      return "DNK";
    case "DJF":
      return "DJI";
    case "DOP":
      return "DOM";
    case "XCD":
      return "GRD";
    case "EGP":
      return "EGY";
    case "ERN":
      return "ERI";
    case "EEK":
      return "EST";
    case "ETB":
      return "ETH";
    case "EUR":
      return "EU";
    case "FKP":
      return "FLK";
    case "FJD":
      return "FJI";
    case "GMD":
      return "GMB";
    case "GEL":
      return "GEO";
    case "DEM":
      return "DEU";
    case "GHS":
      return "GHA";
    case "GIP":
      return "GIB";
    case "GRD":
      return "GRC";
    case "GTQ":
      return "GTM";
    case "GNF":
      return "GIN";
    case "GYD":
      return "GUY";
    case "HTG":
      return "HTI";
    case "HNL":
      return "HND";
    case "HKD":
      return "HKG";
    case "HUF":
      return "HUN";
    case "ISK":
      return "ISL";
    case "INR":
      return "IND";
    case "IDR":
      return "IDN";
    case "IRR":
      return "IRN";
    case "IQD":
      return "IRQ";
    case "ILS":
      return "ISR";
    case "ITL":
      return "ITA";
    case "JMD":
      return "JAM";
    case "JPY":
      return "JPN";
    case "JOD":
      return "JOR";
    case "KZT":
      return "KAZ";
    case "KES":
      return "KEN";
    case "KWD":
      return "KWT";
    case "KGS":
      return "KGZ";
    case "LAK":
      return "LAO";
    case "LVL":
      return "LVA";
    case "LBP":
      return "LBN";
    case "LSL":
      return "LSO";
    case "LRD":
      return "LBR";
    case "LYD":
      return "LBY";
    case "LTL":
      return "LTU";
    case "MOP":
      return "MAC";
    case "MKD":
      return "MKD";
    case "MGA":
      return "MDG";
    case "MWK":
      return "MWI";
    case "MYR":
      return "MYS";
    case "MVR":
      return "MDV";
    case "MRO":
      return "MRT";
    case "MUR":
      return "MUS";
    case "MXN":
      return "MEX";
    case "MDL":
      return "MDA";
    case "MNT":
      return "MNG";
    case "MAD":
      return "MAR";
    case "MZM":
      return "MOZ";
    case "MMK":
      return "MMR";
    case "NAD":
      return "NAM";
    case "NPR":
      return "NPL";
    case "ANG":
      return "ANT";
    case "TWD":
      return "TWN";
    case "NZD":
      return "NZL";
    case "NIO":
      return "NIC";
    case "NGN":
      return "NGA";
    case "KPW":
      return "PRK";
    case "NOK":
      return "NOR";
    case "OMR":
      return "OMN";
    case "PKR":
      return "PAK";
    case "PAB":
      return "PAN";
    case "PGK":
      return "PNG";
    case "PYG":
      return "PRY";
    case "PEN":
      return "PER";
    case "PHP":
      return "PHL";
    case "PLN":
      return "POL";
    case "QAR":
      return "QAT";
    case "RON":
      return "ROU";
    case "RUB":
      return "RUS";
    case "RWF":
      return "RWA";
    case "SVC":
      return "SLV";
    case "WST":
      return "WSM";
    case "SAR":
      return "SAU";
    case "RSD":
      return "SRB";
    case "SCR":
      return "SYC";
    case "SLL":
      return "SLE";
    case "SGD":
      return "SGP";
    case "SKK":
      return "SVK";
    case "SBD":
      return "SLB";
    case "SOS":
      return "SOM";
    case "ZAR":
      return "ZAF";
    case "KRW":
      return "KOR";
    case "XDR":
      return "IMF";
    case "LKR":
      return "LKA";
    case "SHP":
      return "SHN";
    case "SDG":
      return "SDN";
    case "SRD":
      return "SUR";
    case "SZL":
      return "SWZ";
    case "SEK":
      return "SWE";
    case "CHF":
      return "CHE";
    case "SYP":
      return "SYR";
    case "STD":
      return "STP";
    case "TJS":
      return "TJK";
    case "TZS":
      return "TZA";
    case "THB":
      return "THA";
    case "TOP":
      return "TON";
    case "TTD":
      return "TTO";
    case "TND":
      return "TUN";
    case "TRY":
      return "TUR";
    case "TMT":
      return "TKM";
    case "UGX":
      return "UGA";
    case "UAH":
      return "UKR";
    case "AED":
      return "ARE";
    case "UYU":
      return "URY";
    case "UZS":
      return "UZB";
    case "VUV":
      return "VUT";
    case "VEF":
      return "VEN";
    case "VND":
      return "VNM";
    case "YER":
      return "YEM";
    case "ZMK":
      return "ZMB";
    default:
      return "Invalid currency";
  }
};

export function FormatDateFromLongFormat(timestamp) {
  const date = new Date(timestamp * 1000);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  return `${month} ${day}, ${year}`;
}

export const FormatDateDisplay = (rawDateString) => {
  const parsedDate = moment(rawDateString, "DD/MM/YYYY, HH:mm:ss");
  const formattedDate = parsedDate.format("MMM D, YYYY hh:mm A");
  return formattedDate;
};

export const FormatMobileDateDisplay = (rawDateString) => {
  const parsedDate = moment(rawDateString, "DD/MM/YYYY, HH:mm:ss");
  const formattedDate = parsedDate.format("MMM D,YYYY");
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
  arr.forEach((obj) => {
    obj.dateAdded = moment(obj.dateAdded, "DD/MM/YYYY, HH:mm:ss").toDate();
  });
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

export const isWindows = () => {
  const userAgent = global?.window ? window.navigator.userAgent.toLowerCase() : "macos";
  const macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i;
  const windowsPlatforms = /(win32|win64|windows|wince)/i;
  const iosPlatforms = /(iphone|ipad|ipod)/i;
  let os = null;

  if (macosPlatforms.test(userAgent)) {
    os = "macos";
  }
  if (iosPlatforms.test(userAgent)) {
    os = "ios";
  }
  if (windowsPlatforms.test(userAgent)) {
    os = "windows";
    return true;
  }
  if (/android/.test(userAgent)) {
    os = "android";
  }
  if (!os && /linux/.test(userAgent)) {
    os = "linux";
    return true;
  }

  return false;
};

export const GroupedExpense = (expenses) => {
  return expenses.reduce((acc, expense) => {
    const [day, month, year] = expense.dateAdded.split("/");
    const date = new Date(`${month}/${day}/${year}`);
    const monthYear = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
    if (!acc[monthYear]) {
      acc[monthYear] = { total: 0.0, expenses: [] };
    }
    if (expense.category === "Expense") {
      acc[monthYear].total -= parseFloat(expense.amount) / parseFloat(expense.exchangeRate);
    } else {
      acc[monthYear].total += parseFloat(expense.amount) / parseFloat(expense.exchangeRate);
    }

    acc[monthYear].expenses.push(expense);

    return Object.fromEntries(Object.entries(acc).sort((a, b) => new Date(b[0]) - new Date(a[0])));
  }, {});
};

export const GetOverallTotal = (expenses) => {
  const groupedExpenses = GroupedExpense(expenses);
  let overallTotal = 0.0;

  for (const monthYear in groupedExpenses) {
    overallTotal += groupedExpenses[monthYear].total;
  }

  return overallTotal;
};

export const OrderExpensesByDateAdded = (jsonObj) => {
  const format = "DD/MM/YYYY, HH:mm:ss";
  for (const month in jsonObj) {
    if (jsonObj.hasOwnProperty(month)) {
      const expenses = jsonObj[month].expenses;

      expenses.sort((a, b) => {
        const dateA = moment(a.dateAdded, format);
        const dateB = moment(b.dateAdded, format);
        return dateB.diff(dateA);
      });
    }
  }
  return jsonObj;
};

export const Loader = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
