"use client";

import { Nunito } from "next/font/google";
import { useContext } from "react";
import { CurrencyContext } from "../currency-context";

const nunito = Nunito({ subsets: ["latin"], weight: ["500", "800"] });

export const CurrenciesDropdown = () => {
  const { selectedCurrency, setSelectedCurrency } = useContext(CurrencyContext);

  return (
    <select
      className={`form-select text-black ${nunito.className}`}
      id="currency"
      name="currency"
      value={selectedCurrency}
      onChange={(event) => setSelectedCurrency(event.target.value)}
    >
      <option value="USD">USD 🇺🇸</option>
      <option value="EUR">EUR 🇪🇺</option>
      <option value="JPY">JPY 🇯🇵</option>
      <option value="GBP">GBP 🇬🇧</option>
      <option value="AUD">AUD 🇦🇺</option>
      <option value="CAD">CAD 🇨🇦</option>
      <option value="CHF">CHF 🇨🇭</option>
      <option value="NZD">NZD 🇳🇿</option>
      <option value="CNY">CNY 🇨🇳</option>
      <option value="HKD">HKD 🇭🇰</option>
      <option value="AFN">AFN 🇦🇫</option>
      <option value="ALL">ALL 🇦🇱</option>
      <option value="DZD">DZD 🇩🇿</option>
      <option value="AOA">AOA 🇦🇴</option>
      <option value="ARS">ARS 🇦🇷</option>
      <option value="AMD">AMD 🇦🇲</option>
      <option value="AWG">AWG 🇦🇼</option>

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

      <option value="BND">BND 🇧🇳</option>
      <option value="BGN">BGN 🇧🇬</option>
      <option value="BIF">BIF 🇧🇮</option>
      <option value="KHR">KHR 🇰🇭</option>

      <option value="CVE">CVE 🇨🇻</option>
      <option value="KYD">KYD 🇰🇾</option>
      <option value="XOF">XOF 🇧🇫</option>
      <option value="XAF">XAF 🇨🇲</option>
      <option value="XPF">XPF 🇨🇵</option>
      <option value="CLP">CLP 🇨🇱</option>

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
      <option value="HUF">HUF 🇭🇺</option>
      <option value="ISK">ISK 🇮🇸</option>
      <option value="INR">INR 🇮🇳</option>
      <option value="IDR">IDR 🇮🇩</option>
      <option value="IRR">IRR 🇮🇷</option>
      <option value="IQD">IQD 🇮🇶</option>
      <option value="ILS">ILS 🇮🇱</option>
      <option value="ITL">ITL 🇮🇹</option>
      <option value="JMD">JMD 🇯🇲</option>
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
