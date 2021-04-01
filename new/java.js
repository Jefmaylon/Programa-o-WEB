$(() => {

    let pokemom = "charmande";
    const url = 'https://pokeapi.co/api/v2/pokemon/charmander';

    function obterDados(){
        $.ajax(url, {
            type: 'GET',
            error: function(){
                $('.table').after('<p class="loading"> Deu ruim </p>');
            },
            success: function(dados){
                console.log('vida', dados.stats[0].base_stat);
                console.log('experiencia', dados.base_experience);
                console.log('vida', dados.weight);
            },
            complete: function(){
            }
        });
});
