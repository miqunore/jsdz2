const data = [];


addBtn.addEventListener('click', function addElement() {



            let inputs = modalBlocks.getElementsByTagName('input');



            for (let input of inputs) {


                if (input.value !== '') {
                    data.push(input.id, input.value);
                    input.remove();
                    
                    }

                }



                console.log(data);
            }

        );