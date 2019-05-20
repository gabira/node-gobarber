## Go Barber

Esse é um sistema onde o usuário pode criar uma conta e nessa conta pode dizer se é barbeiro ou apenas usuário. Com a conta criada é possível acessar o sistema e selecionar um barbeiro para marcar um horário.

Foi criado utilizando expressjs e express-session para guardar as informações do usuário na sessão.
O banco de dados foi o postgres (utilizado na máquina através do docker com o docker-compose) com o orm sequelize. As views foram criadas com nunjucks. Ainda tiveram algumas dependencias de apoio como o multer para tratar de upload de imagens, moment para tratar de datas, bcrypt para criptografia e connect-flash para mensagens de aviso.
