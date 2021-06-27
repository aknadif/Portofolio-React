import React, {useEffect, useState} from 'react'
import './Gallery.css'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const images =[
    {id: '1', imageName: 'pariwisata.png', tag: 'Website'},
    {id: '2', imageName: 'portofolio_website.jpg', tag: 'Website'},
    {id: '3', imageName: 'ui_costumin.png', tag: 'UI/UX'},
    {id: '4', imageName: 'UI_loginpage.png', tag: 'UI/UX'},
];

const MyGallery = () => {
    const [tag, setTag] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect( () =>{
        tag === 'all'? setFilteredImages(images) : setFilteredImages(images.filter( image => image.tag === tag))
    }, [tag])



    return (  
        <div>
            <div className="d-flex flex-row list-group-horizontal justify-content-center mb-2">
            <TagButton name="all" handlesettag={setTag} tagActive={tag === 'all' ? true : false} />
            <TagButton name="Website" handlesettag={setTag} tagActive={tag === 'Website' ? true : false} />
            <TagButton name="UI/UX" handlesettag={setTag} tagActive={tag === 'UI/UX' ? true : false} />
            </div>
            <div className="container">
                <div className="row">
                {filteredImages.map(image => 
                <div className="col" key={image.id}>         
                    <Gallery>
                    <Item
                    original={`/img/Original/${image.imageName}`}
                    thumbnail={`/img/Thumb/${image.imageName}`}
                    width="1024"
                    height="768"
                    >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={`/img/Thumb/${image.imageName}`} alt=""/>
                    )}
                    </Item>
                    </Gallery>
                </div>    
                )}
                </div>
            </div>
        </div>    
            
    )
}

const TagButton = ({name, handlesettag, tagActive}) => {
    return <button className={`list-group-item ${tagActive ? 'active' : null}`} onClick={ () => handlesettag(name)}>{name.toUpperCase()}</button>
}

export default MyGallery;
