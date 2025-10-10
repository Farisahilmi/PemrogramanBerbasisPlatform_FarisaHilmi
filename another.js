const putri = {
  name: "Putri",
  address: { 
        city: "Bandung" 
    }  // <-- ini object di dalam object
};

const bayu = Object.assign({}, putri);
bayu.address.city = "Aceh";  // ubah alamat Bayu
putri.address.city = "sukabumi"


console.log(putri.address.city);


