import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../../../config/ddbDocClient";
import { useUser } from "@auth0/nextjs-auth0/client";

const styles = {
  inputField:
    "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
};

const AddData = () => {
  const { user } = useUser();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const params = {
      TableName: "Users",
      Item: {
        id: Math.floor(Math.random() * 10000),
        category: event.target.category.value,
        type: event.target.type.value,
        amount: event.target.amount.value,
        currency: event.target.currency.value,
        notes: event.target.notes.value,
        email: user?.email,
        dateAdded: new Date().toLocaleString(),
      },
    };

    try {
      await ddbDocClient.send(new PutCommand(params));
      document.getElementById("addData-form").reset();
    } catch (err) {
      console.log("Error", err.stack);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-3xl mb-20">Add Expense</p>
        <div className="block p-6 rounded-lg shadow-lg bg-white w-1/3 justify-self-center">
          <form onSubmit={handleSubmit} id="addData-form">
            <div className="form-group mb-6">
              <label htmlFor="category" className="form-label inline-block mb-2 text-gray-700">
                Category
              </label>
              <select className={styles.inputField} id="category" name="category">
                <option value="Expense">Expense ⭕</option>
                <option value="Income">Income 🟢</option>
              </select>
            </div>

            <div className="form-group mb-6">
              <label htmlFor="type" className="form-label inline-block mb-2 text-gray-700">
                Type
              </label>
              <select className={styles.inputField} id="type" name="type">
                <option value="Food">Food 🍲</option>
                <option value="Accommodation">Accommodation 🏠</option>
                <option value="Transportation">Transportation 🚂</option>
                <option value="Entertainment">Entertainment 🍿</option>
                <option value="Utilities">Utilities 💡</option>
                <option value="Internet">Internet 🌐</option>
                <option value="Others">Others 🧳</option>
              </select>
            </div>

            <div className="form-group mb-6">
              <label htmlFor="amount" className="form-label inline-block mb-2 text-gray-700">
                Amount
              </label>
              <input type="number" className={styles.inputField} id="amount" name="amount" />
            </div>

            <div className="form-group mb-6">
              <label htmlFor="currency" className="">
                Currency
              </label>

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
                <option value="XOF">XOF - CFA Franc BCEAO 🇧🇫🇨🇮🇧🇯🇬🇼🇲🇱🇳🇪🇸🇳🇹🇬</option>
                <option value="XAF">XAF - CFA Franc BEAC 🇨🇲🇨🇫🇨🇬🇪🇹🇬🇶🇹🇩</option>
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
                <option value="XCD">XCD - East Caribbean Dollar 🇦🇮🇦🇬🇩🇲🇬🇩🇰🇳🇱🇨🇻🇨🇻🇬</option>
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
                <option value="ANG">ANG - Netherlands Antillean Guilder 🇳🇱</option>
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
            </div>

            <div className="">
              <label htmlFor="" className="">
                Notes
              </label>
              <br />
              <textarea className="bg-gray-100 w-full" name="notes" id="notes" cols="5" rows="5"></textarea>
            </div>

            <button
              type="submit"
              className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddData;
