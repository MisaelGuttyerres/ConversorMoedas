const form = document.getElementById('form'); // link do JavaScript com o form do HTML
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('corrency');
const result = document.getElementById('result');
let valueConverted

    
    function handleSubmit(e){ //verifica se o valor insirido é valido
        e.preventDefault();

        if(!inputValue.value || inputValue.value < 0){
            alert('informe um valor valido');
        return;
        } else if(!selectedCurrency.value) {
            alert('Escolha uma moeda');
        return;
        }
        converter();  // Chama a função para fazer a conversão
    }

    function converter(){
        if(selectedCurrency.value === 'eur'){
            valueConverted = inputValue.value / 6.22;
            result.innerHTML = valueFormatter('pt-BR', 'EUR');

            animation();
            
        } else if(selectedCurrency.value === 'dol'){
            valueConverted = inputValue.value / 5.77;
            result.innerHTML = valueFormatter('pt-BR', 'USD');
            animation();
        } else if(selectedCurrency.value === 'iene'){
            valueConverted = inputValue.value * 26.02;
            result.innerHTML = valueFormatter('pt-BR', 'JPY');
            animation();
        } else if(selectedCurrency.value === 'GBP'){
            valueConverted = inputValue.value / 7.47;
            result.innerHTML = valueFormatter('pt-BR', 'GBP');
            animation();
        } else if(selectedCurrency.value === 'CHF'){
            valueConverted = inputValue.value / 6,54;
            result.innerHTML = valueFormatter('pt-BR', 'CHF');
            animation();
        } else if(selectedCurrency.value === 'AUD'){
            valueConverted = inputValue.value / 3.63;
            result.innerHTML = valueFormatter('pt-BR', 'AUD');
            animation();
        } else if(selectedCurrency.value === 'CNY'){
            valueConverted = inputValue.value * 1.26;
            result.innerHTML = valueFormatter('pt-BR', 'CNY');
            animation();
        } else if(selectedCurrency.value === 'SEK'){
            valueConverted = inputValue.value * 1.73;
            result.innerHTML = valueFormatter('pt-BR', 'SEK');
            animation();
        } else if(selectedCurrency.value === 'MXN'){
            valueConverted = inputValue.value * 3.54;
            result.innerHTML = valueFormatter('pt-BR', 'MXN');
            animation();
        }
        inputValue.value = ''; //Limpa o valor inserido em real

    }
    function valueFormatter(Locale, currency){
        const value = valueConverted.toLocaleString(`${Locale}`,{style: 'currency', currency: `${currency}`});
        return value;

        
    }

    function animation(){
        return result.animate([
            { transform: 'translateY(-150px)'},
            { transform: 'translateY(0px)'},
        ], { duration: 500 });
    }