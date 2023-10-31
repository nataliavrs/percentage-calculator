let t={};!function(){let e=JSON.parse(localStorage.getItem("calculations"));t=e?{calculations:e}:{calculations:{percentageOfNumber:{num1:null,num2:null,result:null},whatPercentage:{num1:null,num2:null,result:null},findTotal:{num1:null,num2:null,result:null}}}}();const e=function(e,l,n,u){t.calculations[n]={num1:e,num2:l,result:u},a()},a=function(){return localStorage.setItem("calculations",JSON.stringify(t.calculations))};class l{_data;render(t){let e=this._generateMarkup(t);this._initValidation&&this._initValidation(),this._parentElement.insertAdjacentHTML("beforeend",e)}updateUI(t){if(!t)return;// Update the data property in the instance with the new data
this._data=t;// Generate new HTML markup based on the updated data
let e=this._generateMarkup(),a=document.createRange().createContextualFragment(e),l=Array.from(a.querySelector(`.calculation-form[data-type="${this.calculationType}"]`).querySelectorAll("*")),n=Array.from(document.querySelector(`.calculation-form[data-type="${this.calculationType}"]`).querySelectorAll("*"));// Iterate through the elements in both the new DOM fragment and the parent element
l.forEach((t,e)=>{let a=n[e];// Check if the new element is different from the current element
t.isEqualNode(a)||Array.from(t.attributes).forEach(t=>{a.setAttribute(t.name,t.value)})})}validateOnChange(...t){t.forEach(t=>t.addEventListener("input",()=>{this.isInvalidValue(t.value)?t.setCustomValidity("Insert a valid value"):t.setCustomValidity("")}))}isInvalidValue(t){return!t||isNaN(+t)||+t>=9999999999999999n}}class n extends l{_parentElement=document.querySelector(".calculators");calculationType="findTotal";addHandlerCalculate(t){let e=this._parentElement.querySelector(`.calculation-form[data-type^="${this.calculationType}"]`);if(!e)return;let a=e.querySelector("#part"),l=e.querySelector("#percentage");this.validateOnChange(a,l),e.addEventListener("submit",e=>{e.preventDefault(),t({part:+a.value,percentage:+l.value},this)})}_generateMarkup(){return`
    <div class="calculation-form" data-type="${this.calculationType}">
      <form>
        <div class="inputs">
          <label>If</label>
          <input type="text" id="part" value="${this._data?.num1??""}" required autocomplete="off" />
          <label>is</label>
          <input type="text" id="percentage" value="${this._data?.num2??""}" required autocomplete="off" />
          <label>% of the total. The total is:</label>
        </div>

        <div class="results">
          <button><span>Calculate</span></button>
          <input type="text" readonly value="${this._data?.result??""}" />          
        </div>
      </form>
    </div>
    `}}var u=new n;class r extends l{_parentElement=document.querySelector(".calculators");calculationType="percentageOfNumber";addHandlerCalculate(t){let e=this._parentElement.querySelector(`.calculation-form[data-type^="${this.calculationType}"]`);if(!e)return;let a=e.querySelector("#percentage"),l=e.querySelector("#total");this.validateOnChange(a,l),e.addEventListener("submit",e=>{e.preventDefault(),t({percentage:+a.value,total:+l.value},this)})}_generateMarkup(){return`
    <div class="calculation-form" data-type=${this.calculationType}>
      <form>

        <div class="inputs">
          <label>What is</label>
          <input type="text" id="percentage" value="${this._data?.num1??""}" required autocomplete="off" />
          <label>% of</label>
          <input type="text" id="total" value="${this._data?.num2??""}" required autocomplete="off" />
          <label>?</label>
        </div>

        <div class="results">
          <button><span>Calculate</span></button>
          <input type="text" readonly value="${this._data?.result??""}" />
        </div>

      </form>
    </div>
    `}}var i=new r;class c extends l{_parentElement=document.querySelector(".calculators");calculationType="whatPercentage";addHandlerCalculate(t){let e=this._parentElement.querySelector(`.calculation-form[data-type^="${this.calculationType}"]`);if(!e)return;let a=e.querySelector("#part"),l=e.querySelector("#total");this.validateOnChange(a,l),e.addEventListener("submit",e=>{e.preventDefault(),t({part:+a.value,total:+l.value},this)})}_generateMarkup(){return`
    <div class="calculation-form" data-type=${this.calculationType}>
      <form>

        <div class="inputs">
          <input type="text" id="part" value="${this._data?.num1??""}" required autocomplete="off" />
          <label>is what percent of</label>
          <input type="text" id="total" value="${this._data?.num2??""}" required autocomplete="off" />
        </div>

        <div class="results">          
          <button id="calculateBtn"><span>Calculate</span></button>
          <input type="text" readonly value="${this._data?.result?isNaN(this._data?.result)?this._data?.result:this._data?.result+"%":""} "/>
        </div>

      </form>    

    </div>
    `}}var o=new c;const s=function(t,a,l,n){d({num1:t,num2:a,result:l},n.calculationType)&&(e(t,a,n.calculationType,l),n.updateUI({num1:t,num2:a,result:l}))},d=function(e,a){let l=Object.keys(e);return l.some(l=>e[l]!==t.calculations[a][l])};i.render(),o.render(),u.render(),i.addHandlerCalculate(function({percentage:t,total:e},a){let l=t/100*e;s(t,e,l,a)}),o.addHandlerCalculate(function({part:t,total:e},a){let l=0===e?"Cannot divide by zero":t/e*100;s(t,e,l,a)}),u.addHandlerCalculate(function({part:t,percentage:e},a){let l=0===e?"Cannot divide by zero":100*t/e;s(t,e,l,a)}),i.updateUI(t.calculations.percentageOfNumber),o.updateUI(t.calculations.whatPercentage),u.updateUI(t.calculations.findTotal);//# sourceMappingURL=index.58dffabb.js.map

//# sourceMappingURL=index.58dffabb.js.map
