const express = require("express")
const next = require("next")

// Importe o router do Next.js

const { Sequelize } = require("sequelize")

const dev = process.env.NODE_ENV !== "production"
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

nextApp.prepare().then(() => {
  // Conexão com o banco de dados MySQL
  const sequelize = new Sequelize("sharely", "root", "", {
    host: "localhost",
    dialect: "mysql",
  })

  // Definição do modelo Sequelize
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING(45),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING(45),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    job: {
      type: Sequelize.STRING(68),
      allowNull: true,
    },
    pronouns: {
      type: Sequelize.STRING(15),
      allowNull: true,

      // Don't specify
      // they/them
      // she/her
      // he/him
      // Custom
    },
    whatlike: {
      type: Sequelize.STRING(30),
      allowNull: true,
    },
  })

  // Sincronização do modelo com o banco de dados
  sequelize
    .sync()
    .then(() => {
      console.log("Database connected successfully!")
    })
    .catch((err) => {
      console.error("Something wrong is not right ", err)
    })

  // Rota para salvar dados do formulário
  app.post("/api/save-data", async (req, res) => {
    console.log(req.body)
    try {
      const { username, email, password } = req.body
      const newUser = await User.create({ username, email, password })
      res.status(201).json(newUser)
      
      // Redirecionar para a página "/home"
      res.redirect("/home");
    } catch (error) {
      console.error("Error to save user datas:", error)
      res.status(500).json({ error: "Internal server error" })
    }
  })

  // Middleware para servir páginas Next.js
  app.get("*", (req, res) => {
    return nextHandler(req, res)
  })

  // Iniciar servidor Express
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Express server executing on http://localhost:${PORT}`)
  })
})

// const Posts = sequelize.define("post", {
//   owner: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   image: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// })
