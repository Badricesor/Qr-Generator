import PropTypes from "prop-types";

const Userdata=[{
    name:"Badri Vishalakshi" ,
    city:"Madurai" ,
    description:"Full Stack Developer" ,
    skills:["Html5", "CSS3","Javascript","Reactjs","Expressjs","Redux","Mongodb"],
    online: true,
    profile:"badri.jpg.jpg",
},
{
    name:"Badri Vishalakshi" ,
    city:"Madurai" ,
    description:"Full Stack Developer" ,
    skills:["Html5", "CSS3","Javascript","Reactjs","Expressjs","Redux","Mongodb"],
    online: false,
    profile:"badri.jpg.jpg",
},
{
    name:"Badri Vishalakshi" ,
    city:"Madurai" ,
    description:"Full Stack Developer" ,
    skills:["Html5", "CSS3","Javascript","Reactjs","Expressjs","Redux","Mongodb"],
    online: false,
    profile:"badri.jpg.jpg",
},
];

function User(props){
    return(
    <div className="container">
        <span className={props.online?"pro online":"pro offline"}>
            {props.online?"ONLINE":"OFFLINE"}
            </span>
        <img className="img" src={props.profile}  width="100px" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
        <button className="primary">Message</button> 
        <button className="primary outline">Following</button>
        </div>
        <div className="skills">
        <h6>Skills</h6>
        <ul>
           {props.skills.map((skill,index)=>(
            <li key={index}>
                {skill}
            </li>))}
        </ul>
        </div>
    </div>
    );
}

export const Usercard = () => {
  return (
    <>
    {
        Userdata.map((user,index)=>(
            <User key={index}
            name={user.name}
            city={user.city}
            description={user.description}
            online={user.online}
            profile={user.profile}
            skills={user.skills}
            />
        ))
    }
    </>


   
        // <User name="Badri Vishalakshi" city="Madurai" 
        // description="Full Stack Developer"
        // skills={["Html5", "CSS3","Javascript","Reactjs","Expressjs","Redux","Mongodb"]}
        // online= {true} profile="badri.jpg.jpg"/>
    


  )
};

User.propTypes={
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile: PropTypes.string.isRequired,
}
