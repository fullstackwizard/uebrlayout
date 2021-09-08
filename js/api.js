let form = document.getElementById('form');

        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Cookie", "ASP.NET_SessionId=pw2byjcu434zpm0nswdc5kit");
            

        var raw = JSON.stringify({
            "usuario": "usuario_externo",
            "senha": "usuario_externo",
            "id": 101
        });

        var url = "http://177.11.50.184/uebrasil/api/auth/token";
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

    
        const getToken = async function () {
            const response = await fetch(url, requestOptions)
            const result = await response.text()
            const json = JSON.parse(result)
            return json['token']
          }
          
         let meuToken = getToken().then(token => { 
           


            form.addEventListener('submit',function(e){
   

    
                // auto submit
            
                e.preventDefault();
            
                var idusuario =  ''
                var name = document.getElementById('txtNome').value
                var login = document.getElementById('txtLogin').value
                var senha = document.getElementById('txtPassword').value
                var repetirSenha = document.getElementById('txtRepetirPassword').value
                var CpfCnpj = document.getElementById('txtCpf').value
                var Email = document.getElementById('txtEmail').value
                var contato = document.getElementById('txtContato').value
                
                const rbs = document.querySelectorAll('input[name="tipoEnsino"]');
                
                let selectedValue;
                for (const rb of rbs) {
                    if (rb.checked) {
                        selectedValue = rb.value;
                        continue;
                    }
                }
                
                var tipoEnsino = selectedValue;
                
               
            
                fetch('http://177.11.50.184/uebrasil/api/v2/documentos/script-externo/3', {
                    method: 'POST',
                    dataType: 'json',
                    body: JSON.stringify({
            
                        "ExtrasArrayJson": [
                            {
                                "Chave": "CADASTRO-USUARIO",
                                "Valor":                 
                                        {
                                            name:name,
                                            login:login,
                                            senha:senha,
                                            repetirSenha:repetirSenha,
                                            CpfCnpj:CpfCnpj,
                                            contato:contato,
                                            tipoEnsino:tipoEnsino,
                                            Email:Email
                                        }
                                    
                            }
                        ]
                        
                    }),
            
                    headers: {
                       'Authorization': token,
                        //'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjY3NiwiZ2lkIjpbXSwibmFtZSI6IlVzdcOhcmlvIEV4dGVybm8iLCJleHAiOjYzNzY2NzI5NTUyMzMzMDUxOSwiaWF0IjowfQ.1U3rP1Z0z_XePBUjXyqeZQSEBjDg7ojrHGVRLoxS1kk',
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                })
                .then(function(response) {
                    return response.json()
                   
                })
                .then(function(data){
                    console.log(data)
                })
            
            
            })



        })

     
       
         
          





/* 

*/