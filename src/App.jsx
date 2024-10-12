import React, { useState, useEffect } from 'react';
import {
    Container,
    Header,
    Image,
    Menu,
    CardGroup,
} from 'semantic-ui-react';
import './App.css';
import { preLoadExercises } from './actions';
import ExerciseCard from './components/ExerciseCard';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setItems(await preLoadExercises());
            console.log(items)
        }
        fetchData();

        // No longer loading, and forces re-render
        setTimeout(() => { setIsLoading(false) }, 500);
    }, []);

    return (
        <>
            <div>
                <Image src='src/assets/the-united-states-womens-soccer-team-practices-for-335949-1024.jpg' className='background-image' />
            </div>
            <div className='body'>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            <Image size='small' src='src/assets/footballeyeq-logo.png' />
                        </Menu.Item>
                        <Menu.Item as='a'>Home</Menu.Item>
                        <Menu.Item as='a'>Logout</Menu.Item>
                    </Container>
                </Menu>
                <Container text style={{ backgroundColor: 'white', paddingTop: '8rem', paddingRight: '3rem', paddingBottom: '4rem', paddingLeft: '2rem' }}>
                    <Header as='h1'>Exercise Selection</Header>
                    <p>Select as many or as few exercises as you like.</p>
                    <p>Each one will be saved to your account to appear in-app.</p>
                    <br></br>

                    <CardGroup>
                        {
                            isLoading
                                ?
                                <div>Loading...</div>
                                :
                                items.map((item, index) => {
                                    return (
                                        <ExerciseCard key={index} index={index} item={item} />
                                    )
                                })
                        }
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default App
