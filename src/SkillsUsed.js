export default function SkillUsed({ data, index }) {
  return(
    <div className="project-container">
      {data[index % 4].languages.length ? data[index % 4].languages.map((project, num) => {
        return(
      <div className="indiv-skill"
      key={num}
      >
        <img src={project.logo} width='45rem' />
        {project.name}
      </div>
        )
      })
    : null
    }
  
    </div>
  )
}