import React, { useContext, useState } from 'react'
import { BoxFeedPostStyleConteiner } from './styles'

import ThemeContext from '../../context/ThemeContext'
import { useNavigate } from 'react-router-dom'


const BoxFeedPosts = ({ img, title, date, tags, link }) => {
    // console.log(`IMG: ${img}`)
    const [temp, setTemp] = useState({
        img,
        title,
        date,
        tags
    })
    const currentTheme = useContext(ThemeContext)

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(link)
    }


    // console.log(currentTheme)
    return (
        <BoxFeedPostStyleConteiner img={temp.img} props={currentTheme} onClick={handleClick}>
            <div className='box_image_conteiner'></div>
            <div className='box_info_conteiner'>
                <h3>
                    {title &&
                        title
                    }
                </h3>
                <p className='indo_data'>
                    {date &&
                        date
                    }
                </p>
                <p className='indo_tag'>
                    tag:
                    <a>
                        {tags &&
                            tags
                        }
                    </a>
                </p>
            </div>
        </BoxFeedPostStyleConteiner>
    )
}

export default BoxFeedPosts