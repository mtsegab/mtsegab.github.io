

    function decorationButton(){
        var div = document.getElementById( 'textArea' );

        function css( element, property ) {
        return window.getComputedStyle( element, null ).getPropertyValue( property );
        }

        
        let textbox = document.getElementById('textArea');
        textbox.style.fontSize = parseInt(css( div, 'font-size' )) + 2 + "pt";

    }
    
    
    function bling() {
    
        
        var textbox= document.getElementById('textArea');
        var checkbox=document.getElementById('bling')

        if (checkbox.checked) {
            textbox.style.color = 'green';
            textbox.style.fontWeight = 'bold';
            textbox.style.textDecoration = 'underline';
        }
        else{
            textbox.style.color='black';
            textbox.style.fontWeight='normal';
            textbox.style.textDecoration='none';
        }
    }

    

    