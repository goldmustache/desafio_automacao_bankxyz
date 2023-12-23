# desafio_automacao_bankxyz
Repositório de código do desafio de automatizar aplicação xyzBank

# Para executar os testes execute o comando:
  npm start
  
# Para acompanhar os testes a serem executado de forma manual execute o comando:
 npx bddgen && npx playwright test --headed
 
# Para gerar uma nova build do projeto para o docker execute o comando:
  sudo docker build -t xyzbank/meuteste .

# Para executar a build gerada do projeto execute o comando:
  sudo docker run -p 3000:3000 -d xyzbank/meuteste
