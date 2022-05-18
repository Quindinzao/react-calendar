// External libraries
import React, {
	useState 
} from 'react'

// Components
import Header from '../../common/Header'

// Utils
import hardSkills from '../../../utils/hardSkills'

// Styled
import {
	Container,
	Content,
	Options
} from './styles'

const Skills: React.FC = () => {
	const [ selectedHardSkills, setSelectedHardSkills ] = useState([])
	const [ optionsHardSkills, setOptionsHardSkills ] = useState(hardSkills)

	const handleSelectItem = (id, title) => {
		setOptionsHardSkills(optionsHardSkills.filter(hardSkill => hardSkill.id !== id))
		setSelectedHardSkills([ ...selectedHardSkills, {
			id, title 
		} ])
	}

	const handleUnselectItem = (id, title) => {
		setSelectedHardSkills(selectedHardSkills.filter(hardSkill => hardSkill.id !== id))
		setOptionsHardSkills([ ...optionsHardSkills, {
			id, title 
		} ])
	}

	return (
		<Container>
			<Content>
				{optionsHardSkills.length === 0 && <h5>Oops! There's nothing here...</h5>}
				<Options>
					{optionsHardSkills.map((optionsHardSkill) => 
						<button 
							className='options-hard-skills' 
							key={optionsHardSkill.id}
							onClick={() => handleSelectItem(optionsHardSkill.id, optionsHardSkill.title)}
						>
							{optionsHardSkill.title}
						</button>
					)}
				</Options>
				{selectedHardSkills.length === 0 && <h5>Oops! There's nothing here...</h5>}
				<Options>
					{selectedHardSkills.map((selectedHardSkill) => 
						<button
							className='selected-hard-skills'
							key={selectedHardSkill.id}
							onClick={() => handleUnselectItem(selectedHardSkill.id, selectedHardSkill.title)}
						>
							{selectedHardSkill.title}
						</button>
					)}
				</Options>
				{/* <button className='goRightPath' type='button'>Go Right Path</button> */}
			</Content>
			<Header skills={true} />
		</Container>
	)
}

export default Skills
