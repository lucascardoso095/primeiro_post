function obter_resultado() {

    var quest1 = document.getElementsByName("p1");

    for (var i=0;i<quest1.length;i++) {

        if (quest1[i].checked) {

            var opcao1 = quest1[i].value;

        }

    }

    switch (opcao1) {

        case 'a':
        var result1=2;
        break;

        case 'b':
        var result1=3;
        break;

        case 'c':
        var result1=0;
        break;

    }

    var quest2 = document.getElementsByName("p2");

    for (var i=0;i<quest2.length;i++) {

        if (quest2[i].checked) {

            var opcao2 = quest2[i].value;

        }

    }

    switch (opcao2) {

        case 'a':
        var result2=1;
        break;

        case 'b':
        var result2=0;
        break;

        case 'c':
        var result2=3;
        break;

    }

    var quest3 = document.getElementsByName("p3");

    for (var i=0;i<quest3.length;i++) {

        if (quest3[i].checked) {

            var opcao3 = quest3[i].value;

        }

    }

    switch (opcao3) {

        case 'a':
        var result3=3;
        break;

        case 'b':
        var result3=0;
        break;

        case 'c':
        var result3=1;
        break;

    }

    var quest4 = document.getElementsByName("p4");

    for (var i=0;i<quest4.length;i++) {

        if (quest4[i].checked) {

            var opcao4 = quest4[i].value;

        }

    }

    switch (opcao4) {

        case 'a':
        var result4=0;
        break;

        case 'b':
        var result4=1;
        break;

        case 'c':
        var result4=3;
        break;

    }

    var quest5 = document.getElementsByName("p5");

    for (var i=0;i<quest5.length;i++) {

        if (quest5[i].checked) {

            var opcao5 = quest5[i].value;

        }

    }

    switch (opcao5) {

        case 'a':
        var result5=0;
        break;

        case 'b':
        var result5=3;
        break;

        case 'c':
        var result5=2;
        break;

    }

    var quest6 = document.getElementsByName("p6");

    for (var i=0;i<quest6.length;i++) {

        if (quest6[i].checked) {

            var opcao6 = quest6[i].value;

        }

    }

    switch (opcao6) {

        case 'a':
        var result6=3;
        break;

        case 'b':
        var result6=2;
        break;

        case 'c':
        var result6=0;
        break;

    }

    var resultado_final=result1+result2+result3+result4+result5+result6;

    if (resultado_final >= 0 && resultado_final <=9){

        alert("Sua pontuação é insuficiente. Você deve rever seus conceitos sobre Marketing Pessoal. Deve dar a devida importância a vender a sua imagem pessoal. Aprofunde-se sobre temas básicos como conhecer a si mesmo e melhorar sua rede de relacionamentos pessoais e profissionais. Tente encarar sua carreira como um negócio que necessita de investimentos.")
    }

    else if (resultado_final >= 10 && resultado_final <= 14){

        alert("Sua pontuação é regular. Você já sabe a importância que o Marketing Pessoal tem no seu desenvolvimento pessoal e também na sua carreira profissional. No entanto, ainda pode adquirir um algo a mais para alcançar o sucesso objetivado; procure expor- se mais e não tenha medo de competir e se abrir para as oportunidades que se lhe apresentam.")
    }

    else if(resultado_final >= 15 && resultado_final <= 18){

        alert("Parabéns, sua pontuação é satisfatória. Você encara sua carreira como um negócio e faz os devidos investimentos nela. Sabe construir sua rede de relacionamentos e dar a apropriada atenção ao que sua imagem pessoal necessita. Mantenha-se assim, zelando por seu Marketing Pessoal.");
    }

}

function validaForm(){

    if (document.getElementById('loginNome').value == ""){

        alert("Por favor, preencha todos os campos!");
        return false;

    }

    if(document.getElementById('loginEmail').value == ""){

        alert("Por favor, preencha todos os campos!");
        return false;

    }

    else {

        return true;
    }
}

function validar_questoes() {

    if ((document.form_questoes.p1[0].checked==false && document.form_questoes.p1[1].checked==false && document.form_questoes.p1[2].checked==false) || 
        (document.form_questoes.p2[0].checked==false && document.form_questoes.p2[1].checked==false && document.form_questoes.p2[2].checked==false) ||
        (document.form_questoes.p3[0].checked==false && document.form_questoes.p3[1].checked==false && document.form_questoes.p3[2].checked==false) ||
        (document.form_questoes.p4[0].checked==false && document.form_questoes.p4[1].checked==false && document.form_questoes.p4[2].checked==false) ||
        (document.form_questoes.p5[0].checked==false && document.form_questoes.p5[1].checked==false && document.form_questoes.p5[2].checked==false) ||
        (document.form_questoes.p6[0].checked==false && document.form_questoes.p6[1].checked==false && document.form_questoes.p6[2].checked==false)) {

        alert("Por favor, preencha todas as questões.");
        return false;

    } else {

        return true;

    }

}