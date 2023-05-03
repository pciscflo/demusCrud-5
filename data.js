module.exports = function () {
  var data = {
    authors: [
      {
        id:1,
        nameAuthor: "Luis Pérez Reyes",
        birthDateAuthor: "2000-09-10",
        emailAuthor:"lperez@gmail.com",
      },
      {
        id:2,
        nameAuthor: "Ana Díaz Reyes",
        birthDateAuthor: "1980-10-10",
        emailAuthor:"adiaz@gmail.com",
      },
      {
        id:3,
        nameAuthor: "Gerardo Santillán Reyes",
        birthDateAuthor: "2002-06-05",
        emailAuthor:"gsreyes@gmail.com",
      },
      {
        id:4,
        nameAuthor: "Juana Pérez Reyes",
        birthDateAuthor: "2000-09-10",
        emailAuthor:"jperez@gmail.com",
	},
  {
    id:5,
    nameAuthor: "Pedro Carpio",
    birthDateAuthor: "2000-19-11",
    emailAuthor:"jcarpio@gmail.com",
}
    ],
    books:[
      {
        id: 1,
        nameBook: "Las leyes",
	      nHojas: "145",
        publicationDateAuthor: "2022-09-09",
        author:
        {
          id:1,
          nameAuthor: "Luis Pérez Reyes",
          birthDateAuthor: "2000-09-10",
          emailAuthor:"lperez@gmail.com",
        }
      },
    ]
  }
  return data
}
