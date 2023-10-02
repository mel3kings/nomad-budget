import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["500", "800"] });

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

export const CurrenciesDropdown = () => {
  return (
    <select className="form-select block bg-grey-100" id="currency" name="currency">
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
      <option value="BTC">BTC ₿</option>
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
    </select>
  );
};

export const CurrencyFullDisplay = () => {
  return (
    <select className="form-select block bg-grey-100" id="currency" name="currency">
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
      <option value="TOP">TOP - Tongan pa'anga 🇹🇴</option>
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

export const CurrencyRates = ({ response }) => {
  if (response === "") {
    response = {
      provider: "https://www.exchangerate-api.com",
      WARNING_UPGRADE_TO_V6: "https://www.exchangerate-api.com/docs/free",
      terms: "https://www.exchangerate-api.com/terms",
      base: "AUD",
      date: "2023-10-01",
      time_last_updated: 1696118402,
      rates: {
        AUD: 1,
        AED: 2.37,
        AFN: 49.98,
        ALL: 64.49,
        AMD: 256.19,
        ANG: 1.15,
        AOA: 538.99,
        ARS: 225.55,
        AWG: 1.15,
        AZN: 1.1,
        BAM: 1.19,
        BBD: 1.29,
        BDT: 70.86,
        BGN: 1.19,
        BHD: 0.242,
        BIF: 1808.81,
        BMD: 0.644,
        BND: 0.882,
        BOB: 4.42,
        BRL: 3.24,
        BSD: 0.644,
        BTN: 53.66,
        BWP: 8.84,
        BYN: 1.87,
        BZD: 1.29,
        CAD: 0.871,
        CDF: 1590,
        CHF: 0.59,
        CLP: 585.82,
        CNY: 4.7,
        COP: 2611.7,
        CRC: 342.34,
        CUP: 15.47,
        CVE: 67.23,
        CZK: 14.88,
        DJF: 114.52,
        DKK: 4.55,
        DOP: 36.29,
        DZD: 87.89,
        EGP: 19.9,
        ERN: 9.67,
        ETB: 35.3,
        EUR: 0.61,
        FJD: 1.48,
        FKP: 0.528,
        FOK: 4.55,
        GBP: 0.528,
        GEL: 1.74,
        GGP: 0.528,
        GHS: 7.6,
        GIP: 0.528,
        GMD: 41.73,
        GNF: 5476.67,
        GTQ: 5.02,
        GYD: 133.49,
        HKD: 5.05,
        HNL: 15.78,
        HRK: 4.59,
        HTG: 86.47,
        HUF: 238.18,
        IDR: 9996.51,
        ILS: 2.46,
        IMP: 0.528,
        INR: 53.66,
        IQD: 835.42,
        IRR: 27306.4,
        ISK: 88.64,
        JEP: 0.528,
        JMD: 98.87,
        JOD: 0.457,
        JPY: 96.25,
        KES: 95.27,
        KGS: 57.28,
        KHR: 2628.8,
        KID: 1,
        KMF: 299.98,
        KRW: 869.68,
        KWD: 0.199,
        KYD: 0.537,
        KZT: 309.27,
        LAK: 13027.69,
        LBP: 9666.01,
        LKR: 208.51,
        LRD: 120.74,
        LSL: 12.19,
        LYD: 3.12,
        MAD: 6.62,
        MDL: 11.79,
        MGA: 2899.41,
        MKD: 37.64,
        MMK: 1616.8,
        MNT: 2228.49,
        MOP: 5.2,
        MRU: 24.42,
        MUR: 28.59,
        MVR: 9.86,
        MWK: 724.34,
        MXN: 11.26,
        MYR: 3.03,
        MZN: 41.24,
        NAD: 12.19,
        NGN: 553.75,
        NIO: 23.41,
        NOK: 6.88,
        NPR: 85.85,
        NZD: 1.07,
        OMR: 0.248,
        PAB: 0.644,
        PEN: 2.44,
        PGK: 2.33,
        PHP: 36.54,
        PKR: 184.05,
        PLN: 2.83,
        PYG: 4678.98,
        QAR: 2.35,
        RON: 3.04,
        RSD: 71.51,
        RUB: 62.91,
        RWF: 815.15,
        SAR: 2.42,
        SBD: 5.43,
        SCR: 8.65,
        SDG: 285.33,
        SEK: 7.03,
        SGD: 0.881,
        SHP: 0.528,
        SLE: 13.27,
        SLL: 13270.75,
        SOS: 364.44,
        SRD: 24.59,
        SSP: 656.36,
        STN: 14.94,
        SYP: 8264.97,
        SZL: 12.19,
        THB: 23.54,
        TJS: 7.1,
        TMT: 2.28,
        TND: 2.04,
        TOP: 1.52,
        TRY: 17.69,
        TTD: 4.34,
        TVD: 1,
        TWD: 20.7,
        TZS: 1621.77,
        UAH: 23.96,
        UGX: 2426.45,
        USD: 0.644,
        UYU: 24.5,
        UZS: 7945.1,
        VES: 22.18,
        VND: 15675.65,
        VUV: 77.58,
        WST: 1.78,
        XAF: 399.97,
        XCD: 1.74,
        XDR: 0.492,
        XOF: 399.97,
        XPF: 72.76,
        YER: 159.87,
        ZAR: 12.19,
        ZMW: 13.55,
        ZWL: 3484.12,
      },
    };
  }
  return (
    <div>
      <span className="text-gray-400">Updated: {formatDate(response.time_last_updated)}</span>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Currency</th>
            <th className="py-2 px-4 text-left">Exchange Rate</th>
          </tr>
        </thead>
      </table>
      <table className={`flex flex-col max-h-96 overflow-y-auto ${nunito.className}`}>
        <tbody>
          {Object.entries(response.rates).map(([currency, rate]) => (
            <tr key={currency}>
              <td className="py-1 px-4">{DisplayCurrency(currency)}</td>
              <td className="py-1 px-4">{rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);

  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();

  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  return `${month} ${day}, ${year} (${hours}:${minutes})`;
}
