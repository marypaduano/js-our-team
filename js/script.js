console.log('team')
//Creare l’array di oggetti con le informazioni fornite
const team = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      photo: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      photo: "img/angela-caroll-chief-editor.jpg",
    },
    {
      name: "Walter Gordon",
      role: "Office Manager",
      photo: "img/walter-gordon-office-manager.jpg",
    },
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      photo: "img/angela-lopez-social-media-manager.jpg",
    },
    {
      name: "Scott Estrada",
      role: "Developer",
      photo: "img/scott-estrada-developer.jpg",
    },
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      photo: "img/barbara-ramos-graphic-designer.jpg",
    }
  ]

  console.log(team)

  for (let key in team){
    console.log(team[key])
 }

  //Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
 for (let i = 0; i < team.length; i++) {
	const memberTeam = team[i]
	const name = memberTeam.name
	const role = memberTeam.role
	const photo = memberTeam.photo
	console.log(`Nome ${name} ruolo ${role} foto: ${photo})`)
}