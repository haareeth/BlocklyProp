/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function() {

    $.get('/php/auth/user', function(data) {
        if (data.success) {
            $('#account-menu').removeClass('hidden');
        } else {
            $("#login-register").removeClass("hidden");
        }
    });
    
    $('#log-off').on('click', function() {
        $.get('php/index.php/auth/logout', function(result) {
            if (result.success) {
                $('#account-menu').addClass('hidden');
            }
        });
    });
});
