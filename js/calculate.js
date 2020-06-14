function calculateAmount(val) {
    var tot_price_personnel     = val * 25000;
    var reverse                 = tot_price_personnel.toString().split('').reverse().join(''),
     ribuan                     = reverse.match(/\d{1,3}/g);
     ribuan                     = ribuan.join('.').split('').reverse().join('');

    /*display the result*/
    var divobj = document.getElementById('tot_amount_personnel');
    divobj.value = 'Rp. ' + ribuan;
}

function calculateAmountFamily(val) {
    var tot_price_family        = val * 50000;
    var reverse                 = tot_price_family.toString().split('').reverse().join(''),
     ribuan                     = reverse.match(/\d{1,3}/g);
     ribuan                     = ribuan.join('.').split('').reverse().join('');

    /*display the result*/
    var divobj = document.getElementById('tot_amount_family');
    divobj.value = 'Rp. ' + ribuan;
}

 function calculateAmountGroup(val) {
    var tot_price_group         = val * 75000;
    var reverse                 = tot_price_group.toString().split('').reverse().join(''),
     ribuan                     = reverse.match(/\d{1,3}/g);
     ribuan                     = ribuan.join('.').split('').reverse().join('');

    /*display the result*/
    var divobj = document.getElementById('tot_amount_group');
    divobj.value = 'Rp. ' + ribuan;
}
